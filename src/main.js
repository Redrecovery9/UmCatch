import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import { index } from './router/index'

Vue.use(VueRouter)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.config.productionTip = false

const router = new VueRouter({
  index,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
