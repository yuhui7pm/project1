import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store"	

import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'babel-polyfill'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
