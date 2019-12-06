import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)
export default new Router({
  mode:"history",
  base:'/dist/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },{
    	path:'/city',
    	name:'City',
    	component:City
    },{
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    }
  ],
  scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
  	return{x:0,y:0};	//自动滚动到顶部
  }
})
