<template>
    <div>
        <div :key="i" v-for="i in 5" class="finan-detail-pro-item common-item">
            <product-item></product-item>
        </div>
        <common-page></common-page>
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
</style>