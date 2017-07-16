<template>
	<div>
		<div class="common-person-order-top">
            <ul>
                <li class="active"><a href="javascript:;">全部订单</a></li>
                <li><a href="javascript:;">待预付返佣</a></li>
                <li><a href="javascript:;">待确认到账</a></li>
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
        	<order-item :key="i" v-for="i in 5"></order-item>

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