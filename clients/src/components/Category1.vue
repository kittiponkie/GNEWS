<template>
 <!--PEN CODE-->
 <div>
 <md-card md-with-hover>
<div class="blog-card">
	<div class="photo">
    <img :src="pictext[0]">
  </div>
	<ul class="details">
		<li class="author ellipsis" id="Ministry1_1">ชื่อหน่วยงาน</li>
		<li class="date" :id="'date1_'+1">Aug. 24, 2015</li>

	</ul>
	<div class="description">
		
		  <a :href="urltext[0]"><h1 class="ellipsis" id="name1_1">Learning to Code</h1></a>
  <md-card-actions>
          <md-button class="md-icon-button" @click="Bookmarknews(1)">
            <md-icon>bookmark</md-icon>
          </md-button>
          <md-menu md-size="medium">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>share</md-icon>
          </md-button>

          <md-menu-content>
            <social-sharing :url="urltext[0]" inline-template>
            <network network="facebook">
              <md-menu-item @click="network">
              <span>Facebook</span>
              <span><i class="fab fa-facebook-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[0]" inline-template>
            <network network="twitter">
              <md-menu-item @click="network">
              <span>Twitter</span>
              <span><i class="fab fa-twitter-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[0]" inline-template>
            <network network="line">
              <md-menu-item @click="network">
              <span>Line</span>
              <span><i class="fab fa-line fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>        
          </md-menu-content>
        </md-menu>
          </md-card-actions>
      
	</div>
</div>
 </md-card>
<md-card md-with-hover>
<div class="blog-card">
	<div class="photo">
    <img :src="pictext[1]">
  </div>
	<ul class="details">
		<li class="author ellipsis" id="Ministry1_2">ชื่อหน่วยงาน</li>
		<li class="date" id="date1_2">Aug. 24, 2015</li>

	</ul>
	<div class="description">
		
		  <a :href="urltext[1]"><h1 class="ellipsis" id="name1_2">Learning to Code</h1></a>
  <md-card-actions>
          <md-button class="md-icon-button" @click="Bookmarknews(2)">
            <md-icon>bookmark</md-icon>
          </md-button>
          <md-menu md-size="medium">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>share</md-icon>
          </md-button>

          <md-menu-content>
            <social-sharing :url="urltext[1]" inline-template>
            <network network="facebook">
              <md-menu-item @click="network">
              <span>Facebook</span>
              <span><i class="fab fa-facebook-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[1]" inline-template>
            <network network="twitter">
              <md-menu-item @click="network">
              <span>Twitter</span>
              <span><i class="fab fa-twitter-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[1]" inline-template>
            <network network="line">
              <md-menu-item @click="network">
              <span>Line</span>
              <span><i class="fab fa-line fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>        
          </md-menu-content>
        </md-menu>
          </md-card-actions>
      
	</div>
</div>
 </md-card>
 <md-card md-with-hover>
<div class="blog-card">
	<div class="photo">
    <img :src="pictext[2]">
  </div>
	<ul class="details">
		<li class="author ellipsis" id="Ministry1_3">ชื่อหน่วยงาน</li>
		<li class="date" id="date1_3">Aug. 24, 2015</li>

	</ul>
	<div class="description">
		
		  <a :href="urltext[2]"><h1 class="ellipsis" id="name1_3">Learning to Code</h1></a>
  <md-card-actions>
          <md-button class="md-icon-button" @click="Bookmarknews(3)">
            <md-icon>bookmark</md-icon>
          </md-button>
          <md-menu md-size="medium">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>share</md-icon>
          </md-button>

          <md-menu-content>
            <social-sharing :url="urltext[2]" inline-template>
            <network network="facebook">
              <md-menu-item @click="network">
              <span>Facebook</span>
              <span><i class="fab fa-facebook-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[2]" inline-template>
            <network network="twitter">
              <md-menu-item @click="network">
              <span>Twitter</span>
              <span><i class="fab fa-twitter-square fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>
            <social-sharing :url="urltext[2]" inline-template>
            <network network="line">
              <md-menu-item @click="network">
              <span>Line</span>
              <span><i class="fab fa-line fa-lg"></i></span>
              </md-menu-item>
            </network>
            </social-sharing>        
          </md-menu-content>
        </md-menu>
          </md-card-actions>
      
	</div>
