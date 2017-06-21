<template>
    <div class="bg-grey">
        <div class="main-width search-main">
            <nav class="search-nav">
                <router-link tag="a" :to="{name:'s_pro'}" exact>产品（89）</router-link>
                <router-link tag="a" :to="{name:'s_finan'}">理财师（11）</router-link>
                <router-link tag="a" :to="{name:'s_topic'}">话题（35）</router-link>
            </nav>

            <router-view></router-view>
        </div>
        
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        created(){
            
        },
        mounted(){
        }

    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
    .search-main 
        padding-top 40px 
    .search-nav
        display flex 
        width 300px
        height 30px
        border color-border
        border-radius 5px 
        overflow hidden
        > a 
            display block
            flex 1 
            height 30px 
            line-height 30px 
            border-right color-border
            text-align center 
            font-size size2 
            color color2 
            background-color #fff
            
            &.router-link-active 
                background-color color-red
                color #fff
            &:last-child
                border-right none
</style>