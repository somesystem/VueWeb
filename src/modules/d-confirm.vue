<template>
    <div :class="['confirm',confirm.isShow?'show':'']">
        <p>{{confirm.msg}}</p>
        <div>
            <a @click="enter()" href="javascript:;">确定</a>
            <a @click="cancel()" href="javascript:;">取消</a>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState,mapMutations } from "vuex"; // setConfirm

    export default {
        data(){
            return {
                
            }
        },
        computed: mapState(["confirm"]),
        methods: {
            ...mapMutations(["setConfirm"]),
            cancel(){
                this.setConfirm({msg:"",isShow:false});
            },
            enter(){
                this.setConfirm({msg:"取消订单？",isShow:false});
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .confirm
        display none
        position fixed
        top 50%
        left 50%
        margin-top -50px
        margin-left -100px 
        width 200px
        height 100px
        background-color rgba(0,0,0,0.6)
        border-radius 5px
        color #fff
        text-align center 
        &.show 
            display block

        p 
            padding 20px 
            font-size size2
        > div 
            display flex 
            justify-content center 
            a 
                display block
                font-size size3
                color #fff 
                line-height 20px 
                &:nth-child(1)
                    margin-right 30px 


</style>