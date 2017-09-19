<template>
    <div>
        <div class="main-width">
            <p class="common-detail-top">首页>金融超市>{{$route.params.id}}</p>
            
            <div class="product-main main-width">
                <div class="product-main-l">
                    <div class="product-name">
                        <div class="product-name-t">
                            <p>
                                <span>腾云资产-1号</span>

                                <span v-if="test==0">在售</span>
                                <span v-if="test==1" class="signR">运行中</span>
                                <span v-if="test==2" class="signG">已结束</span>
                                <span v-if="test==3" class="signY">募集中</span>
                                <span v-if="test==4" class="signY">募集中</span>
                            </p>
                            <p>本期起售日 2017/05/15</p>
                        </div>
                        <div class="product-name-c">
                            <section v-if="test!=4">
                                <p><span style="width:70%"></span></p>
                                <p>70%</p> 
                            </section>
                            <p v-if="test!=4">进度说明：【2017年5月18日10时更新】本期为第一期，本期规模不限，预热中，封账时间约定，有下期。</p>
                            
                            <article class="zq_product" v-if="test==4">
                                <div>
                                    <p>2.0256</p>
                                    <p>单位净值（2017-08-04）</p>
                                </div>
                                <div>
                                    <p>今年来收益：<i>62.83%</i></p>
                                    <p>基金经理：王洋</p>
                                </div>
                                <div>
                                    <p>累计收益：<i>28.87%</i></p>
                                    <p>基金状态：募集中</p>
                                </div>
                            </article>

                            <nav>
                                <a href="javascript:;">固定收益</a>
                                <a href="javascript:;">房地产</a>
                            </nav>
                        </div>
                        <div class="product-name-b">
                            <div>
                                <span v-if="false">评分：</span>
                                <span v-if="false"><i></i><i></i><i></i><i></i></span>
                                <a href="javascript:;">1230</a>
                                <a href="javascript:;">56</a>
                                <a href="javascript:;">12</a>
                                <a href="javascript:;">预览资料</a>
                            </div>
                            <a @click="booking()" href="javascript:;">立即预约</a>
                        </div>
                    </div>

                    

                    <xintuo v-if="test==0"></xintuo>
                    <ziguan v-if="test==1"></ziguan>
                    <guquan v-if="test==2"></guquan>
                    <zhaiquan v-if="test==3"></zhaiquan>
                    <zhengquan v-if="test==4"></zhengquan>
                </div>
                
                <div class="product-main-r">
                    <div class="product-man">
                        <p @click="toLicai()" class="product-man-t">已成交100单</p>
                        <div class="product-man-c">
                            <div @click="toLicai()">
                                <img src="/public/noimg.png"></div>
                                <div>
                                    <p>10位</p>
                                    <p>服务客户</p>
                                </div>
                            </div>
                            <div @click="toLicai()" class="product-man-b"><div>
                                <p><span>蔡大大</span><span>江西</span></p>
                                <p>上海宽象资本投资</p>
                            </div>
                            <div>
                                <a @click='setZixunId(444)' class="common-zixun" href="javascript:;">咨询ta</a>
                            </div>
                        </div>
                    </div>

                    <nav class="product-aside">
                        <div>
                            <a href="javascript:;">分享产品</a>
                            <a @click="collect()" :class="isCollect?'active':''" href="javascript:;">收藏产品</a>
                            <a href="javascript:;">邮件发送</a>
                        </div>
                        <div>
                            <a @click="add()" href="javascript:;">加入对比</a>
                            <a href="javascript:;">下载资料</a>
                            <a href="javascript:;">预览资料</a>
                        </div>
                    </nav>
                    <ul v-show="addProduct.length>0" class="product-aside2">
                        <li v-for="item in addProduct"><p>{{item.name}}<a class="close" @click="dele(item.name)" href="javascript:;"></a></p></li>
                        <li v-show="addProduct.length>1"><p><a @click="toProductVs()" href="javascript:;">进入对比</a></p></li>
                    </ul> 
                    
                </div>
            </div>
        </div>
        <div class="product-other">
            <div class="main-width ">
                <div class="product-other-t">
                    <h2 class="common-h2">相似的产品</h2>
                    <a href="javascript:;">换一批>></a>
                </div>
                <ul class="product-other-c">
                    <li :key="item" v-for="item in 2">
                        <div @click="toProduct()">
                            <h4><i>已发布</i>腾讯资产 - 天山1号</h4>
                            <aside class="product-other-box">
                                <div>
                                    <p>30%</p>
                                    <p>最高预期收益</p>
                                </div>
                                <div>
                                    <p>10%</p>
                                    <p>返佣率</p>
                                </div>
                                <div>
                                    <p>云南</p>
                                    <p>投资区域</p>
                                </div>
                            </aside>
                        </div>

                            
                        <div class="product-other-bottom">
                            <img @click="toProduct()" src="/public/noimg.png" />
                            <div @click="toProduct()">
                                <p>蔡大大</p>
                                <p>上海宽象资本投资</p>
                            </div>
                            
                            <a class="btn" @click="setZixunId(333)" href="javascript:;">咨询ta</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <booking-product :show.sync="bookShow"></booking-product>
    </div>    
</template>

<script>
    var a = 666;
    var z = 3;
    import {mapMutations,mapActions} from "vuex";
    import bookingProduct from '../../../modules/booking-product.vue';

    import xintuo from "./xintuo.vue";
    import ziguan from "./ziguan.vue";
    import zhaiquan from "./zhaiquan.vue";
    import zhengquan from "./zhengquan.vue";
    import guquan from "./guquan.vue";

    export default {
        data(){
            return {
                addProduct: [{name:"产品1"},{name:"产品2"}],
                bookShow: false,
                test: 1,
                isCollect: false
            }
        },
        mounted(){
            this.test = Math.random() * 5 | 0;
        },
        methods: {
            ...mapMutations(["setZixunId"]),
            ...mapActions(["toast"]),
            dele(name){
                for (var i = 0; i < this.addProduct.length; i++) {
                    if(this.addProduct[i].name == name){
                        this.addProduct.splice(i,1);
                        break;
                    }
                }
            },
            add(){
                this.addProduct.push({
                    name: "产品" + z++
                });
            },
            toProduct(){
                this.$router.push({name:'product',params:{id:++a}});
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++a}});
            },
            booking(){
                this.bookShow = true;
            },
            toProductVs(){
                this.$router.push({path:'/nav/market/productVS'});
            },
            collect(){
                this.isCollect = !this.isCollect;
                if (this.isCollect) {
                    this.toast("收藏成功");
                }
            }
        },
        components: {
            bookingProduct,
            xintuo,
            ziguan,
            zhaiquan,
            zhengquan,
            guquan
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../styl/base";
    @import "../../../styl/product";
</style>