<template>
    <div :class="['promt',promt.isShow?'show':'']">
        <p>请填写投诉理由：</p>
        <textarea ref="promt"></textarea>
        <a @click="enter()" class="promt-enter" href="javascript:;">提交</a>
        <a @click="cancel()" class="promt-close" href="javascript:;"></a>
    </div>
</template>

<script type="text/javascript">
    import { mapState,mapMutations,mapActions } from "vuex";

    export default {
        data(){
            return {
                text: ""
            }
        },
        computed: mapState(["promt"]),
        methods: {
            ...mapActions(["toast"]),
            ...mapMutations(["setPromt"]),
            enter(){
                this.setPromt({isShow:false});
                this.toast("提交成功");
                this.$refs.promt.value = "";
            },
            cancel(){
                this.setPromt({isShow:false});
                this.$refs.promt.value = "";
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .promt
        display none
        position fixed
        top 50%
        left 50%
        margin-top -110px
        margin-left -100px 
        width 300px
        padding 0 20px 
        background-color rgba(0,0,0,0.6)
        border-radius 5px
        color #fff
        box-sizing border-box
        &.show 
            display block
            text-align center 

        p 
            padding 20px 0 
            font-size size2

        textarea 
            display block
            width 100%
            height 100px 
            resize none 
    .promt-enter 
        display block
        font-size size3
        color #fff 
        line-height 20px 
        margin 20px auto 

    .promt-close
        position absolute
        top 0
        right 0
        width 30px 
        height 30px 
        background url("/public/close2.png") no-repeat center center 
</style>