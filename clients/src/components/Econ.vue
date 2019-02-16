<template>
  <div class="tabCate">
    <div class="md-layout md-gutter md-alignment-center">
      <md-toolbar class="md-primary" md-elevation="0">
        <div class="md-toolbar-row">
          <h3 class="md-title">หมวดหมู่ข่าว</h3>
        </div>

        <div class="md-toolbar-row">
          <div class="md-layout">
            <div v-for="i in list.length">
              <div class="md-layout-item" style="margin-right:1em;" v-if="i == nowid+1">
                <md-button class="md-raised" disabled style="background-color:#faad29; width:14em;">{{list[i-1].name_th}}</md-button>
              </div>
              <div class="md-layout-item" style="margin-right:1em;" v-else>
                <md-button @click="MainNews(i-1,0)" style="width:14em;">{{list[i-1].name_th}}</md-button>
              </div>
            </div>
          </div>
        </div>
        <div v-for="i in lengthsub">
          <div>
            <div v-if="i == subnowid+1">
              <md-button class="md-raised" disabled>
                <font color="#616161" size="2px">
                  <li>{{datasub[i-1].name_th}}</li>
                </font>
              </md-button>
            </div>
            <div v-else>
              <md-button @click="SubNews(nowid,i-1)">
                <font color="#616161" size="2px">
                  <li>{{datasub[i-1].name_th}}</li>
                </font>
              </md-button>
            </div>
          </div>
        </div>

      </md-toolbar>
      <md-toolbar md-elevation="0" style="background-color:white;">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-60"></div>
          <div class="md-layout-item">
            <md-button id="textBut2" @click="FollowFollow">
              <md-icon style="color:white;">add_circle</md-icon> {{Followtext}}</md-button>
            <md-button id="textBut3" @click="FollowBlock">
              <md-icon style="color:white;">block</md-icon> {{Blocktext}}</md-button>
          </div>
        </div>
      </md-toolbar>
      <div>
        <span v-for="i in temp" style="align: left; margin:0.75em;">
          <md-card md-with-hover style="border-radius: 10px;">
            <md-ripple style="border-radius: 10px;">
              <md-card-media-cover md-text-scrim>
                <md-card-media md-ratio="16:9">
                  <div :id="'pic_'+i">
                    <img src="../assets/logognews.png" alt="Skyscraper" style="border-radius: 10px;">
                  </div>
                </md-card-media>
                <md-card-area>
                  <md-card-header>
                    <a :href="urltext[i-1]">
                      <div :id="'name_'+i">
                        <span class="md-title" style="font-size:16px; color:white; text-shadow: 2px 2px 8px black;">{{i}}Loading</span>
                        <span class="md-subhead" style="font-size:12px; text-shadow: 2px 2px 8px black;">Please Wait ...</span>
                      </div>
                    </a>
                  </md-card-header>
                  <!-- Card menu -->
                  <md-card-actions>
                    <md-button class="md-icon-button" @click="Bookmark(i)">
                      <md-icon>bookmark</md-icon>
                    </md-button>
                    <md-menu md-size="medium" md-direction="bottom-end">
                      <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>share</md-icon>
                      </md-button>

                      <md-menu-content>
                        <social-sharing :url="urltext[i-1]" inline-template>
                          <network network="facebook">
                            <md-menu-item @click="network">
                              <span>Facebook</span>
                              <span>
                                <i class="fab fa-facebook-square fa-lg"></i>
                              </span>
                            </md-menu-item>
                          </network>
                        </social-sharing>

                        <social-sharing :url="urltext[i-1]" inline-template>
                          <network network="twitter">
                            <md-menu-item @click="network">
                              <span>Twitter</span>
                              <span>
                                <i class="fab fa-twitter-square fa-lg"></i>
                              </span>
                            </md-menu-item>
                          </network>
                        </social-sharing>

                        <social-sharing :url="urltext[i-1]" inline-template>
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
                  <!-- End card menu -->
                </md-card-area>
              </md-card-media-cover>
            </md-ripple>
          </md-card>
        </span>
        <div id="test" style="display: none;">
        </div>
        <div v-for="i in temp">
          <div :id="'url_'+i" style="display: none;"></div>
        </div>
        <div v-for="i in temp">
          <div :id="'article_'+i" style="display: none;"></div>
        </div>
        <div id="Name_th" style="display: none;">
        </div>
        <md-dialog-alert :md-active.sync="WarnFollow" md-content="กรุณากดเลิกบล็อคข่าวหมวดหมู่นี้" md-confirm-text="ตกลง" />
        <md-dialog-alert :md-active.sync="WarnBlock" md-content="กรุณากดเลิกติดตามข่าวหมวดหมู่นี้" md-confirm-text="ตกลง" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import PostsService from '@/services/PostsService'
  export default {
    name: 'Econ',

    data() {
      return {
        list: [],
        lengthsub: null,
        datasub: null,
        temp: null,
        urltext: [],
        articletext: [],
        nowid: null,
        todos: [],
        CheckID: '2',
        Followtext: 'ติดตามข่าวหมวดหมู่นี้',
        Blocktext: 'บล็อคข่าวหมวดหมู่นี้',
        Mainname: null,
        Check: null,
        FollowandUnFollow: null,
        subnowid: null,
        WarnFollow: false,
        WarnBlock: false,
        linknews: [],
        linknew: []
      }
    },
    methods: {
      async FollowFollow() {
        if (this.Mainname != '') {
          if (this.Blocktext == 'บล็อคข่าวหมวดหมู่นี้') {
            this.Check = '1'
            this.$getItem('News', function (err, value) {
              console.log(value);
              console.log(value.length);
            });



            if (this.Followtext == 'ติดตามข่าวหมวดหมู่นี้') {
              this.FollowandUnFollow = '1'
              this.Followtext = 'เลิกติดตามข่าวหมวดหมู่นี้'
            } else {
              this.FollowandUnFollow = '2'
              this.Followtext = 'ติดตามข่าวหมวดหมู่นี้'
            }
            await PostsService.FollowFollow({
              Follow_id: this.todos[0],
              Catagory_sub_id: this.list[this.nowid].sub[this.subnowid].name_th,
              FollowandUnFollow: this.FollowandUnFollow,
              Check: this.Check
            })
          } else {
            this.WarnFollow = true
          }
        }
      },
      async FollowBlock() {
        if (this.Mainname != '') {
          if (this.Followtext == 'ติดตามข่าวหมวดหมู่นี้') {
            this.Check = '1'
            if (this.Blocktext == 'บล็อคข่าวหมวดหมู่นี้') {
              this.FollowandUnFollow = '1'
              this.Blocktext = 'เลิกบล็อคข่าวหมวดหมู่นี้'
            } else {
              this.FollowandUnFollow = '2'
              this.Blocktext = 'บล็อคข่าวหมวดหมู่นี้'
            }
            await PostsService.FollowBlock({
              Block_id: this.todos[0],
              Catagory_sub_id: this.this.list[this.nowid].sub[this.subnowid].name_th,
              FollowandUnFollow: this.FollowandUnFollow,
              Check: this.Check
            })
          } else {
            this.WarnBlock = true
          }
        }
      },
      async MainNews(temp, sub) {
        this.nowid = temp
        this.lengthsub = this.list[temp].sub.length
        this.datasub = this.list[temp].sub
        document.getElementById('Name_th').innerHTML = this.list[temp].name_th;
        await this.$getItem('News').then(async function (value) {
          var total = 0
          for (var i = 0; i < value.length; i++) {
            if (value[i][0].name_th == document.getElementById('Name_th').innerHTML) {
              total = total + 1
            }
          }
          console.log("Number" + total);
          document.getElementById('test').innerHTML = total;
        })
        this.temp = Number(document.getElementById('test').innerHTML)
        console.log('dd' + this.temp);
        await this.$getItem('News').then(async function (value) {
          var id = 0
          console.log(value);
          for (var i = 0; i < value.length; i++) {
            if (value[i][0].name_th == document.getElementById('Name_th').innerHTML) {
              document.getElementById("pic_" + (id + 1)).innerHTML =
                `
                    <img src="${value[i][2].pic}" style="border-radius: 10px;">
                    `;
              //ข้อมูลข่าว
              document.getElementById("name_" + (id + 1)).innerHTML =
                `
                    <span class="md-title style="font-size:16px;  color:white; text-shadow: 2px 2px 8px black;" >${value[i][2].title}</span>
                    <br>
                    <span class="md-subhead" style="font-size:12px; text-shadow: 2px 2px 8px black;">${value[i][2].create_date}</span>
                    <span> ${i}</span>
                    `;
              document.getElementById("url_" + (id + 1)).innerHTML =
                `
                    http://localhost:8080/#/News/${value[i][2].article_id}
                    `;
              document.getElementById("article_" + (id + 1)).innerHTML =
                `
                    ${value[i][2].article_id}
                    `;
              id = id + 1
            }
          }
        });
        this.urltext = []
        this.articletext = []
        for (var i = 0; i < this.temp; i++) {
          this.urltext.push(document.getElementById("url_" + (i + 1)).innerHTML)
        }

        for (var i = 0; i < this.temp; i++) {
          this.articletext.push(parseInt(document.getElementById("article_" + (i + 1)).innerHTML))
        }
        console.log(this.urltext);
        console.log(this.articletext);
        this.SubNews(this.nowid, sub)
        this.CheckFol(sub)
      },
      async SubNews(temp, nowid) {
        this.subnowid = nowid
        console.log('warninggusjung111' + this.subnowid);
        document.getElementById('Name_th').innerHTML = this.list[temp].sub[nowid].name_th;
        await this.$getItem('News').then(async function (value) {
          var total = 0
          for (var i = 0; i < value.length; i++) {
            if (value[i][1].name_th == document.getElementById('Name_th').innerHTML) {
              total = total + 1
            }
          }
          console.log("Number" + total);
          document.getElementById('test').innerHTML = total;
        })
        this.temp = Number(document.getElementById('test').innerHTML)
        console.log('dd' + this.temp);
        await this.$getItem('News').then(async function (value) {
          var id = 0
          console.log(value);
          for (var i = 0; i < value.length; i++) {
            if (value[i][1].name_th == document.getElementById('Name_th').innerHTML) {
              document.getElementById("pic_" + (id + 1)).innerHTML =
                `
                    <img src="${value[i][2].pic}" style="border-radius: 10px;">
                    `;
              //ข้อมูลข่าว
              document.getElementById("name_" + (id + 1)).innerHTML =
                `
                    <span class="md-title" style="font-size:16px;  color:white; text-shadow: 2px 2px 8px black;" >${value[i][2].title}</span>
                    <br>
                    <span class="md-subhead" style="font-size:12px; text-shadow: 2px 2px 8px black;">${value[i][2].create_date}</span>
                    <span> ${i}</span>
                    `;
              document.getElementById("url_" + (id + 1)).innerHTML =
                `
                    http://localhost:8080/#/News/${value[i][2].article_id}
                    `;
              document.getElementById("article_" + (id + 1)).innerHTML =
                `
                    ${value[i][2].article_id}
                    `;
              id = id + 1
            }
          }
        });
        this.urltext = []
        this.articletext = []
        for (var i = 0; i < this.temp; i++) {
          this.urltext.push(document.getElementById("url_" + (i + 1)).innerHTML)
        }

        for (var i = 0; i < this.temp; i++) {
          this.articletext.push(parseInt(document.getElementById("article_" + (i + 1)).innerHTML))
        }
        console.log(this.urltext);
        console.log(this.articletext);
        this.CheckFol(nowid)
        console.log('warninggusjung' + this.subnowid);
      },

      async Bookmark(data) {
        var id = data - 1
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
          console.log("Gusjung" + this.todos);
        }
        const response = await PostsService.CheckLater({
          Later_id: this.todos[0],
          CheckID: this.CheckID
        })
        console.log(response.data.Article_id.length);
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
        console.log(this.article[id]);
      },
      async CheckFol(nowid) {
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
          console.log("Gusjung" + this.todos);
        }
        this.Followtext = 'ติดตามข่าวหมวดหมู่นี้'
        this.Blocktext = 'บล็อคข่าวหมวดหมู่นี้'
        const response = await PostsService.CheckFollow({
          Follow_id: this.todos[0],
          CheckID: this.CheckID
        })

        for (var i = 0; i < response.data.Catagory_sub_id.length; i++) {
          console.log(response.data.Catagory_sub_id);
          console.log(this.list[nowid].name_th);
          if (response.data.Catagory_sub_id[i] == this.list[this.nowid].sub[nowid].name_th) {
            this.Followtext = 'เลิกติดตามข่าวหมวดหมู่นี้'
          }
        }

        const responses = await PostsService.CheckBlock({
          Block_id: this.todos[0],
          CheckID: this.CheckID
        })

        for (var i = 0; i < responses.data.Catagory_sub_id.length; i++) {
          if (responses.data.Catagory_sub_id[i] == this.list[this.nowid].sub[nowid].name_th) {
            this.Blocktext = 'เลิกบล็อคข่าวหมวดหมู่นี้'
          }
        }
      }

    },
    async mounted() {
      const linknews = JSON.parse(this.$localStorage.get('linknews'))
      if (linknews) {
        this.linknews = linknews
        console.log("Gusjung" + this.linknews);
        this.linknew = this.linknews[0].split("_")
        console.log(this.linknew);
      }
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category?dev=1999`).then(
        Response => {
          this.list = Response.data.data;
        });
      //บันทึก List หมวดหมู่ข่าว id 7-14
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category/2?dev=1999`).then(
        Response => {
          for (var i = 0; i < Response.data.data.length; i++) {
            this.list.push(Response.data.data[i]);
          }
        });
      console.log(this.linknew[0]);
      this.MainNews(parseInt(this.linknew[0]), parseInt(this.linknew[1]))

    }
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Kanit');


  .tabCate {
    padding-top: 12%;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Kanit', sans-serif;
  }

  .md-toolbar {
    border-radius: 15px;
    width: 100%;

  }

  .md-layout-item>.md-button {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }

  #textBut2 {
    background-color: #1565C0;
    color: white;
    border-radius: 8px;
    opacity: 0.8;
  }

  #textBut3 {
    background-color: #D50000;
    color: white;
    border-radius: 8px;
    opacity: 0.8;
  }

  @media (min-width:1025px) {
    .tabCate {
      width: 70%;
    }
    .card {
      width: 100%;
    }
  }

  .md-card {
    width: 24.5em;
    margin-bottom: 1.5em;
    display: inline-block;
    vertical-align: top;

  }

  small {
    display: block;
  }

</style>
