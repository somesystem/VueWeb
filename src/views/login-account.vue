<template>
    <div class="login-account">
        <input type="text" maxlength="20" autocomplete="off" placeholder="请输入用户名/邮箱" />
        <input type="password" maxlength="20" autocomplete="off" placeholder="请输入密码" />
        <div class="login-swiper">
            <span>请按住滑块，拖动最右边</span>
            <i></i>
            <a href="javascript:;"></a>
        </div>
        <aside class="login-aside">
            <router-link tag="a" to="/join">免费注册</router-link>
            <router-link tag="a" to="/">忘记密码？</router-link>
        </aside>
        <a class="login-btn" href="javascript:;">登录</a>
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
    @import "../styl/base";
    .login-account
        > input
            &:nth-child(1)
                background-image url(/public/user2.png) 
            &:nth-child(2)
                background-image url(/public/password.png) 
    .login-swiper
        position relative
        margin 0 auto 18px 
        width 300px
        height 40px 
        line-height 40px 
        background-color #f1f1f1
        text-align center 
        font-size size3 
        color color3
        > span 
            z-index 5
            position relative
        > i 
            position absolute
            top 0
            left 0
            height 100%
            width 50%
            background-color #58bc29
        > a 
            z-index 10
            position absolute
            top 0
            left 50%
            width 40px 
            height 40px 
            background url(/public/login-img1.png) no-repeat

            &.end
                background-image url(/public/login-img2.png)
    
</style>