<template>
    <div>
        <div class="common-person-order-top">
            <ul>
                <li :class="[topMenu==0?'active':'']"><a @click="topMenu=0" href="javascript:;">收藏的文章</a></li>
                <li :class="[topMenu==1?'active':'']"><a @click="topMenu=1" href="javascript:;">收藏的问题</a></li>
                <li :class="[topMenu==2?'active':'']"><a @click="topMenu=0" href="javascript:;">收藏的话题</a></li>
            </ul>
        </div>

        <div class="com_myselect_main">
            <div v-show="topMenu==0">
                <article-cell v-for="i in 2" :key="i"></article-cell>
            </div>
            <div v-show="topMenu==1">
                <question-cell v-for="i in 3" :key="i"></question-cell>
            </div>
            <div v-show="topMenu==2">
                
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
</style>