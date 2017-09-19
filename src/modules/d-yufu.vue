<template>
    <div :class="['yufu',yufu.isShow?'show':'']">
        <h2>预付佣金规约</h2>
        <ul>
            <li><i>1</i>为保障交易顺利进行，卖家需预付佣金到本平台进行托管，待客户打款报单，卖家确认到账后，佣金会转交给客户。</li>
            <li><i>2</i>本平台承诺不会擅自使用托管的资金。</li>
            <li><i>3</i>若客户取消订单或未打款，佣金原路返还给卖家。</li>
            <li><i>4</i>本平台收款信息详情，请见弹框左下区域</li>
        </ul>
        <div class="yufu-b">
            <div class="yufu-l">
                <div><p>收款人姓名：</p><p>杭州现象级网络科技有限公司</p></div>
                <div><p>预付佣金：</p><p>xxxx</p></div>
                <div><p>收款银行：</p><p>中国建设银行杭州德新支行</p></div>
                <div><p>收款账号：</p><p>33050161638300000151</p></div>
                <div><p>汇款备注：</p><p>理财师预付佣金</p></div>
            </div>
            <div class="yufu-r">
                <p>上传付款凭证：</p>
                <input type="file" />
                <a @click="enter()" href="javascript:;">提交</a>
            </div>
        </div>
        
        <a class="close" @click="cancel()" href="javascript:;"></a>
    </div>
</template>

<script type="text/javascript">
    import { mapState,mapMutations } from "vuex";

    export default {
        data(){
            return {
                
            }
        },
        computed: mapState(["yufu"]),
        methods: {
            ...mapMutations(["setYufu"]),
            enter(){
                this.setYufu({isShow:false});
                this.$router.push({name:"p_order_detail"});
            },
            cancel(){
                this.setYufu({isShow:false});
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/d-yufu";
</style>