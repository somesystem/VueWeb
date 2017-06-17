<template>
    <div>
        <sign-head type="1"></sign-head>
        <router-view></router-view>

        <sign-foot></sign-foot>
    </div>

</template>

<script type="text/javascript">
    import signHead from "../modules/sign-head.vue";
    import signFoot from "../modules/sign-foot.vue";

    export default {
        data(){
            return {}
        },
        components: {
            signHead,
            signFoot,
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";



</style>