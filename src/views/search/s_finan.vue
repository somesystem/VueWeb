<template>
    <div>
        <div class="financial-item-box">
            <financial-item v-for="i in 9" :key="i"></financial-item>
        </div>

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