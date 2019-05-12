<template>
	<div class="head">
		<div class="header-left">
			<div class="iconfont left-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to='/city'>
			<!--<div class="header-right ">{{this.$store.state.city}}-->
			<div class="header-right ">{{this.city}}
				<span class="iconfont arrow-icon">&#xe61c;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
	name:'HomeHeader',
//	props:{
//		city:String
//	},
	computed:{
		// 使用对象展开运算符将此对象混入到外部对象中
		...mapState(['city']),
//		...mapGetters(['doubleCity'])
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.head
		display:flex
		line-height:.86rem
		background:$bgColor
		color:#fff
		.header-left
			width:30px
			float:left
			.left-icon
				font-size:20px
		.header-input
			flex:1
			background:#fff
			border-radius:.1rem
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-left:.2rem
			text-align:left
			color:#ccc
		.header-right
			min-width:60px
			padding:0 0.1rem
			float:right
			color:#fff
			.arrow-icon
				margin-left:-.04rem
				font-size:.24rem
</style>