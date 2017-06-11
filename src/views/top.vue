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
                <!-- 
                <router-link tag="li" to="stock">股权基金</router-link>
                <router-link tag="li" to="trust">信托计划</router-link>
                <router-link tag="li" to="bond">债券基金</router-link>
                <router-link tag="li" to="negotiable">证券基金</router-link>
                <router-link tag="li" to="donations">捐资计划</router-link> 
                -->
            </ul>
            
            <section>
                <h2>热门话题</h2>
                <ol>
                    <li><a href="javascript:;">贵xx</a></li>
                    <li><a href="javascript:;">8%~9%</a></li>
                    <li><a href="javascript:;">按年付息</a></li>
                    <li><a href="javascript:;">房地产</a></li>
                    <li><a href="javascript:;">按年xx</a></li>
                </ol>
                <a href="javascript:;">查看更多话题>></a>
            </section>
            
        </nav>

        <div class="top-warpper main-width">

            <common-item v-for="item in 5"></common-item>
            
            <!-- <router-view class="view"></router-view> -->
            <a href="javascript:;" class="top-more">查看更多</a>
        </div>

        <aside class="top-aside">
            <div class="main-width">
                <h2>优秀理财师</h2>
                <div class="top-aside-main">
                    <div class="top-aside-warpper">
                        <a href="javascript:;"></a>
                        <div class="top-aside-box">
                            <common-cell v-for="item in 4"></common-cell>
                        </div>
                        <a href="javascript:;"></a>
                    </div>
                    <div class="top-aside-sort">
                        <h3>理财师排名</h3>
                        <ol>
                            <li v-for="i in 4"><i>{{i}}</i><span>蔡大大</span><b>已成交100单</b></li>
                        </ol>
                        <a href="javascript:;">查看全部理财师</a>
                    </div>
                </div>
            </div>
        </aside>

        <article class="top-articel">
            <div class="main-width">
                <h2>媒体报道</h2>
                <div class="top-articel-main">
                    <section>
                        <a href="javascript:;">
                            <img src="" />
                            <p>是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算 打点撒旦按时</p>
                        </a>
                    </section>
                    <section>
                        <a href="javascript:;">
                            <img src="" />
                            <p>xxx</p>
                        </a>
                    </section>
                    <ul>
                        <li v-for="i in 5"><a href="javascript:;">是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算</a></li>
                    </ul>
                </div>
                
            </div>
        </article>

    </div>
</template>

<script type="text/javascript">
    import commonItem from "../modules/common-item.vue";
    import commonCell from "../modules/common-cell.vue";

    export default {
        data(){
            return {}
        },
        components: {
            commonItem,
            commonCell
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

        > section
            width main-width
            margin 0 auto
            height 42px
            line-height 42px
            display flex
            
            h2
                color color-red
                font-size 18px
                width 125px

            > ol
                width 910px
                display flex
                > li
                    font-size 14px 
                    color #000
                    margin-right 34px
                    a
                        color #000
            > a
                display block
                width 125px
                text-align right
                color #000

    .top-more
        display block
        width 300px
        height 32px 
        line-height 32px 
        border-radius 16px
        text-align center 
        margin 12px auto
        border 1px solid color-red
        color color-red
        font-size 18px

    .top-aside
        background-color #fff
        h2
            height 40px 
            line-height 40px 
            font-size 18px 
            color color-red
    .top-aside-main
        display flex
    .top-aside-warpper
        display flex
        width 1000px
        align-items center
        > a
            display block
            width 30px
            height 208px
            
            background-repeat no-repeat
            background-position center center
            &:nth-of-type(1)
                background-image url(/public/arrow-l.png)

                &:hover,&:active
                    background-image url(/public/arrow-l-ac.png)
            &:nth-of-type(2)
                background-image url(/public/arrow-r.png)    
                &:hover,&:active
                    background-image url(/public/arrow-r-ac.png)

    .top-aside-box
        width 940px
        display flex
        border-bottom 1px solid #e5e5e5
    
    .top-aside-sort
        position relative 
        width 158px
        height 208px 
        border 1px solid #e5e5e5
        > h3
            height 24px 
            line-height 24px 
            font-size 14px 
            color #fff
            text-indent 6px 
            background url(/public/sign-sort.png) no-repeat left center

        > ol
            padding 16px 0
            li 
                height 16px 
                line-height 16px 
                display flex 
                padding 6px 0
                > *
                    display block
                > i 
                    width 22px
                    height 16px 
                    text-align center
                    background url(/public/sort.png) no-repeat center center
                    color #fff
                    font-size 12px 
                > span
                    width 56px 
                    color #000
                    font-size 14px 

                > b 
                    font-size 12px 
                    width 78px

        > a 
            position absolute
            bottom 12px
            left 0
            width 100%
            padding-right 12px
            box-sizing border-box
            color #000
            font-size 14px
            line-height 14px 
            text-align right

    .top-articel
        background-color #fff
        padding-bottom 40px
        h2
            height 40px 
            line-height 40px 
            font-size 18px 
            color color-red
    
    .top-articel-main
        display flex

        > section
            width 320px 
            height 210px
            position relative

            &:nth-child(1)
                margin-right 20px
            img 
                display block
                width 100%
                height 100%
            p 
                position absolute
                bottom 0
                left 0
                width 100%
                height 56px
                line-height 24px 
                background-color rgba(0,0,0,0.5)
                color #fff
                box-sizing border-box
                padding 4px 18px
                font-size 12px 
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
        
        > ul
            width 480px
            padding 18px
            box-sizing border-box

            li 
                height 14px 
                margin-bottom 26px 
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                font-size 12px 
                line-height 14px 
                a 
                    color #000
                
                &:last-of-type
                    margin-bottom 0
</style>    