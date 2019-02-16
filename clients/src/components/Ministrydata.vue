<template>
    <div class="Dept">
        <!-- ministry -->
        <md-toolbar md-elevation="0" style="width:auto; background-color:#fafafa; margin: auto;box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);">
        <!-- pic -->
            <md-toolbar id="logoimg" md-elevation="0" style=" background-color:#fafafa; ">  
                <div class="md-toolbar-row" style=" width:100%;" id="ministry_img">
                <!-- <img src="../assets/logo.png">-->
                </div>
            </md-toolbar>
        <!-- detail -->
            <md-toolbar id="detail" md-elevation="0" style="margin-left:1em; margin-right:1em; width:60%; background-color:#fafafa;" >  
                <!--  
                <span class="md-toolbar-row" style="margin-left: auto; margin-right: auto; width:200px; " id="ministry_nameth">
                <h3 class="md-title">กระทรวงป่า</h3> 
                </span>

                <span class="md-toolbar-row" style="margin-left: auto; margin-right: auto; " id="ministry_nameen">
                <h3 class="md-title">ForestMinistry</h3> 
                </span>

                <span class="md-toolbar-row" style="margin-left: auto; margin-right: auto; " id="ministry_abbr">
                <h3 class="md-title">กป.</h3> 
                </span>

                <span class="md-toolbar-row" style="margin-left: auto; margin-right: auto; " id="ministry_url">
                <h3 class="md-title">Website : <a href ="www.google.com">www.google.com</a></h3> 
                </span> 
                -->
            </md-toolbar>
        </md-toolbar>

        <br>
        <br>
        <!-- department -->
        <!--<div class="md-toolbar" style=" margin-left: auto ; margin-right: auto;">
               <h3 class="md-title" >หน่วยงานในสังกัด</h3>
        </div>-->
        <div class="section-title"><h2 class="title">หน่วยงานในสังกัด</h2></div>
        <md-toolbar id="subministry" md-elevation="0" style="width:auto;background-color:white; margin:auto;">
            <!-- department list -->
        </md-toolbar>
        <h1 id="test1" value="a"  @click="m" style="color:white;">{{ $route.params.id }}</h1>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios'
export default {
    name: 'Department',
    data(){
        return{
            id: 0,
            Data_url: null,
            search: ''
        }
    },
    methods:{
        m(){
        //console.log(route.params.id);
        },
        async Departmenturl(dataurl){
        const responseDB = await PostsService.Departmenturl({
                    Department_id : dataurl
                })
                console.log(responseDB.data.Department_url);
                return responseDB.data.Department_url
        },
        async PrintDepartment(Response){
            for(var i=0;i<Response.data.landing_info["tab-department"].length;i++){
                console.log(Response.data.landing_info["tab-department"][i].id);
                this.Data_url = await this.Departmenturl(Response.data.landing_info["tab-department"][i].id)
                if((Response.data.landing_info["tab-department"][i].name_th).match(this.search)) {
                console.log('testurl'+this.Data_url);
                
                document.getElementById("subministry").innerHTML += `
                    <md-toolbar id="logoimg" md-elevation="0" style="background-color:white; width:25%; height:25%; ">  
                        <a href="/#/Ministry/${this.$route.params.id}/${Response.data.landing_info["tab-department"][i].id}" target="_blank">
                            <img src="${Response.data.landing_info["tab-department"][i].pic}" style="margin-left:auto; margin-right:auto; display:block;" >
                            <h6 style="text-align:center; margin:10px; color:#2d2d2b;">${Response.data.landing_info["tab-department"][i].name_th}</h6>
                        </a>
                    </md-toolbar>
                `;
            }
        }    
        },
        async Ministryurl(dataurl){
            const responseDB = await PostsService.Ministryurl({
                    Ministry_id : dataurl
                })
                console.log(responseDB.data.Ministry_url);
                return responseDB.data.Ministry_url 
        },
        async PrintMinistry(Response,id,id2){
            
            this.Data_url = await this.Ministryurl(id2)

            document.getElementById("ministry_img").innerHTML = `
                <a href="${this.Data_url}" target="_blank">
                    <img src="${Response.data[id].pic}" style="width:280px;height:280px;  margin:10px" >
                </a>
            `;              
            document.getElementById("detail").innerHTML += `
                <span>
                    <br>
                    <h5 style="color:#2d2d2b; margin:10px;text-align:left; ">ชื่อกระทรวง : ${Response.data[id].name_th}</h5> 
                    <br>           
                    <h5 style="color:#2d2d2b; margin:10px;text-align:left; ">Name of Ministry : ${Response.data[id].name_en}</h5> 
                    <br>           
                    <h5 style="color:#2d2d2b; margin:10px;text-align:left; width:200px;">ชื่อย่อ : ${Response.data[id].abbr}</h5>  
                    <br>          
                    <h5 style="color:#2d2d2b; margin:10px;text-align:left;">เว็บไซต์ : <a href ="${this.Data_url}">${this.Data_url}</a></h5>
                    <br>
                </span>
            `;
        },
        async refresh() {
        document.getElementById("b").innerHTML = `
            `; 
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/feed/list_by_type?type=ministry&type_id=${this.$route.params.id}&dev=1999`).then(Response => {
            //console.log(document.getElementById("test2"));
           this.PrintDepartment(Response)
        });    
        }
    },
    async mounted(){
        console.log(this.$route.params.id);
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/ministry/list_ministry?dev=1999`).then(Response => {
            //console.log(document.getElementById("test2"));
            var id = this.$route.params.id;console.log(id);
            for(var i=0;i<Response.data.length;i++){
                if(id == Response.data[i].id) {
                    id=i;
                    break;
                }
            }
            console.log(id);
            this.PrintMinistry(Response,id,this.$route.params.id)
        });
        await axios.get(`https://gnewsapitesting.apps.go.th/gnews/feed/list_by_type?type=ministry&type_id=${this.$route.params.id}&dev=1999`).then(Response => {
            //console.log(document.getElementById("test2"));
           this.PrintDepartment(Response)
        });
        
    }

}   
</script>

<style scoped>
    .Dept{
        padding-top: 12%;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
    .md-toolbar{
        border-radius: 15px;
        width: 100%;
        overflow: auto;
    }
    #logoimg{
        border-radius: 15px;
        width: auto;
        margin-top: 10px;
        margin-left: 10px;
        overflow: auto;
    }
    #bgdetail{
        border-radius: 15px;
        width: auto;
        margin-top: 10px;
        margin-left: 10px;
        overflow: auto;
    }
    #b{
        margin-top: 10px;
    }   
    .section {
	padding-top:30px;
	padding-bottom:30px;
}

.section-title {
	position:relative;
	margin-bottom:10px;
}
.section-title:after {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 2px;
	background-color:#2d2d2b;
	z-index:1;
}
.section-title .title {
	position:relative;
	display: inline-block;
	margin-top: 0;
	margin-bottom: 0;
	text-transform: uppercase;
	line-height: 45px;
	font-size:15px;
	color:#2d2d2b;
	background-color:#ffd740;
	padding:0px 15px;
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


