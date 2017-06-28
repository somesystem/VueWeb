<template>
    <div>
        <div class="main-width">
            <p class="product-top">首页>金融超市>{{$route.params.id}}</p>
            
            <div class="product-main main-width">
                <div class="product-main-l">
                    <div class="product-name">
                        <div class="product-name-t">
                            <p><span>腾云资产-1号</span><span>在售</span></p>
                            <p>本期起售日 2017/05/15</p>
                        </div>
                        <div class="product-name-c">
                            <section>
                                <p><span style="width:70%"></span></p>
                                <p>70%</p> 
                            </section>
                            <p>进度说明：【2017年5月18日10时更新】本期为第一期，本期规模不限，预热中，封账时间约定，有下期。</p>
                            <nav>
                                <a href="javascript:;">固定收益</a>
                                <a href="javascript:;">房地产</a>
                            </nav>
                        </div>
                        <div class="product-name-b">
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
                    <div class="product-detail">
                        <h2 class="common-h2">产品详情</h2>
                        <h3>产品收益</h3>
                        <table>
                            <thead>
                                <tr><th>期限</th><th>认购金额（万）</th><th>预期年化收益率</th><th>反拥率</th></tr>
                            </thead>
                            <tbody>
                                <tr><td rowspan="2">36个月</td><td>100万≦X≦300万</td><td>6.8%</td><td>1.3%</td></tr>
                                <tr><td>X≧300万</td><td>7.0%</td><td>1.2%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="product-main-r">
                    <div class="product-man">
                        <p class="product-man-t">已成交100单</p>
                        <div class="product-man-c">
                            <div>
                                <img src=""></div>
                                <div>
                                    <p>4.5</p>
                                    <p>综合评分</p>
                                </div>
                            </div>
                            <div class="product-man-b"><div>
                                <p><span>蔡大大</span><span>江西</span></p>
                                <p>上海宽象资本投资</p>
                            </div>
                            <div>
                                <a href="javascript:;">咨询ta</a>
                            </div>
                        </div>
                    </div>

                    <nav class="product-aside">
                        <div>
                            <a href="javascript:;">分享产品</a>
                            <a href="javascript:;">收藏产品</a>
                            <a href="javascript:;">邮件发送</a>
                        </div>
                        <div>
                            <a href="javascript:;">加入对比</a>
                            <a href="javascript:;">下载资料</a>
                            <a href="javascript:;">预览资料</a>
                        </div>
                    </nav>
                </div>
            </div>
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
    @import "../../styl/base";
    .product-top
        height 40px 
        line-height 40px
        font-size size3
        color color3
    .product-main
        display flex
        .product-main-l
            flex 1
            margin-right 16px
        .product-main-r
            width 284px

    .product-name
        padding 18px 18px 0
        border color-border
        background-color #fff
        box-sizing border-box
        border color-border
    
    .product-name-t
        height 20px
        line-height 20px
        display flex
        justify-content space-between

        p:nth-child(1)
            display flex
            
            span
                display block
                font-size size1
                color color1

            span:nth-child(2)
                margin-left 10px
                text-align center
                font-size size4
                color #fff
                width 36px
                height 20px
                background url(/public/sign.png) no-repeat center center 

        p:nth-child(2)
            font-size 14px
    
    .product-name-b
        display flex
        height 50px
        justify-content space-between
        align-items center
        border-top color-border
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
            &:hover,&:active
                background-color color-red-select
    
    .product-name-c
        > section
            display: flex
            justify-content center
            padding-top 21px
            p:nth-child(1)
                width 280px
                height 14px
                border-radius 7px
                background-color #e5e5e5
                overflow hidden
                span
                    display block
                    height 14px
                    background-color color-blue

            p:nth-child(2)
                margin-left 5px 
                height 14px
                line-height 14px
                font-size 12px
                color color1
        > p 
            margin-top 12px
            height 16px
            line-height 16px
            font-size size5
            color color5
        > nav
            padding 20px
            display flex
            justify-content center
            > a
                display block
                width 76px
                height 24px
                line-height 24px
                border 1px solid color-red
                color color-red
                border-radius 5px
                text-align center
                margin-right 12px
                &:last-child
                    margin-right 0
    
    
    .product-man
        border color-border
        padding 18px 0 30px
        background-color #fff
    .product-man-t
        height 14px
        font-size size5
        color color5
        line-height 14px
        text-align right
        padding-right 10px
        margin-bottom 18px
    .product-man-c
        display flex
        align-items center
        > div:nth-child(1)
            flex 3
            border-right color-border
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
    .product-man-b
        display flex
        align-items center
        margin-top 26px
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
                font-size 14px
                color color-blue
                border-radius 5px
                border 1px solid color-blue

    .product-detail,.product-aside
        margin-top 16px
        background-color #fff
        border color-border

    .product-aside
        > div
            display flex 
            > a
                flex 1
                display block
                height 119px
                padding-top 72px
                line-height size3
                text-align center
                color color3
                font-size size3
                background-position center 30px
                background-repeat no-repeat
                box-sizing border-box
                &:active,&:hover
                    color color-blue
                
        > div:nth-child(1) > a:nth-child(1)
            background-image url('/public/pro_icon1.png')
            &:hover,&:active
                background-image url('/public/pro_icon1_ac.png')
        > div:nth-child(1) > a:nth-child(2)
            background-image url('/public/pro_icon2.png')
            &:hover,&:active
                background-image url('/public/pro_icon2_ac.png')
        > div:nth-child(1) > a:nth-child(3)
            background-image url('/public/pro_icon3.png')
            &:hover,&:active
                background-image url('/public/pro_icon3_ac.png')
        > div:nth-child(2) > a:nth-child(1)
            background-image url('/public/pro_icon4.png')
            &:hover,&:active
                background-image url('/public/pro_icon4_ac.png')
        > div:nth-child(2) > a:nth-child(2)
            background-image url('/public/pro_icon5.png')
            &:hover,&:active
                background-image url('/public/pro_icon5_ac.png')
        > div:nth-child(2) > a:nth-child(3)
            background-image url('/public/pro_icon6.png')
            &:hover,&:active
                background-image url('/public/pro_icon6_ac.png')
    
    .product-detail
        > h2 
            text-indent 18px
            border-bottom color-border
        > h3
            height 40px
            line-height 40px
            text-indent 40px
            color color3
            font-size size3
            background url('/public/pro_icon.png') no-repeat 18px center;

        > table
            width 822px
            border color-border
            margin 0 auto

</style>