<template>
  <div>
    <div class="Live">
      <md-toolbar class="md-primary" md-elevation="0">
        <div class="md-toolbar-row">
          <h3 class="md-title">Live</h3>
        </div>
        <div class="md-toolbar-row">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-button class="md-raised" disabled style="background-color:#faad29;">Streaming Live</md-button>
            </div>
            <div class="md-layout-item">
              <md-button to="/radio">Streaming Radio</md-button>
            </div>
            <div class="md-layout-item">
              <md-button to="/vod">บันทึกย้อนหลัง</md-button>
            </div>
          </div>
        </div>
      </md-toolbar>

      <!-- video list -->
      <div>
        <md-toolbar class="md-accent" md-elevation="0" style=" background-color:#2d2d2b;margin-left: auto; margin-right: auto;  padding:10px; ">
          <div class="clearfix" id="video">
            <video id="my_video_1" class="video-js vjs-default-skin clearfix" controls preload="auto" data-setup='{}' style="width:800px; height:500px;">
              <source :src="url" type="application/x-mpegURL">
            </video>
          </div>
          <div class="clearfix">
            <md-list class="md-accent" md-elevation="0" style="background-color:#EEEEEE; width:200px; height:50px; margin-top:0px; margin-left: 10px; margin-right:10px; margin-bottom:0px; padding:0px; border-top-left-radius:5px;border-top-right-radius:5px;">
              <h3 style="text-align:center; margin:1vw; font-size:16px;">เลือกช่อง/รายการ</h3>
            </md-list>
            <md-list style="width:200px ; height:450px; margin-left:10px; align:right; padding:0px;overflow:auto;">
              <div v-for="i in length_list">
                <md-list-item style="margin:0px;" @click="change(i-1)">{{list_live[i-1].title}}</md-list-item>
              </div>
            </md-list>
          </div>
        </md-toolbar>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        url: "",
        length_list: 0,
        list_live: []
      }
    },
    methods: {
      change(i) {
        this.url = this.list_live[i].url;
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://unpkg.com/video.js/dist/video.js')
        document.head.appendChild(recaptchaScript)
        //let recaptchaScript2 = document.createElement('script')
        //recaptchaScript2.setAttribute('src', 'https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js')
        // document.head.appendChild(recaptchaScript2)
        document.getElementById('video').innerHTML =
          `
                <video id="my_video_1" class="video-js vjs-default-skin clearfix" controls preload="auto"  data-setup='{}' style="width:800px; height:500px;">
                    <source src="${this.list_live[i].url}" type="application/x-mpegURL">                    
                </video>
            `

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
        for (var i = 0; i < Response.data.live.data[0].length; i++) {
          if (Response.data.live.data[0][i].type_live == 2) {
            this.length_list++;
            this.list_live.push(Response.data.live.data[0][i]);
          }
        }
        if (this.list_live[0].url) {
          this.url = this.list_live[0].url;
        }
      });

    }
  }

</script>

<style scoped>
  @import "https://unpkg.com/video.js/dist/video-js.css";

  .md-toolbar {
    border-radius: 15px;
    width: 100%;
    margin-bottom: 2%;
  }

  .md-button {
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    width: 22em;
  }

  .clearfix {
    overflow: auto;
  }

  @media (min-width:1025px) {
    .Live {
      width: 70%;
      padding-top: 12%;
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
