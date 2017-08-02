<template>
    <div class="com_answer">
        <h3>我的回答</h3>

        <question-cell v-for="i in 1" :key="i"></question-cell>
    </div>
</template>

<script type="text/javascript">
    import questionCell from '../../modules/question-cell.vue';

    export default {
        data(){
            return {
                topMenu: 0
            }
        },
        components: {
            questionCell
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .com_answer h3 
        height 40px
        line-height 40px
        font-size size2
        color color2
        text-indent 14px
        border-bottom color-border
        border color-border
        background-color #fff
</style>