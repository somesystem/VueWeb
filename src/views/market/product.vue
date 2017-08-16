<template>
    <div>
        <div class="main-width">
            <p class="common-detail-top">首页>金融超市>{{$route.params.id}}</p>
            
            <div class="product-main main-width">
                <div class="product-main-l">
                    <div class="product-name">
                        <div class="product-name-t">
                            <p><span>腾云资产-1号</span><span>在售</span></p>
                            <p>本期起售日 2017/05/15</p>
                        </div>
                        <div class="product-name-c">
                            <section>
                                <p><span style="width:70%"></span></p>
                                <p>70%</p> 
                            </section>
                            <p>进度说明：【2017年5月18日10时更新】本期为第一期，本期规模不限，预热中，封账时间约定，有下期。</p>
                            <nav>
                                <a href="javascript:;">固定收益</a>
                                <a href="javascript:;">房地产</a>
                            </nav>
                        </div>
                        <div class="product-name-b">
                            <div>
                                <span v-if="false">评分：</span>
                                <span v-if="false"><i></i><i></i><i></i><i></i></span>
                                <a href="javascript:;">1230</a>
                                <a href="javascript:;">56</a>
                                <a href="javascript:;">12</a>
                                <a href="javascript:;">预览资料</a>
                            </div>
                            <a @click="booking()" href="javascript:;">立即预约</a>
                        </div>
                    </div>
                    <div class="product-detail">
                        <h2 class="common-h2">产品详情</h2>
                        <h3>产品收益</h3>
                        <table cellspacing="0" cellpadding="0">
                            <thead>
                                <tr><th class="ac">期限</th><th>认购金额（万）</th><th class="ac">预期年化收益率</th><th>反拥率</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="ac" rowspan="2">36个月</td><td>100万≦X≦300万</td><td class="ac">6.8%</td><td>1.3%</td></tr>
                                <tr><td>X≧300万</td><td class="ac">7.0%</td><td>1.2%</td></tr>
                            </tbody>
                        </table>
                        <h3>产品概况</h3>
                        <ul>
                            <li><span>产品名称：</span><span>腾云资产天山9号私募管理基金</span></li>
                            <li><span>产品状态：</span><span>预热中</span></li>
                            <li><span>发行机构：</span><span>腾云资产</span></li>
                            <li><span>本期起售日：</span><span>2017/05/09</span></li>
                            <li><span>产品期限：</span><span>24个月</span></li>
                            <li><span>付息方式：</span><span>半年付息</span></li>
                            <li><span>产品类别：</span><span>债权基金</span></li>
                            <li><span>基金类型：</span><span>工商企业</span></li>
                            <li><span>规模：</span><span>3亿</span></li>
                            <li><span>认购起点：</span><span>100万元</span></li>
                            <li><span>抵/质押率：</span><span>无抵押</span></li>
                            <li><span>投资区域：</span><span>广东 深圳</span></li>
                        </ul>
                        <ol>
                            <li><span>融资主体：</span><span>MSJK控股股份有限公司</span></li>
                            <li><span>资金用途：</span><span>补充上市公司的日常经营资金</span></li>
                            <li><span>还款来源：</span><span>1.上市公司各项收入<br/>2.上市公司其他再融资管<br/>3.担保方营业收入</span></li>
                            <li><span>风控措施：</span><span>1.上市公司出具股东大会决议<br/>2.第一大股东天津管理公司提供连带责任担保<br/>3.世纪控制人HJB夫妇提供无限连带责任担保</span></li>
                            <li><span>项目亮点：</span><span>1.融资方实力雄厚<br/>2.股东背景显赫<br/>3.发展前景远大<br/>4.业绩承诺</span></li>
                        </ol>

                    </div>
                </div>
                <div class="product-main-r">
                    <div class="product-man">
                        <p @click="toLicai()" class="product-man-t">已成交100单</p>
                        <div class="product-man-c">
                            <div @click="toLicai()">
                                <img src="/public/noimg.png"></div>
                                <div>
                                    <p>10位</p>
                                    <p>服务客户</p>
                                </div>
                            </div>
                            <div @click="toLicai()" class="product-man-b"><div>
                                <p><span>蔡大大</span><span>江西</span></p>
                                <p>上海宽象资本投资</p>
                            </div>
                            <div>
                                <a @click='setZixunId(444)' class="common-zixun" href="javascript:;">咨询ta</a>
                            </div>
                        </div>
                    </div>

                    <nav class="product-aside">
                        <div>
                            <a href="javascript:;">分享产品</a>
                            <a href="javascript:;">收藏产品</a>
                            <a href="javascript:;">邮件发送</a>
                        </div>
                        <div>
                            <a href="javascript:;">加入对比</a>
                            <a href="javascript:;">下载资料</a>
                            <a href="javascript:;">预览资料</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="product-other">
            <div class="main-width">
                <div class="product-other-t">
                    <h2 class="common-h2">相似的产品</h2>
                    <a href="javascript:;">换一批</a>
                </div>
                <ul class="product-other-c">
                    <li :key="item" v-for="item in 3">
                        <h4 @click="toProduct()">腾讯资产 - 天山1号<i>预热</i></h4>
                        <div class="product-other-box">
                            <div @click="toProduct()">
                                <aside class="product-other-box-t">
                                    <div>
                                        <p>30%</p>
                                        <p>最高预期收益</p>
                                    </div>
                                    <div>
                                        <p>10%</p>
                                        <p>返佣率</p>
                                    </div>
                                </aside>
                                <p>投资区域：云南</p>
                                <p>产品状态：在售</p>
                            </div>
                            <div></div>
                            <div>
                                <img @click="toProduct()" src="/public/noimg.png" />
                                <p @click="toProduct()">蔡大大</p>
                                <p @click="toProduct()">上海宽象资本投资</p>
                                <a @click="setZixunId(333)" class="common-zixun" href="javascript:;">咨询ta</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <booking-product :show.sync="bookShow"></booking-product>
    </div>    
