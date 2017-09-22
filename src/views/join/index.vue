<template>
    <div>
        <sign-head type="1"></sign-head>
        <router-view class="main-width"></router-view>
        <sign-foot></sign-foot>

    </div>

</template>

<script type="text/javascript">
    import signHead from "../../modules/sign-head.vue";
    import signFoot from "../../modules/sign-foot.vue";

    export default {
        data(){
            return {
            }
        },
        components: {
            signHead,
            signFoot,
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .join-btn
        display block
        margin 0 auto
        width 300px
        height 40px 
        line-height 40px 
        text-align center
        font-size 18px
        color #fff
        background-color #A5A5A5

        &.active
            background-color color-red

            &:active,&:hover
                background-color color-red-select

</style>