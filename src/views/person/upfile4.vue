<template>
    <div>
        
        <h3>募集账号：</h3>
        <div v-if="typeId<5">
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
                <span>风险措施：</span>
                <textarea></textarea>
            </div>
        </div>
        <div v-if="typeId==5">
            <div class="pmain-item">
                <span>管理机构：</span>
                <input type="text" />
            </div>
            <div class="pmain-item">
                <span>业绩报酬：</span>
                <textarea></textarea>
            </div>
            <div class="pmain-item">
                <span>收益分成：</span>
                <textarea></textarea>
            </div>
        </div>
        <div v-if="typeId==6">
            <div class="pmain-item">
                <span>托管银行：</span>
                <input type="text" />
            </div>
            <div class="pmain-item">
                <span>证券经纪：</span>
                <input type="text" />
            </div>
            <div class="pmain-item">
                <span>风险控制：</span>
                <input type="text" />
            </div>
            <div class="pmain-item">
                <span>基金公司：</span>
                <textarea></textarea>
            </div>
            <div class="pmain-item">
                <span>投资理念：</span>
                <textarea></textarea>
            </div>

            <div class="dashLine"></div>
            <h3>净值走势：</h3>
            <dl class="pmain-item6">
                <dt>
                    <div>净值时间</div>
                    <div>单位净值</div>
                    <div>累计净值</div>
                    <div>涨跌幅</div>
                </dt>
                <dd v-for="(item,index) in detail">
                    <div><input type="date" /></div>
                    <div><input type="number" /></div>
                    <div><input type="number" /></div>
                    <div class="input-section"><input type="number" /><span>%</span></div>
                </dd>
                <dd class="add">
                    <a @click="addDetail()" href="javascript:;">+</a>
                    <a @click="removeDetail()" v-show="detail.length>1" href="javascript:;">-</a>
                </dd>
            </dl>
            
        </div>

        <div v-if="typeId<6" class="pmain-item">
            <span>项目亮点：</span>
            <textarea></textarea>
        </div>
        <div v-if="typeId<5" class="pmain-item">
            <span>补充说明：</span>
            <textarea></textarea>
        </div>

        <div class="pmain-cell">
            <span>上传资料：</span>
            <input v-model="clFile" class="preadonly" readonly="readonly" type="text" />
            <input class="pfile" id="file9" type="file" />
            <a class="pfileBtn active" href="javascript:;">点击上传文件</a>
        </div>
 


        <div class="pmain-btn">
            <a @click="prev()" class="pre" href="javascript:;">上一步</a>
            <a @click="preView()" class="active" href="javascript:;">预览</a>
            <a @click="publish()" class="active" href="javascript:;">发布</a>
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
    import {mapMutations} from "vuex";
    export default {
        data(){
            return {
                alertCtrl: false,
                clFile: '',
                detail: []
            }
        },
        computed: {
            /* 1~4 固收 5 股权 6 证券 */
            typeId(){
                return this.$route.params.type;
            }
        },
        mounted(){
            this.setUpfileStep(4);
            this.$nextTick(()=>{
                this.fnNative();
            });
        },
        methods: {
            ...mapMutations(["setUpfileStep"]),
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
                this.$router.push({name:"p_upfile"});
            },
            toView(){
                this.$router.push({name:"product",params:{id:"123456"}});
            },
            fnNative(){
                var _this = this;
                document.getElementById('file9').onchange = function(){
                    _this.clFile = this.files[0].name;
                }
            },
            addDetail(){
                this.detail.push({});
            },
            removeDetail(){
                this.detail.splice(this.detail.length-1,1);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>