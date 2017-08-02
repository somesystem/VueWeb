<template>
    <div class="bg-grey pt20">
        <div class="main-width">
            <ul class="forum-top clearfix">
                <li><a @click="isShowSend=true" href="javascript:;">发布话题</a></li>
                <li><a @click="isShowCreate=true" href="javascript:;">创建话题</a></li>
                <li><a href="javascript:;">分享理财经</a></li>
                <li><a href="javascript:;">我的知识库</a></li>
            </ul>

            <div class="forum-hot">
                <h3>热门话题</h3>
                <nav :class="['clearfix',openMore?'active':'']">
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">私募基金</a>
                </nav>
                <aside @click="openMore=!openMore" :class="openMore?'active':''"></aside>
            </div>

            <div class="forum-main">
                <div class="forum-main-l">
                    <ul>
                        <li><a>理财圈</a></li>
                        <li class="active"><a href="javascript:;">最新</a></li>
                        <li><a href="javascript:;">最热</a></li>
                        <li><a href="javascript:;">等待回复</a></li>
                    </ul>

                    <div v-for="i in 5" key="i" class="forum-item">
                        <p><span>我为理财狂</span><i>发布该问题</i><time>1小时前</time></p>
                        <h4 @click="toArticle(i)">当前经济形势下，安全稳健的投资策略是什么？</h4>
                        <nav>
                            <a href="javascript:;">#股权基金</a>
                            <a href="javascript:;">#固定收益</a>
                        </nav>
                        <section>
                            <div @click="toLicai()">
                                <img src="/public/noimg.png" />
                                <span>蔡大大</span>
                            </div>
                            <p>如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时期，如今我们处在一个非常关键的时...<a @click="toQuestion(i)" href="javascript:;">阅读原文</a></p>
                        </section>
                        <aside>
                            <a href="javascript:;">3984</a>
                            <a href="javascript:;">100条评论</a>
                            <a href="javascript:;">分享</a>
                            <a href="javascript:;">收藏</a>
                            <a href="javascript:;">举报</a>
                        </aside>
                    </div>


                    <a href="javascript:;" class="forum-more">查看更多</a>
                </div>
                <div class="forum-main-r">
                    <h4>相关产品推荐</h4>

                    <div v-for="i in 3" key="i" class="forum-cell">
                        <h5><span>天交所-林州重机</span><i>在售</i></h5>
                        <div>
                            <section>
                                <p>30%</p>
                                <p>最高收益</p>
                            </section>
                            <section>
                                <p>返佣率：</p>
                                <p>投资区域：</p>
                            </section>
                            <section>
                                <p>10%</p>
                                <p>云南</p>
                            </section>
                        </div>
                        <aside>
                            <img src="/public/noimg.png" />
                            <div>
                                <h6>蔡大大（宽象资本）</h6>
                                <p>已成交100单</p>
                            </div>
                        </aside>
                        <nav>
                            <a href="javascript:;">咨询Ta</a>
                            <a @click="booking()" href="javascript:;">立即预约</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <booking-product :show.sync="bookShow"></booking-product>

        <!--发布问题 start-->
        <div class="create-topic-mask" v-show="isShowSend"></div>
        <div class="send-topic" v-show="isShowSend">
            <h4>发布话题<a @click="isShowSend=false" class="close" href="javascript:;"></a></h4>
            <h5>写下您的问题</h5>
            <p>描述精确的问题更能得带解答</p>
            <textarea class="textarea1" placeholder="问题标题"></textarea>
            <div class="create-input">
                <div class="create-input-box clearfix">
                    <div class="create-input-item" v-for="item in aTopic">{{item}}<a href="javascript:;" @click="delTopic(item)"></a></div>
                    <input @input="getTopic()" v-model="newTopic" type="text" :placeholder="aTopic.length?'可添加10个话题':'添加话题'" />
                </div>
                <ul><li @click="setTopic(item,'lxTopic')" v-for="item in lxTopic">#{{item}}</li></ul>
            </div>
            <h6>问题描述（可选）：</h6>
            <textarea class="textarea2"></textarea>

            <a  @click='sendTopic()' href="javascript:;">发布</a>
        </div>
        <!--发布问题 end-->
        
        <!--创建话题 start-->
        <div class="create-topic-mask" v-show="isShowCreate"></div>
        <div class="create-topic" v-show="isShowCreate">
            <h4>创建话题<a @click="isShowCreate=false" class="close" href="javascript:;"></a></h4>
            <div class="create-input">
                <div class="create-input-box clearfix">
                    <div class="create-input-item" v-for="item in aTopic">{{item}}<a href="javascript:;" @click="delTopic(item)"></a></div>
                    <input @input="getTopic()" v-model="newTopic" type="text" :placeholder="aTopic.length?'可添加10个话题':'创建话题'" />
                </div>
                <ul><li @click="setTopic(item,'lxTopic')" v-for="item in lxTopic">#{{item}}</li></ul>
            </div>
            <h5>热门话题</h5>
            <nav class="clearfix">
                <a @click="setTopic(item)" v-for="item in hotTopic" href="javascript:;">{{item}}</a>
            </nav>
            <a @click='createTopic()' href="javascript:;">创建</a>

        </div>
        <!--创建话题 end-->
    </div>
</template>

<script type="text/javascript">
    var k = 1000;
    import bookingProduct from '../../modules/booking-product.vue';
    import { mapActions } from 'vuex';

    export default {
        data(){
            return {
                openMore: false,
                bookShow: false,

                isShowSend: false,

                isShowCreate: false,
                newTopic: '',
                hotTopic: ["私募基金","股权基金","信托","房地产","股权基金","股权基金","信托"],
                lxTopic: [],
                aTopic: [],

            }
        },
        methods: {
            ...mapActions(["toast"]),
            booking(){
                this.bookShow = true;
            },
            getTopic(){
                if (!this.newTopic.trim()) {return}
                var num = Math.random() * 4 | 0;
                var lxTopic = [];
                for (var i = 0; i < num; i++) {
                    lxTopic[i] = this.newTopic + (i + 1);
                }
                this.lxTopic = lxTopic;
            },
            setTopic(item,type){
                var index = this.aTopic.indexOf(item);
                if (index == -1 && this.aTopic.length < 10) {
                    this.aTopic.push(item);
                }
                if (type == 'lxTopic') {
                    this.lxTopic = [];
                    this.newTopic = '';
                }
                
            },
            delTopic(item){
                for (var i = 0; i < this.aTopic.length; i++) {
                    if(this.aTopic[i] == item){
                        this.aTopic.splice(i,1);
                        break;
                    }
                }
            },
            createTopic(){
                if (this.aTopic.length) {
                    this.toast("话题审核中<br/>请耐心等待");

                    setTimeout(()=>{
                        this.isShowCreate = false;
                        this.aTopic = [];
                    }, 2500);
                }
            },
            sendTopic(){
                if (this.aTopic.length) {
                    this.toast("问题审核中<br/>请耐心等待");

                    setTimeout(()=>{
                        this.isShowSend = false;
                        this.aTopic = [];
                    }, 2500);
                }
            },
            toArticle(item){
                this.$router.push({"name":"article","params":{"id":item}});
            },
            toQuestion(item){
                this.$router.push({"name":"question","params":{"id":item}});
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++k}});
            }
        },
        components: {
            bookingProduct
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/forum";
</style>