</template>

<script>
    var a = 666;
    import {mapMutations} from "vuex";
    import bookingProduct from '../../modules/booking-product.vue';
    export default {
        data(){
            return {
                bookShow: false
            }
        },
        methods: {
            ...mapMutations(["setZixunId"]),
            toProduct(){
                this.$router.push({name:'product',params:{id:++a}});
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++a}});
            },
            booking(){
                this.bookShow = true;
            }
        },
        components: {
            bookingProduct
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
    .product-main
        display flex
        .product-main-l
            flex 1
            margin-right 16px
        .product-main-r
            width 284px

    .product-name
        padding 18px 18px 0
        border color-border
        background-color #fff
        box-sizing border-box
        border color-border
    
    .product-name-t
        height 20px
        line-height 20px
        display flex
        justify-content space-between

        p:nth-child(1)
            display flex
            
            span
                display block
                font-size size1
                color color1

            span:nth-child(2)
                margin-left 10px
                text-align center
                font-size size4
                color #fff
                width 36px
                height 20px
                background url(/public/sign.png) no-repeat center center 

        p:nth-child(2)
            font-size 14px
    
    .product-name-b
        display flex
        height 50px
        justify-content space-between
        align-items center
        border-top color-border
        > div
            display flex
            line-height 14px
            > span, > a 
                font-size size5
                color color5

            > a
                display block
                margin-right 18px
                padding-left 20px
                background-repeat no-repeat
                background-position left center 

                &:nth-of-type(1)
                    background-image url(/public/eyes.png)
                &:nth-of-type(2)
                    background-image url(/public/comment.png)
                &:nth-of-type(3)
                    background-image url(/public/car.png)
                &:nth-of-type(4)
                    padding-left 0
                    padding-right 20px
                    background-image url(/public/down.png)
                    background-position right center
            > span:nth-child(2)
                width 90px
                i 
                    float left
                    width 12px 
                    height 14px 
                    background url(/public/star.png) no-repeat center center
                    margin-right 8px
        > a
            display block
            width 134px
            height 32px
            font-size 18px
            line-height 32px 
            color #fff
            background-color color-red
            text-align center
            &:hover,&:active
                background-color color-red-select
    
    .product-name-c
        > section
            display: flex
            justify-content center
            padding-top 21px
            p:nth-child(1)
                width 280px
                height 14px
                border-radius 7px
                background-color #e5e5e5
                overflow hidden
                span
                    display block
                    height 14px
                    background-color color-blue

            p:nth-child(2)
                margin-left 5px 
                height 14px
                line-height 14px
                font-size 12px
                color color1
        > p 
            margin-top 12px
            height 16px
            line-height 16px
            font-size size5
            color color5
            text-align center
        > nav
            padding 20px
            display flex
            justify-content center
            > a
                display block
                width 76px
                height 24px
                line-height 24px
                border 1px solid color-base
                color color-base
                border-radius 5px
                text-align center
                margin-right 12px
                &:last-child
                    margin-right 0
    
    
    .product-man
        border color-border
        padding 18px 0 30px
        background-color #fff
        cursor pointer 
    .product-man-t
        height 14px
        font-size size5
        color color5
        line-height 14px
        text-align right
        padding-right 10px
        margin-bottom 18px
    .product-man-c
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
    .product-man-b
        display flex
        align-items center
        margin-top 26px
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

    .product-detail,.product-aside
        margin-top 16px
        background-color #fff
        border color-border

    .product-aside
        > div
            display flex 
            > a
                flex 1
                display block
                height 119px
                padding-top 72px
                line-height size3
                text-align center
                color color3
                font-size size3
                background-position center 30px
                background-repeat no-repeat
                box-sizing border-box
                &:active,&:hover
                    color color-blue
                
        > div:nth-child(1) > a:nth-child(1)
            background-image url('/public/pro_icon1.png')
            &:hover,&:active
                background-image url('/public/pro_icon1_ac.png')
        > div:nth-child(1) > a:nth-child(2)
            background-image url('/public/pro_icon2.png')
            &:hover,&:active
                background-image url('/public/pro_icon2_ac.png')
        > div:nth-child(1) > a:nth-child(3)
            background-image url('/public/pro_icon3.png')
            &:hover,&:active
                background-image url('/public/pro_icon3_ac.png')
        > div:nth-child(2) > a:nth-child(1)
            background-image url('/public/pro_icon4.png')
            &:hover,&:active
                background-image url('/public/pro_icon4_ac.png')
        > div:nth-child(2) > a:nth-child(2)
            background-image url('/public/pro_icon5.png')
            &:hover,&:active
                background-image url('/public/pro_icon5_ac.png')
        > div:nth-child(2) > a:nth-child(3)
            background-image url('/public/pro_icon6.png')
            &:hover,&:active
                background-image url('/public/pro_icon6_ac.png')
    
    .product-detail
        > h2 
            text-indent 18px
            border-bottom color-border
        > h3
            height 40px
            line-height 40px
            text-indent 40px
            color color3
            font-size size3
            background url('/public/pro_icon.png') no-repeat 18px center;

        > table
            width 822px
            border color-border
            border-right none
            border-bottom none
            margin 0 auto

            th 
                color color2
                font-size size2
                
                font-weight normal
            td 
                color color3
                font-size size3
            td,th
                width 25%
                border-right color-border
                border-bottom color-border
                text-align center
                padding 0
                height 40px 
                line-height 40px
            .ac
                background-color #e6effc
        
        > ul 
            margin 40px 18px 0
            overflow hidden
            li
                float left 
                width 50%
                margin-bottom 18px
                height 16px
                line-height 16px
                span
                    float left
                    &:nth-child(1)
                        width 30%
                        color color3
                        font-size size3
                        text-indent 22px 
                    &:nth-child(2)
                        width 70%
                        color color2
                        font-size size2

        > ol
            margin 35px 18px
            li
                line-height 24px
                margin-bottom 13px
                overflow hidden
                span
                    float left
                    &:nth-child(1)
                        width 15%
                        color color3
                        font-size size3
                        text-indent 22px 
                    &:nth-child(2)
                        width 85%
                        color color2
                        font-size size2
    
    .product-other
        background-color #fff
        margin-bottom 40px

    .product-other-t
        position relative
        > a
            position absolute
            line-height 40px
            top 0
            right 12px
            font-size size3
            color color3

    .product-other-c
        display flex
        > li 
            flex 1
            margin-right 14px
            border color-border
            cursor pointer
            &:last-child
                margin-right 0
            > h4
                height 40px 
                line-height 40px
                border-bottom color-border
                text-align center
                color color1
                font-size size1
                i
                    display inline-block
                    width 36px
                    height 18px
                    line-height 18px
                    font-size size5
                    vertical-align middle
                    text-align center
                    background url('/public/sign.png') no-repeat center center
                    color #fff
                    margin-left 10px 
    
    .product-other-box
        display flex
        justify-content center
        align-items center
        > div
            &:nth-child(1)
                flex 1
                padding 30px 0 18px
            &:nth-child(2)
                width 0
                height 120px
                border-left color-border
            &:nth-child(3)
                width 148px
                padding 18px 0
                > img 
                    display block
                    width 50px
                    height 50px
                    margin 0 auto 12px
                > p
                    margin-bottom 12px
                    text-align center
                    &:nth-of-type(1)
                        color color2
                        font-size size2
                        line-height size2
                    &:nth-of-type(2)
                        font-size size3
                        color color3
                
    .product-other-box-t
        display flex
        > div 
            flex 1
            text-align center
            margin-bottom 38px
            > p 
                &:nth-child(1)
                    height 20px
                    line-height 20px
                    color color-red
                    font-size 20px
                    margin-bottom 14px
                &:nth-child(2)
                    height 14px
                    line-height 14px
                    font-size size5
                    color color5
        ~ p
            text-align center
            height size2
            line-height size2
            font-size size2
            color color2
            margin-bottom 18px
            &:last-of-type
                margin-bottom 0
</style>