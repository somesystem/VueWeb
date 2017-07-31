<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <d-toast :status="toast.status" :msg="toast.msg"></d-toast>
    </div>
</template>

<script type="text/javascript">
    import dToast from './modules/d-toast.vue';
    import { mapState } from "vuex";
    export default {
        data(){
            return {}
        },

        computed: mapState(["toast"]),
        components:{
            dToast
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
