<template>
    <div class="common-item-l">
        <div @click="toProduct()" class="common-item-l-t">
            <p><span>天交所-林州重机</span><span>在售</span></p>
            <p>本期起售日 2017/05/15</p>
        </div>
        <div @click="toProduct()" class="common-item-l-c">
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
            
            <a @click="booking()" href="javascript:;">立即预约</a>
        </div>

        <booking-product :show.sync="bookShow"></booking-product>
    </div>
</template>

<script type="text/javascript">
    var c = 222;
    import bookingProduct from './booking-product.vue';
    export default {
        data(){
            return {
                bookShow: false
            }
        },
        methods: {
            toProduct(){
                this.$router.push({name:'product',params:{id:++c}});
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