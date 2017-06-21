<template>
    <div class="bg-grey">
        <div class="suggest-top"></div>

        <div class="main-width">
            <h2 class="common-h2">您适合的产品</h2>
            <div class="suggest-main">
                <common-item v-for="i in 3" :key="i"></common-item>

                <nav class="common-top-page">
                    <a href="javascript:;">首页</a>
                    <a href="javascript:;">上一页</a>
                    <span>第1页/共3页</span>
                    <a href="javascript:;">下一页</a>
                    <a href="javascript:;">尾页</a>
                </nav>
            </div>
        </div>

        <div class="suggest-foot">
            <div class="main-width">
                <h2 class="common-h2">您可能需要的理财师</h2>
                <a href="javascript:;">换一批</a>
                <div class="suggest-foot-box">
                    <financial-item v-for="i in 3" :key="i"></financial-item>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script type="text/javascript">
    import commonItem from "../modules/common-item.vue";
    import financialItem from "../modules/financial-item.vue";

    export default {
        data(){
            return {
                
            }
        },
        components: {
            commonItem,
            financialItem
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .suggest-top 
        width 1200px 
        height 200px 
        background url('/public/suggest-banner.jpg') no-repeat

    .suggest-main
        margin-top -12px 
    
    .suggest-foot
        background-color #fff 
        > div 
            position relative
            > a
                position absolute
                right 12px
                top 0
                width 42px 
                height 40px 
                line-height 40px 
                font-size 14px 

    .suggest-foot-box 
        display flex 
        .financial-item
            flex 1 
        padding-bottom 24px 
            

</style>