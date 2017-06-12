<template>
    <div>
        <div class="market-top main-width">
            <p>首页>金融超市</p>
            <ul>
                <li><span>产品类型：</span></li>
                <li><a class="color-red" href="javascript:;">信托</a></li>
                <li><a class="color-red" href="javascript:;">资管</a></li>
                <li><a href="javascript:;">债券基金</a></li>
                <li><a href="javascript:;">证券基金</a></li>
                <li><a href="javascript:;">股权基金</a></li>
            </ul>
            <ul>
                <li><span>认购起点：</span></li>
                <li><a class="color-red" href="javascript:;">不限</a></li>
                <li><a href="javascript:;">0~50万</a></li>
                <li><a href="javascript:;">50~100万</a></li>
                <li><a href="javascript:;">100~300万</a></li>
                <li><a href="javascript:;">300万以上</a></li>
            </ul>
            <ul>
                <li><span>产品期限：</span></li>
                <li><a class="color-red" href="javascript:;">不限</a></li>
                <li><a href="javascript:;">0~6个月</a></li>
                <li><a href="javascript:;">6~12个月</a></li>
                <li><a href="javascript:;">12~24个月</a></li>
                <li><a href="javascript:;">24~36个月</a></li>
                <li><a href="javascript:;">36个月以上</a></li>
            </ul>
            <ul>
                <li><span>预期收益：</span></li>
                <li><a class="color-red" href="javascript:;">不限</a></li>
                <li><a href="javascript:;">0~10%</a></li>
                <li><a href="javascript:;">10~20%</a></li>
                <li><a href="javascript:;">20~50%</a></li>
                <li><a href="javascript:;">50%以上</a></li>
            </ul>
            <ul>
                <li><span>产品状态：</span></li>
                <li><a class="color-red" href="javascript:;">不限</a></li>
                <li><a href="javascript:;">预热</a></li>
                <li><a href="javascript:;">在售</a></li>
                <li><a href="javascript:;">已结束</a></li>
            </ul>
            <ul>
                <li><span>金斗云评级：</span></li>
                <li><a class="color-red" href="javascript:;">不限</a></li>
                <li><a href="javascript:;">五星</a></li>
                <li><a href="javascript:;">四星</a></li>
                <li><a href="javascript:;">三星</a></li>
                <li><a href="javascript:;">二星</a></li>
                <li><a href="javascript:;">一星</a></li>
            </ul>
        </div>
        <div class="main-width market-main">
            <nav>
                <div>
                    <span>信托</span>
                    <a href="javascript:;"></a>
                </div>
                <div>
                    <span>资管</span>
                    <a href="javascript:;"></a>
                </div>
            </nav>
            <ul>
                <li><a href="javascript:;">综合</a></li> 
                <li><a href="javascript:;">成交量</a></li> 
                <li class="active"><a href="javascript:;">收益</a></li> 
                <li><a href="javascript:;">佣金</a></li> 
                <li><a href="javascript:;">人气</a></li> 
                <li><a href="javascript:;">抵押</a></li> 
            </ul>

            <div>
                <common-item v-for="item in 5"></common-item>
                <nav class="market-page">
                    <a href="javascript:;">首页</a>
                    <a href="javascript:;">上一页</a>
                    <span>第1页/共5页</span>
                    <a href="javascript:;">下一页</a>
                    <a href="javascript:;">尾页</a>
                </nav>
            </div>
        </div>

        <div class="market-bottom">
            <div class="main-width">
                <financial-adv title="您可能需要的理财师"></financial-adv>
            </div>
        </div>
    </div>    
</template>

<script>
    import commonItem from "../modules/common-item.vue";
    import financialAdv from "../modules/financial-adv.vue";

    export default {
        data(){
            return {}
        },
        components: {
            commonItem,
            financialAdv
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .market-top
        background-color #fff
        box-sizing border-box
        padding 18px
        margin-top 18px 
        > p 
            height 30px
            line-heght 30px
            font-size 14px
            color #000
        > ul 
            display flex
            height 36px
            line-heght 36px
            
            > li 
                width 100px
                font-size 14px 
                text-align center
            > li:nth-child(1)
                text-align left
    
    .market-main
        > nav
            display flex
            padding 12px 0 16px
            > div
                position relative
                width 80px
                height 30px
                line-height 30px 
                margin-right 12px
                background-color color-red
                font-size 14px 
                color #fff
                text-indent 7px
                > a 
                    position absolute
                    top 5px 
                    right 0 
                    width 20px 
                    height 20px 
                    background url(/public/delete.png) no-repeat center center 
        > ul 
            display flex
            padding 0 18px

            li 
                width 100px
                height 14px 
                line-height 14px 
                font-size 14px 
                background url(/public/sort-g.png) no-repeat 31px center

                &.active
                    background-image url(/public/sort-r.png)

                &:nth-child(2)
                    background-position 45px center

    .market-page 
        display flex
        justify-content center 
        align-items center 
        padding-bottom 12px
        > a 
            display block
            width 60px
            height 26px 
            line-height 26px 
            border 1px solid #e5e5e5
            text-align center
            font-size 14px
            color #000
            margin-right 20px 
            &:last-child 
                margin-right 0px
        > span 
            color #000
            margin-right 20px 

    .market-bottom
        background-color #fff
        padding-bottom 40px 
</style>