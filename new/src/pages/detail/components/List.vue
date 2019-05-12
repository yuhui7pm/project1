<template>
	<div class="ListWrap">
		<div v-for="(item,index) in list"
			:key="index"
			class="listItem">
			<div class="listrow">
				<span class="listicon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="LeftDistanse"> 
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>	
</template>

<script>
export default{
	name:'DetailList',
	props:{
		list:Array
	}
}
</script>

<style lang='stylus' scoped>
	.listrow
		height:30px
		width:100%
		line-height:0.36rem
		text-align:left
		position:relative
		top:0.3rem
		left:0
		.listicon
			width:0.30rem
			height:0.3rem
			display:inline-block
			background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.35rem no-repeat
			background-size:0.31rem 2.5rem
			padding-top:-5px
			margin-left:10px
	.LeftDistanse
		margin-left:10px
</style>