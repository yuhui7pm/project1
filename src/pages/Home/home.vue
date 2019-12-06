<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<weekend-test :weekendList="weekendList"></weekend-test>
	</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper' 
import HomeIcons from './component/icons' 
import HomeRecommend from './component/Recommend' 
import weekend from './component/Weekend' 

import axios from 'axios' 
import {mapState} from 'vuex'

export default {
  name: 'home',
  components:{
  	HomeHeader:HomeHeader,
	HomeSwiper:HomeSwiper,
	HomeIcons:HomeIcons,
	HomeRecommend:HomeRecommend,
	WeekendTest:weekend
  },
  data(){
  	return{
  		iconList:[],
  		recommendList:[],
  		weekendList:[],
  		swiperList:[],
  		lastCity:""
  	}
  },
  computed:{
  	...mapState(['city'])
  },
  methods:{
  	getHomeInfo(){
  		axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc) //then()前的方法执行完后再执行then()内部的程序,前面是promise对象
  	},
  	getHomeInfoSucc(res){
		res=res.data
		if(res.data&&res.ret){
			const data=res.data
			this.iconList=data.iconList
			this.recommendList=data.recommendList
			this.weekendList=data.weekendList
			this.swiperList=data.swiperList
		}
  	}
  },
  mounted(){
  	this.lastCity=this.city;
  	this.getHomeInfo()
  },
  activated(){
  	if(this.lastCity!==this.city){
  		this.lastCity=this.city;
  		this.getHomeInfo() //city若和上一次不同，再一次发送请求
  	}
  }
}
</script>