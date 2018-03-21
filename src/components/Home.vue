<template>
 <div class='home'>
  <SalesPitch class='salesPitch'/>
  <!-- <Login/> -->
 </div>
</template>

<script>
import Login from './home/Login'
import SalesPitch from './home/SalesPitch'

export default {
  name: 'Home',
  components: {
    Login,
    SalesPitch
  },
  data () {
    return {

    }
  }
}
</script>

<style>
 html {
   background: url(../assets/mic-background.jpg) no-repeat center center fixed;
   background-size: cover;
 }
 .salesPitch {
   padding-top: 100px;
 }
</style>
