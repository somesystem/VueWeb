<template>
    <div>
        <div class="suggest-top"></div>

        <div class="main-width">
            <h2 class="common-h2">您适合的产品</h2>
            <div class="suggest-main">
                <common-item v-for="i in 3" :key="i"></common-item>

                <common-page></common-page>
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

    export default {
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
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