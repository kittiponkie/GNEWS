<template>
  <div class="container">

    <Lastestnews></Lastestnews>

    <div class="section-title" style="margin-top:1vw;">
      <h2 class="title">Hot news</h2>
    </div>
    <div class="row">

      <div class="col-sm-12 col-md-6 col-lg-6  py-0 pl-3 pr-1 featcard">
        <div id="featured" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[0]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[0]" class="align-self-end">
                    <span class="badge" id="Category_1">หมวดหมู่</span>
                    <h4 class="card-title" id="name_1">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h4>

                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[1]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[1]" class="align-self-end">
                    <span class="badge" id="Category_2" >หมวดหมู่</span>
                    <h4 class="card-title" id="name_2">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                  </a>
                </div>
              </div>
            </div>
						 <div class="carousel-item">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[2]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[2]" class="align-self-end">
                    <span class="badge" id="Category_3">หมวดหมู่</span>
                    <h4 class="card-title" id="name_3">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                  </a>
                </div>
              </div>
            </div>
						 <div class="carousel-item">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[3]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[3]" class="align-self-end">
                    <span class="badge" id="Category_4">หมวดหมู่</span>
                    <h4 class="card-title" :id="'name_'+(4)">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                  </a>
                </div>
              </div>
            </div>
						 <div class="carousel-item">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[4]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[4]" class="align-self-end">
                    <span class="badge" id="Category_5">หมวดหมู่</span>
                    <h4 class="card-title" :id="'name_'+(5)">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                  </a>
                </div>
              </div>
            </div>
						 <div class="carousel-item">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[5]"
                  alt="" >
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[5]" class="align-self-end">
                    <span class="badge" id="Category_6">หมวดหมู่</span>
                    <h4 class="card-title" :id="'name_'+(6)">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="col-6 py-0 px-1 mg-1 d-none d-sm-block">
        <div class="row">
          <div class="col-6 pb-2 mg-1">
            <div class="card">
              <img class="card-img img-fluid" :src="pictext[6]"
                alt="">
              <div class="card-img-overlay d-flex linkfeat">
                <a :href="urltext[6]" class="align-self-end">
                  <span class="badge" id="Category_7">หมวดหมู่</span>
                  <h6 class="card-title" id="name_7">BI Atur Standarisasi QR Code</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 pb-2 mg-2">
            <div class="card">
              <img class="card-img img-fluid" :src="pictext[7]"
                alt="">
              <div class="card-img-overlay d-flex linkfeat">
                <a :href="urltext[7]" class="align-self-end">
                  <span class="badge" id="Category_8">Industri</span>
                  <h6 class="card-title" id="name_8">PTSP BP Batam Masuk 10 Terbaik di Indonesia</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 pb-2 mg-3	">
            <div class="card">
              <img class="card-img img-fluid" :src="pictext[8]"
                alt="">
              <div class="card-img-overlay d-flex linkfeat">
                <a :href="urltext[8]" class="align-self-end">
                  <span class="badge" id="Category_9">Ekspor</span>
                  <h6 class="card-title" id="name_9">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 pb-2 mg-4	">

            <div class="card">
              <img class="card-img img-fluid" :src="pictext[9]"
                alt="">
              <div class="card-img-overlay d-flex linkfeat">
                <a :href="urltext[9]" class="align-self-end">
                  <span class="badge" id="Category_10">Pertumbuhan Ekonomi</span>
                  <h6 class="card-title" id="name_10">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h6>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- End hot news -->

    <div class="row">

      <!-- Lastest New -->
      <div class="col-md-6">

        <div class="section-title" style="margin-top:1vw;">
          <h2 class="title">ข่าวล่าสุด</h2>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 featcard">
          <div id="featured" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[13]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[13]" class="align-self-end">
                      <span class="badge" id="Category_14">หมวดหมู่</span>
                      <h4 class="card-title" id="name_14">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h4>

                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[14]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[14]" class="align-self-end">
                      <span class="badge" id="Category_15">หมวดหมู่</span>
                      <h4 class="card-title" id="name_15">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h4>

                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[15]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[15]" class="align-self-end">
                      <span class="badge" id="Category_16">หมวดหมู่</span>
                      <h4 class="card-title" id="name_16">BTN Targetkan Seribu Nasabah Valas di Batam</h4>

                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[16]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[16]" class="align-self-end">
                      <span class="badge" id="Category_17">หมวดหมู่</span>
                      <h4 class="card-title" id="name_17">Sistem OSS Resmi Diluncurkan</h4>

                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[17]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[17]" class="align-self-end">
                      <span class="badge" id="Category_18">หมวดหมู่</span>
                      <h4 class="card-title" id="name_18">Grab Gandeng Samsung, Telkomsel, dan Erafone</h4>

                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img class="card-img img-fluid" :src="pictext[18]"
                    alt="">
                  <div class="card-img-overlay d-flex linkfeat">
                    <a :href="urltext[18]" class="align-self-end">
                      <span class="badge" id="Category_19">หมวดหมู่</span>
                      <h4 class="card-title" id="name_19">Paket Kebijakan Ekonomi Mempermudah Izin Investasi</h4>

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 ">
          <div class="row">
            <div class="col-6" style="padding-left: 0px;padding-right: 5px;padding-top: 10px;">
              <div class="card">
                <img class="card-img img-fluid" :src="pictext[19]"
                  alt="">
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[19]" class="align-self-end">
                    <span class="badge" id="Category_20">Ekspor</span>
                    <h6 class="card-title" id="name_20">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6" style="padding-left: 5px;padding-right: 0px;padding-top: 10px;">

              <div class="card">
                <img class="card-img img-fluid" :src="pictext[20]"
                  alt="">
                <div class="card-img-overlay d-flex linkfeat">
                  <a :href="urltext[20]" class="align-self-end">
                    <span class="badge" id="Category_21">Pertumbuhan Ekonomi</span>
                    <h6 class="card-title" id="name_21">DPR Setujui Penambahan Anggaran BP Batam Rp565 Miliar</h6>
                  </a>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
      <!-- End LAstest News -->

      <!-- Live -->

      <div class="col-md-6">


        <!-- Radio -->
        <div class="col-md-12" style="padding-left:0px; padding-right:0px;">
          <div class="section-title" style="margin-top:1vw;">
            <h2 class="title">Radio</h2>
          </div>
          <h5>{{list_radio[0].title}}</h5>
          <audio controls="controls" id="s" :src="'http://'+radio[0]+'/;&type=mp3'"></audio>
        </div>
        <div class="col-md-12" style="padding-left:0px; padding-right:0px;">
          <div class="section-title" style="margin-top:5vw;">
            <h2 class="title">Live</h2>
          </div>
          <div class="clearfix">
            <video id="my_video_1" class="video-js vjs-default-skin" width="640px" height="350px" controls preload="auto" data-setup='{"aspectRatio":"640:350"}'>
              <source :src="list_live[0].url"
                type="application/x-mpegURL">
            </video>
          </div>
        </div>


      </div>
      <!-- End Live -->
    </div>
    <!--category-->
    <div class="row">

      <div class="col-md-4">
        <div class="section-title" style="margin-top:1vw;">
          <h2 class="title">สถานการณ์ปัจจุบัน</h2>
        </div>
        <Category1></Category1>
      </div>
      <div class="col-md-4">
        <div class="section-title" style="margin-top:1vw;">
          <h2 class="title">เศรษฐกิจและการลงทุน</h2>
        </div>
        <Category2></Category2>
      </div>
      <div class="col-md-4">
        <div class="section-title" style="margin-top:1vw;">
          <h2 class="title">ข่าวในชีวิตประจำวัน</h2>
        </div>
        <Category3></Category3>
      </div>

    </div>

	<div v-for="i in 30">
        <div :id="'name_'+i" style="display: none;"></div>
    </div>
	<div v-for="i in 30">
        <div :id="'url_'+i" style="display: none;"></div>
    </div>
	<div v-for="i in 30">
        <div :id="'pic_'+i" style="display: none;"></div>
    </div>
	<div v-for="i in 30">
        <div :id="'article_'+i" style="display: none;"></div>
    </div>
	<div v-for="i in 30">
        <div :id="'Category_'+i" style="display: none;"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostsService from '@/services/PostsService'
