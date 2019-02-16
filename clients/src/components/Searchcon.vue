<template>
  <div>
    <div v-for="i in temp">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <div :id="'pic_'+i">
              <img  src="../assets/logo.png" alt="Skyscraper">
            </div>
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <a :href="urltext[i-1]"><div :id="'name_'+i">
                <span class="md-title" >{{i}}Loading</span>
                <span class="md-subhead">Please Wait ...</span>
              </div></a>
            </md-card-header>
            <!-- Card menu -->
            <md-card-actions>
              <md-button class="md-icon-button" @click ="Bookmark(i)">
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
                        <span><i class="fab fa-facebook-square fa-lg"></i></span>
                      </md-menu-item>
                    </network>
                  </social-sharing>

                  <social-sharing :url="urltext[i-1]" inline-template>
                    <network network="twitter">
                      <md-menu-item @click="network">
                        <span>Twitter</span>
                        <span><i class="fab fa-twitter-square fa-lg"></i></span>
                      </md-menu-item>
                    </network>
                  </social-sharing>

                  <social-sharing :url="urltext[i-1]" inline-template>
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
            <!-- End card menu -->
          </md-card-area>
        </md-card-media-cover>
      </md-ripple>  
    </md-card>
  
    </div>
        <div id="test"></div>
        <div id="searchdata"></div>
    <div v-for="i in temp">
        <div :id="'url_'+i" style="display: none;"></div>
    </div>
    <div v-for="i in temp">
        <div :id="'article_'+i" style="display: none;"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostsService from '@/services/PostsService'
export default {
  name: 'Ministry',
  data(){
      return{
          temp: null, //ใช้ในการเพิ่มจำนวน content card
          list: [], //array List ของ หมวดหมู่ข่าว id 1-14
          list_article:[], //array List ของ ข่าวใน หมวดหมู่ใดใด
          count: 1, //แสดงลำดับการ print ข้อมูล
          article: [], //ข่าวทั้งหมด
          list_news: [],
          todos: [],
          Check: null,
          CheckID: '2',
          datanumber : '',
          temp2: null,
          urltext: [],
          articletext: [],
          searchdata: []
      }
  },
  methods:{
      async Bookmark(data)
      {
        var id = data-1
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
          console.log("Gusjung"+this.todos);
        }
        const response = await PostsService.CheckLater({
          Later_id: this.todos[0],
          CheckID : this.CheckID
        })
        console.log(response.data.Article_id.length);
        for(var i=0;i<response.data.Article_id.length;i++)
		  {
        if(response.data.Article_id[i]==this.articletext[id])
        {
        this.FollowandUnFollow = "2"
        this.Check = '1'
        await PostsService.FollowLater({
				Later_id : this.todos[0],
				Catagory_sub_id : this.articletext[id],
				FollowandUnFollow : this.FollowandUnFollow,
				Check : this.Check
        })
        }
        
      }
        this.FollowandUnFollow = "1"
        this.Check = '1'
        await PostsService.FollowLater({
				Later_id : this.todos[0],
				Catagory_sub_id : this.articletext[id],
				FollowandUnFollow : this.FollowandUnFollow,
        Check : this.Check
        })
        console.log(this.articletext[id]);
      }
  },
  async mounted(){
    console.log(this.$route.params.searchdata);
    console.log(this.$route.params.searchdata.split(" "))
    console.log((this.$route.params.searchdata.split(" "))[1])
    document.getElementById('searchdata').innerHTML = `${this.$route.params.searchdata}`
    //บันทึก List หมวดหมู่ข่าว id 1-6
    var x=1;
    var lengthvalue = 0
    await this.$getItem('News').then(function(value) {
    var searchdata = (document.getElementById('searchdata').innerHTML).split(" ")
    var Checksame = []
    for(var i=0;i<searchdata.length;i++)
    {
        for(var j=0;j<value.length;j++)
        {
            var a=0
            if(value[j][2].article_id == searchdata[i])
            {
                for(var k=0;k<Checksame.length;k++)
                {
                  if(Checksame[k] == searchdata[i])
                  {
                    a=1
                  }
                }
                if(a==0)
                {
                Checksame.push(searchdata[i])
                console.log('enter');
                lengthvalue = lengthvalue+1
                }
            }
        }
    }
    console.log(lengthvalue);
    document.getElementById('test').innerHTML = lengthvalue;
    })
    this.temp = Number(document.getElementById('test').innerHTML)
    console.log('dd'+this.temp);
    await this.$getItem('News').then(function(value) {
    var id = 0
    var searchdata = (document.getElementById('searchdata').innerHTML).split(" ")
    var Checksame = []
    for(var i=0;i<value.length;i++){
        for(var j=0;j<searchdata.length;j++)
        {
            var a=0
            if(value[i][2].article_id == searchdata[j])
            {
                for(var k=0;k<Checksame.length;k++)
                {
                    if(Checksame[k] == searchdata[j])
                    {
                        a=1
                    }
                }
                    if(a==0)
                    {
                        Checksame.push(searchdata[j])
                        console.log('enterll');
                        document.getElementById("pic_"+(id+1)).innerHTML  = `
                        <img src="${value[i][2].pic}" style="margin:10px;" >
                        `;
                        //ข้อมูลข่าว
                        document.getElementById("name_"+(id+1)).innerHTML  = `
                        <span class="md-title" >ชื่อข่าว : ${value[i][2].title}</span>
                        <br>
                        <span class="md-subhead">วันที่โพสต์ : ${value[i][2].create_date}</span>
                        <span> ${i}</span>
                        `;
                        document.getElementById("url_"+(id+1)).innerHTML  = `
                        http://localhost:8080/#/News/${value[i][2].article_id}
                        `;
                        document.getElementById("article_"+(id+1)).innerHTML  = `
                        ${value[i][2].article_id}
                        `;
                        id = id+1
                    }
            }
        }
    }


			});
    console.log(this.temp);
    
    for(var i=0;i<this.temp;i++){
    this.urltext.push(document.getElementById("url_"+(i+1)).innerHTML)}

    for(var i=0;i<this.temp;i++){
    this.articletext.push(parseInt(document.getElementById("article_"+(i+1)).innerHTML))}
    
/*
    var day,month,year,empty;
    month = "23 พฤษภาคม 2561";
    var date = month.split(" ");
   
    console.log(date);
    }*/
    
//print ข้อมูลลง content card
  }    
}

</script>


<style scoped>
  .md-card {
    width: 30em;
    margin: 1em;
    display: inline-block;
    vertical-align: top;

  }
    small {
    display: block;
  }
</style>

