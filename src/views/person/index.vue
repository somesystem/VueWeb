<template>
	<div class="main-width">
		<p class="common-detail-top">首页>我是卖家的订单</p>

        <div class="common-person-top">
        	<a href="javascript:;">更改封面图</a>
            <img src="http://s1.dwstatic.com/group1/M00/9D/75/af7681ad9856be9f73821f77212602bf.jpg" />
            <p>岳大大</p>
            <p>上海宽象资本投资</p>
            <nav>
                <a href="javascript:;">私募基金</a>
                <a href="javascript:;">股权基金</a>
                <a href="javascript:;">信托</a>
            </nav>
            <p>理财服务宗旨：理财学到家，幸福你我他</p>
        </div>
		
		<div class="person-main">
			<person-menu class="person-main-l"></person-menu>
			<router-view class="person-main-r"></router-view>
		</div>

		
	</div>
</template>

<script type="text/javascript">
	import personMenu from "../../modules/person-menu.vue";

	export default {
		data(){
			return {

			}
		},
		components: {
			personMenu
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
	
	.person-main
		margin 12px 0
		display flex
		justify-content space-between

	.person-main-r
		width 898px
</style>