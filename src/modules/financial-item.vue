<template>
    <div class="financial-item">
        <p>已在金豆成交100单</p>
        <div class="financial-item-t">
            <div class="financial-item-l">
                <img src="" />
                <p><span>蔡大大</span><i>江西</i></p>
                <a href="javascript:;">咨询ta</a>
            </div>
            <div class="financial-item-r">
                <div class="financial-item-r-t">
                    <div>
                        <p>4.7</p>
                        <p>专业度</p>
                    </div>
                    <div>
                        <p>4.5</p>
                        <p>服务态度</p>
                    </div>
                    <div>
                        <p>4.9</p>
                        <p>诚信度</p>
                    </div>
                </div>
                <p>上海宽带资本投资</p>
                <p>擅长领域：基础建设、房地产</p>
            </div>
        </div>
        <nav class="financial-item-b">
            <a href="javascript:;"><span>腾云资产 - 天山1号(12月期 年化率 7%)</span><i>在售</i></a>
            <a href="javascript:;"><span>腾云资产 - 天山1号(12月期 年化率 8%)</span><i>预热</i></a>
        </nav>
        
            
            
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
    @import "../styl/base";
    .financial-item
        background-color #fff
        width 376px
        padding 18px 0 12px 
        margin-right 16px
        margin-bottom 16px
        box-sizing border-box
        border 1px solid #e5e5e5 

        &:nth-child(3n)
            margin-right 0

        > p 
            padding-right 18px 
            height 20px
            line-height 20px 
            text-align right 
            font-size size4
            color color4 
    .financial-item-t
        padding 0 18px 20px
        border-bottom 1px solid #e5e5e5
        display flex 

    .financial-item-l
        width 100px 
        > img 
            display block 
            margin 0 auto 
            width 60px
            height 60px
        > p 
            padding 12px 0
            text-align center
            span 
                height size2
                line-height size2
                font-size size2 
                color color2 
            i   
                margin-left 12px 
                font-size size5
                color color5 
        > a 
            display block
            margin 0 auto 
            width 72px
            height 26px 
            line-height 26px
            text-align center
            border 1px solid color-blue
            color color-blue
            font-size 14px 
            border-radius 5px 


    .financial-item-r
        flex 1
        > p 
            height 28px
            line-height 28px 
            font-size size3 
            color color3 
            text-indent 10px 

    .financial-item-r-t
        display flex
        width 100%
        margin-bottom 16px 

        > div
            flex 1
            p 
                text-align center
                &:nth-child(1)
                    height 36px 
                    line-height 36px 
                    font-size 20px 
                    color color-red
                &:nth-child(2)
                    height 16px 
                    line-height 16px 
                    font-size size5
                    color color5 

    .financial-item-b
        padding 6px 0
        > a 
            padding 0 20px 
            display flex
            width 100%
            height 26px
            line-height 26px
            color color3
            font-size size3 
            box-sizing border-box
            
            > span
                display block
                flex 1
                margin-right 20px 
                overflow hidden 
                text-indent 10px 
                white-space:nowrap; 
                text-overflow:ellipsis;
            > i
                display block 
                width 36px
                height 26px 
                background url(/public/sign.png) no-repeat center center 
                color #fff 
                text-align center 
</style>