
<template>
  <div class="posts">
    <h1>Your Email has be confirm</h1>
  </div>
</template>
<script>

import PostsService from '@/services/PostsService'
export default {
  name: 'Token',
  data () {
    return {
        Check : '2'
    }
  },
  mounted () {
    this.CheckToken()
  },
  methods: {
    async CheckToken () {
      console.log(this.$route.params.Token);
      const response = await PostsService.CheckToken({
          Token: this.$route.params.Token,
          Check: this.Check
      })
    }
  }
}
</script>
<style type="text/css" scoped>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>