<template>
    <div @click="toProduct()" class="common-item-l">
        <div class="common-item-l-t">
            <p><span>天交所-林州重机</span><span>在售</span></p>
            <p>本期起售日 2017/05/15</p>
        </div>
        <div class="common-item-l-c">
            <div>
                <p>30%</p>
                <p>最高预期收益</p>
            </div>
            <div>
                <p>100万</p>
                <p>认购起点</p>
            </div>
            <div>
                <p>10%</p>
                <p>返佣率</p>
            </div>
            <div>
                <p>云南</p>
                <p>投资区域</p>
            </div>
            <div>
                <p>12个月</p>
                <p>产品期限</p>
            </div>
            <section>
                <p><span style="width:70%"></span></p>
                <p>70%</p> 
            </section>
        </div>
        <div class="common-item-l-b">
            <div>
                <span v-if="false">评分：</span>
                <span v-if="false"><i></i><i></i><i></i><i></i></span>
                <a href="javascript:;">1230</a>
                <a href="javascript:;">56</a>
                <a href="javascript:;">12</a>
                <a href="javascript:;">预览资料</a>
            </div>
            
            <router-link :to="{name:'product',params:{id:'221'}}" tag="a">立即预约</router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
    var c = 222;
    export default {
        data(){
            return {}
        },
        methods: {
            toProduct(){
                this.$router.push({name:'product',params:{id:++c}});
            }
        }
    }
</script>