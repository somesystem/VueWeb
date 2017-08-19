<template>
    <div class="product-detail">
        <nav class="zq_nav">
            <a :class="navIndex==0?'active':''" @click="navIndex=0" href="javascript:;">产品业绩</a>
            <a :class="navIndex==1?'active':''" @click="navIndex=1" href="javascript:;">产品概况</a>
            <a :class="navIndex==2?'active':''" @click="navIndex=2" href="javascript:;">基金经理</a>
        </nav>
        
        <div v-show="navIndex==0" class="zq_yeji">
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

        <ul class="zq_gaikuang" v-show="navIndex==1">
            <li><span>基金名称：</span><span>腾云资产天山9号私募管理基金</span></li>
            <li><span>产品简称：</span><span>预热中</span></li>
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
        <div v-show="navIndex==2" class="zq_jinli">
            <h5>基金经理简介：</h5>
            <p>鞠婧祎，1994年6月18日出生于中国四川遂宁，SNH48成员之一，隶属经纪公司为久尚演艺以及星四芭文化， 是日本第一国民女子偶像团体AKB48的中国官方姐妹团SNH48的二期生。 2013年11月2日以剧场公演的形式正式出道。2014年7月26日，荣获SNH48第一届总选举第四位 。9月，参与拍摄MV《呜吒（UZA）》</p>
            <h5>发行机构简介：</h5>
            <p>中文名 鞠婧祎 外文名 Ju JingYi 别名 小鞠、kiku酱、鞠神 国籍 中国 民族 汉族 星座 双子座 血型 O 身高 159 体重 46kg 出生地 四川遂宁 出生日期 1994年6月18日 职业 偶像 毕业院校 四川音乐学院附属中学（在读） 经纪公司 上海久尚演艺经纪有限公司 主要成就 2014.07 SNH48第一届总选举第四名 曾用名 鞠婧伊 所属团体 SNH48 姐妹团体 AKB48、SKE48、NMB48、HKT48等 代表作品 《都是夜风惹的祸》 《虫之诗》 特长 舞蹈、小提琴</p>
            <h5>评论：</h5>
        </div>
        
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                navIndex: 0
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

