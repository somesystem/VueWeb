<template>
	<div>
		<div class="common-person-order-top">
            <ul>
                <li class="active"><a href="javascript:;">全部订单</a></li>
                <li><a href="javascript:;">待打款订单</a></li>
                <li><a href="javascript:;">待提取佣金</a></li>
                <!--<li><a href="javascript:;">待评价订单</a></li>-->
                <li><a href="javascript:;">投诉订单</a></li>
            </ul>
            <ol>
                <li>订单状态：</li>
                <li class="active"><a href="javascript:;">全部</a></li>
                <li><a href="javascript:;">正在交易</a></li>
                <li><a href="javascript:;">交易完成</a></li>
                <li><a href="javascript:;">无效订单</a></li>
            </ol>
        </div>
        <div class="order-box">
            <!--实际应通过item判断，12345均为测试，以下仅为显示方便，仅需要一个order-item即可
                status 和 hasLicai 都应通过item判断
                以下仅为显示方便
            -->
            <order-item :status="1" :has-licai="true"></order-item>
            <order-item :status="2" :has-licai="true"></order-item>
            <order-item :status="3" :has-licai="true"></order-item>
            <order-item :status="4" :has-licai="true"></order-item>
        	<order-item :status="5" :has-licai="true"></order-item>



        	<common-page></common-page>
        </div>
	</div>
</template>

<script type="text/javascript">
	import orderItem from '../../modules/order-item.vue';

	export default {
		data(){
			return {

			}
		},
		components: {
			orderItem
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
</style>