<template>
    <div class="ministry">
        <span class="md-display-1" id="name_article">หน่วยงานทางภาครัฐ</span>
        <br>
        <br>
        <br>
        <md-toolbar id="bg" style="background-color:#FAFAFA;">
        </md-toolbar>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Ministry',
    data(){
        return{
            id: []
        }
    },
    methods:{
        
    },
    async mounted(){
        //print ministry all
        axios.get(`https://gnewsapitesting.apps.go.th/gnews/ministry/list_ministry?dev=1999`).then(Response => {
            //console.log(document.getElementById("bg"));
            for(var i=0;i<Response.data.length;i++){
                document.getElementById("bg").innerHTML += `
                    <md-toolbar id="a" style="background-color:#FAFAFA; width:25%;  margin-top:1em;">  
                        <a href="/#/Ministry/${Response.data[i].id}">
                            <img style="margin-left:auto; margin-right:auto; display:block;" src="${Response.data[i].pic}"/>
                            <h6 style="text-align:center; margin:10px; color:#2d2d2b;">${Response.data[i].name_th}</h6>
                        </a>
                    </md-toolbar>
                `;
                this.id[i]= Response.data[i].url_json + "&dev=1999";
            }     
        });
    }
    
}
</script>

<style scoped>
    .ministry{
        width: 70%;
        padding-top: 12%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 5%;
    }
    .md-toolbar{
        border-radius: 15px;
        width: 100%;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    }
  
</style>


