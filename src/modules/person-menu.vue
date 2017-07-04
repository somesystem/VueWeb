<template>
	<div class="person-menu">
		<nav class="person-menu-cell">
			<div v-for="item in list">
				<h3 :class="item.active?'':'active'" @click="item.active=!item.active">{{item.title}}</h3>
				<ul :style="{'height':item.active?item.height:'0px'}">
					<router-link v-for="i in item.item" to="/" tag="li" exact>{{i.name}}</router-link>
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
								to: "order_buy"
							},
							{
								name: '我是卖家的订单',
								to: "order_cell"
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