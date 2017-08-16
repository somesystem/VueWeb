<template>
    <div>
        <h3>基本信息：</h3>
        <div class="pmain-item">
            <span>产品简称：</span>
            <input type="text" placeholder="请输入产品简称" />
        </div>
        <div class="pmain-item">
            <span>产品全称：</span>
            <input type="text" placeholder="请输入产品全称" />
        </div>
        
        <div class="pmain-item2">
            <span>产品话题：</span>
            <section>
                <ul class="clearfix topic_menu">
                    <li v-for="item in topic"><span>{{item.name}}</span><a @click="removeTopic(item)" href="javascript:;">×</a></li>
                    <li @click="topic_ctrl=true" class="add">+</li>
                </ul>
                <div v-show="topic_ctrl" class="topic_input">
                    <input @input="getTopic()" v-model="newTopic" type="text" />
                    <ol>
                        <li @click="setTopic(item)" v-for="item in newTopicArr">#{{item.name}}</li>
                    </ol>
                </div>
            </section>
        </div>

        <div class="pmain-item3">
            <span>产品状态：</span>
            <select>
                <option>请选择产品状态</option>
                <option>预热</option>
                <option>在售</option>
                <option>已结束</option>
            </select>
            <span>起售日期：</span>
            <input type="date" placeholder="请选择起售日期" />
        </div>
        <div class="pmain-item3">
            <span>额度/规模：</span>
            <section class="input-section">
                <input min="0" type="number" placeholder="请输入额度" />
                <span>万</span>
            </section>
            <span>产品期限：</span>
            <section class="input-section">
                <input min="1" type="number" placeholder="请输入产品期限" />
                <span>月</span>
            </section>
        </div>
        
        <div class="pmain-item">
            <span>发行机构：</span>
            <select>
                <option>请选择发行机构</option>
                <option>发行机构1</option>
                <option>发行机构2</option>
                <option>发行机构3</option>
            </select>
        </div>
        <div class="pmain-item">
            <span>付息方式：</span>
            <select v-model="methodId">
                <option value="">请选择付息方式</option>
                <option :value="item.id" v-for="item in payMethod">{{item.name}}</option>
            </select>
        </div>
        <div v-show="methodId==4" class="pmain-item5">
            <ul class="clearfix topic_menu">
                <li v-for="item in methodDateArr"><span>{{item}}</span><a @click="removeDate(item)" href="javascript:;">×</a></li>
                <li v-show="methodDateArr.length>0" @click="methodDate_ctrl=true" class="add">+</li>
            </ul>
            <input v-show="methodDateArr.length==0 | methodDate_ctrl" @change="addDate()" v-model="methodDate" type="date" placeholder="固定日期（请选择日期）" />
        </div>


        <dl class="pmain-item4">
            <dt>
                <div>认购金额（万）</div>
                <div>预期收益：</div>
                <div>返佣比率：</div>
            </dt>
            <dd v-for="(item,index) in detail">
                <div class="input-section2">
                    <input :ref="'min'+index" @input="setDetail(item,index,'min')" :value="item.min" min="0" type="number" />
                    <span>~</span>
                    <input :ref="'max'+index" @input="setDetail(item,index,'max')" :value="item.max" @focus="item.focus=true" @blur="detailBlur(item)" type="text" />
                    <aside @click="item.max = '∞'" v-show="item.focus && item.max==''">∞</aside>
                </div>
                <div class="input-section">
                    <input :ref="'pre'+index" @input="setDetail(item,index,'pre')" min="0" :value="item.pre" type="number" />
                    <span>%</span>
                </div>
                <div class="input-section">
                    <input :ref="'scale'+index" @input="setDetail(item,index,'scale')" min="0" :value="item.scale" type="number" />
                    <span>%</span>
                </div>
            </dd>

            <dd class="add">
                <a @click="addDetail()" href="javascript:;">+</a>
                <a @click="removeDetail()" v-show="detail.length>1" href="javascript:;">-</a>
            </dd>
        </dl>

        <div class="pmain-item3">
            <span>抵/质押率：</span>
            <section class="input-section">
                <input min="0" type="number" placeholder="与合同保持一致" />
                <span>%</span>
            </section>
            <span>产品期限：</span>
            <section class="input-section">
                <input min="1" v-model="term2" type="number" placeholder="与合同保持一致" />
                <span v-show="term2">月</span>
            </section>
        </div>
        <div class="pmain-item3">
            <span>投资区域：</span>
            <select>
                <option>请选择所在省</option>
                <option v-for="i in 30" :key="i">北京</option>
            </select>
            <select class="large">
                <option>请选择所在市</option>
                <option>北京</option>
                <option>天津</option>
                <option>上海</option>
            </select>
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
                term2: "",
                topic: [],
                topic_ctrl: false,
                newTopic: "",
                newTopicArr: [],

                payMethod: [
                    {name:"按年付息",id:1},
                    {name:"半年付息",id:2},
                    {name:"按季付息",id:3},
                    {name:"固定日期",id:4},
                ],
                methodId: "",
                methodDateArr: [],
                methodDate: "",
                methodDate_ctrl: false,

                detail: [{min:"",max:"",pre:"",focus:false,scale:""}]

            }
        },
        mounted(){
            this.setUpfileStep(2);
        },
        methods: {
            ...mapMutations(["setUpfileStep"]),
            addDate(){
                if (this.methodDate != "") {
                    this.methodDateArr.push(this.methodDate);
                    this.methodDate = "";
                    this.methodDate_ctrl = false;
                }
            },
            removeDate(item){
                this.methodDateArr.splice(this.methodDateArr.indexOf(item),1);
            },
            getTopic(){
                if (!this.newTopic.trim()) {return }
                // forgeries
                setTimeout(()=>{
                    var num = (Math.random()*3|0)+1;
                    var arr = [];
                    for (var i = 0; i < num; i++) {
                        // arr[i] = {name: this.newTopic+i,id: i}
                        arr[i] = {name: "联想模拟"+(Math.random()*10|0),id: i}
                    }
                    this.newTopicArr = arr;
                },Math.random()*400+100);
            },
            setTopic(item){
                this.topic.push(item);
                this.newTopic = "";
                this.newTopicArr = [];
                this.topic_ctrl = false;
            },
            removeTopic(item){
                for (var i = 0; i < this.topic.length; i++) {
                    if (this.topic[i].name == item.name) {
                        this.topic.splice(i,1);
                        break;
                    }
                }
            },
            detailBlur(item){
                setTimeout(()=>item.focus=false, 200);
            },
            addDetail(){
                this.detail.push({min:"",max:"",pre:"",focus:false,scale:""});
            },
            removeDetail(){
                this.detail.splice(this.detail.length-1,1);
            },

            setDetail(item,index,type){
                item[type] = this.$refs[type+index][0].value;
            },

            prev(){
                this.$router.go(-1);
            },
            next(){
                this.$router.push({name:'upfileStep3'});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>