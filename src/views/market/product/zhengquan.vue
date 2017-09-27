<template>
    <div class="product-detail">
        <h2 class="common-h2">产品详情</h2>
        <h3>产品收益</h3>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <tr><th>投资金额</th><th>返佣比例</th></tr>
            </thead>
            <tbody>
                <tr><td>100~300万</td><td>登录可见</td></tr>
            </tbody>
        </table>

        <h3>产品概况</h3>
        <ul>
            <li><span>产品名称：</span><span>腾云资产天山9号私募管理基金</span></li>
            <li><span>基金状态：</span><span>开放募集中</span></li>

            <li><span>基金类型：</span><span>债券型</span></li>
            <li><span>基金公司：</span><span>宽象资本</span></li>

            <li><span>基金经理：</span><span>尹克</span></li>
            <li><span>托管银行：</span><span>中信银行</span></li>

            <li><span>证券经纪：</span><span>中信证券</span></li>
            <li><span>发行通道：</span><span>自主发行</span></li>

            <li><span>是否结构化：</span><span>否</span></li>
            <li><span>首次成立：</span><span>2017年8月8号</span></li>

            <li><span>封闭期：</span><span>12个月</span></li>
            <li><span>累计净值：</span><span>1.04</span></li>

            <li><span>准封闭期：</span><span></span></li>
            <li><span>认购费用：</span><span>1%</span></li>

            <li><span>开放日：</span><span>每个公历月份的15日</span></li>
            <li><span>管理费用：</span><span>1.5%+1%</span></li>

            <li><span>赎回费用：</span><span>0%</span></li>
        </ul>
        <ol>
            <li><span>基金公司简介：</span><span>1.xxxxx<br/>2.xxxxxx<br/>3.xxxxxx<br/>4.xxxxxx</span></li>
            <li><span投资理念：</span><span>1.xxxxx<br/>2.xxxxxx<br/>3.xxxxxx<br/>4.xxxxxx</span></li>
            <li><span>风险控制：</span><span>1.xxxxx<br/>2.xxxxxx<br/>3.xxxxxx<br/>4.xxxxxx</span></li>
        </ol>
        <h3>募集账号信息</h3>
        <ul class="mg18">
            <li><span>募集账户名：</span><span></span></li>
            <li><span>开户行：</span><span></span></li>

            <li><span>账号：</span><span></span></li>
            <li><span>备注：</span><span></span></li>
        </ul>

        <h3>净值走势</h3>
        <div class="zq_yeji">
            <div class="zq_map">
                <div id="zq_map" class="zq_map_l">
                    
                </div>
                <div class="zq_map_r">
                   <h5>历史净值表</h5>
                    <ul class="zq_table zq_table1">
                        <li><span>净值日期</span><span>单位净值</span><span>累计净值</span><span>涨跌幅</span></li>
                        <li><span>2017.08.04</span><span>2.0256</span><span>4.0256</span><span>0.04%</span></li>
                        <li><span>2017.08.04</span><span>2.0256</span><span>4.0256</span><span>0.04%</span></li>
                        <li><span>2017.08.04</span><span>2.0256</span><span>4.0256</span><span>0.04%</span></li>
                        <li><span>2017.08.04</span><span>2.0256</span><span>4.0256</span><span>0.04%</span></li>
                        <li><span>2017.08.04</span><span>2.0256</span><span>4.0256</span><span>0.04%</span></li>
                    </ul>
                </div>
            </div>
            <div class="zq_history">
                <h5>历史业绩</h5>
                <ul class="zq_table zq_table2">
                    <li><span></span><span>今年以来</span><span>近一月</span><span>近三月</span><span>近半年</span><span>近一年</span><span>近三年</span><span>成立以来</span></li>
                    <li><span>收益类</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>0.04%</span></li>
                    <li><span>同类平均</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>0.04%</span></li>
                    <li><span>沪深300</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>62.83%</span><span>2.34%</span><span>0.04%</span><span>0.04%</span></li>
                    <li><span>同类排名</span><span>61/11136</span><span>61/11136</span><span>61/11136</span><span>--</span><span>61/11136</span><span>--</span><span>61/11136</span></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.drawMap();
            });
        },
        methods: {
            drawMap(){
                var myChart = window.echarts.init(document.getElementById('zq_map'));

                var option = {
                    title : {
                        text: '收益走势图',
                        textStyle: {
                            color: "#0069b8",
                            fontSize: 14,
                            fontWeight: "normal"
                        }
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['腾云资产-1号','沪深300'],
                        textStyle:{
                            color: "#666666",
                            fontSize: 12
                        },
                        right: "40px"
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['201701',"201702","201703","201704","201705","201706","201707","201708"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel : {
                                formatter: '{value}'
                            }
                        }
                    ],
                    series : [
                        {
                            name:'腾云资产-1号',
                            type:'line',
                            data:[100,120,81,550,600,700,650,400]
                            
                        },
                        {
                            name:'沪深300',
                            type:'line',
                            data:[100,110,120,130,140,150,170,100]
                            
                        }
                    ]
                };

                myChart.setOption(option);
            }
        }
    }
</script>
