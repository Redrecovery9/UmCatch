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

export default {
  name: 'app',
  components: {
    Toolbar,
    CopyRightBar
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
.copyrightbar {
  bottom: 0;
}
</style>
