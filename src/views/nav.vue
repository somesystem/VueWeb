<template>
    <div>
        <div class="bg-white">
            <nav class="common-search main-width">
                <router-link tag="a" to="/"><img class="common-logo" src="/public/logo.png" /></router-link>
                <div class="common-search-box">
                    <div>
                        <input v-model="s_key" @blur="fnBlur()" @focus="fnFocus()" @keydown.enter="fnSeach()" type="text" placeholder="搜产品/理财师/话题" />
                        <a @click="fnSeach()" href="javascript:;"></a>
                        <ul v-show="isFocus" class="common-search-lx">
                            <li><span>林州重机</span><span>私募sadwd</span><span>理财师：岳大大sas</span></li>
                            <li><span>天交所-林州重机</span><span>私募</span><span>理财师</span></li>
                            <li><span>天交所-林州重机的未读无群多群无多群无多群</span><span>私募</span><span>理财师：岳大大的未读群的未读群</span></li>
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

                    <a v-if="loginStatus==1" @click="toMyhome()" href="javascript:;">个人中心</a>
                    <a v-if="loginStatus==2" @click="loginOut()" href="javascript:;">退出登录</a>
                </div>
            </nav>
        </div>
        <header class="common-header">
            <nav class="common-inner">
                <router-link tag="a" to="/nav" exact>首页</router-link>
                <router-link tag="a" to="/nav/market">金融超市<i></i></router-link>
                <router-link tag="a" to="/nav/financial">找理财师</router-link>
                <!--<router-link tag="a" to="/nav/forum">理财社区</router-link>-->
                <!--<router-link tag="a" to="/nav/about">关于我们</router-link>-->
                
                <aside @mouseout="fnMarket()" @mouseover="fnMarket2()"></aside>
                <ul @mouseout="fnMarket()" @mouseover="fnMarket2()" :class="[showMarket?'active':'']">
                    <li @click="chooseM(1)">集合信托</li>
                    <li @click="chooseM(2)">资管计划</li>
                    <li @click="chooseM(3)">债权基金</li>
                    <li @click="chooseM(4)">政府债</li>
                    <li @click="chooseM(5)">股权基金</li>
                    <li @click="chooseM(6)">证券基金</li>
                </ul>
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
    import {mapState,mapMutations} from "vuex";

    export default {
        data(){
            return {
                isFocus: false,
                test: true,

                showMarket: false,
                marketTimer: null,
                s_key: ''
            }
        },
        computed: {
            /*searchKey: {
                get () {
                  return this.$store.state.searchKey
                },
                set (value) {
                  this.$store.commit('setSearchKey', value)
                }
            }*/
            ...mapState(["loginStatus"])
        },
        mounted(){
            this.$nextTick(()=>{
                document.addEventListener("click",(e)=>{
                    var target = e.target || e.srcElement;
                    if (target.tagName.toUpperCase() != "ASIDE") {
                        this.showMarket = false;
                    }
                },false);
            });
        },
        methods: {
            ...mapMutations(["setSearchKey","setSearchNum"]),
            fnFocus(){
                this.isFocus = true;
            },
            fnBlur(){
                setTimeout(()=>{
                    this.isFocus = false;
                },300);
            },
            fnSeach(){
                if (this.s_key) {
                    this.setSearchKey(this.s_key);
                    if (Math.random()<0.5) {
                        this.setSearchNum((Math.random()*200|0)+20);
                        this.$router.push({name:'s_pro',params:{id:this.s_key}});
                    }else{
                        this.setSearchNum(0);
                        this.$router.push({name:'search',params:{id:this.s_key}});
                    }
                }
            },
            toMyhome(){
                this.$router.push({path:'/nav/person/id'});
            },
            loginOut(){
                this.test = false;
                this.$router.push({path:"/"});
            },
            fnMarket(){
                clearTimeout(this.marketTimer);
                this.marketTimer = setTimeout(()=>{
                    this.showMarket = false;
                },100);
            },
            fnMarket2(){
                clearTimeout(this.marketTimer);
                this.showMarket = true;
            },
            chooseM(type){
                this.showMarket = false;
                this.$router.push({name:'market',params:{type:type}});
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
                white-space:nowrap
                overflow:hidden
                text-overflow:ellipsis
                &:first-child
                    text-align left
                    text-indent 16px
                &:last-child
                    text-align left
                    padding-right 16px
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
        position relative
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
        
        > aside
            cursor pointer 
            z-index 10
            position absolute
            top 0
            left 120px 
            width 110px 
            height 34px 
        > ul 
            opacity 0
            z-index -1
            position absolute
            top 40px
            left 120px 
            width 110px 
            background-color #fff
            border-radius 5px 
            box-shadow 0 0 8px 2px rgba(0,0,0,0.1)
            transition 0.3s 

            &.active 
                opacity 1
                z-index 10
            li  
                font-size size3 
                color color3 
                line-height 32px 
                cursor pointer 
                text-align center
                &:hover 
                    background-color #f1f1f1


</style>