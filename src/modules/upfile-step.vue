<template>
    <div class="common_person_upfile">
        <ul>
            <li class="active">产品类型</li>
            <li :class="step>=2?'active':''">基本信息</li>
            <li :class="step>=3?'active':''">募集账号</li>
            <li :class="step>=4?'active':''">融资信息</li>
        </ul>
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
    .common_person_upfile
        padding 30px 100px
        border-bottom color-border2
        width 840px
        margin 0 auto
        box-sizing border-box

        ul
            display flex
            justify-content flex-end
            li
                position relative
                width 100px
                background url('/public/step.png') no-repeat top center
                padding-top 48px
                color color3
                font-size size3
                line-height size3
                text-align center

                &:first-child
                    background-image url('/public/step_l.png')
                &:last-child
                    background-image url('/public/step_r.png')    
                &.active:after
                    content ""
                    position absolute
                    top -1px
                    left 0
                    width 100%
                    height 48px                    
                    background url('/public/step_ac.png') no-repeat top center
                &.active:first-child:after
                    background-image url('/public/step_ac_l.png')
                &.active:last-child:after
                    background-image url('/public/step_ac_r.png')

</style>