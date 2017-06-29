<template>   
    <aside class="top-aside">
        <div class="main-width">
            <h2 class="common-h2">{{title}}</h2>
            <div class="top-aside-main">
                <div class="top-aside-warpper">
                    <a href="javascript:;"></a>
                    <div class="top-aside-box">
                        <common-cell :key="item" v-for="item in 4"></common-cell>
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
</template>

<script>
    export default {
        props: {
            title: ""
        },
        data(){
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .top-aside
        background-color #fff
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
        border-top color-border
        border-bottom color-border
    
    .top-aside-sort
        position relative 
        width 158px
        height 206px 
        border color-border
        box-sizing border-box
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
                cursor pointer
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
                    color color3
                    font-size size3 

                > b 
                    font-size size5
                    color color5 
                    width 78px

        > a 
            position absolute
            bottom 12px
            left 0
            width 100%
            padding-right 12px
            box-sizing border-box
            color color3
            font-size size3 
            line-height 14px 
            text-align right
</style>