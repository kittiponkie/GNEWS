<template>
<div class="suggest">
    <br>
    <span class="md-display-1">ข้อเสนอแนะ</span>
    <br>
    <br>
    <md-field >
      <label>ชื่อ*</label>
      <md-input v-model="Name" ></md-input>
      <span class="md-error">กรุณาเติมคำในช่องว่าง</span>
    </md-field>
    <br>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
    <md-field>
      <label>เบอร์โทรศัพท์</label>
      <md-input v-model="Phone" maxlength="10"></md-input>
    </md-field>
    </div>
    <div class="md-layout-item">
    <md-field >
      <label>อีเมล*</label>
      <md-input v-model="Email" ></md-input>
    </md-field>
    </div>
  </div>
    <br>
    <md-field>
          <label >หัวข้อ</label>
          <md-select v-model="topic" name="topic" id="topic" md-dense>
            <md-option value="report">แจ้งปัญหาการใช้งาน</md-option>
            <md-option value="complain">ร้องเรียน</md-option>
            <md-option value="other">ประเด็นอื่นๆ</md-option>
          </md-select>
    </md-field>
    <br>
    <md-field>
      <label>รายละเอียด*</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    <br>

    <!--pop up-->
    <md-dialog-alert
      :md-active.sync="first"
      md-content="กรุณากรอกข้อมูลที่จำเป็นให้ครบ"
      md-confirm-text="ตกลง" />

    <md-dialog-alert
      :md-active.sync="Success"
      md-content="กรุณากรอกข้อมูลที่จำเป็นให้ครบ"
      md-confirm-text="ตกลง" />

    <md-dialog-alert
      :md-active.sync="Emailcheck"
      md-content="กรุณาใส่ Email ที่ถูกต้อง"
      md-confirm-text="ตกลง" />  

    <div class="md-layout md-gutter md-alignment-center">
        <md-button class="md-raised md-primary" @click="SendSuggestion">ส่ง</md-button>
    </div>
</div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
    name: 'Suggestion',
    data: () => ({
      Name: "",
      Email: "",
      textarea: "",
      hasMessages: false,
      first: false,
      Emailcheck: false,
      topic: "",
      Suggestion: '1',
      Phone: "",
      Success: false
    }),
    methods:{
      async SendSuggestion(){
        if(this.Name=="" || this.Email=="" || this.textarea=="")
        {
          this.first=true
        }
        else
        {
          if (!this.validEmail(this.Email)) {
            this.Emailcheck=true  
          }
          else{
              this.Success = true
              var Name = this.Name
              var Email = this.Email
              var textarea = this.textarea
              this.Name = null
              this.Email = null
              this.textarea = null
              this.Phone =null
              this.topic =null
            await PostsService.SendSuggestion(
            {
              Suggestion : this.Suggestion,
              Name : Name,
              Email : Email,
              textarea : textarea
            })
          }
        }
      },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    }
  }
</script>


<style scoped>
  .suggest{
	padding-top: 12%;
	margin-left: auto;
	margin-right:auto;
  padding-bottom: 100px;
}
@media   screen and (max-width:320px) {
	.suggest{
		width:90%;
	}
  .md-display-1{
    font-size: 20px;
  }

	
}
@media   screen and (max-width:400px) {
	.suggest{
		width:90%;
	}
  .md-display-1 {
    font-size: 22px;
  }
	
}
@media   screen and (max-width:480px) {
	.suggest{
		width:90%;
	}
  .md-display-1{
    font-size: 24px;
  }

	
}
@media   screen and (max-width:600px) {
	.suggest{
		width:90%;
	}
  .md-display-1{
    font-size: 24px;
  }


}
@media   screen and (max-width:768px) {
	.suggest{
		width:90%;
	}
  .md-display-1 {
    font-size: 26px;
  }
	
}
@media   screen and (max-width:1024px) {
	.suggest{
		width:90%;
	}
  .md-display-1{
    font-size: 26px;
  }
	
	
}
@media   screen and (min-width:1025px) {
	.suggest{
		width:70%;
	}
  .md-display-1{
    font-size: 28px;
  }
}
</style>
