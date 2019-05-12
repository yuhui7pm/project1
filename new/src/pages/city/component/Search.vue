<template>
	<div>
		<div class="search">
			<input class="search-input" type="text" 
				placeholder="输入城市名或者拼音" 
				v-model="keyword">
			</input>
		</div>
		<div  class="search-content" v-show="keyword" ref="locationlist">
			<ul>
				<li class="search-item border-bottom"
					v-for="item in list" :key="item.id" 
					@click="handleCityClick(item.name)"
				>
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="noneData">未搜索到地点</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from "better-scroll"
import {mapMutations} from "vuex"

export default{
	name:'CitySearch',
	props:{
		cities:Object
	},
	data(){
		return{
			list:[],
			keyword:"",
			timer:null
		}
	},
	methods:{
		handleCityClick(city){
					this.changeCity(city)
					//返回首页
					this.$router.push('/')
					this.keyword=''
		},
		...mapMutations(["changeCity"])
	},
	watch:{
		keyword(){
			//节流函数
			if(this.timer){
				clearTimeout(this.timer);
			}
			if(!this.keyword){
				this.list=[];
				return;
			}
			this.timer=setTimeout(()=>{
				const result = []
				for(let i in this.cities){
					this.cities[i].forEach((value)=>{
						if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
							result.push(value)
						}
					})
				}
				this.list=result
			},100)
		}
	},
	computed:{
		noneData(){
			return !this.list.length
		}
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.locationlist,{click:true})//右端垂直滚动条
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
    	box-sizing: border-box
	    width: 100%
	    height: .62rem
	    padding: 0 .1rem
	    line-height: .62rem
	    text-align: center
	    border-radius: .06rem
	    color: #666
.search-content
	z-index:20
	overflow:hidden
	position:absolute
	top:78px
	left:0
	right:0
	bottom:0
	background:grey
	.search-item
		text-align:left
		height:0.62rem
		line-height:0.5rem
		padding:0.15rem 0 0 0.09rem
		background:white
		color:#666
</style>