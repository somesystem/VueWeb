<template>
    <div class="join-sop">
        <span class="active">设置用户角色</span>
        <span :class="step>=2?'active':''">设置用户信息</span>
        <span :class="step>=3?'active':''">设置投资经历</span>
        <span :class="step>=4?'active':''">注册成功</span>
    </div>
</template>


<script type="text/javascript">
    export default {
        props: ['step'],
        data(){
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .join-sop
        display flex
        justify-content center
        > span 
            display block
            width 200px
            height 36px
            line-height 36px 
            background url(/public/join-top1.png) no-repeat
            text-align center
            font-size 14px 
            color #fff

            &.active
                background-image url(/public/join-top2.png)


</style>