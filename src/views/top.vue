<template>
    <div>
        <div class="top-banner">
            <div class="main-width">
                <div class="top-fill">
                    <div class="top-select">
                        <select>
                            <option>投资金额</option>
                            <option>50~100万</option>
                            <option>100~300万</option>
                            <option>300万以上</option>
                        </select>
                    </div>
                    <div class="top-select">
                        <select>
                            <option>预期收益</option>
                            <option>0%~10%</option>
                            <option>10%~20%</option>
                            <option>20%~50%</option>
                            <option>50%以上</option>
                        </select>
                    </div>
                    <div class="top-select">
                        <select>
                            <option>投资期限</option>
                            <option>1~6月</option>
                            <option>6~12月</option>
                            <option>12~24月</option>
                            <option>24~36月</option>
                            <option>36月以上</option>
                        </select>
                    </div>
                    <a class="top-select-btn" href="javascript:;">快速获取投资方案</a>
                </div> 
            </div>
        </div>

        <nav class="top-menu">
            <ul>
                <li class="active">股权基金</li>
                <li>信托计划</li>
                <li>债券基金</li>
                <li>证券基金</li>
                <li>捐资计划</li>
            </ul>

            <ol>
                <li><a href="javascript:;">热门话题</a></li>
                <li><a href="javascript:;">贵xx</a></li>
                <li><a href="javascript:;">8%~9%</a></li>
                <li><a href="javascript:;">按年付息</a></li>
                <li><a href="javascript:;">房地产</a></li>
                <li><a href="javascript:;">按年xx</a></li>
                <li><a herf="javascript:;">查看更多话题>></a></li>
            </ol>
        </nav>

        <div class="top-warpper">
            <nav class="top-title">
                <a href="javascript:;">1</a>
                <a href="javascript:;">1</a>
                <a href="javascript:;">1</a>
                <a href="javascript:;">1</a>
            </nav>

            <div class="top-item"></div>
            <div class="top-item"></div>
            
            <p class="top-more">查看更多</p>
        </div>

        <aside class="top-aside">
            <div class="top-cell"></div>
        </aside>

        <article class="top-articel">
            <section></section>
        </article>

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
    .top-banner
        height 400px
        padding-top 50px
        background url("/public/banner.png") no-repeat center center
        box-sizing border-box
    .top-fill
        float right
        padding 30px 0
        background-color rgba(0,0,0,0.7)

        .top-select
            width 200px
            padding: 0 20px
            border-bottom 1px solid #434343
            select
                display block
                width 100%
                height 50px
                color color-black
                font-size 18px
                background transparent
                border none

    .top-select-btn
        display block
        margin 30px auto 0
        width 200px
        height 40px
        line-height 40px
        text-align center
        font-size 18px
        color #fff
        background-color color-yellow

    .top-menu
        background-color #fff
        > ul
            display flex
            padding 40px 0 30px
            margin 0 auto
            width main-width
            border-bottom 2px solid color-red

            > li
                position relative
                flex 1
                height 18px
                padding-top 78px
                text-align center
                font-size 18px
                line-height 18px
                color #000
                background-position center top
                background-repeat no-repeat
                cursor pointer

                &:nth-child(1){
                    background-image: url(/public/guquan.png)
                }
                &:nth-child(2){
                    background-image: url(/public/xintuo.png)
                }
                &:nth-child(3){
                    background-image: url(/public/zhaiquan.png)
                }
                &:nth-child(4){
                    background-image: url(/public/zhengquan.png)
                }
                &:nth-child(5){
                    background-image: url(/public/ziguan.png)
                }
                
                &.active:after{
                    content ""
                    position absolute
                    bottom -32px
                    left 50%
                    margin-left -18px
                    width 37px
                    height 19px
                    background #fff url(/public/arrow-top.png) no-repeat
                }

        > ol
            height 
</style>