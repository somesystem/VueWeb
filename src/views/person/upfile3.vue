<template>
    <div class="common_person_my_info">
        <h3>上传产品</h3>
        <upfile-step step="3"></upfile-step>

        <div class="pmain">
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
            <div class="pmain-btn">
                <a @click="prev()" class="pre" href="javascript:;">上一步</a>
                <a @click="next()" class="active" href="javascript:;">下一步</a>
            </div>
        </div>
    </div>
</template>

<script scoped type="text/javascript">
    import upfileStep from "../../modules/upfile-step.vue";
    export default {
        data(){
            return {
                
            }
        },
        computed: {
            
        },
        methods: {
            prev(){
                this.$router.go(-1);
            },
            next(){
                this.$router.push({name:'upfileStep4'});
            }
        },
        components: {
            upfileStep
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/upfile";
</style>