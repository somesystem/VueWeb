<template>
    <div>
        <h3>募集账号：</h3>
        <div class="pmain-item">
            <span>账户名称：</span>
            <input type="text" placeholder="请填写账户名称" />
        </div>
        <div class="pmain-item">
            <span>银行账号：</span>
            <input type="text" placeholder="请输入银行账号" />
        </div>
        <div class="pmain-item">
            <span>开户银行：</span>
            <input type="text" placeholder="请填写开户银行" />
        </div>
        <div class="pmain-item">
            <span>备注：</span>
            <input type="text" />
        </div>
        <div class="pmain-item" v-if="typeId==6">
            <span>大额支付号：</span>
            <input type="text" placeholder="请填写大额支付号" />
        </div>
        <div class="pmain-btn">
            <a @click="prev()" class="pre" href="javascript:;">上一步</a>
            <a @click="next()" class="active" href="javascript:;">下一步</a>
        </div>
    </div>
</template>

<script scoped type="text/javascript">
    import {mapMutations} from "vuex";
    export default {
        data(){
            return {
                
            }
        },
        mounted(){
            this.setUpfileStep(3);
        },
        computed: {
            /* 1~4 固收 5 股权 6 证券 */
            typeId(){
                return this.$route.params.type;
            }
        },
        methods: {
            ...mapMutations(["setUpfileStep"]),
            prev(){
                this.$router.go(-1);
            },
            next(){
                this.$router.push({name:'upfileStep4',params:{type:this.typeId}});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>