<template>
 <div class='home'>
   <SalesPitch/>
   <Login/>
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

</style>
