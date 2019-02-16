<!-- ready for merge -->
<template>
    <div class="GovServ" >
        <span class="md-display-1">บริการภาครัฐ</span>
        <br>
        <br>
        <div v-for="i in list_Service.data.length">
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-20">
                    <md-content id="pic"><img :src="list_Service.data[i-1].pic" /></md-content>
                </div>
                <div class="md-layout-item md-size-70">
                    <md-content id="descript"><h5 color="#2d2d2b">
                        {{list_Service.data[i-1].service_orther}}
                        <br>
                        <a :href="list_Service.data[i-1].link_url" target="_blank">{{list_Service.data[i-1].link_url}}</a>
                    </h5>
                    </md-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios';
export default {
    name:'GovServ',
    data(){
        return{
            list_Service : []
        }
    },
    async mounted(){
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/service_orther/list_service_orther?dev=1999`).then(Response => {
      this.list_Service = Response.data
    });
    console.log(this.list_Service.data);
    console.log(this.list_Service.data.length);    
    }
}
</script>

<style lang="scss" scoped>
.GovServ{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 12%;
    padding-bottom: 5%;
}
img{
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
}
.md-content{
    display:inline-flex;
    align-items: center;
    justify-content: left;
    text-align: left;
    padding-left: 3em;
}
#pic{
    width: 200px;
    height: 150px;
}
#descript{
    width: 100%;
    height: 9.5em;
    background-color: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
}
a {
    font-size: 20px;
}
</style>


