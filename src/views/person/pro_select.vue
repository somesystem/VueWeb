<template>
    <div>
        <div class="common-person-order-top">
            <ol>
                <li>产品类型：</li>
                <li class="active"><a href="javascript:;">不限</a></li>
                <li><a href="javascript:;">信托</a></li>
                <li><a href="javascript:;">资管</a></li>
                <li><a href="javascript:;">债权基金</a></li>
                <li><a href="javascript:;">证券基金</a></li>
                <li><a href="javascript:;">股权基金</a></li>
            </ol>
            <ol>
                <li>产品状态：</li>
                <li class="active"><a href="javascript:;">不限</a></li>
                <li><a href="javascript:;">预热</a></li>
                <li><a href="javascript:;">在售</a></li>
                <li><a href="javascript:;">已结束</a></li>
            </ol>
        </div>
        <div class="person-pro-box">
            <product-cell v-for="i in 4" :key="i"></product-cell>
            <common-page></common-page>
        </div>
    </div>
</template>

<script type="text/javascript">
    import productCell from "../../modules/product-cell.vue";
    export default {
        data(){
            return {

            }
        },
        components: {
            productCell
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>