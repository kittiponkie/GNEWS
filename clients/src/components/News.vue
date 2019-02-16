<template>
  <div class="news">
      <!--ชื่อข่าว-->
      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-xsmall-size-100">
          <span class="md-display-1">{{Article_Name}}</span>
        </div>
      </div>
      <br>
    

    <div class="md-layout md-gutter">
      <!--gutter คู่แรก-->
      <!--รูปข่าว-->
      <div class="md-layout-item md-size-60 md-xsmall-size-100">
        <div class="slider" id="article_picture">

          <img src="../assets/logo.png" />

        </div>
      </div>

      <!--เกี่ยวกับข่าว-->
      <div class="md-layout-item md-size-40 md-xsmall-hide">
        <!--เกี่ยวกับ1-->
        <md-toolbar class="md-primary" id="tool1" md-elevation="0">
          <!--โลโก้หน่วยงาน-->
          <div class="md-layout-item md-size-20">
            <img :src="img_ministry" width="100%" />
          </div>
          <!--หน่วยงาน-->
          <div class="md-layout-item md-alignment-center" id="comp1">
            <md-headline style="font-size:90%;">เนื้อหาข่าวโดย</md-headline>
            <br>
            <md-button @click="tominisry" class="md-primary" id="textBut1">{{Ministry_Name}}</md-button>
          </div>
        </md-toolbar>

        <br>
        <!--เกี่ยวกับ2-->
        <md-toolbar class="md-primary" id="tool2" md-elevation="0">
          <!--แถวที่1-->
          <div class="md-toolbar-row">
            <div class="md-layout-item md-gutter">
              <div class="md-layout-item" id="comp2">
                <md-icon>event</md-icon>
                <md-body-2>โพสต์เมื่อ: {{ datepost }}</md-body-2>
              </div>
              <div class="md-layout-item" id="comp2">
                <md-icon>remove_red_eye</md-icon>
                <md-body-2>อ่านแล้ว {{ view }} คน</md-body-2>
              </div>
            </div>
          </div>
          <!--แถวที่2-->
          <md-button @click="setnews((Main_Categoryid-1)+'_'+countsub)" id="comp2" style="color:#2d2d2b;"  target="_blank">{{Main_Category}} > </md-button>
          <md-button @click="setnews((Main_Categoryid-1)+'_'+countsub)" id="comp2" style="color:#FF6F00;"  target="_blank"> {{Sub_Category}}</md-button>

          <!--แถวที่3-->
          <div class="md-toolbar-row">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-button id="textBut2" @click = "FollowFollow">
                  <md-icon style="color:white;">add_circle</md-icon>{{Followtext}}</md-button>
              </div>
              <div class="md-layout-item">
                <md-button id="textBut3" @click = "FollowBlock">
                  <md-icon style="color:white;">block</md-icon> {{Blocktext}}</md-button>
              </div>
            </div>
          </div>
        </md-toolbar>
      </div>
    </div>
    <br>
    <!--gutter คู่สอง-->
    <div class="md-layout md-gutter md-alignment-top-center">
      <!--เนื้อหาข่าว-->
      <div class="md-layout-item md-size-60 md-xsmall-size-100">
        <md-content>
          <div style="margin: 20px 20px 20px 20px;">
            <md-body-2 style="color:#757575;">
              {{Description}}
            </md-body-2>
          </div>
        </md-content>
        <br>
        <br>
        <span class="md-body-1">แชร์: </span>
        <!--แชร์-->
        <vue-goodshare-facebook has_icon style="color:white;margin:0px;"></vue-goodshare-facebook>

        <vue-goodshare-twitter  has_icon style="color:white;margin:0px;"></vue-goodshare-twitter>

        <vue-goodshare-line  has_icon style="color:white;margin:0px;"></vue-goodshare-line>

        <md-button style="background-color:#FF5252; margin:0px;" @click="pdf">
          <md-icon style="color:white;">save</md-icon>
          <font color="white"> PDF</font>
        </md-button>

      </div>
      <!--ข่าวด้านข้าง-->
      <div class="md-layout-item md-gutter  md-size-40 md-xsmall-size-100 " style="margin-top: 2em;">
        <span class="md-subheading">ข่าวล่าสุด</span>
        <span class="md-subheading">________________</span>
        <div style="width:100%; margin-top: 2em;">
          <card></card>
        </div>

      </div>
    </div>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-60 md-xsmall-size-100">
        <div v-if="previous">
          <md-button :href="pagePrev" style="width:100px; color:#faad29; float:left;">
            <md-icon style="color:#faad29;">keyboard_arrow_left</md-icon>ข่าวก่อนหน้า
          </md-button>
        </div>
        <div v-if="next">
          <md-button :href="pageNext" style="width:100px; color:#faad29; float:right;"> ข่าวถัดไป
            <md-icon style="color:#faad29;">keyboard_arrow_right</md-icon>
          </md-button>
        </div>

      </div>
      <div class="md-layout-item md-size-40">
      </div>
    </div>
    <md-dialog-alert
      		:md-active.sync="WarnFollow"
      		md-content="กรุณากดเลิกบล็อคข่าวหมวดหมู่นี้ด้วยค่ะ"
      		md-confirm-text="ตกลง" />
	  	<md-dialog-alert
      		:md-active.sync="WarnBlock"
      		md-content="กรุณากดเลิกติดตามข่าวหมวดหมู่นี้ด้วยค่ะ"
      		md-confirm-text="ตกลง" />

    <!-- not use ,มีไว้ send paramiter -->
    <div id="article_id" style="display:none;">
    </div>
    <div id="article_name" style="display:none;">
    </div>
    <div id="ministry_name" style="display:none;">
    </div>
    <div id="pic_ministry" style="display:none;">
    </div>
    <div id="datePost" style="display:none;">
    </div>
    <div id="main_category" style="display:none;">
    </div>
    <div id="sub_category" style="display:none;">
    </div>
    <div id="description" style="display:none;">
    </div>
    <div id="pagePrevious" style="display:none;">
    </div>
    <div id="pageNext" style="display:none;">
    </div>
    <div id="main_categoryid" style="display:none;">
    </div>
    <div id="ministry_id" style="display:none;">
    </div>
    <div id="id" style="display:none;">
    </div>
    <div id="type" style="display:none;">
    </div>
    <!-- end -->
  </div>
