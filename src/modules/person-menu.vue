<template>
	<div class="person-menu">
		<nav class="person-menu-cell">
			<div v-for="item in list">
				<h3 :class="item.active?'':'active'" @click="item.active=!item.active">{{item.title}}</h3>
				<ul :style="{'height':item.active?item.height:'0px'}">
					<router-link :key="index" v-for="(i,index) in item.item" :to="i.to" tag="li">{{i.name}}</router-link>
				</ul>
			</div>
			
		</nav>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				list: [
					{
						title: '我的订单',
						active: true,
						height: '82px',
						item: [
							{
								name: '我是买家的订单',
								to: "buy"
							},
							{
								name: '我是卖家的订单',
								to: "sell"
							}
						]
					},
					{
						title: '我的产品',
						active: false,
						height: '164px',
						item: [
							{
								name: '发布的产品',
								to: "publish"
							},
							{
								name: '认购的产品',
								to: "take"
							},
							{
								name: '收藏的产品',
								to: "select"
							},
							{
								name: '上传产品',
								to: "upfile1"
							}
						]
					},
					{
						title: '我的客户',
						active: false,
						height: '82px',
						item: [
							{
								name: '已下单用户',
								to: "cus_place"
							},
							{
								name: '未下单用户',
								to: "cus_no"
							}
						]
					},
					{
						title: '我的社区',
						active: false,
						height: '82px',
						item: [
							{
								name: '我的回答',
								to: "answer"
							},
							{
								name: '我的收藏',
								to: "myselect"
							}
						]
					},
					{
						title: '我的资料',
						active: false,
						height: '123px',
						item: [
							{
								name: '个人信息',
								to: "my_info1"
							},
							{
								name: '个人资质',
								to: "my_info2"
							},
							{
								name: '个人擅长',
								to: "my_info3"
							}
						]
					},
					{
						title: '我的消息',
						active: false,
						height: '123px',
						item: [
							{
								name: '系统消息',
								to: "sysmsg"
							},
							{
								name: '客户消息',
								to: "cusmsg"
							},
							{
								name: '社区消息',
								to: "conmsg"
							}
						]
					}
				]
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
	
	.person-menu
		background-color #fff
		width 248px
		border color-border
		
	.person-menu-cell
		padding-bottom 50px
		h3
			height 40px
			line-height 40px
			font-size size3
			color color-red
			text-indent 14px
			cursor pointer
			border-bottom color-border
			background url('/public/person1.png') no-repeat 220px center

			&.active
				background-image url('/public/person2.png')

		ul
			transition 0.3s
			overflow hidden
			li 
				height 40px
				line-height 40px
				text-indent 28px
				border-bottom color-border
				cursor pointer

				&:hover,&.router-link-active
					background-color #f1f1f1
</style>