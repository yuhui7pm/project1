<template>
	<div class="header-wrap">
		<router-link to='/' tag="div" class="header-back"  v-show="showStatu">
			<div class="back-icon iconfont">&#xe624;</div>
		</router-link>
		<div class="header-fixed"  v-show="showStatu" :style="opacityStyle">
			<router-link to='/'>
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			<span class="header-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;景点详情</span>
		</div>
	</div>
</template>

<script>
export default{
	name:'DetailHeader',
	data(){
		return{
			showStatu:false,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll(){
			const height = document.documentElement.scrollTop||document.body.scrollTop;
			if(height>46){
				const opacity = height/170;
				this.opacityStyle={opacity}
				this.showStatu=true;

			}else{
				this.showStatu=false;
			}
		}
	},
	mounted(){
		window.addEventListener('scroll',this.handleScroll)
	},
	unmounted(){
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang='stylus' scoped>
@import "~styles/variables.styl"
.header-wrap >>> .router-link-active
	width:50px
.header-fixed
	position:fixed
	height:.86rem
	width:100%
	line-height:.86rem
	background:$bgColor
	font-size:16px
	position:fixed
	z-index: 6
	top:0
	left:0
	color:white
	.header-fixed-back
		line-height:.86rem
		left:5px
		font-size:20px
		text-align:left
		position:fixed
		top:0
		left:0
		z-index: 5
		width: .64rem
		color:white	
.header-back
	left:10px
	top:10px
	position:absolute
	width:35px
	height:35px
	border-radius:30px
	background:rgba(0,0,0,0.8)
	.back-icon
		margin:5px 5px 0 0
		font-size:23px
		text-align:center
		color:#fff
</style>