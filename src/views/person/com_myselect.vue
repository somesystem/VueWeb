<template>
    <div>
        <div class="common-person-order-top">
            <ul>
                <li :class="[topMenu==0?'active':'']"><a @click="topMenu=0" href="javascript:;">收藏的文章</a></li>
                <li :class="[topMenu==1?'active':'']"><a @click="topMenu=1" href="javascript:;">收藏的问题</a></li>
                <li :class="[topMenu==2?'active':'']"><a @click="topMenu=2" href="javascript:;">收藏的话题</a></li>
            </ul>
        </div>

        <div class="com_myselect_main">
            <div v-show="topMenu==0">
                <article-cell v-for="i in 2" :key="i"></article-cell>
            </div>
            <div v-show="topMenu==1">
                <question-cell v-for="i in 3" :key="i"></question-cell>
            </div>
            <div class="com_myselect_topic" v-show="topMenu==2">
                <h3>我收藏的话题：</h3>
                <ul class="clearfix">
                    <li>私募股权</li>
                    <li>信托</li>
                    <li>私募股权</li>
                    <li>信托</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import questionCell from '../../modules/question-cell.vue';
    import articleCell from '../../modules/article-cell.vue';

    export default {
        data(){
            return {
                topMenu: 0
            }
        },
        components: {
            questionCell,
            articleCell
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .com_myselect_topic
        padding 30px 
        border color-border 
        background-color #fff

        > h3 
            font-size size3
            color color3 
            line-height size3 
        > ul
            padding-top 20px 
            margin-bottom -8px
            li 
                float left
                margin-bottom 8px 
                margin-right 14px 
                padding 0 4px
                height 26px
                line-height 26px
                background-color #c9d7ec
                border-radius 5px
                color #fff
                cursor pointer 

</style>