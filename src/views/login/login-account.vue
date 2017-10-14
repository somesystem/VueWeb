<template>
    <div class="login-account">
        <input type="text" maxlength="20" autocomplete="off" placeholder="请输入用户名/邮箱" />
        <input type="password" maxlength="20" autocomplete="off" placeholder="请输入密码" />
        <div id="login-swiper" class="login-swiper">
            <span>请按住滑块，拖动最右边</span>
            <i></i>
            <a :class="canLogin?'end':''" href="javascript:;"></a>
        </div>
        <aside class="login-aside">
            <router-link tag="a" to="/join">免费注册</router-link>
            <router-link tag="a" to="/forget">忘记密码？</router-link>
        </aside>
        <a class="login-btn" @click="goHome()" href="javascript:;">登录</a>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                canLogin: false
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.fnSwiper();
            })
        },
        methods: {
            goHome(){
                this.$router.push({"path":"/"});
            },
            fnSwiper(){
                var oSwiper = document.getElementById("login-swiper");
                
                var disX,startX;
                var _this = this;
                oSwiper.children[2].onmousedown = function (ev){
                    ev = ev || window.event;
                    startX = ev.clientX - this.offsetLeft;
                    
                    document.onmousemove = function (ev){
                        ev = ev || window.event;
                        disX = ev.clientX - startX;

                        oSwiper.children[1].style.WebkitTransition = 'none';
                        oSwiper.children[1].style.transition = 'none';
                        oSwiper.children[2].style.WebkitTransition = 'none';
                        oSwiper.children[2].style.transition = 'none';

                        if (disX <= 0) {disX = 0}
                        if (disX >= 245) {
                            disX = 260;
                            _this.canLogin = true;
                            document.onmousemove = null;
                        }
                        oSwiper.children[1].style.width = disX + 'px';
                        oSwiper.children[2].style.left = disX + 'px';
                    }
                    document.onmouseup = function (){
                        oSwiper.children[1].style.WebkitTransition = 'width 0.5s';
                        oSwiper.children[1].style.transition = 'width 0.5s';oSwiper.children[2].style.WebkitTransition = 'left 0.5s';
                        oSwiper.children[2].style.transition = 'left 0.5s';

                        if (disX != 260) {
                            oSwiper.children[1].style.width = '0px';
                            oSwiper.children[2].style.left = '0px';
                        }

                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                    return false 
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
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
            width 0
            background-color #58bc29
            transition width 0.5s
        > a 
            z-index 10
            position absolute
            top 0
            left 0
            width 40px 
            height 40px 
            background url(/public/login-img1.png) no-repeat
            transition left 0.5s

            &.end
                cursor default
                background-image url(/public/login-img2.png)
    
</style>