<template>
    <div class="com_article">
        <h3>我的文章</h3>

        <article-cell v-for="i in 4" :key="i"></article-cell>
        <common-page></common-page>
    </div>
</template>

<script type="text/javascript">
    import articleCell from '../../modules/article-cell.vue';

    export default {
        data(){
            return {
                topMenu: 0
            }
        },
        components: {
            articleCell
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .com_article h3 
        height 40px
        line-height 40px
        font-size size2
        color color2
        text-indent 14px
        border-bottom color-border
        border color-border
        background-color #fff
</style>