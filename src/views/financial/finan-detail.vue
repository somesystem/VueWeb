<template>
    <div>
        <div class="main-width">
            <p class="common-detail-top">首页>找理财师>岳大大1号</p>

            <div class="finan-detail-top">
                <img src="http://t.cn/RoTYhet" />
                <p>岳大大</p>
                <p>上海宽象资本投资</p>
                <nav>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">股权基金</a>
                    <a href="javascript:;">信托</a>
                </nav>
                <p>理财服务宗旨：理财学到家，幸福你我他</p>
            </div>

            <div class="finan-detail-man">
                <div class="finan-detail-man-l">
                    <p>已成交100单</p>
                    <div class="detail-man-nav">
                        <div><p>4.7</p><p>专业度</p></div>
                        <div><p>4.5</p><p>服务态度</p></div>
                        <div><p>4.9</p><p>诚信度</p></div>
                    </div>
                    <ul class="detail-man-data">
                        <li><span>用户等级</span><span>c7</span></li>
                        <li><span>地区</span><span>江西 九江</span></li>
                        <li><span>毕业院校</span><span>上海交通大学</span></li>
                        <li><span>最高学历</span><span>硕士</span></li>
                        <li><span>星座</span><span>处女</span></li>
                        <li><span>其他</span><span>获得CFA证书<br/>二级理财师</span></li>
                    </ul>
                    <a class="common-zixun" href="javascript:;">咨询</a>
                    <p>已有320位金友联系过他</p>
                </div>
                <div class="finan-detail-man-r">
                    <ul>
                        <router-link :to="{name:'f_pro'}" tag="li" exact><a href="javascript:;">发布的产品</a></router-link>
                        <router-link :to="{name:'f_art'}" tag="li"><a href="javascript:;">发布的文章</a></router-link>
                        <router-link :to="{name:'f_que'}" tag="li"><a href="javascript:;">回答的问题</a></router-link>
                        <router-link :to="{name:'f_eva'}" tag="li"><a href="javascript:;">客户的评价</a></router-link>
                    </ul>
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <financial-adv class="pd40" title="您可能需要的理财师"></financial-adv>
        <div class="height40"></div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .pd40
        padding-bottom 40px
    .finan-detail-top
        padding 34px 0
        margin-bottom 12px
        border color-border
        background-color #fff
        > img
            display block
            width 100px
            height 100px
            box-shadow 0 0 20px rgba(0,0,0,.2)
            margin 0 auto 14px
            border-radius 50%
        > p
            text-align center
            &:nth-of-type(1)
                margin-bottom 12px
                line-height size1
                font-size size1
                color color1
            &:nth-of-type(2),&:nth-of-type(3)
                line-height size3
                font-size size3
                color color3

        > nav 
            display flex
            margin 14px auto
            justify-content center
            > a
                display block
                width 76px
                height 24px
                line-height 24px
                border 1px solid color-red
                margin-right 20px
                color color-red
                text-align center
                border-radius 5px
                &:last-child
                    margin-right 0
    
    .finan-detail-man
        display flex
        justify-content space-between
    .finan-detail-man-l
        width 248px
        height 1015px
        border color-border
        background-color #fff
        box-sizing border-box
        > p
            &:nth-of-type(1)
                padding 18px
                height size3
                line-height size3
                font-size size3
                color color3
            &:nth-of-type(2)
                line-height size5
                font-size size5
                color color5
                text-align right
                padding-right 16px
        > a
            margin-bottom 12px
            margin-left 155px

    .detail-man-nav
        margin-top 32px
        display flex
        > div
            flex 1
            > p
                text-align center
                &:nth-child(1)
                    font-size 20px
                    line-height 20px
                    color color-red
                    margin-bottom 12px
                &:nth-child(2)
                    line-height size5
                    font-size size5
                    color color5

    .detail-man-data
        padding 45px 18px

        > li
            display flex
            line-height 28px
            margin-bottom 9px
            > span 
                display block
                flex 1
                &:nth-child(1)
                    font-size size3
                    color color3
                &:nth-child(2)
                    font-size size2
                    color color2

    .finan-detail-man-l
        border color-border
    .finan-detail-man-r
        background-color #fff
        width 900px
        > ul
            display flex
            border color-border
            > li
                position relative
                width 120px
                padding 9px 0
                a   
                    display block
                    width 100%
                    height 22px
                    line-height 22px
                    font-size size3
                    color color3
                    text-align center
                    border-right color-border
                    box-sizing border-box
                &:last-child a
                    border-right 0
                &:hover,&.router-link-active
                    &:after
                        content ""
                        position absolute
                        bottom 0
                        left 50%
                        margin-left -45px
                        width 90px
                        height 2px
                        background-color color-red
                    a
                        color color-red
    
</style>