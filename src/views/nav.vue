<template>
    <div>
        <div class="bg-white">
            <nav class="common-search main-width">
                <img class="common-logo" src="/public/logo.png" />
                <div class="common-search-box">
                    <div>
                        <input v-model="searchKey" @blur="fnBlur()" @focus="fnFocus()" @keydown.enter="fnSeach()" type="text" placeholder="搜产品/理财师/话题" />
                        <a @click="fnSeach()" href="javascript:;"></a>
                        <ul v-show="isFocus" class="common-search-lx">
                            <li><span>天交所-林州重机</span><span>私募</span><span>理财师：岳大大</span></li>
                            <li><span>天交所-林州重机</span><span>私募</span><span>理财师：岳大大</span></li>
                            <li><span>天交所-林州重机</span><span>私募</span><span>理财师：岳大大</span></li>
                        </ul>
                    </div>
                    <nav>
                        <span>热点：</span>
                        <a href="javascript:;">一带一路</a>
                        <a href="javascript:;">林州重机</a>
                        <a href="javascript:;">比特币</a>
                        <a href="javascript:;">很赚钱</a>
                    </nav>
                </div>
                <div v-if="!test" class="common-sign">
                    <i></i>
                    <router-link tag="a" to="/login">登录</router-link>
                    <span>|</span>
                    <router-link tag="a" to="/join">注册</router-link>
                </div>
                <div v-if="test" class="common-sign">
                    <i class="active" @click="toMyhome()"></i>
                    <a @click="loginOut()" href="javascript:;">退出登录</a>
                </div>
            </nav>
        </div>
        <header class="common-header">
            <nav class="common-inner">
            <router-link tag="a" to="/nav" exact>首页</router-link>
            <router-link tag="a" to="/nav/market">金融超市<i></i></router-link>
            <router-link tag="a" to="/nav/financial">找理财师</router-link>
            <router-link tag="a" to="/nav/forum">理财社区</router-link>
          </nav>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>

        <common-foot></common-foot>
    </div>
</template>

<script type="text/javascript">
    import commonFoot from "../modules/common-foot.vue";

    export default {
        data(){
            return {
                searchKey: "",
                isFocus: false,
                test: true
            }
        },
        methods: {
            fnFocus(){
                this.isFocus = true;
            },
            fnBlur(){
                setTimeout(()=>{
                    this.isFocus = false;
                },300);
            },
            fnSeach(){
                if (this.searchKey) {
                    this.$router.push({name:'s_pro',params:{id:this.searchKey}});
                }
            },
            toMyhome(){
                this.$router.push({path:'/nav/person/id'});
            },
            loginOut(){
                this.test = false;
                this.$router.push({path:"/"});
            }
        },
        components: {
            commonFoot
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-logo
        position absolute
        top 20px 
        left 20px
    .common-search-lx
        z-index 10
        position absolute
        top 44px
        left 0
        width 100%
        border color-border
        border-top none
        box-sizing border-box 

        li 
            display flex 
            background-color #fff
            height 32px 
            line-height 32px 
            cursor pointer
            > span 
                display block 
                flex 1 
                text-align center
                color color3
                font-size size3
            &:hover 
                background-color #cdcdcd
                color color2

    .common-search
        position relative
        height 100px
    .common-search-box
        padding 20px 0

        > div
            position relative
            margin: 0 auto
            width 420px
            > input
                width 384px 
                display: block
                height 24px;
                line-height 20px
                padding 8px 16px
                border 2px solid color-base
                font-size 14px
                color #666
                background url(/public/search.png) no-repeat 382px center
            > a 
                position absolute
                top 50%
                margin-top -19px 
                right 5px 
                width 38px
                height 38px

        > nav
            margin 12px auto 0
            width 420px
            line-height 14px
            > a
                margin 0 5px
            > a, > span
                color color3
                font-size size3
  
    .common-sign
        position absolute
        right 20px
        top 33px 
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
            &.active 
                cursor pointer 
        > span
            margin 0 5px
  
    .common-header 
        background-color #fff
    .common-inner
        width main-width
        padding 6px 0
        margin: 0 auto
        display flex
        > a
            position relative
            display block
            width 110px
            margin-right 10px 
            height 28px
            line-height 28px
            color color3
            text-align center
            font-size 16px
            border-radius 5px

            > i 
                position absolute
                right 7px
                top 11px
                border-top 6px solid #000
                border-left 6px solid transparent
                border-right 6px solid transparent

            &.router-link-active
                background-color #e6effc
                color #0069b8

</style>