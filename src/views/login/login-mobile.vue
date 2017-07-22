<template>
    <div class="login-mobile">
        <input type="tel" maxlength="11" autocomplete="off" placeholder="请输入手机号码" />
        <div class="login-mobile-yzm">
            <input maxlength="6" type="text" autocomplete="off" placeholder="请输入短信验证码" />
            <a @click="getcode()" :class="code.iNow==60?'active':''" href="javascript:;">{{code.msg}}</a>
        </div>
        

        <aside class="login-aside">
            <router-link tag="a" to="/join">免费注册</router-link>
            <router-link tag="a" to="/">忘记密码？</router-link>
        </aside>
        <div class="height58"></div>
        <a class="login-btn" @click="goHome()" href="javascript:;">登录</a>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                code: {
                    msg: "获取",
                    timer: null,
                    iNow: 60
                }
            }
        },
        methods: {
            getcode(){
                if (this.code.iNow==60) {
                    clearInterval(this.code.timer);
                    this.timebase.call(this);
                    this.code.timer = setInterval(this.timebase.bind(this),1000);
                }
            },
            timebase(){
                if (this.code.iNow-- >= 1) {
                    this.code.msg = this.code.iNow + 's';
                }else{
                    this.cleanCode();
                }
            },
            cleanCode(){
                clearInterval(this.code.timer);
                this.code.msg = '获取';
                this.code.iNow = 60;
            },
            goHome(){
                this.$router.push({"path":"/"});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .login-mobile
        > input
            background-image url(/public/mobile.png) 
             
    .login-mobile-yzm
        position relative
        width 300px
        height 40px
        margin 0 auto
        > input
            background-image url(/public/yzm.png)
        > a 
            position absolute
            top 6px
            right 6px 
            width 52px 
            height 28px 
            line-height 28px 
            font-size 12px 
            text-align center 
            color #fff
            background-color color-black
            &.active 
                background-color color-yellow 
                &:active,&:hover
                    background-color color-yellow-select

    .height58
        height 58px 
</style>