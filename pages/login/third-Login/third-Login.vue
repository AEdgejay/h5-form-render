<template>
	<view>
		<dynamic-page :API="api"></dynamic-page>
		<!-- 开发者选项 -->
<!-- 		<view @click="MoreIndex()" style="position: fixed;bottom: 0;left: 0;width: 80px;">主页</view>
		<view @click="jumpOld()" style="position: fixed;bottom: 0;right: 0;width: 80px;">旧登录方式</view> -->
	</view>
</template>

<script>
	import dynamicPage from '../../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=888'
			}
		},
		methods: {
			// scan(){
			// 	uni.navigateTo({
			// 		url:`/pages/scan`
			// 	})
			// },
			// jumpOld(){
			// 	uni.reLaunch({
			// 		url:"/pages/login/login"
			// 	})
			// },
			
			// MoreIndex(){
			// 	uni.showActionSheet({
			// 			itemList: ['执法首页', '企业首页', '街镇首页'],
			// 			success: function (res) {
			// 					switch(res.tapIndex){
			// 						case 0:uni.navigateTo({
			// 							url:"/pages/Market-index/Market-index"
			// 						});break;
			// 						case 1:uni.navigateTo({
			// 							url:"/pages/companyHome/home"
			// 						});break;
			// 						case 2:uni.navigateTo({
			// 							url:"/pages/street/myhome"
			// 						});break;
			// 					}
			// 			},
			// 			fail: function (res) {
			// 					// console.log(res.errMsg);
			// 			}
			// 	});
			// },
			getUser(){
				this.$wxlogin()
				this.$userProfile()
			}
		},
		// created() {
		// 	this.getUser()
		// },
		created() {
			globalConfig.icon = uni.getStorageSync("iconList")
			// uni.clearStorage("loginData")
			// this.getUser()
		},
		onBackPress() {
			// this.getUser()
		},
		components:{
			dynamicPage
		}
	}
</script>

<style>

</style>
