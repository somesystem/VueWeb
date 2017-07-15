<template>
    <div class="common_person_my_info">
        <h3>上传产品</h3>
        <upfile-step step="4"></upfile-step>

        <div class="pmain">
            <h3>募集账号：</h3>
            <div class="pmain-item">
                <span>融资主体：</span>
                <input type="text" />
            </div>
            <div class="pmain-item">
                <span>资金用途：</span>
                <textarea></textarea>
            </div>
            <div class="pmain-item">
                <span>还款来源：</span>
                <textarea></textarea>
            </div>
            <div class="pmain-item">
                <span>风险控制：</span>
                <textarea></textarea>
            </div>
            <div class="dashLine"></div>
            <h3>产品备注：</h3>
            <div class="pmain-cell">
                <span>上传材料：</span>
                <input v-model="clFile" class="preadonly" readonly="readonly" type="text" />
                <input class="pfile" id="file9" type="file" />
                <a class="pfileBtn active" href="javascript:;">点击上传文件</a>
            </div>
            <div class="pmain-item">
                <span>产品亮点：</span>
                <textarea placeholder="选填"></textarea>
            </div>
            <div class="pmain-cell">
                <span>产品宣传：</span>
                <input v-model="xcFile" class="preadonly" readonly="readonly" type="text" placeholder="支持上传多个视频/图片文件（选填）" />
                <input class="pfile" multiple id="file10" type="file" />
                <a class="pfileBtn active" href="javascript:;">点击上传文件</a>
            </div>


            <div class="pmain-btn">
                <a @click="prev()" class="pre" href="javascript:;">上一步</a>
                <a @click="preView()" class="active" href="javascript:;">预览</a>
                <a @click="publish()" class="active" href="javascript:;">发布</a>
            </div>
        </div>

        <div v-show="alertCtrl" class="pmain-alert-mask"></div>
        <div v-show="alertCtrl" class="pmain-alert-con">
            <a @click="publishEnd()" href="javascript:;">×</a>
            <p>产品上传成功！</p>
            <nav>
                <a @click="publishEnd()" href="javascript:;">知道了</a>
                <a @click="toView()" href="javascript:;">去查看</a>
            </nav>
        </div>
    </div>
</template>

<script scoped type="text/javascript">
    import upfileStep from "../../modules/upfile-step.vue";
    export default {
        data(){
            return {
                alertCtrl: false,
                clFile: '',
                xcFile: ''
            }
        },
        computed: {

        },
        mounted(){
            this.$nextTick(()=>{
                this.fnNative();
            });
            
        },
        methods: {
            prev(){
                this.$router.go(-1);
            },
            preView(){
                
            },
            publish(){
                this.alertCtrl = true;
            },
            publishEnd(){
                this.alertCtrl = false;
                this.$router.push({name:"upfileStep1"});
            },
            toView(){
                this.$router.push({name:"product",params:{id:"123456"}});
            },
            fnNative(){
                var _this = this;
                document.getElementById('file9').onchange = function(){
                    _this.clFile = this.files[0].name;
                }
                document.getElementById('file10').onchange = function(){
                    let arr = [];
                    for (var i = 0; i < this.files.length; i++) {
                        arr.push(this.files[i].name);
                    }
                    _this.xcFile = String(arr);
                }
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