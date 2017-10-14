<template>
    <div class="main-width">
        <header class="sign-head2">
            <div class="main-width">
                <router-link tag="a" to="/"><img class="sign-img2" src="/public/logo.png"></router-link>
                
                <ul class="sign-nav2">
                    <li @click="back()">返回登录</li>
                    <li>关注微信<img src="/public/gz.png"></li>
                    <li><img src="/public/tel2.png">联系客服：400-506789</li>
                </ul>
            </div>
        </header>

        <div class="forget">
            <p>输入新密码</p>
            <div class="forget-box">
                <div class="forget-item" v-show="step==1">
                    <div>
                        <span>手机号码：</span>
                        <input type="text" />
                    </div>
                    <p></p>
                </div>
                <div class="forget-item forget-item2" v-show="step==1">
                    <div>
                        <span>手机号码：</span>
                        <input type="password" />
                        <a @click="getcode()" :class="code.iNow==60?'active':''" href="javascript:;">{{code.msg}}</a>
                    </div>
                    <p></p>
                </div>
                <div class="forget-item" v-show="step==2">
                    <div>
                        <span>新密码：</span>
                        <input type="text" />
                    </div>
                    <p><i></i><i>请输入6-12个字符和数字组合</i></p>
                </div>
                <div class="forget-item" v-show="step==2">
                    <div>
                        <span>再次输入新密码</span>
                        <input type="text" />
                    </div>
                    <p></p>
                </div>
                <div class="forget-item">
                    <div>
                        <span></span>
                        <a @click="next()" class="forget-next" href="javascript:;">{{step==1?'下一步':'确定'}}</a>
                    </div>
                </div>
                
            </div>
            <p><a href="javascript:;" @click="back()">返回登录</a></p>
        </div>

        <sign-foot></sign-foot>
    </div>    
</template>

<script type="text/javascript">
    import signFoot from "../../modules/sign-foot.vue";

    export default {
        data(){
            return {
                step: 1,
                code: {
                    msg: "获取手机验证码",
                    timer: null,
                    iNow: 60
                }
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
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
                this.code.msg = '获取手机验证码';
                this.code.iNow = 60;
            },
            next(){
                if (this.step == 1) {
                    this.step = 2;
                }else{
                    this.$router.push({path:'/'})
                }
            }
        },
        components: {
            signFoot
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .sign-head2
        > div
            position relative
            display flex
            padding 0 20px 
            height 100px 
            justify-content flex-end
            align-items center 
            .sign-img2 
                position absolute
                top 20px 
                left 20px
    
    .sign-nav2
        display flex
        li 
            height 36px
            line-height 36px
            padding 0 40px
            border-right 1px solid #979797
            cursor pointer 
            img 
                vertical-align middle
            &:nth-child(2) img 
                margin-left 20px
            &:nth-child(3) img 
                margin-right 20px
    
    .forget
        > p 
            font-size 16px 
            line-height 36px 
    .forget-box
        padding 120px 0 100px
        border-top color-border
        border-bottom color-border
        

    .forget-item
        > div 
            display flex 
            justify-content center
        span
            display block
            width 112px
            line-height 40px 
            margin-right 10px 
            text-align right 
        input 
            display block
            width 300px 
            height 40px 
            border color-border
            box-sizing border-box
            font-size size3
            color color3
            padding 10px 
            &.min   
                width 166px 
        p 
            display flex 
            justify-content center
            min-height 20px 
            i 
                display block
                &:nth-child(1)
                    width 112px
                    margin-right 10px
                &:nth-child(2)
                    width 300px
                    line-height 30px
    .forget-item2
        input 
            width 166px 
        a 
            margin-left 14px
            display block
            width 120px 
            height 40px 
            line-height 40px 
            background-color color-black
            color #fff
            text-align center
            &.active
                background-color color-red
    .forget-next
        margin-top 60px
        display block
        width 300px 
        height 40px
        line-height 40px 
        background-color color-red
        color #fff
        text-align center
</style>