</template>

<script>
import axios from 'axios';
import PostsService from '@/services/PostsService';
  import card from '../components/News_Latest_Card'
  import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
  import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
  import VueGoodshareLine from 'vue-goodshare/src/providers/Line.vue'
  export default {
    name: 'News',
    data: () => ({
      Article_ID: '49',
      Article_Name: 'Article_name',
      Ministry_Name: '',
      img_ministry: '',
      pageMinistry: '',
      datepost: '11 ก.ค. 2561',
      view: '1000',
      Main_Category: '',
      Sub_Category: '',
      Description: '',
      pagePrev: '',
      pageNext: '',
      previous: true,
      next: true,
      Followtext: null,
      Blocktext: null,
      todos: [],
      CheckID: '2',
      Check: null,
      FollowandUnFollow: null,
      WarnFollow: false,
      WarnBlock: false,
      view: null,
      linknews: [],
      Main_Categoryid: '',
      list: [],
      lengthsub: null,
      countsub: null,
      ministry_id: null,
      id: null,
      type: null
    }),
    components: {
      card,
      VueGoodshareFacebook,
      VueGoodshareTwitter,
      VueGoodshareLine
    },
    methods: {
      async tominisry(){
        if(this.type == "department")
        {
          window.open("http://localhost:8080/#/Ministry/"+this.ministry_id+'/'+this.id,'_blank')
        }
        else
        {
          window.open("http://localhost:8080/#/Ministry/"+this.id)
        }
      },
      async setnews(data){
        console.log('data'+data);
        this.linknews.push(data)
        this.$localStorage.set('linknews', JSON.stringify(this.linknews))
        this.$router.push({ name: 'Econ' })
        location.reload();
      },
      pdf() {
        /*
        var options = {
          //'width': 700
        }
        var pdf = new jsPDF('p', 'pt', 'a4');
        pdf.addHTML($("#pdf"), 10, 220, options, function () {
          pdf.save('News_.pdf');
        });
        */
      },
      async FollowFollow(){
			if(this.Main_Category != ''){
				if(this.Blocktext == 'บล็อคข่าวหมวดหมู่นี้'){
					this.Check = '1';
					this.$getItem('News',function(err,value) {
						console.log(value) ;
						console.log(value.length);
					});
					if(this.Followtext == 'ติดตามข่าวหมวดหมู่นี้'){
				  		this.FollowandUnFollow = '1';
				  		this.Followtext = 'เลิกติดตามข่าวหมวดหมู่นี้';
					}
					else{
						this.FollowandUnFollow = '2';
						this.Followtext = 'ติดตามข่าวหมวดหมู่นี้';
					}
					await PostsService.FollowFollow({
						Follow_id : this.todos[0],
						Catagory_sub_id : this.Sub_Category,
						FollowandUnFollow : this.FollowandUnFollow,
						Check : this.Check
					});
		  		}	
		  		else{
			  		this.WarnFollow = true;
		  		}
		  	}
      },
      async FollowBlock(){
			if(this.Main_Category != ''){  
				if(this.Followtext == 'ติดตามข่าวหมวดหมู่นี้'){
			  		this.Check = '1'
					if(this.Blocktext == 'บล็อคข่าวหมวดหมู่นี้'){
				  		this.FollowandUnFollow = '1';
				  		this.Blocktext = 'เลิกบล็อคข่าวหมวดหมู่นี้';
					}
					else{
						this.FollowandUnFollow = '2';
						this.Blocktext = 'บล็อคข่าวหมวดหมู่นี้';
					}
					await PostsService.FollowBlock({
						Block_id : this.todos[0],
						Catagory_sub_id : this.Sub_Category,
						FollowandUnFollow : this.FollowandUnFollow,
						Check : this.Check
					});
		  		}
		  		else{
			  		this.WarnBlock = true;
		  		}
		  	}
		}
    },
    async mounted() {
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category?dev=1999`).then(Response => {
	        this.list = Response.data.data;
        });
        //บันทึก List หมวดหมู่ข่าว id 7-14
	      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category/2?dev=1999`).then(Response => {
          for(var i=0;i<Response.data.data.length;i++){
            this.list.push(Response.data.data[i]);
          }
        });

      await PostsService.Putarticle({
			Article_id : this.$route.params.id
		  });
		  const responseview = await PostsService.Findarticle({
			Article_id : this.$route.params.id
		  });
		  console.log('viewmalal'+responseview);
		  this.view = responseview.data.Article_view


      document.getElementById('article_id').innerHTML = this.$route.params.id;
      await this.$getItem('News').then(function (value) {
        for (var i = 0; i < value.length; i++) {
          if (value[i][2].article_id == document.getElementById('article_id').innerHTML) {
            document.getElementById('article_name').innerHTML = value[i][2].title;
            document.getElementById('article_picture').innerHTML = `<img src="${value[i][2].pic}" />`;
            document.getElementById('ministry_name').innerHTML = value[i][2].corporate_info.name_th;
            document.getElementById('pic_ministry').innerHTML = value[i][2].corporate_info.pic;
            document.getElementById('datePost').innerHTML = value[i][2].create_date;
            document.getElementById('main_category').innerHTML = value[i][0].name_th;
            document.getElementById('main_categoryid').innerHTML = value[i][0].article_m_cat_id;
            document.getElementById('sub_category').innerHTML = value[i][1].name_th;
            document.getElementById('description').innerHTML = value[i][2].desc;
            document.getElementById('ministry_id').innerHTML = value[i][2].corporate_info.ministry_id;
            document.getElementById('id').innerHTML = value[i][2].corporate_info.id;
            document.getElementById('type').innerHTML = value[i][2].corporate_info.type;

            if (value[i - 1]) document.getElementById('pagePrevious').innerHTML = value[i - 1][2].article_id;
            else document.getElementById('pagePrevious').innerHTML = "null";
            if (value[i + 1]) document.getElementById('pageNext').innerHTML = value[i + 1][2].article_id;
            else document.getElementById('pageNext').innerHTML = "null";
            break;
          }
        }
      });
      this.Article_Name = document.getElementById('article_name').innerHTML;
      this.Ministry_Name = document.getElementById('ministry_name').innerHTML;
      this.pageMinistry = '#/card';
      this.Main_Categoryid = document.getElementById('main_categoryid').innerHTML;
      this.img_ministry = document.getElementById('pic_ministry').innerHTML;
      this.datepost = document.getElementById('datePost').innerHTML;
      this.Main_Category = document.getElementById('main_category').innerHTML;
      this.Sub_Category = document.getElementById('sub_category').innerHTML;
      this.Description = document.getElementById('description').innerHTML;
      this.pagePrev = document.getElementById('pagePrevious').innerHTML;
      this.pageNext = document.getElementById('pageNext').innerHTML;
      this.ministry_id = document.getElementById('ministry_id').innerHTML
      this.id = document.getElementById('id').innerHTML
      this.type = document.getElementById('type').innerHTML

      this.lengthsub = this.list[parseInt(this.Main_Categoryid)-1].sub.length
      for(var i=0;i<this.lengthsub;i++)
      {
        console.log(this.list[parseInt(this.Main_Categoryid)-1].sub[i].name_th);
        if(this.list[parseInt(this.Main_Categoryid)-1].sub[i].name_th == this.Sub_Category)
        {
          this.countsub = i
        }
      }

      if (this.pagePrev == "null") this.previous = false;
      else {
        this.previous = true;
        this.pagePrev = "#/news/" + this.pagePrev;
      }
      if (this.pageNext == "null") this.next = false;
      else {
        this.next = true;
        this.pageNext = "#/news/" + this.pageNext;
      }

      this.Followtext = 'ติดตามข่าวหมวดหมู่นี้';
      this.Blocktext = 'บล็อคข่าวหมวดหมู่นี้';
      	const todos = JSON.parse(this.$localStorage.get('todos'));
        if (todos) {
      		this.todos = todos;
		}
		
		  const response = await PostsService.CheckFollow({
        	Follow_id: this.todos[0],
        	CheckID : this.CheckID
    	});
		  for(var i=0;i<response.data.Catagory_sub_id.length;i++){
		  	if(response.data.Catagory_sub_id[i]==this.Sub_Category){	
		  		this.Followtext = 'เลิกติดตามข่าวหมวดหมู่นี้';
		  	}
      }
      const responses = await PostsService.CheckBlock({
        	Block_id: this.todos[0],
        	CheckID : this.CheckID
      	});
		  for(var i=0;i<responses.data.Catagory_sub_id.length;i++){
		  	if(responses.data.Catagory_sub_id[i]==this.Sub_Category){	
		  		this.Blocktext = 'เลิกบล็อคข่าวหมวดหมู่นี้';
		  	}
      }
		this.Check= '1';
		const responsess = await PostsService.CheckRead({
        	Read_id: this.todos[0],
        	CheckID : this.CheckID
      	})
		for(var i=0;i<responsess.data.Article_id.length;i++){
		  	if(responsess.data.Article_id[i]==this.$route.params.id){	
			  	this.FollowandUnFollow = '2';
			  	await PostsService.FollowRead({
					Read_id : this.todos[0],
					Catagory_sub_id : this.$route.params.id,
					FollowandUnFollow : this.FollowandUnFollow,
					Check : this.Check
				});
		  	}
		}
		this.FollowandUnFollow = '1';
		await PostsService.FollowRead({
			Read_id : this.todos[0],
			Catagory_sub_id : this.$route.params.id,
			FollowandUnFollow : this.FollowandUnFollow,
			Check : this.Check	  
		});
    }
  }

