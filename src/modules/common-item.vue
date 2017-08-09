<template>
    <div class="common-item">
        <product-item></product-item>
        <div class="common-item-r">
            <p @click="toLicai()" class="common-item-r-t">已成交100单</p>
            <div @click="toLicai()" class="common-item-r-c">
                <div>
                    <img src="" />
                </div>
                <div>
                    <p>4.5</p>
                    <p>综合评分</p>
                </div>
            </div>
            <div class="common-item-r-b">
                <div @click="toLicai()">
                    <p><span>蔡大大</span><span>江西</span></p>
                    <p>上海宽象资本投资</p>
                </div>
                <div>
                    <a @click="setZixunId(888)" href="javascript:;">咨询ta</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    var e = 777;
    import {mapMutations} from "vuex";
    export default {
        data(){
            return {}
        },
        methods: {
            ...mapMutations(["setZixunId"]),
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++e}});
            }
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-item-r
        width 240px
        cursor pointer
    
    .common-item-r
        border-left color-border

    .common-item-r-t
        height 14px
        font-size size5
        color color5
        line-height 14px
        text-align right
        padding-right 10px
        margin-bottom 5px
    .common-item-r-c
        display flex
        align-items center
        > div:nth-child(1)
            flex 3
            border-right color-border
            img 
                display block
                margin 0 auto
                width 70px
                height 70px
        > div:nth-child(2)
            flex 2
            text-align center
            p:nth-child(1)
                height 18px
                font-size 18px
                line-height 18px
                color color-red
                margin-bottom 12px
            p:nth-child(2)
                height 14px
                line-height 14px
                font-size size2 
                color color2 
    .common-item-r-b
        display flex
        align-items center
        margin-top 15px
        > div:nth-child(1)
            flex 3
            p 
                text-align center 
                height 16px 
                line-height 16px 
                color color3
                font-size size3
                &:nth-child(1)
                    margin-bottom 10px
                    color color2
                    font-size size2
                span:nth-child(2)
                    margin-left 14px
                    color color5
                    font-size size5
                    color color-black
        > div:nth-child(2)
            flex 2
            > a 
                margin 0 auto
                display block
                width 72px
                height 26px
                line-height 26px
                text-align center
                font-size 14px
                color color-blue
                border-radius 5px
                border 1px solid color-blue

</style>