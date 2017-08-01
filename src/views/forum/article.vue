<template>
    <div class="article bg-grey">
        <div class="article-top-wrap">
            <div :class="[fixMenu?'active':'main-width','article-top']" ref="articleTop">
                <div class="main-width article-top-main">
                    <div @click="toLicai()" class="article-l">
                        <img src="/public/noimg.png" />
                        <div>
                            <h4>蔡大大</h4>
                            <p>上海宽像资本</p>
                        </div>
                    </div>
                    <div class="article-r">
                        <a href="javascript:;">3984</a>
                        <a href="javascript:;">评论</a>
                        <a href="javascript:;">分享</a>
                        <a href="javascript:;">收藏</a>
                        <a href="javascript:;">举报</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-width article-main">
            <article class="article-center"> 
                <img src="http://www.qiwen007.com/images/image/2017/0706/6363496150978472689876560.jpg" />
                <h3>一文看懂|一文看懂一文看懂一文看懂一文看懂</h3>
                <time>习大大 发表于2015-09-21</time>
                

                <!--P标签分割 或 br分割 都可-->
                <p>下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时<br/>下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时</p>

                <p>下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时<br/>下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时下次阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德按时阿萨德阿萨德按时打打爱迪生按时打阿萨德按时</p>


                <aside class="other">
                    <span>本文标签：</span>
                    <a href="javascript:;">私募股权</a>
                    <a href="javascript:;">信托</a>
                    <a href="javascript:;">私募股权</a>
                    <a href="javascript:;">信托</a>
                </aside>
            </article>

            <div class="article-say">
                <textarea></textarea>
                <a href="javascript:;">发表评论</a>
            </div>

            <div class="article-comment">
                <a class="all" href="javascript:;">共40条评论</a>
                <div @click="toLicai()" v-for="i in 5" :key="i" class="article-comment-item">
                    <img src="/public/noimg.png" />
                    <div>
                        <h6>蔡大大 <span>1小时前</span></h6>
                        <p>利国利民，国之大计！！！！</p>
                    </div>
                </div>
                <common-page></common-page>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    var h = 989;
    export default {
        data(){
            return {
                fixMenu: false
            }
        },
        mounted(){
            this.$nextTick(()=>{
                var T = this.$refs.articleTop.offsetTop;
                window.addEventListener('scroll',()=>{
                    var t = document.body.scrollTop || document.documentElement.scrollTop;
                    this.fixMenu = t >= T;
                    
                },false)
            });
        },
        methods: {
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++h}});
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .article-top-wrap
        padding 12px 0
        height 60px
    .article-top
        border color-border
        box-sizing border-box
        height 60px
        background-color #fff

        &.active
            border none
            position fixed
            top 0
            left 0
            width 100%
            border-bottom color-border

    .article-top-main
        display flex
        justify-content space-between
    .article-l,.article-r
        height 58px
        box-sizing border-box
        display flex
        padding-top 13px
    .article-l
        width 135px
        cursor pointer
        img 
            display block
            width 32px
            height 32px 
            border-radius 50%
            margin 0 9px 0 16px

        h4
            font-size size2
            line-height size2
            color color2
            margin-bottom 5px
        p 
            font-size size4
            color color4
            line-height size4

    .article-r
        width 50%
        justify-content flex-end

        a 
            display block
            height 32px
            line-height 32px 
            font-size size4
            color color5 
            background-repeat no-repeat
            background-position left center 
            margin-right 14px 
            text-indent 18px 
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
                margin-right 17px 
        

    .article-main
        padding 10px 129px 0
        border color-border
        background-color #fff

    .article-center
        font-size size3 
        color color3
        line-height 24px 
        img 
            display block
            margin 20px auto 
            max-width 900px
        h3 
            margin-top 20px 
            text-align center 
            font-size size2
            color color2 
            line-height size2
        time 
            display block
            text-align center
            margin 13px 0
        p 
            text-align justify


        .other
            display flex
            padding 25px 0 30px 
            span,a 
                display block
            a 
                padding 0 5px
                margin-right 14px 
                height 26px
                line-height 26px 
                color #fff
                background-color #c9d7ec
                border-radius 5px 

    .article-say
        position relative
        height 80px 
        padding-bottom 30px

        textarea 
            display block
            width 100%
            height 80px 
            border color-border
            outline none
            box-sizing border-box
            padding 5px 136px 5px 18px
            line-height 24px
            color color3 
            font-size size3 
            resize none
        a 
            position absolute
            top 29px 
            right 18px 
            width 100px 
            height 30px 
            line-height 30px 
            background-color #fcc850
            color #fff 
            border-radius 4px 
            text-align center

    .article-comment
        .all 
            font-size size3
            color color-base
            line-height size3 
            text-indent 5px 

    .article-comment-item
        cursor pointer
        font-size size3
        color color3 
        display flex
        padding 11px 0
        border-bottom color-border
        &:last-of-type
            margin-bottom 12px
        img 
            display block
            width 42px
            height 42px 
            border-radius 50%
            margin 5px 10px 
        > div 
            flex 1
        h6,p
            font-size size3
            color color3 
            line-height 22px
        h6
            margin-bottom 4px 
</style>