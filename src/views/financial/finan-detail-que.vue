<template>
    <div>
        <question-cell v-for="i in 4" :key="i"></question-cell>
        <common-page></common-page>
    </div>
</template>

<script>
    import questionCell from '../../modules/question-cell.vue';
    export default {
        data(){
            return {
            }
        },
        components: {
            questionCell
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>