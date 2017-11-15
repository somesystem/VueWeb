<template>
    <div>
        <div class="about-top"></div>
        <div class="about-main main-width">
            <nav class="about-nav">
                <router-link exact :to="{'name':'about'}" tag="a">关于我们</router-link>
                <router-link :to="{'name':'connect'}" tag="a">联系我们</router-link>
                <router-link :to="{'name':'join'}" tag="a">加入我们</router-link>
                <router-link :to="{'name':'declare'}" tag="a">法律声明</router-link>
                <router-link :to="{'name':'issue'}" tag="a">反馈问题</router-link>
            </nav>
            <router-view></router-view>
        </div>
    </div>    
</template>

<script>

    export default {
        data(){
            return {
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    @import "../../styl/about";
</style>