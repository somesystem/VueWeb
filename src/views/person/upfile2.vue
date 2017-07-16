<template>
    <div class="common_person_my_info">
        <h3>上传产品</h3>
        <upfile-step step="2"></upfile-step>

        <div class="pmain">
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
                        <li><span>信托</span><a href="javascript:;">×</a></li>
                        <li class="add">+</li>
                    </ul>
                    <div class="topic_input">
                        <input type="text" />
                        <ol>
                            <li>#信托</li>
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
                <select>
                    <option>请选择付息方式</option>
                    <option>按年付息</option>
                    <option>半年付息</option>
                    <option>按季付息</option>
                    <option selected>固定日期</option>
                </select>
            </div>
            <div class="pmain-item5">
                <ul class="clearfix topic_menu">
                    <li><span>2017-07-08</span><a href="javascript:;">×</a></li>
                    <li class="add">+</li>
                </ul>
                <input type="date" placeholder="固定日期（请选择日期）" />
            </div>


            <dl class="pmain-item4">
                <dt>
                    <div>认购金额（万）</div>
                    <div>预期收益：</div>
                    <div>返佣比率：</div>
                </dt>
                <dd>
                    <div class="input-section2">
                        <input type="text" />
                        <span>~</span>
                        <input type="text" />
                        <aside v-show="false">∞</aside>
                    </div>
                    <div class="input-section">
                        <input min="0" type="number" />
                        <span>%</span>
                    </div>
                    <div class="input-section">
                        <input min="0" type="number" />
                        <span>%</span>
                    </div>
                </dd>

                <dd class="add">
                    <a href="javascript:;">+</a>
                    <a href="javascript:;">-</a>
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
    </div>
</template>

<script scoped type="text/javascript">
    import upfileStep from "../../modules/upfile-step.vue";
    export default {
        data(){
            return {
                term2: ""
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