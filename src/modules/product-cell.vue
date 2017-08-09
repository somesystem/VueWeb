<template>
    <div class="product-cell">
        <div class="product-cell-l">
            <div @click="toProduct()" class="product-cell-l-t">
                <p><span>天交所-林州重机</span><span>在售</span></p>
                <p>本期起售日 2017/05/15</p>
            </div>
            <div @click="toProduct()" class="product-cell-l-c">
                <div>
                    <p>30%</p>
                    <p>最高预期收益</p>
                </div>
                <div>
                    <p>返佣率：</p>
                    <p>投资区域：</p>
                </div>
                <div>
                    <p>10%</p>
                    <p>云南</p>
                </div>
                <div>
                    <p>产品期限：</p>
                    <p>认购起点：</p>
                </div>
                <div>
                    <p>12个月</p>
                    <p>100万</p>
                </div>
                <section>
                    <p><span style="width:70%"></span></p>
                    <p>70%</p> 
                </section>
            </div>
            <div class="product-cell-l-b">
                <div>
                    <a href="javascript:;">1230</a>
                    <a href="javascript:;">56</a>
                    <a href="javascript:;">12</a>
                    <a href="javascript:;">预览资料</a>
                </div>
                
                <a @click="booking()" href="javascript:;">{{isYuyue?'再次预约':'立即预约'}}</a>
            </div>
        </div>
        <div class="product-cell-r">
            <div class="product-cell-r-c">
                <div>
                    <img src="" />
                </div>
                <div>
                    <p>100<i>单</i></p>
                    <p>已成交</p>
                </div>
                <div>
                    <p>10<i>位</i></p>
                    <p>服务客户</p>
                </div>
            </div>
            <div class="product-cell-r-b">
                <div @click="toLicai()">
                    <p><span>蔡大大</span><span>江西</span></p>
                    <p>上海宽象资本投资</p>
                </div>
                <div>
                    <a @click="setZixunId(999)" href="javascript:;">咨询ta</a>
                </div>
            </div>
        </div>
        <booking-product :show.sync="bookShow"></booking-product>
    </div>
</template>

<script type="text/javascript">
    var cc = 2222;
    import bookingProduct from './booking-product.vue';
    import {mapMutations} from "vuex";
    export default {
        props: {
            isYuyue: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                bookShow: false
            }
        },
        methods:{
            ...mapMutations(["setZixunId"]),
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++cc}});
            },
            toProduct(){
                this.$router.push({name:'product',params:{id:++cc}});
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

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .product-cell
        position relative
        padding 18px
        width 900px
        display flex
        border color-border
        justify-content space-between
        background-color #fff
        margin-bottom 12px
        box-sizing border-box
        &:first-of-type
            margin-top 12px
        &:hover
            z-index 2
            border 1px solid color-red
            
    .product-cell-l
        width 650px
        cursor pointer
        padding-right 18px
    .product-cell-l-t
        height 20px
        line-height 20px
        display flex
        justify-content space-between
        margin-bottom 32px
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
    .product-cell-l-c
        display flex
        align-items center
        > div
            text-align center
            p 
                height 14px 
                font-size size5
                color color5
                line-height 14px
                &:nth-of-type(1)
                    margin-bottom 12px

            &:nth-of-type(1)
                width 130px
                p:nth-of-type(1)
                    font-size 20px
                    line-height 20px
                    color color-red

            &:nth-of-type(2),&:nth-of-type(4)
                width 80px

            &:nth-of-type(3),&:nth-of-type(5)
                width 50px
                p 
                    color color3
                    font-size size3 


        > section
            margin-left 7px;
            width 226px
            display flex
            justify-content space-between
            p:nth-child(1)
                width 188px
                height 14px
                border-radius 7px
                background-color #e5e5e5
                overflow hidden
                span
                    display block
                    height 14px
                    background-color color-blue

            p:nth-child(2)
                height 14px
                line-height 14px
                font-size 12px
                color color1

    .product-cell-l-b
        display flex
        justify-content space-between
        align-items flex-end
        padding-top 15px
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
        
        > section
            display flex
        .person-btn
            display block
            width 90px
            height 32px
            line-height 32px
            font-size 16px
            background-color color-yellow
            margin-right 18px
            text-align center
            color #fff
            &:hover,&:active
                background-color color-yellow-select
            &:last-of-type
                margin-right 0
    
    .product-cell-r
        width 212px
        cursor pointer
        box-sizing border-box
        border-left color-border
        padding-top 12px

    .product-cell-r-c
        display flex
        align-items center
        > div:nth-child(1)
            width 50px 
            padding-left 12px
            img 
                display block
                margin 0 auto
                width 50px
                height 50px
        > div:nth-child(2),> div:nth-child(3)
            text-align center
            width 70px 
            p:nth-child(1)
                height 18px
                font-size 18px
                line-height 18px
                color color-red
                margin-bottom 12px
                i 
                    font-size 12px 
            p:nth-child(2)
                height 14px
                line-height 14px
                font-size size2 
                color color2 
    .product-cell-r-b
        display flex
        align-items center
        margin-top 20px
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