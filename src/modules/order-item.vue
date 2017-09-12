<template>
	<div>
		<!--实际应通过item判断，12345均为测试，以下仅为显示方便，仅需要一个order-item即可
			status 和 hasLicai 都应通过item判断
			以下仅为显示方便
		-->
		<div v-show="status==1" class="order-item">
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
					<b v-if="hasLicai">理财师:</b>
					<i v-if="hasLicai">蔡大大</i>
				</p>
			</div>
			<div class="order-item-c">
				<h3>天交所 - 林州重州重州重州重州重州重机</h3>
				<p>认购金额:　100万</p>
				<p>期限:　12个月</p>
				<p>收益: 20%</p>
				<p>佣金: 8%</p>
			</div>
			<div class="order-item-b">
				<p>
					<b>订单状态:</b>
					<i>待确认并预付返佣　</i>
					<a @click="toYufu()" class="color-red" href="javascript:;">去预付返佣>></a>
				</p>
				<p>
					<b class="mr20"><a @click="cancel()" href="javascript:;">取消订单</a></b>
					<i><a @click="tousu()" href="javascript:;">投诉</a></i>
				</p>
			</div>
		</div>
		
		<div v-show="status==2" class="order-item">
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
					<b v-if="hasLicai">理财师:</b>
					<i v-if="hasLicai">蔡大大</i>
				</p>
			</div>
			<div class="order-item-c">
				<h3>天交所 - 林州重州重州重州重州重州重机</h3>
				<p>认购金额:　100万</p>
				<p>期限:　12个月</p>
				<p>收益: 20%</p>
				<p>佣金: 8%</p>
			</div>
			<div class="order-item-b">
				<p>
					<b>订单状态:</b>
					<i>收到打款报单，待确认　</i>
					<a @click="toDakuan()" class="color-red" href="javascript:;">去确认到账>></a>
				</p>
				<p>
					<b class="mr20"><a @click="toPay()" href="javascript:;">订单详情</a></b>
					<i><a @click="tousu()" href="javascript:;">投诉</a></i>
				</p>
			</div>
		</div>

		<div v-show="status==3" class="order-item">
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
					<b v-if="hasLicai">理财师:</b>
					<i v-if="hasLicai">蔡大大</i>
				</p>
			</div>
			<div class="order-item-c">
				<h3>天交所 - 林州重州重州重州重州重州重机</h3>
				<p>认购金额:　100万</p>
				<p>期限:　12个月</p>
				<p>收益: 20%</p>
				<p>佣金: 8%</p>
			</div>
			<div class="order-item-b">
				<p>
					<b>订单状态:</b>
					<i>已完成</i>
				</p>
				<p>
					<b class="mr20"><a href="javascript:;">订单详情</a></b>
				</p>
			</div>
		</div>

		<div v-show="status==4" class="order-item">
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
					<b v-if="hasLicai">理财师:</b>
					<i v-if="hasLicai">蔡大大</i>
				</p>
			</div>
			<div class="order-item-c">
				<h3>天交所 - 林州重州重州重州重州重州重机</h3>
				<p>认购金额:　100万</p>
				<p>期限:　12个月</p>
				<p>收益: 20%</p>
				<p>佣金: 8%</p>
			</div>
			<div class="order-item-b">
				<p>
					<b>订单状态:</b>
					<i>待评价　</i>
					<a @click="toPay()" class="color-red" href="javascript:;">去评价>></a>
				</p>
				<p>
					<b class="mr20"><a @click="toPay()" href="javascript:;">订单详情</a></b>
				</p>
			</div>
		</div>

		<div v-show="status==5" class="order-item">
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
					<b v-if="hasLicai">理财师:</b>
					<i v-if="hasLicai">蔡大大</i>
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
					<i>已取消　</i>
				</p>
				<p>
					<b class="mr20"><a @click="toPay()" href="javascript:;">订单详情</a></b>
				</p>
			</div>
		</div>
		
		
	</div>
	
</template>

<script type="text/javascript">
	import {mapActions,mapMutations} from "vuex";
	export default {
		props: ["status","hasLicai"],
		data(){
			return {
				
			}
		},
		methods: {
			...mapActions(["toast"]),
			...mapMutations(["setConfirm","setPromt","setYufu","setDakuan"]),
			toPay(){
				this.$router.push({name:"p_order_detail"});
			},
			toYufu(){
				this.setYufu({"isShow":true});
			},
			toDakuan(){
				this.setDakuan({"isShow":true});
			},
			tousu(){
				this.setPromt({"isShow":true});
			},
			cancel(){
				this.setConfirm({"isShow":true,"msg":"取消订单？"});
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
	.order-item
	    border color-border
	    margin 12px 0
	    background-color #fff
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
	        width 180px
	        font-weight normal
	        padding 0 20px
	        overflow: hidden;
	        text-overflow: ellipsis;
	        white-space: nowrap;

	.order-item-b
	    display flex
	    .mr20
	        margin-right 20px
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
	            margin-right 8px
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