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
            <md-button :href="pageMinistry" class="md-primary" id="textBut1">{{Ministry_Name}}</md-button>
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
          <router-link to="/ui-elements/typography" id="comp2" style="color:#2d2d2b;">{{Main_Category}} > </router-link>
          <router-link to="/ui-elements/typography" id="comp2" style="color:#FF6F00;"> {{Sub_Category}}</router-link>

          <!--แถวที่3-->
          <div class="md-toolbar-row">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-button id="textBut2">
                  <md-icon style="color:white;">add_circle</md-icon> ติดตามหมวดหมู่นี้</md-button>
              </div>
              <div class="md-layout-item">
                <md-button id="textBut3">
                  <md-icon style="color:white;">block</md-icon> บล็อคหมวดหมู่นี้</md-button>
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
      </div>
    </div>
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
    <!-- end -->
  </div>
</template>

<script>
  let recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js')
  document.head.appendChild(recaptchaScript)
  let recaptchaScript2 = document.createElement('script')
  recaptchaScript2.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js')
  document.head.appendChild(recaptchaScript2)
  let recaptchaScript3 = document.createElement('script')
  recaptchaScript3.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js')
  document.head.appendChild(recaptchaScript3)
  export default {
    name: 'News',
    data: () => ({
      Article_ID: '49',
      Article_Name: 'Article_name',
      Ministry_Name: '',
      img_ministry: '',
      datepost: '11 ก.ค. 2561',
      view: '1000',
      Main_Category: '',
      Sub_Category: '',
      Description: ''
    }),
    methods: {
      pdf() {
        var options = {
          //'width': 700
        }
        var pdf = new jsPDF('p', 'pt', 'a4');
        pdf.addHTML($("#pdf"), 10, 220, options, function () {
          pdf.save('News_.pdf');
        });
      }
    },
    async mounted() {
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
            document.getElementById('sub_category').innerHTML = value[i][1].name_th;
            document.getElementById('description').innerHTML = value[i][2].desc;
            break;
          }
        }
      });
      this.Article_Name = document.getElementById('article_name').innerHTML;
      this.Ministry_Name = document.getElementById('ministry_name').innerHTML;
      this.img_ministry = document.getElementById('pic_ministry').innerHTML;
      this.datepost = document.getElementById('datePost').innerHTML;
      this.Main_Category = document.getElementById('main_category').innerHTML;
      this.Sub_Category = document.getElementById('sub_category').innerHTML;
      this.Description = document.getElementById('description').innerHTML;      
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
