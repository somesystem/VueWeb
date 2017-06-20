<template>
    <div class="common-item">
        <div class="common-item-l">
            <div class="common-item-l-t">
                <p><span>天交所-林州重机</span><span>在售</span></p>
                <p>本期起售日 2017/05/15</p>
            </div>
            <div class="common-item-l-c">
                <div>
                    <p>30%</p>
                    <p>最高预期收益</p>
                </div>
                <div>
                    <p>100万</p>
                    <p>认购起点</p>
                </div>
                <div>
                    <p>10%</p>
                    <p>返佣率</p>
                </div>
                <div>
                    <p>云南</p>
                    <p>投资区域</p>
                </div>
                <div>
                    <p>12个月</p>
                    <p>产品期限</p>
                </div>
                <section>
                   <p><span style="width:70%"></span></p>
                   <p>70%</p> 
                </section>
            </div>
            <div class="common-item-l-b">
                <div>
                    <span>评分：</span>
                    <span><i></i><i></i><i></i><i></i></span>
                    <a href="javascript:;">1230</a>
                    <a href="javascript:;">56</a>
                    <a href="javascript:;">12</a>
                    <a href="javascript:;">预览资料</a>
                </div>
                
                <a href="javascript:;">立即预约</a>
            </div>
        </div>
        <div class="common-item-r">
            <p class="common-item-r-t">已成交100单</p>
            <div class="common-item-r-c">
                <div>
                    <img src="" />
                </div>
                <div>
                    <p>4.5</p>
                    <p>综合评分</p>
                </div>
            </div>
            <div class="common-item-r-b">
                <div>
                    <p><span>蔡大大</span><span>江西</span></p>
                    <p>上海宽象资本投资</p>
                </div>
                <div>
                    <a href="javascript:;">咨询ta</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-item
        padding 18px
        display flex
        border 1px solid #e5e5e5
        justify-content space-between
        background-color #fff
        margin-bottom 12px

        &:first-of-type
            margin-top 12px
    .common-item-l
        width 860px
    .common-item-r
        width 240px
    .common-item-l-t
        height 20px
        line-height 20px
        display flex
        justify-content space-between
        margin-bottom 32px
        p:nth-child(1)
            display flex
            
            span
                display block
                font-size size1
                color color1

            span:nth-child(2)
                margin-left 15px
                text-align center
                font-size size4
                color #fff
                width 36px
                height 20px
                background url(/public/sign.png) no-repeat center center 

        p:nth-child(2)
            font-size 14px
    .common-item-l-c
        display flex
        align-items center
        > div
            flex 1
            text-align center
            p:nth-child(1)
                font-size 18px
                line-height 18px
                color color-red
                margin-bottom 14px
            p:nth-child(2)
                font-size size5
                color color5 
                line-height 14px
        > section
            width 228px
            display flex
            justify-content space-between
            p:nth-child(1)
                width 186px
                height 14px
                border-radius 7px
                background-color #e5e5e5
                overflow hidden
                span
                    display block
                    height 14px
                    background-color color-blue

            p:nth-child(2)
                height 14px
                line-height 14px
                font-size 12px
                color #000
    
    .common-item-l-b
        display flex
        justify-content space-between
        align-items flex-end
        padding-top 15px
        > div
            display flex
            line-height 14px
            > span, > a 
                font-size size5
                color color5

            > a
                display block
                margin-right 18px
                padding-left 20px
                background-repeat no-repeat
                background-position left center 

                &:nth-of-type(1)
                    background-image url(/public/eyes.png)
                &:nth-of-type(2)
                    background-image url(/public/comment.png)
                &:nth-of-type(3)
                    background-image url(/public/car.png)
                &:nth-of-type(4)
                    padding-left 0
                    padding-right 20px
                    background-image url(/public/down.png)
                    background-position right center
            > span:nth-child(2)
                width 90px
                i 
                    float left
                    width 12px 
                    height 14px 
                    background url(/public/star.png) no-repeat center center
                    margin-right 8px
        > a
            display block
            width 134px
            height 32px
            font-size 18px
            line-height 32px 
            color #fff
            background-color color-red
            text-align center

    .common-item-r
        border-left 1px solid #e5e5e5

    .common-item-r-t
        height 14px
        font-size size5
        color color5
        line-height 14px
        text-align right
        padding-right 10px
        margin-bottom 5px
    .common-item-r-c
        display flex
        align-items center
        > div:nth-child(1)
            flex 3
            border-right 1px solid #e5e5e5
            img 
                display block
                margin 0 auto
                width 70px
                height 70px
        > div:nth-child(2)
            flex 2
            text-align center
            p:nth-child(1)
                height 18px
                font-size 18px
                line-height 18px
                color color-red
                margin-bottom 12px
            p:nth-child(2)
                height 14px
                line-height 14px
                font-size size2 
                color color2 
    .common-item-r-b
        display flex
        align-items center
        margin-top 15px
        > div:nth-child(1)
            flex 3
            p 
                text-align center 
                height 16px 
                line-height 16px 
                color color3
                font-size size3
                &:nth-child(1)
                    margin-bottom 10px
                    color color2
                    font-size size2
                span:nth-child(2)
                    margin-left 14px
                    color color5
                    font-size size5
                    color color-black
        > div:nth-child(2)
            flex 2
            > a 
                margin 0 auto
                display block
                width 72px
                height 26px
                line-height 26px
                text-align center
                font-size 12px
                color color-blue
                border-radius 5px
                border 1px solid color-blue

</style>