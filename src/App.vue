<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {

}
.toolbar {
  background-color: #068F8A;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.home {
  bottom: 0;
}
.copyrightbar {
  bottom: 0;
}
</style>
