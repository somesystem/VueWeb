<template>
    <div>
        <div :key="i" v-for="i in 5" class="finan-detail-pro-item common-item no-margin">
            <product-item></product-item>
        </div>
        <common-page class="finan-detail-pro-page"></common-page>
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
    .finan-detail-pro-item.common-item.no-margin
        margin 0
        margin-top -1px
    .finan-detail-pro-page
        margin-top -1px
        padding-top 12px
        border color-border
</style>