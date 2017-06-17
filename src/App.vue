<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./styl/reset";
    @import "./styl/base";

    .fade-enter-active, .fade-leave-active
        transition all .2s ease

    .fade-enter, .fade-leave-active
        opacity 0
    .main-width
        width main-width
        margin 0 auto
        box-sizing border-box
    .color-red
        color color-red !important
    .bg-white
        background-color #fff
    .bg-grey
        background-color #f8f8f8

</style>

<style>
    ::-webkit-input-placeholder{
        color: #a5a5a5;
    }
    :-moz-placeholder {
        color: #a5a5a5;
    }
    ::-moz-placeholder{
        color: #a5a5a5;
    }
    :-ms-input-placeholde{
        color: #a5a5a5;
    }
</style>
