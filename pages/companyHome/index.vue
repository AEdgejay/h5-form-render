<template>
	<view>
		<view class="home_container">
			
			<view class="venue_tag" @click="handleToCompany">
				<text>企业首页</text>
			</view>
		    <view class="venue_tag" @click="handleToTest">
		    	<text>测试</text>
		    </view>
			
		</view>

	</view>

</template>

<script>
	export default {
		methods: {
            handleToTest () {
               uni.navigateTo({
                    url: './test'
               }) 
            },
			handleToCompany () {
				uni.navigateTo({
					url: './home'
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>
    .baseFlex {
        display: flex;
        align-items: center;
    }
	.home_container {
		padding: 16rpx;
        .baseFlex();
		// justify-content: center;
		// height: 100vh;
		flex-wrap: wrap;
		.venue_tag {
			.baseFlex();
			padding: 32rpx;
			color: rgba(80, 80, 80, 1);
			background-color: rgba(214, 239, 238, 1);
			border-radius: 8px;
			font-size: 14px;
			line-height: 150%;
			text-align: center;
			margin: 20rpx 20rpx;
			.sport_image {
				width: 48rpx;
				height: 48rpx;
				margin-right: 8rpx;
			}
		}
	}
</style>
