<template>
    <div class="bg-grey">
        <div v-if="searchNum>0" class="main-width search-main">
            <h3>已为你搜索到{{searchNum}}条关于“{{searchKey}}”的结果</h3>
            <nav class="search-nav">
                <router-link tag="a" :to="{name:'s_pro'}" exact>产品（89）</router-link>
                <router-link tag="a" :to="{name:'s_finan'}">理财师（11）</router-link>
                <router-link tag="a" :to="{name:'s_topic'}">话题（35）</router-link>
            </nav>

            <router-view></router-view>
        </div>
        <div v-if="searchNum==0" class="main-width search-no-result">
            <img src="/public/no_result.png" />
            <p>很抱歉，没有搜索到关于“{{searchKey}}”的结果</p>
            

            <h4><span>为您推荐</span></h4>
            <common-item :key="item" v-for="item in 3"></common-item>

        </div>
        
    </div>
</template>

<script type="text/javascript">
    import {mapState} from 'vuex';

    export default {
        data(){
            return {

            }
        },
        computed: mapState(["searchKey","searchNum"]),
        created(){
            
        },
        mounted(){
        }

    }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
    .search-main 
        > h3 
            line-height 40px 
            color color-blue2
            font-size size3
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
                background-color color-blue2
                color #fff
            &:last-child
                border-right none

    .search-no-result
        padding-top 110px
        > img 
            display block
            margin 0 auto 12px 
        > p 
            font-size size3 
            line-height size3 
            color color3 
            text-align center 
            margin-bottom 164px
        > h4 
            position relative
            height 40px 
            line-height 40px 
            &:before
                content ""
                position absolute
                top 50%
                margin-top -1px 
                left 0
                width 100%
                height 2px 
                background-color #e5e5e5
            > span 
                z-index 5
                position relative
                display block
                width 120px 
                text-align center 
                margin 0 auto
                font-size size1
                color color1 
                background-color #f8f8f8

</style>