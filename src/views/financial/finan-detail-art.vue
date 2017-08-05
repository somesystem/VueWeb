<template>
    <div>
        <article-cell v-for="i in 5" :key="i"></article-cell>
        <common-page></common-page>
    </div>    
</template>

<script>
    import articleCell from '../../modules/article-cell.vue';

    export default {
        data(){
            return {
            }
        },
        components: {
            articleCell
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>