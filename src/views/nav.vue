<template>
    <div>
        <div class="bg-white">
            <nav class="common-search">
                <div class="common-search-box">
                    <input type="text" placeholder="搜产品/理财师/话题" />
                    <nav>
                        <span>热点：</span>
                        <a href="javascript:;">一带一路</a>
                        <a href="javascript:;">林州重机</a>
                        <a href="javascript:;">比特币</a>
                        <a href="javascript:;">很赚钱</a>
                    </nav>
                </div>
                <div class="common-sign">
                    <i></i>
                    <router-link tag="a" to="/login">登录</router-link>
                    <span>|</span>
                    <router-link tag="a" to="/join">注册</router-link>
                </div>
            </nav>
        </div>
        <header class="common-header">
            <nav class="common-inner">
            <router-link tag="a" to="/nav" exact>首页</router-link>
            <router-link tag="a" to="/nav/market">金融超市<i></i></router-link>
            <router-link tag="a" to="/nav/financial">找理财师</router-link>
            <router-link tag="a" to="/nav/t3">理财社区</router-link>
          </nav>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>

        <footer class="common-foot">
            <nav class="main-width">
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">媒体报道</a>
            </nav>
        </footer>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
  
    .common-search
        position relative
        height 126px
        width main-width
    .common-search-box
        padding 26px 0

        > input
            display: block
            margin: 0 auto
            width 480px
            height 24px;
            line-height 24px
            padding 10px 20px
            border 2px solid color-red
            font-size 18px
            color #666
            background url(/public/search.png) no-repeat 484px center
        > nav
            margin 12px auto 0
            width 520px
            line-height 14px
            > a
                margin 0 5px
            > a, > span
                color color3
                font-size size3
  
    .common-sign
        position absolute
        right 0
        top 48px 
        height 30px
        line-height 30px
        width 120px
        font-size 14px
        > *
            float left
        > i
            width 30px
            height 30px
            margin-right 12px
            background url(/public/user.png) no-repeat
        > span
            margin 0 5px
  
    .common-header 
        background-color color-red
    .common-inner
        width main-width
        margin: 0 auto
        display flex
        > a
            position relative
            display block
            width 120px
            height 40px
            line-height 40px
            color #fff
            text-align center
            font-size 18px

            > i 
                position absolute
                right 9px
                top 18px
                border-top 6px solid #fff
                border-left 6px solid transparent
                border-right 6px solid transparent

            &.router-link-active
                background-color color-red-select

    .common-foot
        padding 40px 0 200px
        background-color #353535
        > nav
            padding 0 15px
            box-sizing border-box
            > a
                height 20px
                line-height 20px
                font-size 14px
                color color-black
                margin-right 15px
</style>