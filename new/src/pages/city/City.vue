<template>
	<div>
		<location-header></location-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" 
			:hotCities="hotCities"
			:letter="letter"
			></city-list>
		<alpha-locate :cities="cities"
			@change="handleLetterChange">
		</alpha-locate>
	</div>
</template>
 
<script>
import LocationHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import AlphaLocate from './component/AlphaList'
import axios from 'axios'

export default{
	name:'City',
	components:{
		LocationHeader,
		CitySearch,
		CityList,
		AlphaLocate	
	},
	data(){
		return{
			hotCities:[],
			cities:{},
			letter:""
		}
	},
	methods:{
		cityinfo(){
			axios.get('/api/city.json').then(this.cityinfosuccess)
		},
		cityinfosuccess(res){
			res=res.data
			if(res.ret&&res.data){
				const data = res.data
				this.hotCities=data.hotCities
				this.cities=data.cities
			}
		},
		handleLetterChange(e){
			this.letter=e;
		}
	},
	mounted(){
		this.cityinfo();
	}
}
</script>

<style>
</style>