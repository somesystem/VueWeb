<template>
    <div>
        <common-item v-for="i in 5" :key="i"></common-item>

        <common-page></common-page>
    </div>
</template>

<script type="text/javascript">
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