import Lastestnews from '@/components/Lastestnews'
import card_sm from '@/components/card_sm'
import Category1 from '@/components/Category1'
import Category2 from '@/components/Category2'
import Category3 from '@/components/Category3'
  export default {
    components: {
      Lastestnews,
      card_sm,
      Category1,
      Category2,
      Category3
    },
    data() {
      return {
				doubleA1: 0,
				urltext: [],
        pictext: [],
        list_live: [],
        list_radio: [],
        list_radio_url: [],
        radio: null
      }
    },
    async mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://unpkg.com/video.js/dist/video.js')
      document.head.appendChild(recaptchaScript)
      let recaptchaScript2 = document.createElement('script')
      recaptchaScript2.setAttribute('src', 'https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js')
      document.head.appendChild(recaptchaScript2)
        
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/live/all?dev=1999`).then(Response => {
            for(var i=0;i<Response.data.live.data[0].length;i++){
                if(Response.data.live.data[0][i].type_live == 2) {
                    this.list_live.push(Response.data.live.data[0][i]);             
                }
                else if(Response.data.live.data[0][i].type_live == 1){
                  this.list_radio.push(Response.data.live.data[0][i]);

                }
            }
            console.log(this.list_radio[0].url);
            this.radio = (this.list_radio[0].url).split('/')
            console.log(this.radio[0]);
        });
			
			await this.$getItem('News').then(async function(value) {
      var responsetop = await PostsService.Listarticle({

      })
      //console.log(responsess.data);
			//console.log(value);
			console.log(responsetop.data.length);
			console.log(responsetop.data[1].Article_id)
			var id= 0
			var Checksame = []
			var ChecksameCate = []
      for(var j=0;j<responsetop.data.length;j++){
					for(var i=0;i<value.length;i++){
          if(value[i][2].article_id == responsetop.data[j].Article_id)
          {   
            var a=0
            for(var k=0;k<Checksame.length;k++)
            {
              if(Checksame[k] == value[i][2].article_id)
              {
                a=1
              }
            }
            if(a==0)
            {
							Checksame.push(responsetop.data[j].Article_id)
							document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name_"+(id+1)).innerHTML  = `
                <span class="md-title" >${value[i][2].title}</span>
                <br>
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
              document.getElementById("Category_"+(id+1)).innerHTML  = `${value[i][1].name_th}`;
              id = id+1 
              //console.log('enter'+responsess.data.Article_id[j]);
            }
          }
        }
			}
			for(var i=0;i<11;i++)
			{
				document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name_"+(id+1)).innerHTML  = `
                <span class="md-title" >${value[i][2].title}</span>
                <br>
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
              document.getElementById("Category_"+(id+1)).innerHTML  = `${value[i][1].name_th}`;
            id = id+1 
			}
			for(var j=0;j<3;j++)
			{
				for(var i=0;i<value.length;i++)
				{
					if(value[i][0].article_m_cat_id == 0)
							var a=0
            	for(var k=0;k<ChecksameCate.length;k++)
            	{
              	if(ChecksameCate[k] == value[i][0].article_m_cat_id)
              	{
                	a=1
              	}
							}
							if(a==1)
							{
								ChecksameCate.push(value[i][0].article_m_cat_id)
							document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name_"+(id+1)).innerHTML  = `
                <span class="md-title" >${value[i][2].title}</span>
                <br>
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
              document.getElementById("Category_"+(id+1)).innerHTML  = `${value[i][1].name_th}`;
						id = id+1
						break;
							}
				} 
			}
			for(var j=0;j<3;j++)
			{
				for(var i=0;i<value.length;i++)
				{
					if(value[i][0].article_m_cat_id == 1)
							var a=0
            	for(var k=0;k<ChecksameCate.length;k++)
            	{
              	if(ChecksameCate[k] == value[i][0].article_m_cat_id)
              	{
                	a=1
              	}
							}
							if(a==1)
							{
								ChecksameCate.push(value[i][0].article_m_cat_id)
							document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name_"+(id+1)).innerHTML  = `
                <span class="md-title"  >${value[i][2].title}</span>
                <br>
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
              document.getElementById("Category_"+(id+1)).innerHTML  = `${value[i][1].name_th}`;
						id = id+1
						break;
							}
				} 
			}
			for(var j=0;j<3;j++)
			{
				for(var i=0;i<value.length;i++)
				{
					if(value[i][0].article_m_cat_id == 2)
							var a=0
            	for(var k=0;k<ChecksameCate.length;k++)
            	{
              	if(ChecksameCate[k] == value[i][0].article_m_cat_id)
              	{
                	a=1
              	}
							}
							if(a==1)
							{
								ChecksameCate.push(value[i][0].article_m_cat_id)
							document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;
              //ข้อมูลข่าว
              document.getElementById("name_"+(id+1)).innerHTML  = `
                <span class="md-title" >${value[i][2].title}</span>
                <br>
                <span class="md-subhead">${value[i][2].create_date}</span>
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
              document.getElementById("Category_"+(id+1)).innerHTML  = `${value[i][1].name_th}`;
						id = id+1
						break;
							}
				} 
			}
	 
		})
		for(var i=0;i<30;i++){
      this.urltext.push(document.getElementById("url_"+(i+1)).innerHTML)
		}
		for(var i=0;i<30;i++){
      this.pictext.push(document.getElementById("pic_"+(i+1)).innerHTML)
    }
    }
  }

</script>


<style scoped>
  @import "https://unpkg.com/video.js/dist/video-js.css";
  @import url('https://fonts.googleapis.com/css?family=Kanit');

  .card-title {

    margin-bottom: 0px;
  }

  audio {
    width: 100%;
    display: block;
  }

  .clearfix {
    overflow: auto;
  }

  .col-sm-12.col-md-12.col-lg-12 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .container {
    padding-top: 12%;
    padding-right: 15px;
    font-family: 'Kanit', sans-serif;
  }

  /*HYPER LINK*/

  a,
  a:focus,
  a:hover {
    text-decoration: none;
    color: inherit;
  }

  a:hover,
  .btn {
    outline: none !important;
  }

  /*ROUNDED CORNER*/

  * {
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
  }

  /*CATEGORIES BADGE*/

  .badge {
    font-weight: 600;
    font-size: 13px;
    color: white;
    background-color: #ffd740;
  }

  /*FEATURED*/

  .mg-2,
  .mg-4 {
    margin-left: -20px;
  }

  .linkfeat {
    background: rgba(76, 76, 76, 0);
    background: -moz-linear-gradient(top, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, rgba(19, 19, 19, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76, 76, 76, 0)), color-stop(49%, rgba(48, 48, 48, 0)), color-stop(100%, rgba(19, 19, 19, 1)));
    background: -webkit-linear-gradient(top, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, rgba(19, 19, 19, 1) 100%);
    background: -o-linear-gradient(top, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, rgba(19, 19, 19, 1) 100%);
    background: -ms-linear-gradient(top, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, rgba(19, 19, 19, 1) 100%);
    background: linear-gradient(to bottom, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, rgba(19, 19, 19, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0);
  }

  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .section-title {
    position: relative;
    margin-bottom: 10px;
  }

  .section-title:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2d2d2b;
    z-index: 1;
  }

  .section-title .title {
    position: relative;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
    line-height: 45px;
    font-size: 15px;
    color: #2d2d2b;
    background-color: #ffd740;
    padding: 0px 15px;
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