</script>

<style lang="scss" scoped>
  .news {
    padding-top: 12%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width:320px) {
    .news {
      width: 90%;
      padding-top: 20%;
    }
    .md-display-1 {
      font-size: 20px;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (max-width:400px) {
    .news {
      width: 90%;
      padding-top: 20%;
    }
    .md-display-1 {
      font-size: 22px;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (max-width:480px) {
    .news {
      width: 90%;
      padding-top: 20%;
    }
    .md-display-1 {
      font-size: 24px;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (max-width:600px) {
    .news {
      width: 90%;
    }
    .md-display-1 {
      font-size: 24px;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (max-width:768px) {
    .news {
      width: 90%;
    }
    .md-display-1 {
      font-size: 26px;
    }
    #comp1 {
      font-size: 80%;
    }
    #textBut1 {
      font-size: 90%;
    }
    #textBut2,
    #textBut3 {
      font-size: 70%;
      height: 70%;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (max-width:1024px) {
    .news {
      width: 90%;
    }
    .md-display-1 {
      font-size: 26px;
    }
    #comp1 {
      font-size: 80%;
    }
    #textBut1 {
      font-size: 90%;
    }
    #textBut2,
    #textBut3 {
      font-size: 70%;
      height: 70%;
    }
    #comp2 {
      font-size: 80%;
    }

  }

  @media screen and (min-width:1025px) {
    .news {
      width: 70%;
    }
    .md-display-1 {
      font-size: 28px;
    }
    #textBut1 {
      font-size: 90%;
    }

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

  span {
    display: block;
  }

  .md-toolbar>img {
    margin-top: 0px;
    margin-right: auto;
    margin-left: auto;
    float: left;
    border: 2px solid white;
    border-radius: 50%;
  }

  #comp1 {
    text-align: center;
  }

  .md-content {
    margin-top: 2em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    background-color: white;
    /*#f3efef;*/
    border-radius: 20px;
  }

</style>

<style scoped>
  #tool1 {
    width: 100%;
    height: 40%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
  }

  #tool2 {
    width: 100%;
    height: 55%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);

  }

  .slider {
    width: 100%;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
  }

  #hideText {
    display: none;
  }

  /* Smartphone Portrait and Landscape */

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    #hideText {
      display: inline;
    }
  }

</style>
