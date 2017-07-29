<template>
    <div class="bg-grey pt20">
        <div class="main-width">
            <ul class="forum-top clearfix">
                <li><a href="javascript:;">发布话题</a></li>
                <li><a href="javascript:;">创建话题</a></li>
                <li><a href="javascript:;">分享理财经</a></li>
                <li><a href="javascript:;">我的知识库</a></li>
            </ul>

            <div class="forum-hot">
                <h3>热门话题</h3>
                <nav :class="['clearfix',openMore?'active':'']">
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                </nav>
                <aside @click="openMore=!openMore" :class="openMore?'active':''"></aside>
            </div>

            <div class="forum-main">
                <div class="forum-main-l">
                    <ul>
                        <li><a>理财圈</a></li>
                        <li class="active"><a href="javascript:;">最新</a></li>
                        <li><a href="javascript:;">最热</a></li>
                        <li><a href="javascript:;">等待回复</a></li>
                    </ul>


                    <div v-for="i in 5" key="i" class="forum-item">
                        <p><span>我为理财狂</span><i>发布该问题</i><time>1小时前</time></p>
                        <h4>当前经济形势下，安全稳健的投资策略是什么？</h4>
                        <nav>
                            <a href="javascript:;">#股权基金</a>
                            <a href="javascript:;">#固定收益</a>
                        </nav>
                        <section>
                            <div>
                                <img src="/public/noimg.png" />
                                <span>蔡大大</span>
                            </div>
                            <p>如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时...<a href="javascript:;">阅读原文</a></p>
                        </section>
                        <aside>
                            <a href="javascript:;">3984</a>
                            <a href="javascript:;">100条评论</a>
                            <a href="javascript:;">分享</a>
                            <a href="javascript:;">收藏</a>
                            <a href="javascript:;">举报</a>
                        </aside>
                    </div>


                    <a href="javascript:;" class="forum-more">查看更多</a>
                </div>
                <div class="forum-main-r">
                    <h4>相关产品推荐</h4>

                    <div v-for="i in 3" key="i" class="forum-cell">
                        <h5><span>天交所-林州重机</span><i>在售</i></h5>
                        <div>
                            <section>
                                <p>30%</p>
                                <p>最高收益</p>
                            </section>
                            <section>
                                <p>返佣率：</p>
                                <p>投资区域：</p>
                            </section>
                            <section>
                                <p>10%</p>
                                <p>云南</p>
                            </section>
                        </div>
                        <aside>
                            <img src="/public/noimg.png" />
                            <div>
                                <h6>蔡大大（宽象资本）</h6>
                                <p>已成交100单</p>
                            </div>
                        </aside>
                        <nav>
                            <a href="javascript:;">咨询Ta</a>
                            <a @click="booking()" href="javascript:;">立即预约</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <booking-product :show.sync="bookShow"></booking-product>
    </div>
</template>

