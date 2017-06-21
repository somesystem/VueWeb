<template>
    <div>
        <sign-head type="2"></sign-head>
        <div class="login-main">
            <div class="main-width">
                <div class="login-box">
                    <nav>
                        <router-link tag="a" to="/login" exact>帐号登录</router-link>
                        <router-link tag="a" to="/login/mobile">手机登录</router-link>
                    </nav>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>

        <sign-foot></sign-foot>
    </div>

</template>

<script type="text/javascript">
    import signHead from "../../modules/sign-head.vue";
    import signFoot from "../../modules/sign-foot.vue";

    export default {
        data(){
            return {}
        },
        components: {
            signHead,
            signFoot,
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .login-main
        height 500px
        background url(/public/login-banner.png) no-repeat center center
        > div 
            position relative
    .login-box
        position absolute
        top 90px 
        right 120px 
        width 350px
        height 320px 
        background-color #fff
        box-sizing border-box 
        padding 18px 

        > nav 
            display flex 
            margin-bottom 18px 
            > a 
                flex 1
                height 30px 
                line-height 30px 
                text-align center
                color color1
                font-size size1 
                &:nth-child(1) 
                    border-right color-border
                &.router-link-active
                    color color-red 
        input
            display block
            width 300px
            height 40px 
            margin 0 auto 18px
            border color-border
            padding 10px 40px
            line-height 20px 
            font-size size3
            color color3 
            box-sizing border-box
            background-color #fff
            background-position 10px center
            background-repeat no-repeat
    .login-aside
        display flex
        justify-content space-between
        margin 18px auto 
        width 300px
        > a 
            height size5 
            line-height size5 
            font-size size5 
            color color5
    .login-btn
        display block
        margin 0 auto 
        width 300px
        height 40px
        line-height 40px 
        background-color color-red
        color #fff
        text-align center 

        &:active,&:hover
            background-color color-red-select
</style>