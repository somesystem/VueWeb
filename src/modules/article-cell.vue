<template>
    <div class="article-cell">
        <h4 @click="toArticle()">文章文章文章文章文章</h4>
        <nav>
            <a href="javascript:;">#股权基金</a>
            <a href="javascript:;">#固定收益</a>
        </nav>
        <section>
            <div @click="toLicai()">
                <img src="/public/noimg.png" />
                <span>蔡大大</span>
            </div>
            <p>如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时...<a @click="toArticle()" href="javascript:;">阅读原文</a></p>
        </section>
        <aside>
            <a href="javascript:;">3984</a>
            <a href="javascript:;">100条评论</a>
            <a href="javascript:;">分享</a>
            <a href="javascript:;">收藏</a>
            <a href="javascript:;">举报</a>
        </aside>
    </div>
</template>
<script type="text/javascript">
    var k = 2000;
    export default {
        data(){
            return {}
        },
        methods: {
            toArticle(){
                this.$router.push({"name":"article","params":{"id":++k}});
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++k}});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";

    .article-cell
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
            cursor pointer
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
                cursor pointer
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
</style>