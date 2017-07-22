<template>
    <footer class="common-foot">
        <div class="main-width">
            <ul class="clearfix common-foot-l">
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;">新手入门</a></li>
                <li><a href="javascript:;">联系我们</a></li>
                <li><a href="javascript:;">合作伙伴</a></li>
                <li><a href="javascript:;">法律声明</a></li>
                <li><a href="javascript:;">站点地图</a></li>
                <li><a href="javascript:;">我要反馈</a></li>
                <li><a href="javascript:;">用户评级</a></li>
                <li><a href="javascript:;"></a></li>
                <li><a href="javascript:;">在线客服</a></li>
            </ul>

            <div class="common-foot-c">
                <div>
                    <img src="" />
                    <p>AI小影</p>
                    <p>微信公众号</p>
                </div>
                <div>
                    <img src="" />
                    <p>金斗云</p>
                    <p>小程序</p>
                </div>
            </div>
            <div class="common-foot-r">
                <i></i>
                <p>全国服务热线</p>
                <p>400-6368-888</p>
                <p>周一到周五：8:30~20:30</p>
                <p>周六到周日：9:00~21:00</p>
            </div>
        </div>
        <p>Copyright © 2017 杭州现象级网络科技有限公司 浙ICP备案 1036868号</p>
    </footer>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-foot
        background-color #171b25
        padding 30px 40px 0

        > div 
            display flex 
        > p     
            font-size 14px 
            height 40px 
            line-height 40px 
            text-align center 
    .common-foot-l 
        width 340px 
        li 
            float left
            width 50%
            text-align center
            height 18px 
            line-height 18px 
            margin-bottom 22px  
            a 
                font-size 14px 
                color #424650
                &:hover
                    color #fff
                    font-size 18px 

    .common-foot-c
        flex 1
        padding 28px 108px 
        border-left 1px solid #303848
        border-right 1px solid #303848
        display flex 
        justify-content space-between
        > div 
            width 80px 
            text-align center 
            img 
                display block
                width 80px 
                height 80px 
            p:nth-of-type(1)
                margin-top 6px
                height 28px 
                color #fff
                font-size 14px
            p:nth-of-type(2)
                font-size 12px 
                height 12px 
                line-height 12px 
                color #424650

    .common-foot-r
        width 340px 
        > i 
            display block
            width 50px 
            height 50px 
            margin 0 auto 20px 
            background url('/public/tel.png') no-repeat

        > p 
            text-align center
            font-size 14px 
            line-height 24px 
            color #424650
            &:nth-of-type(1),
            &:nth-of-type(2)
                color #fff
            &:nth-of-type(2)
                font-size 20px 
                line-height 34px 
                margin-bottom 18px 
</style>