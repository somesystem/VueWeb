<template>
    <div>
        <div class="common-person-order-top">
            <ul>
                <li class="active"><a href="javascript:;">审核通过</a></li>
                <li><a href="javascript:;">正在审核</a></li>
                <li><a href="javascript:;">未通过审核</a></li>
            </ul>
            <ol>
                <li>订单状态：</li>
                <li class="active"><a href="javascript:;">不限</a></li>
                <li><a href="javascript:;">信托</a></li>
                <li><a href="javascript:;">资管</a></li>
                <li><a href="javascript:;">债券基金</a></li>
                <li><a href="javascript:;">证券基金</a></li>
                <li><a href="javascript:;">股权基金</a></li>
            </ol>
            <ol>
                <li>订单状态：</li>
                <li class="active"><a href="javascript:;">不限</a></li>
                <li><a href="javascript:;">预热</a></li>
                <li><a href="javascript:;">在售</a></li>
                <li><a href="javascript:;">已结束</a></li>
            </ol>
        </div>
        <div class="person-pro-box">
            <div class="common-item" :key="i" v-for="i in 2">
                <person-product-item></person-product-item>
            </div>
            <common-page></common-page>
        </div>
    </div>
</template>

<script type="text/javascript">
    import personProductItem from "../../modules/person-product-item.vue";
    export default {
        data(){
            return {

            }
        },
        components: {
            personProductItem
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>