</div>
 </md-card>
 <div v-for="i in 3">
        <div :id="'name1_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'url1_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'pic1_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'article1_'+i" style="display: none;"></div>
    </div>
    <div v-for="i in 3">
        <div :id="'date1_'+i" style="display: none;"></div>
    </div>
    <div v-for="i in 3">
        <div :id="'Ministry1_'+i" style="display: none;"></div>
    </div>
<!--END PEN CODE-->
</div>
</template>
<script>
import axios from 'axios';
import PostsService from '@/services/PostsService'
  export default {
    data() {
      return {
				doubleA1: 0,
				urltext: [],
				pictext: [],
				todos: [],
				article: []
      }
		},
		methods :{
			async Bookmarknews(data) {
        var id = data - 1
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
          //console.log("Gusjung"+this.todos);
        }
        const response = await PostsService.CheckLater({
          Later_id: this.todos[0],
          CheckID: '2'
        })
        //console.log(response.data.Article_id.length);
        for (var i = 0; i < response.data.Article_id.length; i++) {
          if (response.data.Article_id[i] == this.article[id]) {
            await PostsService.FollowLater({
              Later_id: this.todos[0],
              Catagory_sub_id: this.article[id],
              FollowandUnFollow: '2',
              Check: '1'
            })
          }
        }
        await PostsService.FollowLater({
          Later_id: this.todos[0],
          Catagory_sub_id: this.article[id],
          FollowandUnFollow: '1',
          Check: '1'
        })
        //console.log(this.article[id]);
      }
		},
    async mounted() {
			
			await this.$getItem('News').then(async function(value) {
			var id= 0
            var ChecksameCate = []
            for(var j=0;j<3;j++)
			{
				for(var i=0;i<value.length;i++)
				{
                    if(value[i][0].article_m_cat_id == 1)
                    {
                    console.log('emtt')
					var a=0
            	for(var k=0;k<ChecksameCate.length;k++)
            	{
              	if(ChecksameCate[k] == value[i][2].article_id)
              	{
                	a=1
              	}
				}
				if(a==0)
				{
                    console.log('enter')
				ChecksameCate.push(value[i][2].article_id)
				document.getElementById("pic1_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name1_"+(id+1)).innerHTML  = `
                <span class="md-title" >${value[i][2].title}</span>
                <br>`;
              document.getElementById("date1_"+(id+1)).innerHTML  = `  
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("Ministry1_"+(id+1)).innerHTML  = `  
                <span class="md-subhead">${value[i][1].name_th}</span>
              `;
              document.getElementById("url1_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article1_"+(id+1)).innerHTML  = `${value[i][2].article_id}`;
                        id = id+1
                        break;
                }
                    }
				} 
			}
		})
		for(var i=0;i<3;i++){
      this.urltext.push(document.getElementById("url1_"+(i+1)).innerHTML)
      console.log('test'+document.getElementById("url1_"+(i+1)).innerHTML);
		}
		for(var i=0;i<3;i++){
      this.pictext.push(document.getElementById("pic1_"+(i+1)).innerHTML)
      console.log(this.pictext);
		}
		for(var i=0;i<3;i++){
      this.article.push(document.getElementById("article1_"+(i+1)).innerHTML)
    }
    for(var i=0;i<3;i++){
      console.log(document.getElementById("name1_"+(i+1)).innerHTML);
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

		.author:before {
			content: "\f007";
		}

		.date:before {
			content: "\f133";
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

