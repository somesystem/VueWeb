<template>
    <div class="question bg-grey">
        <div class="question-top-warp">
            <div :class="[fixMenu?'active':'main-width','question-top']">
                <div class="main-width">  
                    <nav>
                        <a href="javascript:;">私募股权</a>
                        <a href="javascript:;">信托</a>
                        <a href="javascript:;">私募股权</a>
                        <a href="javascript:;">信托</a>
                    </nav>
                    <div class="question-top-main">
                        <div>
                            <h2>当前经济形势下，安全稳健的投资策略是什么？</h2>
                            <div ref="questionTop" class="question-top-menu">
                                <a href="javascript:;">3984</a>
                                <a href="javascript:;">评论</a>
                                <a href="javascript:;">分享</a>
                                <a href="javascript:;">收藏</a>
                                <a href="javascript:;">举报</a>
                            </div>
                        </div>
                        <div class="question-top-r">
                            <a href="javascript:;">收藏</a>
                            <a href="javascript:;">邀请回答</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-width question-main-warp">
            <div class="question-main">
                <div v-for="(item,index) in items" :key="index" class="question-item">
                    <div class="question-item-top">
                        <a @click="toLicai()" href="javascript:;">
                            <img src="/public/noimg.png" />
                            <span>蔡大大</span>
                        </a>
                        <time>1小时前</time>
                    </div>
                    <p>{{item.lookMore?item.text:item.small}}<a @click="toggleText(item)" v-if="item.hasMore" href="javascript:;">{{item.lookMore?'收起':'阅读原文'}}</a></p>
                    <div class="question-top-menu">
                        <a href="javascript:;">3984</a>
                        <a href="javascript:;">分享</a>
                        <a href="javascript:;">收藏</a>
                        <a href="javascript:;">举报</a>
                    </div>
                </div>

                <a class="question-more" href="javascript:;">查看全部回答</a>
            </div>
            <div class="question-guess">
                <h3>优质问题推荐</h3>
                <ul>
                    <li><a @click="toQuestion()" href="javascript:;"><span>你真的懂理财么？</span><i>128赞</i></a></li>
                    <li><a @click="toQuestion()" href="javascript:;"><span>你真的懂理财的懂理财么你真的懂理财么？</span><i>128赞</i></a></li>
                    <li><a @click="toQuestion()" href="javascript:;"><span>你真的懂理财么？</span><i>128赞</i></a></li>
                    <li><a @click="toQuestion()" href="javascript:;"><span>你真的懂理财么？</span><i>128赞</i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    var l = 2000;
    var data = [
        {
            text: "测试测试"
        },
        {
            text: "我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的"
        },
        {
            text: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
        }
    ];
    export default {
        data(){
            return {
                items: [],
                fixMenu: false
            }
        },
        mounted(){
            for (var i = 0; i < data.length; i++) {
                data[i].small = data[i].text.substr(0,150);
                data[i].hasMore = data[i].text.length>150;
                if (data[i].hasMore) {
                    data[i].small += '...';
                }
                data[i].lookMore = false;
            }
            this.items = data;


            this.$nextTick(()=>{
                var T = this.$refs.questionTop.offsetTop;
                window.addEventListener('scroll',()=>{
                    var t = document.body.scrollTop || document.documentElement.scrollTop;
                    this.fixMenu = t >= T;
                    
                },false)
            });
        },
        methods: {
            toggleText(item){
                item.lookMore = !item.lookMore;
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++l}});
            },
            toQuestion(){
                this.$router.push({name:'question',params:{id:++l}});
            }
        }
        
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .question
        padding-top 12px 
    .question-top-warp,.question-top
        height 136px
    .question-top
        border color-border
        box-sizing border-box
        background-color #fff

        &.active
            z-index 10
            position fixed
            top 0
            left 0
            width 100%
            height 50px 
            border none
            border-bottom color-border
            box-shadow 0 5px 5px rgba(229,229,229,0.3)
            nav,.question-top-menu
                display none 
        > div 
            padding 0 18px

        nav
            padding 18px 0 2px
            display flex
            a 
                display block
                padding 0 5px
                margin-right 14px 
                height 26px
                line-height 26px 
                color #fff
                background-color #c9d7ec
                border-radius 5px
                font-size size3

    .question-top-main
        display flex 
        align-items center 
        justify-content space-between
        h2 
            height 50px
            line-height 50px
            font-size size1
            color color1

    .question-top-menu
        padding-bottom 16px
        display flex
        a 
            display block
            height 22px
            line-height 22px 
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
        
    .question-top-r
        display flex 
        justify-content flex-end
        a 
            display block
            margin-left 10px
            width 100px
            height 30px 
            line-height 28px
            box-sizing border-box
            border-radius 5px
            text-align center 
            font-size size3 

            &:nth-child(1)
                color color-base
                border 1px solid color-base
                &:active 
                    background-color #e5ecf1
            &:nth-child(2)
                color #fff
                background-color color-base
                &:active 
                    background-color #0d5d99



    .question-main-warp
        display flex 
        justify-content space-between

    .question-main
        width 900px
    .question-item
        margin-top 10px 
        background-color #fff 
        border color-border
        padding 18px 18px 0 18px
        
        > p 
            padding 9px 0 11px
            font-size size3 
            color color3 
            line-height 24px 

            a 
                color color-red

    .question-item-top
        height 32px
        img 
            float left
            width 32px 
            height 32px 
            border-radius 50%
            margin-right 9px
        span    
            float left
            font-size size2
            color color2
            line-height 32px 
        time 
            float right
            font-size size3
            color color3 
            line-height size3 
    
    .question-more 
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

    .question-guess
        width 248px
        margin-top 10px 

        h3 
            height 38px
            line-height 38px 
            font-size size3 
            color color-base 
            border color-border
            text-indent 8px
            background-color #fff
        
        ul 
            border color-border
            border-top none
            padding 15px 10px 
            background-color #fff
            li 
                margin-bottom 4px
                &:last-child
                    margin-bottom 0
                span
                    font-size size3 
                    color color3 
                    line-height 24px 
                i 
                    color color5

                &:hover span 
                    color #3d7dca
</style>