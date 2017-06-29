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
    @import "./styl/common";
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
