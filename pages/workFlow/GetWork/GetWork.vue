<template>
	
	<view>
<!-- 		<dynamic-page
		   :API="getPageAapi"
		   contentType="json"
		   contentPayload="data.formInfo.appDesignData"
		/> -->
<!-- 		<dynamic-page
			v-if="key&&(getPageAapi)"
		   :API="getPageAapi"
			 :processDefineKey="key"
			 workflow="true"
			 :userlist="userlist"
			 :srvFormData="srvFormData"
		/> -->
		<dynamic-page
			v-if="key&&(getPageAapi)"
		   :API="getPageAapi"
			 :processDefineKey="key"
			 workflow="true"
		/>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	import {Base64} from '@/utils/tools.js'
	export default {
		components:{ dynamicPage },
		// mounted(e) {
		// 	let page = getCurrentPages()
		// 	// console.log("page",page[page.length-1])
		// 	page[page.length-1].onLoad()
		// },
		onLoad(e){
			uni.showLoading({
				title:"加载中"
			})
			// console.log("e",e)
			let decode = JSON.parse(decodeURIComponent(e.query))
			// console.log("decode",decode)
			// console.log(e.id)
			// console.log(e.key)
			this.getPageAapi = globalConfig.formHost + "?id=" + decode.id
			this.key = decode.key
			// if(e.selectId){
			// 	// console.log(111111)
			// 	this.selectId = e.selectId
			// 	// this.getValue(this.selectId)
			// }
			uni.hideLoading()
		},
		data() {
			return {
				key:null,
				srvFormData:null,
				// 旧工作流
				// getPageAapi: 'https://api.mock.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: 'https://api.uat.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: globalConfig.formHost + '?id=800',
				// 外部工作流
				// getPageAapi: globalConfig.formHost + '?id=10089',
				getPageAapi:null,
				// selectId:null,
				// userlist:null
			}
		},
		methods:{
			// getValue(id){
			// 	uni.showLoading({
			// 		title:"加载中"
			// 	})
			// 	let _this=this
			// 	let list
			// 	let userlist={
			// 		name:null,
			// 		userId:null
			// 	}
			// 	let srvFormData={
			// 		businessLicense:null,
			// 		companyName:null,
			// 		companyType:null,
			// 		companyAddress:null,
			// 		companyLegalPerson:null,
			// 		companyPhone:null
			// 	}; 
				// uni.request({
				// 	url:`${globalConfig.workflowEP}/executive/companyinfo/${id}`,
				// 	method:"GET",
				// 	header:{
				// 		Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''}`,
				// 	},
				// 	complete(res) {
				// 		// console.log("listRes",res)
				// 		list = res.data.data
						
				// 		// console.log("list",list)
				// 		srvFormData.businessLicense=list.licenceNo
				// 		srvFormData.companyName=list.name
				// 		srvFormData.companyType=list.type
				// 		srvFormData.companyAddress=list.address
				// 		srvFormData.companyLegalPerson=list.personName
				// 		srvFormData.companyPhone=list.personPhone
				// 		_this.srvFormData = srvFormData
				// 		userlist.name=list.name
				// 		userlist.userId=list.userId
				// 		_this.userlist = userlist
				// 		// console.log("thisListTo",_this.srvFormData)
				// 		// console.log("这里的api",_this.getPageAapi)
				// 		// console.log("这里的key",_this.key)
				// 		// console.log("这里的List",_this.srvFormData)
				// 	}
				// })
			// }
		}
	}
</script>

<style lang="less">
	// page {
	// 	height: 100%;
	// 	background-color: #E5E5E5;
	// 	padding: 6rpx 0;
	// }
	
</style>