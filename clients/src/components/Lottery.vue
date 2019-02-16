<template>
  <div class="lottery">
    <br>
    <h1 class="title">Lottery</h1>
    <br>
    <iframe src="http://www.glo.or.th/main.php?filename=glo_lotto" width="1000" style="height:1000px; display: block; margin-left:auto; margin-right:auto;"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Lottery'
  }

</script>

<style scoped>
  .lottery {
    padding-top: 12%;
    padding-bottom: 5%;
    width: 63%;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    text-align: left;
    color: #777777;
  }

</style>
