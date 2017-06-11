<template>
    <div class="common-cell">
        <h3>已在金豆成交100单</h3>
        <div class="common-cell-c">
            <div class="common-cell-c-img">
                <img src="" />
                <div>
                    <p><span>蔡大大</span><span>江西</span></p>
                    <a href="javascript:;">马山咨询</a>
                </div>
            </div>
           
            <p>所属机构：宽象资本</p>
            <p>擅长领域：基础建设、房地产</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-cell
        padding 18px 0
        > h3 
            height 14px 
            font-size 12px 
            line-height 14px
            text-indent 18px 
            color #000
    .common-cell-c
        padding 26px 18px 0
        border-right 1px solid #e5e5e5

        > p 
            color #000
            font-size 14px 
            line-height 26px 
    
    .common-cell:last-of-type .common-cell-c
        border-right none

    .common-cell-c-img
        display flex
        margin-bottom 20px 
        > img
            display block
            width 60px
            height 60px
            margin-right 18px
        > div
            width 120px
            > p 
                height 18px 
                line-height 18px 
                span:nth-child(1)
                    color #000
                    font-size 18px
                    margin-right 12px
                span:nth-child(2)
                    font-size 12px
            > a 
                display block
                margin-top 12px
                margin-left 49px
                width 72px
                height 26px
                line-height 26px
                background-color color-yellow
                font-size 12px 
                text-align center 
                color #fff 
                border-radius 5px 
</style>