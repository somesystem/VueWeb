<template>
    <div class="financial-item">
        <p>已在金豆成交100单</p>
        <div class="financial-item-t">
            <div class="financial-item-l">
                <img @click="toLicai()" src="" />
                <p @click="toLicai()"><span>蔡大大</span><i>江西</i></p>
                <a @click="setZixunId(777)" class="common-zixun" href="javascript:;">咨询ta</a>
            </div>
            <div @click="toLicai()" class="financial-item-r">
                <div class="financial-item-r-t">
                    <div>
                        <p><!-- 10位 --></p>
                        <p><!-- 服务客户 --></p>
                    </div>
                    <!-- <div>
                        <p>4.7</p>
                        <p>专业度</p>
                    </div>
                    <div>
                        <p>4.5</p>
                        <p>服务态度</p>
                    </div>
                    <div>
                        <p>4.9</p>
                        <p>诚信度</p>
                    </div> -->
                </div>
                <p>上海宽带资本投资</p>
                <p>擅长领域：基础建设、房地产</p>
            </div>
        </div>
        <nav @click="toLicai()" class="financial-item-b">
            <a href="javascript:;"><span>腾云资产 - 天山1号(12月期 年化率 7%)</span><i>在售</i></a>
            <a href="javascript:;"><span>腾云资产 - 天山1号(12月期 年化率 8%)</span><i>预热</i></a>
        </nav>
        
            
            
        </div>
    </div>

</template>

<script type="text/javascript">
    var k = 3000;
    import {mapMutations} from "vuex";
    export default {
        data(){
            return {

            }
        },
        methods: {
            ...mapMutations(["setZixunId"]),
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++k}});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .financial-item
        background-color #fff
        width 376px
        padding 18px 0 12px 
        margin-right 16px
        margin-bottom 16px
        box-sizing border-box
        border color-border 
        &:hover
            box-shadow 0 0 10px 3px rgba(0,0,0,0.2)

        &:nth-child(3n)
            margin-right 0

        > p 
            padding-right 18px 
            height 20px
            line-height 20px 
            text-align right 
            font-size size4
            color color4 
    .financial-item-t
        cursor pointer 
        position relative
        padding 0 18px 20px
        border-bottom color-border
        display flex 
        > a
            position absolute
            top 0
            left 0
            right 0
            bottom 0

    .financial-item-l
        width 100px 
        > img 
            display block 
            margin 0 auto 
            width 60px
            height 60px
        > p 
            padding 12px 0
            text-align center
            span 
                height size2
                line-height size2
                font-size size2 
                color color2 
            i   
                margin-left 12px 
                font-size size5
                color color5 

    .financial-item-r
        flex 1
        > p 
            height 28px
            line-height 28px 
            font-size size3 
            color color3 
            text-indent 10px 

    .financial-item-r-t
        display flex
        width 100%
        margin-bottom 16px 

        > div
            flex 1
            p 
                text-align center
                &:nth-child(1)
                    height 36px 
                    line-height 36px 
                    font-size 20px 
                    color color-red
                &:nth-child(2)
                    height 16px 
                    line-height 16px 
                    font-size size5
                    color color5 

    .financial-item-b
        padding 6px 0
        > a 
            padding 0 20px 
            display flex
            width 100%
            height 26px
            line-height 26px
            color color3
            font-size size3 
            box-sizing border-box
            
            > span
                display block
                flex 1
                margin-right 20px 
                overflow hidden 
                text-indent 10px 
                white-space:nowrap; 
                text-overflow:ellipsis;
            > i
                display block 
                width 36px
                height 26px 
                background url(/public/sign.png) no-repeat center center 
                color #fff 
                text-align center 

            &:nth-of-type(2) > i
                background-image url(/public/sign2.png)
</style>