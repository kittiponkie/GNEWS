<template>
  <div>
    <div class="Radio">
      <md-toolbar class="md-primary" md-elevation="0">
        <div class="md-toolbar-row" style="overflow: hidden;">
          <h3 class="md-title">Live</h3>
        </div>
        <div class="md-toolbar-row" style="overflow: hidden;">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-button to="/live">Streaming Live</md-button>
            </div>
            <div class="md-layout-item">
              <md-button class="md-raised" disabled style="background-color:#faad29;">Streaming Radio</md-button>
            </div>
            <div class="md-layout-item">
              <md-button to="/vod">บันทึกย้อนหลัง</md-button>
            </div>
          </div>
        </div>
      </md-toolbar>

      <md-toolbar id="bg" md-elevation="0" style=" background-color:#FAFAFA;margin-left: auto; margin-right: auto;  padding:10px; ">
        <md-toolbar id="logobg" md-elevation="0" style=" background-color:#FAFAFA;">
          <img :src="pic" :alt="'picture : '+title">
        </md-toolbar>
        <md-toolbar id="descbg" md-elevation="0" style=" background-color:#FAFAFA;">
          <div class="md-toolbar-row">
            <h3 class="md-title" style="color:#2d2d2b;">{{title}}</h3>
          </div>
          <div class="md-toolbar-row">
            <h3 class="md-title" style="color:#2d2d2b;">{{desc}}</h3>
          </div>
          <div class="md-toolbar-row" id="radio">
            <audio controls="controls" src="http://118.175.16.69:8040/;&type=mp3"></audio>
          </div>
          <div class="md-toolbar-row">
            <br>
          </div>
        </md-toolbar>
      </md-toolbar>

      <div class="section-title">
        <h2 class="title">สถานีอื่นๆ</h2>
      </div>
      <md-toolbar id="r" md-elevation="0" style=" background-color:white;margin-left: auto; margin-right: auto;">
        <div v-for="i in length_list">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
              <md-button style="width:auto; color:#2d2d2b; " @click="change(i-1)">{{i}} . {{list_radio[i-1].title}}</md-button>
            </div>
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
            </div>
            <div class="md-layout-item">
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        url: "",
        pic: "",
        title: "",
        desc: "",
        length_list: 0,
        list_radio: []
      }
    },
    methods: {
      change(i) {
        var temp = this.list_radio[i].url.split('/');
        this.url = 'http://' + temp[0] + '/;&type=mp3';
        document.getElementById('radio').innerHTML =
          `
                <audio controls="controls" src="${this.url}"></audio>
            `
        this.pic = this.list_radio[i].pic;
        this.title = this.list_radio[i].title;
        this.desc = this.list_radio[i].desc;
      }
    },
    async mounted() {
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/live/all?dev=1999`).then(Response => {
        for (var i = 0; i < Response.data.live.data[0].length; i++) {
          if (Response.data.live.data[0][i].type_live == 1) {
            this.length_list++;
            this.list_radio.push(Response.data.live.data[0][i]);
          }
        }
        if (this.list_radio[0].url) {
          var temp = this.list_radio[0].url.split('/');
          this.url = 'http://' + temp[0] + '/;&type=mp3';
          this.pic = this.list_radio[0].pic;
          this.title = this.list_radio[0].title;
          this.desc = this.list_radio[0].desc;
        }
      });

    }
  }

</script>

<style scoped>
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

  #bg {
    border-radius: 15px;
    width: 100%;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
  }

  #descbg {
    width: 70%;
    margin: auto;
    overflow: auto;
  }

  #logobg {
    border-radius: 15px;
    width: 30%;
    margin: auto;
    overflow: auto;
  }

  #b {
    border-radius: 15px;
    width: auto;
    margin-top: 10px;
    margin-left: auto;
    overflow: auto;
  }

  @media (min-width:1025px) {
    .Radio {
      width: 70%;
      padding-top: 12%;
      margin-left: auto;
      margin-right: auto;
    }
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
