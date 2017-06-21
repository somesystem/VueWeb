<template>
    <div>
        <common-item v-for="i in 5" :key="i"></common-item>

        <nav class="common-top-page">
            <a href="javascript:;">首页</a>
            <a href="javascript:;">上一页</a>
            <span>第1页/共5页</span>
            <a href="javascript:;">下一页</a>
            <a href="javascript:;">尾页</a>
        </nav>
    </div>
</template>

<script type="text/javascript">
    import commonItem from "../../modules/common-item.vue";

    export default {
        data(){
            return {

            }
        },
        components: {
            commonItem
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>