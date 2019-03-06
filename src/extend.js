// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


let e = Vue.extend({
	data : function (){
		return {
			one : '123'
		}
	}
})

export default new e()