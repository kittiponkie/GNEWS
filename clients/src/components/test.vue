<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div align="center">
      <h1>{{a}}</h1>
    </div>




  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
  export default {
    name: "AppHeader",
    data: () => ({
      a: ''
    }),
    methods: {},
    async mounted() {
      this.a = PostsService.Listarticle({})
      //const responsetop = await PostsService.Listarticle({})
      //console.log(responsetop.data);
      //this.a = responsetop.data
    }
  }

</script>

<style scoped>


</style>
