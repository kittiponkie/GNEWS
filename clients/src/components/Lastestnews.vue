<template>
<div class="carousel-wrapper">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class=""></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
             <md-card-media-cover md-text-scrim>
            <img class="" src="" alt="First slide" style="display:none;">
            <img :src="pictext[0]" alt="First slide">
             </md-card-media-cover>
            <div class="container"> 
              <div class="carousel-caption text-left">
                <h1 class="ellipsis" id="names_1">Example headline.</h1>

                
              </div>
            </div> 
          </div>
          <div class="carousel-item">
             <md-card-media-cover md-text-scrim>            
            <img class="" src="" alt="Second slide" style="display:none;">
            <img :src="pictext[1]" alt="Second slide">
             </md-card-media-cover>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="ellipsis" id="names_2">example headline.</h1>

                
              </div>
            </div>
          </div>
          <div class="carousel-item">
             <md-card-media-cover md-text-scrim>
            
            <img class="" src="" alt="Third slide" style="display:none;">
            <img :src="pictext[2]" alt="Third slide">
             </md-card-media-cover>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="ellipsis" id="names_3">Example headline.</h1>

                
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    <div v-for="i in 3">
        <div :id="'names_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'url_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'pic_'+i" style="display: none;"></div>
    </div>
	  <div v-for="i in 3">
        <div :id="'article_'+i" style="display: none;"></div>
    </div>
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
				pictext: []
      }
    },
    async mounted() {
			
			await this.$getItem('News').then(async function(value) {
			var id= 0
      var Checksame = []
			for(var i=0;i<3;i++)
			{
        document.getElementById("pic_"+(id+1)).innerHTML  = `${value[i][2].pic}`;        
              //ข้อมูลข่าว
              document.getElementById("names_"+(id+1)).innerHTML  = `
                <span class="md-subhead" >${value[i][2].title}</span>
                <br>
                <span class="md-title">${value[i][2].create_date}</span>
                
                
              `;
              document.getElementById("url_"+(id+1)).innerHTML  = `
                http://localhost:8080/#/News/${value[i][2].article_id}
              `;
              document.getElementById("article_"+(id+1)).innerHTML  = `
                ${value[i][2].article_id}
              `;
            id = id+1 
			} 
		})
		for(var i=0;i<3;i++){
      this.urltext.push(document.getElementById("url_"+(i+1)).innerHTML)
		}
		for(var i=0;i<3;i++){
      this.pictext.push(document.getElementById("pic_"+(i+1)).innerHTML)
      console.log(this.pictext);
    }
    for(var i=0;i<3;i++){
      console.log(document.getElementById("names_"+(i+1)).innerHTML);
    }
    }
  }

</script>
<style scoped>

.ellipsis {
  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}
.carousel-wrapper{
  width: 100%;
  
  position: relative;
}

.carousel-item img {
    width: 100%;
height: 25vw;
  position: relative;

}

.carousel-caption {
    position: absolute;
    right: 15%;
    
    left: 15%;
    
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: -15px;
    
    color: #fff;
    
}

.carousel-indicators li {
    border-radius: 10px;
    margin: 1px 3px;
    height: 10px;
    max-width: 10px;
    border: 1px solid #FFF;
    background-color: transparent;
}
.carousel-indicators .active {
    background-color: #fff;
    max-width: 12px;
    margin: 0 3px;
    height: 12px;
}
.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 5px;
    left: 0;
    z-index: 9;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
}
h1{
  font-size: 2.6vw;
  font-weight: bold;
  margin-bottom: 0.2vw;
}
p{
  font-size: 1.2vw;
  padding-bottom: 2vw;
  margin-top: 0.25vw;
  margin-bottom: 0.1vw;
}
@media (max-width:767px) {
  .carousel-wrapper{
  width: 100%;
  height: 40vw;
  position: relative;
}

.carousel-item img {
    width: 100%;
height: 50vw;
  position: relative;

}
  .carousel-indicators li {
display: none;
}
.carousel-indicators .active {
display: none;
}
.carousel-caption {
    position: absolute;
    right: 15%;
    
    left: 15%;
    
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: -15px;
    
    color: #fff;
    
}
h1{
  font-size: 4.5vw;
  margin-bottom: 0px;
  font-weight: normal;
}
p{
  font-size: 2.5vw;
  margin-top: 0px;
  margin-bottom: 0px;
}

}

</style>
