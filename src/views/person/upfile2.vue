<template>
    <div class="common_person_my_info">
        <h3>上传产品</h3>
        <upfile-step step="2"></upfile-step>

        <div class="pmain">
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
                this.$router.push({name:'upfileStep3'});
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