<template>
    <view class="icon_text_container" @click="handleClick">
        <view 
            :class="selectTitle === title ? 'image_content hover' : 'image_content'"
            :style="{ background: imageBg }"
        >
            <image :src='url' class="image" />
        </view>
        <text class="title">{{title}}</text>
    </view>
</template>

<script>
    export default {
        props: {
            url: String,
            title: String,
            selectTitle: String,
            imageBg: {
                type: String,
                default: 'rgba(42, 130, 228, 1)'
            },
						type:String
        },
		methods: {
			handleClick() {
				this.$emit('onClick', this.type)
			}
		},
		created() {
			// console.log(this.imageBg,"IMAGEBG")
		}
    }
</script>

<style lang='less' scoped>
    .baseFlex {
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .icon_text_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24rpx;
        .image_content {
            .baseFlex();
            border-radius: 40rpx;
            padding: 20rpx;
            margin-bottom: 22rpx;
            opacity: 0.85;
            transition: all .3s;
            .image {
                width: 58rpx;
                height: 58rpx;
                opacity: 1;
            }
        }
        .hover {
            transition: all .3s;
			opacity: 1;
        }
        .image_content:active {
            opacity: 1;
			box-shadow: 0 0 6px 1px #d1d1d1;
            transition: all 0.3s;
        }
        .title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: box;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
</style>
