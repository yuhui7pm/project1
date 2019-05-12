<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button">{{this.currentCity}}</div>
				</div>
			</div>
			
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div 
						class="button" v-for="item in hotCities" 
						:key="item.id" @click="handleCityClick(item.name)"
					>
						{{item.name}}
					</div>
				</div>
			</div>
			
			<div class="area border-topbottom" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" 
						@click="handleCityClick(innerItem.name)">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
	export default{
		name:'CityList',
		props:{
			hotCities:Array,
			cities:Object,
			letter:String
		},
		methods:{
			handleCityClick(city){
//				alert(city)
//				this.$store.commit('changeCity',city)
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(["changeCity"])
		},
		watch:{
			letter(){
				if(this.letter){
					const element =this.$refs[this.letter][0]
//					console.log("1:"+this.$refs[this.letter][0])
//					console.log("2:"+this.$refs[this.letter])
					this.scroll.scrollToElement(element);
				}
			}
		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.wrapper, {click: true})
		},
		computed:{
			...mapState({'currentCity':'city'})
		}
	}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
	.list
		position:absolute
		top:1.58rem
		right:0
		left:0
		bottom:0
		overflow:hidden
		text-align:left
		
		.border-bottom
			&:before
				border-color:#ccc
		.border-topbottom
			&:before
				border-color:#ccc
			&:after
				border-color:#ccc
		.title
			line-height:.4rem
			background:#eee
			padding-left:.2rem
			text-align:left
			color:#666
			font-size:.26rem
		.button-list
			overflow:hidden
			padding:0.1rem 0.4rem 0.1rem 0.15rem
			.button
				margin:0.08rem
				padding:0.05rem 0
				text-align:center
				border:0.02rem solid #ccc
				border-radius:0.06rem
				float:left
				width:30%
		.item-list
			.item
				line-height:0.76rem
				padding-left:0.2rem
</style>