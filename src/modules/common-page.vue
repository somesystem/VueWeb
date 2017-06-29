<template>
    <nav class="common-top-page">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">上一页</a>
        <span>第1页/共5页</span>
        <a href="javascript:;">下一页</a>
        <a href="javascript:;">尾页</a>
    </nav>
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
    @import "../styl/base";
    .common-top-page 
        display flex
        justify-content center 
        align-items center 
        padding-bottom 12px
        > a 
            display block
            width 60px
            height 26px 
            line-height 26px 
            border color-border
            text-align center
            font-size size3
            color color3
            margin-right 20px 
            background-color #fff 
            &:last-child 
                margin-right 0px
        > span 
            color color3
            margin-right 20px 
</style>