<template>
    <div>
        <div class="person-custom-detail">
            <h3>用户信息</h3>
            <ul class="clearfix">
                <li><span>用户姓名：</span><span>游老板</span></li>
                <li><span>性别：</span><span>男</span></li>
                <li><span>手机号码：</span><span>18810991234</span></li>
                <li><span>邮箱：</span><span>123456@123.com</span></li>
                <li v-if="$route.params.type==1" class="large"><span>身份证号：</span v-else><span>888888888888888888</span></li>
                <li v-else class="large"><span>　机构：</span><span>江西九江</span></li>
                <li class="large"><span>　地址：</span><span>江西九江</span></li>
                <li class="large"><span>　备注：</span><span class="eps" title="这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户">这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户这是一个特别嚎的客户</span></li>
            </ul>
        </div>
        <div class="common-person-order-top person-custom-detail-top">
            <ol>
                <li>订单状态：</li>
                <li class="active"><a href="javascript:;">全部</a></li>
                <li><a href="javascript:;">正在交易</a></li>
                <li><a href="javascript:;">交易完成</a></li>
            </ol>
            <a href="javascript:;">导出列表</a>
        </div>
        <div class="person-custom-detail-main">
            <dl>
                <dt>
                    <p>产品简称</p>
                    <p>认购日期</p>
                    <p>客户姓名</p>
                    <p>认购金额</p>
                    <p>期限</p>
                    <p>收益率</p>
                    <p>计息日</p>
                    <p>产品状态</p>
                    <p>交易状态</p>
                </dt>
                <dd v-for="i in 4" :key="i">
                    <p>新华信托-林江重机</p>
                    <p>2017-5-25</p>
                    <p>范进</p>
                    <p>100万</p>
                    <p>12个月</p>
                    <p>8%</p>
                    <p>6-1</p>
                    <p>未开始</p>
                    <p>已完成</p>
                </dd>
            </dl>
        </div>
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
    .person-custom-detail
        background-color #fff
        border color-border
        margin-bottom 12px
        > h3
            height 40px
            line-height 40px
            border-bottom color-border
            text-indent 14px
            color color2
            font-size size2
        > ul
            padding 18px
            color color3
            font-size size3
            li 
                display flex
                float left 
                width 50%
                height 16px
                line-height 16px
                margin-bottom 18px
                > span
                    display block
                    &:first-of-type
                        width 100px
                    &:last-of-type
                        flex 1
                &.large
                    width 100%
                &:last-child
                    margin-bottom 0
    
    .person-custom-detail-top
        border-top color-border
        > a
            position absolute
            top 0
            right 16px
            height 40px
            line-height 40px
            font-size size3
            color color3
    .person-custom-detail-main
        > dl
            border color-border
            border-top none
            dt,dd
                display flex
                height 40px
                line-height 40px
                > p
                    text-align center
                    &:nth-child(1)
                        width 165px
                    &:nth-child(2)
                        width 105px
                        & ~ p
                            flex 1
            dt
                background-color #e6effc
                font-size size2
                color color2
            dd
                background-color #fff
                font-size size3
                color color3
                border-top color-border


</style>