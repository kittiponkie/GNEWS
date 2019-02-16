<template>
  <div>
    <div v-for="i in 5">
      <!--PEN CODE-->
      <md-card md-with-hover>
        <div class="blog-card">
          <div class="photo">
            <img :src="Image[i-1]">
          </div>
          <ul class="details">
            <li class="author ellipsis">{{Ministry_name[i-1]}}</li>
            <li class="date">{{Create_Date[i-1]}}</li>

          </ul>
          <div class="description">

            <a :href="Link[i-1]" target="_blank">
              <h1 class="ellipsis">{{Title[i-1]}}</h1>
            </a>
            <h2 class="ellipsis">{{Description[i-1]}}</h2>
            <md-card-actions>
              <md-button class="md-icon-button">
                <md-icon>bookmark</md-icon>
              </md-button>
              <md-menu md-size="medium">
                <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon>share</md-icon>
                </md-button>

                <md-menu-content>
                  <social-sharing url="www.google.com" inline-template>
                    <network network="facebook">
                      <md-menu-item @click="network">
                        <span>Facebook</span>
                        <span>
                          <i class="fab fa-facebook-square fa-lg"></i>
                        </span>
                      </md-menu-item>
                    </network>
                  </social-sharing>
                  <social-sharing url="www.google.com" inline-template>
                    <network network="twitter">
                      <md-menu-item @click="network">
                        <span>Twitter</span>
                        <span>
                          <i class="fab fa-twitter-square fa-lg"></i>
                        </span>
                      </md-menu-item>
                    </network>
                  </social-sharing>
                  <social-sharing url="www.google.com" inline-template>
                    <network network="line">
                      <md-menu-item @click="network">
                        <span>Line</span>
                        <span>
                          <i class="fab fa-line fa-lg"></i>
                        </span>
                      </md-menu-item>
                    </network>
                  </social-sharing>
                </md-menu-content>
              </md-menu>
            </md-card-actions>

          </div>
        </div>
      </md-card>
      <!--END PEN CODE-->
    </div>
    <div v-for="i in 5">
      <div :id="'Image'+(i-1)" style="display:none;">
      </div>
      <div :id="'Ministry_name'+(i-1)" style="display:none;">
      </div>
      <div :id="'Create_Date'+(i-1)" style="display:none;">
      </div>
      <div :id="'Link'+(i-1)" style="display:none;">
      </div>
      <div :id="'Title'+(i-1)" style="display:none;">
      </div>
      <div :id="'Description'+(i-1)" style="display:none;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News_Latest_Card',
    data: () => ({
      Image: [],
      Ministry_name: [],
      Create_Date: [],
      Link: [],
      Title: [],
      Description: []
    }),
    async mounted() {
      await this.$getItem('News').then(function (value) {
        for (var i = 0; i < 5; i++) {
		  document.getElementById('Image' + i).innerHTML = value[i][2].pic;
		  document.getElementById('Ministry_name' + i).innerHTML = value[i][2].corporate_info.name_th;
		  document.getElementById('Create_Date' + i).innerHTML = value[i][2].create_date;
		  document.getElementById('Link' + i).innerHTML = "#/news/"+value[i][2].article_id;
		  document.getElementById('Title' + i).innerHTML = value[i][2].title;
		  document.getElementById('Description' + i).innerHTML = value[i][2].desc;
        }
      });
      for (var i = 0; i < 5; i++) {
		this.Image.push(document.getElementById('Image' + i).innerHTML);
		this.Ministry_name.push(document.getElementById('Ministry_name' + i).innerHTML);
		this.Create_Date.push(document.getElementById('Create_Date' + i).innerHTML);
		this.Link.push(document.getElementById('Link' + i).innerHTML);
		this.Title.push(document.getElementById('Title' + i).innerHTML);
		this.Description.push(document.getElementById('Description' + i).innerHTML);
      }
    }
  }

</script>


<style lang="scss" scoped>
/*PEN STYLES*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700);
$green: #75D13B;
$grey: #e9e9e9;

@mixin transition($dur, $prop: all) {
	transition: $prop $dur ease;
	-webkit-transition: $prop $dur ease;
}

.ellipsis {
  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}
.md-card {
	@include transition(0.3s, height);
	
	border-radius: 3px;
	box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
	margin: 0 auto 1.6%;
	overflow: hidden;
	position: relative;
	font-size: 14px;
	line-height: 1.45em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  

	&:hover {
		.details {
			left: 0;
		}

		&.alt {
			.details {
				right: 0;
			}
		}
	}

	&.alt {
		.details {
			right: -100%;
			left: inherit;
		}
	}

	.photo img {
		height: 200px;
		position: relative;
    
	}

	.details {
		@include transition(0.3s);

		background: rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		color: #fff;
		font-family: "Open Sans";
		list-style: none;
		margin: 0;
		padding: 10px 15px;
		height: 200px;

		/*POSITION*/
		position: absolute;
		top: 0;
		left: -100%;

		> li {
			padding: 3px 0;
		}

		li:before, .tags ul:before {
			font-family: FontAwesome;
			margin-right: 10px;
			vertical-align: middle;
		}
	}

	.description {
    padding: 10px;
		margin-right: -10px;
		box-sizing: border-box;
		position: relative;
    

		h1 {
			font-family: "Roboto";
			line-height: 1em;
			margin: 0 0 10px 0;
      font-size: 18px;
		}

		h2 {
			color: $grey / 1.5;
			font-family: "Open Sans";
			line-height: 1.2em;
			text-transform: uppercase;
			font-size: 1em;
			font-weight: 400;
			margin: 1.2% 0;
      
		}




	}
}

@media screen and (min-width: 600px) {
	.md-card {
		height:120px;
		max-width: 600px;

		&:hover {
	

			&.alt .photo {
				transform: rotate(-5deg) scale(1.3);
			}
		}

		&.alt {
			.details {
				padding-left: 30px;
			}

			.description {
				float: right;

				&:before {
					transform: skewX(5deg);
					right: -15px;
					left: inherit;
				}
			}

			.photo {
				float: right;
			}
		}

		.photo {
			@include transition(0.5s);

			float: left;
			height: 100%;
			width: 40%;
		}

		.details {
			width: 40%;
		}

		.description {
			float: left;
			width: 60%;
			

			&:before {
				transform: skewX(-5deg);
				content: "";
				background: #fff;
				width: 100%;
				z-index: -1;

				/*POSITION*/
				position: absolute;
				left: -15px;
				top: 0;
				bottom: 0;
			}
		}
	}
}
</style>

