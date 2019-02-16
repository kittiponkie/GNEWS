<template>
  <div class="later">
    <md-toolbar class="md-primary" md-elevation="0">
      <div class="md-toolbar-row">
        <h3 class="md-title">ข่าวของฉัน</h3>
      </div>

      <div class="md-toolbar-row">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-button to="/MyNews" id="button1">การติดตาม</md-button>
          </div>
          <div class="md-layout-item">
            <md-button to="/Block" id="button1">การบล็อค</md-button>
          </div>
          <div class="md-layout-item">
            <md-button class="md-raised" disabled id="button1" style="background-color:#faad29;">เข้าชมภายหลัง</md-button>
          </div>
          <div class="md-layout-item">
            <md-button to="/History" id="button1">ประวัติการเข้าชม</md-button>
          </div>
        </div>
      </div>
    </md-toolbar>

    <br>
  <div class="md-layout md-gutter md-alignment-top-center" >
    <div class="md-layout-item md-size-50">
        <div class="section-title"><h2 class="title">ข่าว</h2>
            <div style="float:right;"><md-button @click="Clearlaternews">ลบทั้งหมด<md-icon>close</md-icon></md-button></div>
        </div>
        <br>
      <div v-for="i in list_article.length"  style="margin-bottom:2em;" >
        <!--PEN CODE-->
        <md-card md-with-hover>
          <div class="blog-card">
            <div class="photo">
              <img :src="list_article[i-1].pic">
            </div>
            <ul class="details">
              <li class="author ellipsis">{{list_article[i-1].corporate_info.name_th}}</li>
              <li class="date">{{list_article[i-1].create_date}}</li>
            </ul>
            <div class="description">
              <div>
                <a :href="'#/news/'+list_article[i-1].article_id">
                  <h1 class="ellipsis">{{list_article[i-1].title}}</h1>
                </a>
              </div>
              <h2 class="ellipsis">{{list_article[i-1].desc}}</h2>
              <md-card-actions>
                <md-button class="md-icon-button" @click="Bookmarkvod(i-1)">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-menu md-size="medium">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>share</md-icon>
                  </md-button>
                  <md-menu-content>
                    <social-sharing :url="'http://localhost:8080/#/news/'+list_article[i-1].article_id" inline-template>
                      <network network="facebook">
                        <md-menu-item @click="network">
                          <span>Facebook</span>
                          <span>
                            <i class="fab fa-facebook-square fa-lg"></i>
                          </span>
                        </md-menu-item>
                      </network>
                    </social-sharing>
                    <social-sharing :url="'http://localhost:8080/#/news/'+list_article[i-1].article_id" inline-template>
                      <network network="twitter">
                        <md-menu-item @click="network">
                          <span>Twitter</span>
                          <span>
                            <i class="fab fa-twitter-square fa-lg"></i>
                          </span>
                        </md-menu-item>
                      </network>
                    </social-sharing>
                    <social-sharing :url="'http://localhost:8080/#/news/'+list_article[i-1].article_id" inline-template>
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
                <md-button class="md-icon-button" >
                  <md-icon>close</md-icon>
                </md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card>
        <!--END PEN CODE-->
      </div>
    </div>
    
    <div  class="md-layout-item md-size-50" >
        <div class="section-title"><h2 class="title">บันทึกย้อนหลัง</h2>
            <div style="float:right;"><md-button @click="Clearlatervideo">ลบทั้งหมด<md-icon>close</md-icon></md-button></div>
        </div>
        <br>
      <div v-for="i in list_vod.length" style="margin-bottom:2em;">
        <div class="md-layout-item md-size-50" style="display:none;">
          <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>{{list_vod[i-1].title}}</md-dialog-title>
            <video class="video-js vjs-default-skin" controls preload="auto" style="width:800px; height:500px;" data-setup='{}'>
              <source :src="src_vod" type="video/mp4">Your browser does not support the video tag.
            </video>
            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
          </md-dialog>
        </div>
        <!--PEN CODE-->
        <md-card md-with-hover>
          <div class="blog-card">
            <div class="photo">
              <img :src="list_vod[i-1].pic">
            </div>
            <ul class="details">
              <li class="author ellipsis">{{list_vod[i-1].corporate_info.name_th}}</li>
              <li class="date">{{list_vod[i-1].create_date}}</li>
            </ul>
            <div class="description">
              <div @click="Dialog(i-1)">
                <h1 class="ellipsis">{{list_vod[i-1].title}}</h1>
              </div>
              <h2 class="ellipsis">{{list_vod[i-1].desc}}</h2>
              <md-card-actions>
                <md-button class="md-icon-button" @click="Bookmarkvod(i-1)">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-menu md-size="medium">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>share</md-icon>
                  </md-button>
                  <md-menu-content>
                    <social-sharing :url="'http://localhost:8080/#/vod/'+list_vod[i-1].vod_id" inline-template>
                      <network network="facebook">
                        <md-menu-item @click="network">
                          <span>Facebook</span>
                          <span>
                            <i class="fab fa-facebook-square fa-lg"></i>
                          </span>
                        </md-menu-item>
                      </network>
                    </social-sharing>
                    <social-sharing :url="'http://localhost:8080/#/vod/'+list_vod[i-1].vod_id" inline-template>
                      <network network="twitter">
                        <md-menu-item @click="network">
                          <span>Twitter</span>
                          <span>
                            <i class="fab fa-twitter-square fa-lg"></i>
                          </span>
                        </md-menu-item>
                      </network>
                    </social-sharing>
                    <social-sharing :url="'http://localhost:8080/#/vod/'+list_vod[i-1].vod_id" inline-template>
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
                <md-button class="md-icon-button" >
                  <md-icon>close</md-icon>
                </md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card>
        <!--END PEN CODE-->
      </div>
    </div>
    </div>
    <div id="temp">
    </div>
    <div v-for="i in temp">
      <div :id="'url_'+i" style="display: none;"></div>
    </div>
    <div v-for="i in temp">
      <div :id="'article_'+i" style="display: none;"></div>
    </div>
    <div id="todos"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  import PostsService from '@/services/PostsService'
  export default {
    name: 'History',
    data() {
      return {
        temp: null,
        list: [],
        article: [],
        todos: [],
        Check: null,
        CheckID: '2',
        showDialog: false,
        src_vod: "",
        list_vod: [],
        list_article: []
      }
    },
    methods: {
      async Clearlaternews(){
        await PostsService.ClearhistoryLater({
          Later_id: this.todos[0],
          Check: '3'
        })
        location.reload()
      },
      async Clearlatervideo(){
        await PostsService.ClearhistoryLater({
          Later_id: this.todos[0],
          Check: '4'
        })
        location.reload()
      },
      //1
      async Bookmarkvod(i) {
        const response = await PostsService.CheckLater({
          Later_id: this.todos[0],
          CheckID: this.CheckID
        })

        for (var i = 0; i < response.data.Video_id.length; i++) {
          if (response.data.Video_id[i] == this.list_vod[i].vod_id) {
            this.FollowandUnFollow = "4"
            this.Check = '1'
            await PostsService.FollowLater({
              Later_id: this.todos[0],
              Catagory_sub_id: this.list_vod[i].vod_id,
              FollowandUnFollow: this.FollowandUnFollow,
              Check: this.Check
            })
          }
        }
        this.FollowandUnFollow = "3"
        this.Check = '1'
        await PostsService.FollowLater({
          Later_id: this.todos[0],
          Catagory_sub_id: this.list_vod[i].vod_id,
          FollowandUnFollow: this.FollowandUnFollow,
          Check: this.Check
        })
      },

      //2
      async Dialog(i) {
        this.src_vod = this.list_vod[i].vdo[0];
        this.showDialog = true
        //this.Seevideo(i)
      },

      //3
      async Bookmarknews(data) {
        var id = data - 1
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
          //console.log("Gusjung"+this.todos);
        }
        const response = await PostsService.CheckLater({
          Later_id: this.todos[0],
          CheckID: this.CheckID
        })
        //console.log(response.data.Article_id.length);
        for (var i = 0; i < response.data.Article_id.length; i++) {
          if (response.data.Article_id[i] == this.article[id].article_id) {
            this.FollowandUnFollow = "2"
            this.Check = '1'
            await PostsService.FollowLater({
              Later_id: this.todos[0],
              Catagory_sub_id: this.article[id].article_id,
              FollowandUnFollow: this.FollowandUnFollow,
              Check: this.Check
            })
          }
        }
        this.FollowandUnFollow = "1"
        this.Check = '1'
        await PostsService.FollowLater({
          Later_id: this.todos[0],
          Catagory_sub_id: this.article[id].article_id,
          FollowandUnFollow: this.FollowandUnFollow,
          Check: this.Check
        })
        //console.log(this.article[id]);
      }
    },
    async mounted() {
      const todos = JSON.parse(this.$localStorage.get('todos'))
      if (todos) {
        this.todos = todos
      }
      const value_DB = await PostsService.CheckLater({
        Later_id: this.todos[0],
        CheckID: this.CheckID
      })
      /*
      var responsess = await PostsService.CheckLater({
          Later_id: document.getElementById('todos').innerHTML,
          CheckID: CheckID
      })*/

      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/live/all?dev=1999`).then(async Response => {
        for (var i = 0; i < Response.data.vod.data.length; i++) {
          for (var j = 0; j < value_DB.data.Video_id.length; j++) {
            if (value_DB.data.Video_id[j] == Response.data.vod.data[i].vod_id) {
              this.list_vod.push(Response.data.vod.data[i]);
            }
          }
        }
      });
      for (var i = 0; i < value_DB.data.Article_id.length; i++) {
        if (value_DB.data.Article_id[i]) {
          await axios.get(
            `https://gnewsapitesting.apps.go.th/gnews/feed/select_by_id/${value_DB.data.Article_id[i]}?dev=1999`).then(
            async Response => {
              console.log(Response.data.article_id + " : " + value_DB.data.Article_id[i]);
              this.list_article.push(Response.data);
            });
        }
      }
      //console.log(this.list_article);
      /*
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/live/all?dev=1999`).then(async Response => {
        for(var i=0;i<Response.data.vod.data.length;i++){
          for(var j=0;j<value_DB.data.Video_id.length;j++){
            if(value_DB.data.Video_id[j]==Response.data.vod.data[i].vod_id){           
              this.list_vod.push(Response.data.vod.data[i]);
              //console.log(this.list_vod);
            }          
          }                        
        }                      
      });*/
    }
  }

</script>

<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700);
  $green: #75D13B;
  $grey: #e9e9e9;

  .later {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 12%;
  }

  .md-toolbar {
    border-radius: 15px;
    width: 100%;
  }

  #button1 {
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    width: 16em;
  }

  .md-card {
    width: 35em;
    margin: 1em;
    display: inline-block;
    vertical-align: top;

  }

  small {
    display: block;
  }

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

      >li {
        padding: 3px 0;
      }

      li:before,
      .tags ul:before {
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
      height: 120px;
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
  .section {
	padding-top:30px;
	padding-bottom:30px;
}

.section-title {
	position:relative;
	margin-bottom:10px;
}

.section-title:after {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 2px;
	background-color:#2d2d2b;
	z-index:1;
}

.section-title .title {
	position:relative;
	display: inline-block;
	margin-top: 0;
	margin-bottom: 0;
	text-transform: uppercase;
	line-height: 45px;
	font-size:15px;
	color:#2d2d2b;
	background-color:#ffd740;
	padding:0px 15px;
}

.section-title .title:after {
	content: "";
	position: absolute;
	right: -15px;
	bottom: 0;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 15px 0 0 15px;
	border-color: transparent transparent transparent #2d2d2b;
	z-index: 0;
}
</style>
