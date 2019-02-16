<template>
    <div class="MyNews">
        <md-toolbar class="md-primary" md-elevation="0">
            <div class="md-toolbar-row">
                <h3 class="md-title">ข่าวของฉัน</h3>
            </div>

            <div class="md-toolbar-row">
                <div class="md-layout md-gutter">
                    <div class="md-layout-item">
                        <md-button id="button1" class="md-raised" disabled  style="background-color:#faad29;">การติดตาม</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button id="button1" to="/Block">การบล็อค</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button id="button1" to="/Later">เข้าชมภายหลัง</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button id="button1" to="/History">ประวัติการเข้าชม</md-button>
                    </div>
                </div>
            </div>
        </md-toolbar>
        <br>
        <div v-for="i in temp">
        <div class="md-layout md-gutter">
            <div class="md-layout-item "> 
                <md-button class="md-raised md-primary" id="button2">{{i}}</md-button>
            </div>
            <div class="md-layout-item " >
                <md-button class="md-raised" id="button3">{{list.Catagory_sub_id[i-1]}}</md-button>
            </div>
            <div class="md-layout-item" >
                <md-button class="md-raised md-primary" id="button4" @click="Remove(list.Catagory_sub_id[i-1],i-1)" :id="'Follow_'+(i-1)" >{{Followtext[i-1]}}</md-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios';
export default {
  name: 'MyNews',
  data(){
      return{
          temp: null, //ใช้ในการเพิ่มจำนวน content card
          todos: [],
          CheckID : '2',
          list: [],
          Check: null,
          FollowandUnFollow: null,
          Followtext: []
      }
      },
    methods : {
        async Remove(data,temp)
        {
            console.log(temp);
            if(this.Followtext[temp] == 'เลิกติดตาม')
      		{
            console.log(temp);
            console.log('remove '+data);
            this.Check = '1'
            this.FollowandUnFollow = '2'
            
            this.Followtext[temp] = 'ติดตาม'
            document.getElementById("Follow_"+temp).innerHTML = `            
			    ${this.Followtext[temp]}				
			`;
            console.log(this.Followtext[temp]);
            }
            else 
            {
            console.log('add '+data);
            this.Check = '1'
            this.FollowandUnFollow = '1'
            this.Followtext[temp] = 'เลิกติดตาม'
            document.getElementById("Follow_"+temp).innerHTML = `            
			    ${this.Followtext[temp]}				
			`;
            console.log(this.Followtext[temp]);
            }
            await PostsService.FollowFollow({
				Follow_id : this.todos[0],
				Catagory_sub_id : data,
				FollowandUnFollow : this.FollowandUnFollow,
				Check : this.Check
            })
            console.log(this.Followtext);
        },
        async First()
        {
           const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
      this.todos = todos
      console.log("Gusjung"+this.todos);
      }
      const response = await PostsService.CheckFollow({
        Follow_id: this.todos[0],
        CheckID : this.CheckID
      })
      this.temp = response.data.Catagory_sub_id.length
      console.log(this.temp);
      this.list = response.data
      for(var i=0;i<this.temp;i++)
      {
          this.Followtext.push("เลิกติดตาม")
      }
      console.log(this.Followtext);
        }
    },
  async mounted(){
      this.First()
  }
  }
</script>

<style scoped>
    .MyNews{
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 12%;
    }
    .md-toolbar{
        border-radius: 15px;
        width: 100%;
    }
    #button1{
        border: 0.5px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        width: 16em;
    } 
    #button2{
       float: left;
    }
    #button3{
        float: left;
        width: 55em;
    }  
    #button4{
        float: right;
    }
   .md-layout{
        text-align: center;
    }

 
</style>
