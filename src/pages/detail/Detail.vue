<template>
	<div class="detailWrapper">
		<banner
			:sightName="sightName"
			:bannerImg="bannerImg"
			:gallaryImgs="gallaryImgs">
		</banner>
		<detail-header></detail-header>
		<div class="content"></div>
		<detail-list  :list="categoryList"></detail-list>
	</div>
</template>

<script>
import banner from './components/Banner'
import DetailHeader from './components/header'
import DetailList from './components/List'
import axios from 'axios'

export default{
	name:'Detail',
	components:{
		banner,
		DetailHeader,
		DetailList
	},
	data(){
		return{
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			categoryList:[]
		}
	},
	mounted(){
		this.getDetailInfo()	
	},
	methods:{
		getDetailInfo(){
//			console.log(this.$route);
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.handleGetData)
		},
		handleGetData(res){
			res=res.data
			if(res.data&&res.ret){
				const data=res.data
				this.sightName=data.sightName;
				this.bannerImg=data.bannerImg;
				this.gallaryImgs=data.gallaryImgs;
				this.categoryList=data.categoryList;
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.detailWrapper
	margin-bottom:1000px
</style>