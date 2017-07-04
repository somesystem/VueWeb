<template>
	<div class="order-item">
		<div class="order-item-t">
			<p>
				<b>日期:</b>
				<i>2017-05-15</i>
				<b>订单号:</b>
				<i>520</i>
			</p>
			<p>
				<b>客户:</b>
				<i>张三</i>
				<b>理财师:</b>
				<i>蔡大大</i>
			</p>
		</div>
		<div class="order-item-c">
			<h3>天交所 - 林州重机</h3>
			<p>认购金额:　100万</p>
			<p>期限:　12个月</p>
			<p>收益: 20%</p>
			<p>佣金: 8%</p>
		</div>
		<div class="order-item-b">
			<p>
				<b>订单状态:</b>
				<i>待确认并预付返佣　</i>
				<a class="color-red" href="javascript:;">去预付返佣</a>
			</p>
			<p>
				<b><a href="javascript:;">取消订单</a></b>
				<i><a href="javascript:;">投诉</a></i>
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .order-item
    	border color-border
    	margin 12px 0
	.order-item-t
		height 40px
		line-height 40px
		background-color #e6effc
		display flex
		> p
			flex 1
			padding 0 14px
			&:last-child
				text-align right
			b
				font-size size2
				color color2
				margin-right 10px
			i
				font-size size3
				color color3
				margin-right 20px
				&:last-of-type
					margin-right 0


	.order-item-c
		display flex
		> h3, >p
			height 60px
			line-height 60px
			font-size 16px
			color color2
			text-align center
		> p
			flex 1
		> h3
			width 220px
			font-weight normal

	.order-item-b
		display flex
		> p
			flex 1
			height 40px 
			line-height 40px
			padding 0 14px
			&:last-child
				text-align right
			b
				font-size size2
				color color2
				margin-right 10px
			i
				font-size size3
				color color3
				margin-right 20px
				&:last-of-type
					margin-right 0

			a 
				font-size size2
				color color2
</style>