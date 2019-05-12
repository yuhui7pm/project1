<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link 
				class="list border-bottom"
				v-for="(item,index) in recommendList" 
				:key="item.id"
				tag="li"
				:to='"/detail/"+item.id'>
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="img-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	name:'HomeRecommend',
	data(){
		return{
		}
	},
	props:{
		recommendList:Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/dot.styl'
	.title
		line-height:.7rem
		margin-top:.2rem
		text-indent:.2rem
		text-align:left
		background:#eee
		width:100%
	.list
		height:1.9rem
		.item-img
			height:1.7rem
			width:1.7rem
			padding:0.1rem
			float:left
		.item-info
			flex:1
			padding:.1rem
			text-align:left
			.item-title{
		        line-height:0.54rem
		        font-size:0.32rem
		        dot()}
		    .item-desc{
		        line-height:0.4rem
		        color:#ccc
		        dot()}
		   .img-button
				background:yellow
				border-radius:3px  
				border:1px solid lightgrey 
</style>
