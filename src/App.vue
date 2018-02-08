<template>
  <div id="app">
    <Toolbar class='toolbar'/>
    <router-view/>
    <CopyRightBar class='copyrightbar'/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import CopyRightBar from './components/CopyRightBar'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Toolbar,
    CopyRightBar,
    Home
  }
}
</script>

<style>
#app {

}
.toolbar {
  background-color: #007F58;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.home {
  margin-top: 100px;
}
.copyrightbar {
  bottom: 0;
}
</style>
