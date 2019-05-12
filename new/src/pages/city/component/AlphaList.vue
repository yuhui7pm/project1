<template>
	<div class="alpha-list">
		<div class="alpha" 
			v-for="item in letters" 
			:key="item"
			:ref="item"
			@click="handleLetterCLick"
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd">
			{{item}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'AlphaLocate',
		data(){
			return{
				touchStatus:true,
				AoffsetTop:0,
				timer:null
			}
		},
		props:{
			cities:Object
		},
		computed:{
			letters(){
				const letters=[]
				for(let i in this.cities){
					letters.push(i)
				}
//				console.log(letters)
				return letters
			}
		},
		updated(){
			this.AoffsetTop = this.$refs['A'][0].offsetTop
//			console.log( this.$refs['A'].offsetTop)
		},
		methods:{
			handleLetterCLick(e){
				this.$emit('change',e.target.innerText);//传给父组件
			},
			handleTouchStart(){
				this.touchStatus=true
			},
			handleTouchMove(ele){
				if(this.touchStatus){
//					if(this.timer){
						clearTimeout(this.timer)
//					}
					this.timer=setTimeout(()=>{
							const moveY=ele.touches[0].clientY-72
							const index = Math.floor((moveY-this.AoffsetTop)/16)
							if(index>=0&&index<=this.letters.length){
								this.$emit("change",this.letters[index]);			
						}
					},15)
				}
			},
			handleTouchEnd(){
				this.touchStatus=false
			},
		}
	}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.alpha-list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	right:0
	top:1.4rem
	bottom:0
	left:0
	width:0.4rem
	margin-left:94%
	.alpha
		width:100%
		height:16px
		text-align:center
		font-size:15px
		color:green;
</style>	