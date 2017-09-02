<template>
    <div :class="['yufu',dakuan.isShow?'show':'']">
        <h2>打款报单规约</h2>
        <ul>
            <li><i>1</i>为保障交易顺利进行，卖家需预付佣金到本平台进行托管，待客户打款报单，卖家确认到账后，佣金会转交给客户。</li>
            <li><i>2</i>本平台承诺不会擅自使用托管的资金。</li>
            <li><i>3</i>若客户取消订单或未打款，佣金原路返还给卖家。</li>
            <li><i>3</i>本平台收款信息详情，请见弹框左下区域</li>
        </ul>
        <div class="yufu-b">
            <div class="yufu-l">
                <div><p>融资方姓名：</p><input readonly tpye="text" value="杭州xx有限公司" /></div>
                <div><p>融资方银行：</p><input readonly tpye="text" value="xxx银行" /></div>
                <div><p>融资方银行账号：</p><input readonly tpye="tel" value="1231231231231231321" /></div>
                <div><p>汇款备注：</p><input readonly tpye="tel" value="理财师预付佣金" /></div>
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
        computed: mapState(["dakuan"]),
        methods: {
            ...mapMutations(["setDakuan"]),
            enter(){
                this.setDakuan({isShow:false});
                this.$router.push({name:"p_order_detail"});
            },
            cancel(){
                this.setDakuan({isShow:false});
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/d-yufu";
</style>