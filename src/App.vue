<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
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
    @import "./styl/reset";
    @import "./styl/base";

    .fade-enter-active, .fade-leave-active
        transition all .2s ease

    .fade-enter, .fade-leave-active
        opacity 0
    .main-width
        width main-width
        margin 0 auto
        box-sizing border-box
    .color-red
        color color-red !important
    .bg-white
        background-color #fff
    .bg-grey
        background-color #f8f8f8
    
    .common-h2 
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: color-red;
    .common-nav-top
        background-color #fff
        box-sizing border-box
        padding 18px
        margin-top 18px 
        > p 
            height 36px
            line-height 36px
            font-size 14px
            color #000
        > nav 
            display flex
            font-size 14px 
            line-height 36px
            > div
                width 100px

            > ul 
                width 900px 
                overflow hidden
                > li 
                    float left 
                    width 100px
                    height 36px
                    text-align center
            > a 
                align-self flex-end
                display block
                width 100px
                height 36px
                text-align right 
                > i 
                    float right 
                    width 18px 
                    height 36px
                    background url(/public/more.png) no-repeat center center 
                    margin-left 10px
                    // transition transform 0.4s

                &.active > i 
                    transform rotateX(180deg) 
    
    .common-nav-sort
        > nav
            display flex
            padding 12px 0 16px
            > div
                position relative
                // min-width 80px
                height 30px
                line-height 30px 
                margin-right 12px
                background-color color-red
                font-size 14px 
                color #fff
                box-sizing border-box
                padding 0 20px 0 7px
                > a 
                    position absolute
                    top 5px 
                    right 0 
                    width 20px 
                    height 20px 
                    background url(/public/delete.png) no-repeat center center 
        > ul 
            position relative
            display flex
            padding 0 18px

            li 
                width 100px
                height 14px 
                line-height 14px 
                font-size 14px 
                > a 
                    display flex
                    width 100%
                    height 100%
                    color color3
                    font-size size3
                i 
                    margin-left 2px 
                    display block
                    width 7px 
                    height 14px 
                    background url(/public/sort-g.png) no-repeat center center
                &.active 
                    i
                        background-image url(/public/sort-r.png)
                    a 
                        color color-red
                
            li.market-newproduct
                position absolute
                top -14px
                right 0
                width 130px
                height 30px
                line-height 30px 
                font-size 14px 
                background color-yellow
                a
                    display block
                    color #fff
                    text-align center
    
    .common-top-page 
        display flex
        justify-content center 
        align-items center 
        padding-bottom 12px
        > a 
            display block
            width 60px
            height 26px 
            line-height 26px 
            border color-border
            text-align center
            font-size 14px
            color #000
            margin-right 20px 
            background-color #fff 
            &:last-child 
                margin-right 0px
        > span 
            color #000
            margin-right 20px 

    .financial-item-box
        padding-top 18px 
        overflow hidden

        .financial-item 
            float left 
</style>

<style>
    ::-webkit-input-placeholder{
        color: #a5a5a5;
    }
    :-moz-placeholder {
        color: #a5a5a5;
    }
    ::-moz-placeholder{
        color: #a5a5a5;
    }
    :-ms-input-placeholde{
        color: #a5a5a5;
    }
</style>
