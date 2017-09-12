<template>
    <div class="about">
        <div class="about-banner"></div>
        <div class="about-top main-width">
            <h2 class="about-icon">简介</h2>
            <p>AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是AI理财师是</p>
        </div>

        <div class="about-main main-width">
            <h2 class="about-icon">三大优势</h2>
            <h3>严格的入驻审核</h3>
            <p class="about-line">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字ctrl+c ctrl+v</p>
            <p class="about-line">文字文字文字v</p>
            <h3>完美的诚信体系</h3>
            <p class="about-line">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字ctrl+c ctrl+v</p>
            <h3>全新的智能服务</h3>
            <p class="about-line">1.文字文字文字文字<br/>2.文字文字文字文字<br/>3.文字文字文字文字<br/></p>
        </div>

        <div class="about-banner2">
            <div class="main-width">
                <h2 class="about-icon">发展历程</h2>
                <ol>
                    <li>文字文字文字文字文字文字文</li>
                    <li>文字文字文字文字文字文字文字文字文字</li>
                </ol>
            </div>
        </div>
        
        <div class="about-more main-width">
            <h2 class="about-icon">媒体报道</h2>
            <ul>
               <li><a href="javascript:;">文字文字文字文字文字文字文</a></li> 
               <li><a href="javascript:;">文字文字文字文文字文</a></li> 
               <li><a href="javascript:;">文字文字文字文字文字文</a></li> 
            </ul>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .about
        font-size 24px 
        line-height 36px
        color color-black
        h2 
            font-size 48px
            line-height 48px
            
    .about-banner
        height 690px
        background url('/public/about-banner.jpg') no-repeat center center

    .about-top
        padding 60px 100px 
        border-radius 5px
        background linear-gradient(to bottom,#208ce9,#0174b8)
        color #fff
        margin-top -150px 
        margin-bottom 120px
        
        p 
            padding 30px 0
            text-align justify

    .about-icon
        position relative
        &:after
            content ""
            position absolute
            left -68px
            height 60px
            width 46px
            background url('/public/rect.png') no-repeat center center

    .about-main
        padding 0 100px 
        
        h3
            font-size 36px
            line-height 36px 
            padding 60px 0 20px 
            color color-blue3

        .about-line
            padding 0 20px
            color color-black
            border-left 2px solid #e5e4e3

    .about-banner2
        position relative
        margin 120px 0 60px 
        height 280px 
        background url('/public/about-banner2.jpg') no-repeat center center
        &:before
            content ""
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            background-color rgba(32,120,233,0.75)

        > div
            padding 60px 100px 
            color #fff
        
        ol 
            padding 30px 32px
            li 
                position relative
                &:after
                    content ""
                    position absolute
                    top 50%
                    margin-top -6px 
                    left -32px
                    width 12px 
                    height 12px 
                    border-radius 50%
                    background-color #fff 

    .about-more 
        margin 60px auto 
        padding 0 100px 

        ul 
            padding 20px 32px
            li 
                position relative
                border-bottom 1px dotted color-black
                line-height 56px 
                a 
                    color color-black
                    &:hover 
                        color color-blue3
                &:after
                    content ""
                    position absolute
                    top 50%
                    margin-top -6px 
                    left -32px
                    width 12px 
                    height 12px 
                    border-radius 50%
                    background-color color-black
</style>