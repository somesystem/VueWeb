<template>
    <footer class="sign-foot">
        <nav>
            <router-link :to="{'name':'about'}" tag="a">关于我们</router-link>
            <router-link :to="{'name':'connect'}" tag="a">联系我们</router-link>
            <router-link :to="{'name':'join'}" tag="a">加入我们</router-link>
            <router-link :to="{'name':'declare'}" tag="a">法律声明</router-link>
            <router-link :to="{'name':'issue'}" tag="a">反馈问题</router-link>
            <router-link tag="a" :to="{'name':'market',params:{type:'1'}}">金融超市</router-link>
            <!--<router-link tag="a" :to="{'name':'forum'}">理财社区</router-link>-->
            <router-link tag="a" :to="{'name':'financial'}">找理财师</router-link>
        </nav>
        <p>Copyright © 2017 杭州现象级网络科技有限公司 浙ICP备案 1036868号</p>
    </footer>
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
    
    .sign-foot
        padding 60px 0 20px
        font-size size3
        color color3 
        line-height size3 
        > nav 
            display flex
            justify-content center 
            > a
                display inline-flex
                border-right 1px solid #666
                margin-right 4px
                padding-right 4px
                color color3 
                &:last-child
                    border-right none
        > p 
            margin-top 18px 
            text-align center
</style>