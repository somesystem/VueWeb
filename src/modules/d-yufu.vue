<template>
    <div :class="['yufu',yufu.isShow?'show':'']">
        <h2>打款报单规约</h2>
        <ul>
            <li><i>1</i>为保障交易顺利进行，买家打款需上传打款凭证，等待理财师确认打款到账后，佣金（返利）便可支付给买家。</li>
            <li><i>2</i>资金到账可能有1到3个工作日的延迟。</li>
            <li><i>3</i>融资方收款信息详情，请见弹框左下区域</li>
        </ul>
        <div class="yufu-b">
            <div class="yufu-l">
                <div><p>融资方姓名：</p><input tpye="text" /></div>
                <div><p>融资方银行：</p><input tpye="text" /></div>
                <div><p>融资方银行账号：</p><input tpye="tel" /></div>
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