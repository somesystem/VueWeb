<template>
    <div class="common_person_my_info">
        <h3>订单详情</h3>
        <nav class="order-top">
            <!--bg1 bg2 bg3 bg4 bg5-->
            <ul class="bg1">
                <li>
                    <i class="icon1"></i>
                    <p></p>
                    <p class="active">发起订单</p>
                    <time class="active">2017-05-27 10:00</time>
                </li>
                <li>
                    <i class="icon2 active"></i>
                    <p>待确定并预付反佣</p>
                    <p>确认订单</p>
                    <time>2017-05-27 10:00</time>
                </li>
                <li>
                    <i class="icon1"></i>
                    <p>待打款报单</p>
                    <p>打款订单</p>
                    <time>2017-05-27 10:00</time>
                </li>
                <li>
                    <i class="icon2"></i>
                    <p>收到打款报单，待确认</p>
                    <p>确认到账</p>
                    <time>2017-05-27 10:00</time>
                </li>
                <li>
                    <i class="icon1"></i>
                    <p>等待提取佣金</p>
                    <p>提取返利</p>
                    <time>2017-05-27 10:00</time>
                </li>
                <li>
                    <i class="icon3"></i>
                    <p></p>
                    <p>完成订单</p>
                    <time>2017-05-27 10:00</time>
                </li>
            </ul>

            <div class="order_detail_main">
                <h4>订单状态：</h4>
                <ul>
                    <li><span>订单号：</span><span>520</span></li>
                    <li><span>当前订单状态：</span><span>等待理财师确认并预付返佣</span></li>
                    <li><span>下单时间：</span><span>2017-05-27</span></li>
                </ul>

                <div class="order_detail_cell">
                    <div>
                        <h5>买家信息</h5>
                        <p><span>姓名：</span><span>张三</span></p>
                        <p><span>证件类型：</span><span>身份证</span></p>
                        <p><span>证件号码：</span><span>360403199209152385</span></p>
                        <p><span>手机号码：</span><span>13555555555</span></p>
                    </div>
                    <div>
                        <h5>卖家信息</h5>
                        <p><span>理财师：</span><span>蔡大大</span></p>
                        <p><span>机构：</span><span>上海宽象资本投资</span></p>
                        <p><span>联系电话：</span><span>13212345678</span></p>
                    </div>
                </div>

                <h4>交易信息：</h4>

                <ol class="order_detail_table">
                    <li><span>产品名称</span><span>购买额度</span><span>返利率</span><span>返利金额</span></li>
                    <li><span>新华信托都昌大道信托计划</span><span>100万</span><span>4%</span><span>4万</span></li>
                </ol>

                <div class="order-detail-bottom">
                    <a class="left" href="javascript:;"></a>
                    <a class="right" href="javascript:;"></a>
                </div>
            </div>
        </nav>
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
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    @import "../../styl/order_detail";
</style>