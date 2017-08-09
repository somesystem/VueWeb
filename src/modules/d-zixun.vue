<template>
    <div>
        <div class="zixun-mask"></div>
        <div class="zixun-con">
            <a @click="closeZixun()" href="javascript:;" class="close"></a>
            <p>您咨询的理财师已收到通知，<br/>将尽快与您联系！</p>
            <a @click="closeZixun()" class="zixun-btn" href="javascript:;">确定</a>
        </div>
        
    </div>
</template>


<script>
    import {mapMutations} from "vuex";
    export default {
        props: {
            id: {
                type: String|Number,
                required: true
            }
        },
        watch: {
            id(newVal){
                // then fetch 
            }
        },
        methods: mapMutations(["closeZixun"]),
        data(){
            return {
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .zixun-mask
        z-index 900
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.5)
    .zixun-con
        z-index 1000
        position fixed
        top 50%
        left 50%
        width 280px
        margin-left -140px
        margin-top -80px 
        border-radius 5px 
        background-color #fff

        .close 
            position absolute
            top 0
            right 0
            width 38px
            height 38px
            background url('/public/close.png') no-repeat center center
        > p 
            padding 50px 20px 29px
            text-align center 
            font-size size3
            color color3
            line-height 20px 
        .zixun-btn
            display block
            width 100%
            height 40px 
            line-height 40px 
            border-top color-border
            border-radius 0 0 5px 5px 
            text-align center
            font-size size3 
            color color3  
</style>
