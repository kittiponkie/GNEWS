<template>
    <div class="block">
        <md-toolbar class="md-primary" md-elevation="0">
            <div class="md-toolbar-row">
                <h3 class="md-title">ข่าวของฉัน</h3>
            </div>
            <!-- test add for merge -->
            <div class="md-toolbar-row">
                <div class="md-layout md-gutter" >
                    <div class="md-layout-item">
                        <md-button to="/MyNews" id="button1">การติดตาม</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button class="md-raised" disabled id="button1" style="background-color:#faad29;">การบล็อค</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button to="/Later" id="button1">เข้าชมภายหลัง</md-button>
                    </div>
                    <div class="md-layout-item">
                        <md-button to="/History" id="button1">ประวัติการเข้าชม</md-button>
                    </div>
                </div>
            </div>
           
        </md-toolbar>
        <br>
        <div v-for="i in temp">
        <div class="md-layout md-gutter">
            <div class="md-layout-item"> 
                <md-button class="md-raised md-primary" id="button2">{{i}}</md-button>
            </div>
            <div class="md-layout-item" >
                <md-button class="md-raised" id="button3">{{list.Catagory_sub_id[i-1]}}</md-button>
            </div>
            <div class="md-layout-item" >
                <md-button class="md-raised md-primary" @click="Remove(list.Catagory_sub_id[i-1],i-1)" :id="'Block_'+(i-1)" >{{Blocktext[i-1]}}</md-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios';
export default {
  name: 'Block',
  data(){
      return{
          temp: null, //ใช้ในการเพิ่มจำนวน content card
          todos: [],
          CheckID : '2',
          list: [],
          Check: null,
          FollowandUnFollow: null,
          Blocktext: []
      }
      },
    methods : {
        async Remove(data,temp)
        {
            console.log(temp);
            if(this.Blocktext[temp] == 'เลิกบล็อค')
      		{
            console.log(temp);
            console.log('remove '+data);
            this.Check = '1'
            this.FollowandUnFollow = '2'
            this.Blocktext[temp] = 'บล็อค'
            document.getElementById("Block_"+temp).innerHTML = `            
			    ${this.Blocktext[temp]}				
			`;
            console.log(this.Blocktext[temp]);
            }
            else 
            {
            console.log('add '+data);
            this.Check = '1'
            this.FollowandUnFollow = '1'
            this.Blocktext[temp] = 'เลิกบล็อค'
            document.getElementById("Block_"+temp).innerHTML = `            
			    ${this.Blocktext[temp]}				
			`;
            console.log(this.Blocktext[temp]);
            }
            await PostsService.FollowBlock({
				Block_id : this.todos[0],
				Catagory_sub_id : data,
				FollowandUnFollow : this.FollowandUnFollow,
				Check : this.Check
            })
            console.log(this.Blocktext);
        },
        async First()
        {
           const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
      this.todos = todos
      console.log("Gusjung"+this.todos);
      }
      const response = await PostsService.CheckBlock({
        Block_id: this.todos[0],
        CheckID : this.CheckID
      })
      this.temp = response.data.Catagory_sub_id.length
      console.log(this.temp);
      this.list = response.data
      for(var i=0;i<this.temp;i++)
      {
          this.Blocktext.push("เลิกบล็อค")
      }
      console.log(this.Blocktext);
        }
    },
  async mounted(){
      this.First()
  }
}
</script>

<style scoped>
    .block{
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
