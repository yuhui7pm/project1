<template>
	<div>
		<div class="info-img-wrap" @click="OpenPhotos">
			<img class="info-img" 
				:src="bannerImg" 
			>
			<div class="info-bottom">
				<div class="info-msg">
					{{this.sightName}}
				</div>
				<div class="info-icon">
					<span class="iconfont">&#xe640;</span>
					{{this.gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<photos 
				v-show="OpenStatus" 
				@close="DoClose"
				:imgs="gallaryImgs"
				>
			</photos>
		</fade-animation>
	</div>
</template>

<script>
import photos from 'common/gallary/Gallery' 
import FadeAnimation from 'common/fade/Fade' 
export default{
	name:'banner',
	props:{
		sightName:String,
		bannerImg:String,
	    gallaryImgs:Array
	},
	components:{
		photos,
		FadeAnimation
	},
	data(){
		return{
			OpenStatus:false	
		}
	},
	methods:{
		OpenPhotos(){
			this.OpenStatus=true
		},
		DoClose(){
			this.OpenStatus=false
		}
	}
}
</script>

<style lang='stylus' scoped>
	.info-img-wrap
		height:0
		padding-bottom:50%
		overflow:hidden
		position:relative
		.info-img
			width:100%
		.info-bottom
			display:flex
			position:absolute
			right:0
			left:0
			bottom:0
			/*background:green*/
			background-image:linear-gradient(top,rgba(0,0,0,0.1),rgba(0,0,0,0.8))
			.info-msg
				flex:1
				color:white
				text-align:left
				padding:8px 0 8px 10px
				font-size:18px
			.info-icon
				display:block
				width:80px
				height:15px
				color:white
				font-size:18px
				padding:3px 0px 6px 0px
				margin:5px 5px 0px 0px
				border:1px solid rgba(0,0,0,0.7)
				border-radius:10px
				background:rgba(0,0,0,0.7)
</style>