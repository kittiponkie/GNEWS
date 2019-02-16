<template>
  <div>
    <md-dialog :md-active.sync="Passwordreset" style="width : 20%; height : 30%" >
    <md-button style="margin-left : auto; margin-bottom : auto"  @click="Passwordreset = false"><md-icon>close</md-icon></md-button>
    <md-field style=" margin : auto">
        <md-icon>lock</md-icon>
        <label>New Password</label>
        <md-input type="password" v-model="NewPassword"></md-input>
    </md-field>
    <md-field style=" margin : auto">
        <md-icon>lock</md-icon>
        <label>New Passwordagain</label>
        <md-input type="password" v-model="NewPasswordagain"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" style="margin : auto"  @click="CheckToken">Send</md-button>
    <label>{{CheckPassword}}</label>
  </md-dialog>
  </div>
</template>
<script>

import PostsService from '@/services/PostsService'
export default {
  name: 'Token',
  data () {
    return {
        CheckID : '4',
        Passwordreset: false,
        NewPassword : null,
        NewPasswordagain : null,
        CheckPassword : null,
        Check : '4'
    }
  },
  mounted () {
    this.Passwordforget()
  },
  methods: {
    async Passwordforget () {
      this.Passwordreset = true
      const response = await PostsService.Passwordforget({
          Token: this.$route.params.Token,
          CheckID: this.CheckID
      })
      console.log(response.data.User_email);
      console.log('gustest');
    },
    async CheckToken() {
        this.CheckPassword = null
        console.log('gustest');
        if(this.NewPassword.length < 8)
        {
            this.CheckPassword = 'Password must be at least 8 capital'
        }
        else
        {
            if(this.NewPassword == this.NewPasswordagain)
            {
                const response = await PostsService.CheckToken({
                    Token: this.$route.params.Token,
                    Check: this.Check,
                    Password: this.NewPassword
                })
                this.NewPassword = null;
                this.NewPasswordagain = null;
                this.CheckPassword = "Complete change password"
            }
            else
            {
               this.CheckPassword = '2 Password is not same!' 
            }
        }
    }
  }
}
</script>
<style lang="scss" scoped>

#logo {
  float: center;
  transform: translate(80px, -150px);
}
img {
  transform: translate(-230px, -145px);
}
#listother {
    width: 255px;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    float:right;
  }
#listCategory {
    width: 350px;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    display: inline-block;
    transform: translateX(10px);
}
.control{
  display: none;
}

</style>