<script type="text/javascript">
    import bookingProduct from '../../modules/booking-product.vue';

    export default {
        data(){
            return {
                openMore: false,
                bookShow: false
            }
        },
        methods: {
            booking(){
                this.bookShow = true;
            }
        },
        components: {
            bookingProduct
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .pt20   
        padding-top 20px
    .forum-top
        border color-border
        background-color #fff
        padding 20px 
        > li 
            float left 
            margin-right 60px
            height 30px 
            line-height 30px 
            font-size size3
            color color3 
            text-indent 20px 
            background-repeat no-repeat
            background-position left center
            &:nth-child(1)
                background-image url('/public/i1.png')
            &:nth-child(2)
                background-image url('/public/i2.png')
            &:nth-child(3)
                background-image url('/public/i3.png')
            &:nth-child(4)
                float right
                margin-right 0

    .forum-hot
        padding 20px 0
        display flex 
        > h3,nav,aside
            height 26px 
        > h3 
            width 80px 
            line-height 26px 
            text-align center
            font-size size3
            color color3 
        > nav 
            width 1036px
            min-height 36px 
            overflow hidden 
            margin-top -10px
            &.active 
                height auto 
            > a 
                float left
                width 74px
                height 24px
                line-height 24px
                border 1px solid color-base
                color color-base
                font-size 14px 
                text-align center 
                margin-top 10px 
                margin-right 20px
                border-radius 5px 
                
                &:nth-child(11n)
                    margin-right 0



        > aside 
            align-self flex-end
            cursor pointer
            width 42px
            transition 0.3s
            background url('/public/more.png') no-repeat center center

            &.active
                transform rotateZ(180deg) 

    .forum-main
        display flex 
    .forum-main-l
        width 900px
        margin-right 12px
        
        > ul
            background-color #fff
            border color-border
            display flex 
            padding 9px 0
            > li 
                position relative
                display block
                width 120px 
                height 22px 
                line-height 22px 
                text-align center
                font-size size3 
                border-right color-border
                &:last-child
                    border-right none
                &:nth-child(1)
                    width 70px
                    border-right none
                    a 
                        color color-base 
                &.active a
                    color color-base
                a 
                    color color3 

                &.active:after
                    content ""
                    position absolute
                    bottom -9px
                    left 50%
                    margin-left -20px
                    height 4px 
                    width 40px 
                    background-color color-base

                &.active:nth-child(4):after
                    width 70px 
                    margin-left -35px 

    .forum-item
        margin-top 10px 
        padding 18px 
        border color-border 
        background-color #fff
        
        > p 
            height size3
            line-height size3
            margin-bottom 12px 
            font-size size3 
            color color3 

            i 
                margin: 0 14px
                font-size size5
                color color5
            time 
                font-size size4 
                color color4 
        
        > h4 
            margin-bottom 12px
            height size1  
            font-size size1 
            line-height size1
            color color1 

        > nav 
            display flex 
            a 
                margin-right 20px 
                color color-base 
                font-size size3 
                line-height size3 

        > section
            padding 14px 0 12px 
            display flex 
            > div 
                width 42px 
                margin-right 20px 
                img 
                    display block
                    margin-bottom 12px
                    width 42px
                    height 42px 

                span 
                    display block
                    font-size size2
                    color color2 
                    line-height size2 
                    text-align center
            > p 
                flex 1
                font-size size3 
                line-height 24px 
                text-align jusitify
                a 
                    color color-red 

        > aside
            display flex 
            a 
                display block
                height 20px 
                line-height 20px 
                font-size size4
                color color5 
                background-repeat no-repeat
                background-position left center 
                margin-right 14px 
                text-indent 20px 
                &:nth-child(1)
                    background-image url('/public/zan.png')
                    text-indent 14px 
                    margin-right 20px 
                    color #fff 
                &:nth-child(2)
                    background-image url('/public/pl.png')
                &:nth-child(3)
                    background-image url('/public/share.png')
                &:nth-child(4)
                    background-image url('/public/sel.png')
                &:nth-child(5)
                    background-image url('/public/jb.png')
    .forum-more 
        display block
        width 300px 
        height 30px 
        line-height 30px 
        color color-base
        font-size 14px 
        border 1px solid color-base
        border-radius 15px 
        margin 12px auto
        text-align center

    .forum-main-r
        flex 1

        > h4 
            height 40px 
            line-height 40px 
            border 1px solid transparent
            border-bottom color-border
            color color-base
            text-indent 6px 

    .forum-cell 
        background-color #fff
        margin-top 10px 
        border color-border 
        padding-top 10px 
        > h5 
            line-height 18px 
            color color2
            font-size size2 
            text-align center
            text-indent 18px 
            i 
                display inline-block
                vertical-align top
                color #fff
                width 36px 
                height 18px 
                text-align center
                margin-left 11px 
                font-size 12px 
                background url('/public/sign.png') no-repeat
                text-indent 0px 

        > div 
            width 206px 
            margin 0 auto
            padding 16px 0 20px 
            border-bottom color-border2
            display flex
            > section
                flex 1 
                p 
                    font-size size4
                    color color4 
                    text-align center
                    &:nth-child(1)
                        height 22px 
                        line-height 22px 
                        margin-bottom 10px 
                    &:nth-child(2)
                        line-height 16px 
                &:nth-child(1) p:nth-child(1)
                    color color-red
                    font-size 24px 
                &:nth-child(3) p 
                    font-size size2 
                    color color2 
                    text-align left

        > aside
            display flex 
            padding 0 20px 
            img 
                width 42px 
                height 42px 
                border-radius 50%
                margin 12px 14px
            > div 
                h6 
                    padding-top 12px 
                    font-size size2
                    color color2 
                    line-height size2
                    margin-bottom 12px 
                p  
                    line-height size4 
                    font-size size4 
                    color color4 

        > nav 
            display flex
            border-top color-border 
            a 
                display block
                flex 1 
                border-right color-border 
                height 40px 
                line-height 40px 
                text-align center
                color color2 
                font-size size2 
                &:last-child 
                    border-right none
</style>