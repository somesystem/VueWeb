<template>
    <div>
        <div class="financial-item-box">
            <financial-item v-for="i in 9" :key="i"></financial-item>
        </div>

        <nav class="common-top-page">
            <a href="javascript:;">首页</a>
            <a href="javascript:;">上一页</a>
            <span>第1页/共2页</span>
            <a href="javascript:;">下一页</a>
            <a href="javascript:;">尾页</a>
        </nav>
    </div>
</template>

<script type="text/javascript">
    import financialItem from "../../modules/financial-item.vue";

    export default {
        data(){
            return {

            }
        },
        components: {
            financialItem
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
     
</style>