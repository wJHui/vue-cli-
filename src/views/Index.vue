<template>
	<div>
		<ul>
			<li v-for="v in b">{{v}}</li>
		</ul>
		<div id="div" @click="change">点击</div>
	</div>
	
</template>

<style></style>

<script>

	export default {
		name : 'Index',
		data : function (){
			return {
				b : [1,2,3,4,5]
			}
		},
		computed : {
			a : function (){
				console.log(this.$e)
				return this.$e.one
			}
		},
		methods : {
			change (){
				this.$set(this.b,0, 10)
				console.log(this.$parent)
				console.log(this.$root)
			}
		},
		watch : {
			
		}
	}
</script>