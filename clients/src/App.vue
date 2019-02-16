<template>
  <div id="app" >   
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components:{AppHeader}
}
</script>

<style>
#app {
  
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Kanit');
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: #FFD740, // The primary color of your brand
  accent: #777777 // The secondary color of your brand
));

@import "~vue-material/dist/theme/all";
</style>

