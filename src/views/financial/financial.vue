<template>
    <div>
        <p class="common-nav-top-p">首页>找理财师</p>
        <div class="common-nav-top main-width">
            <nav>
                <div><span>地区：</span></div>
                <ul>
                    <li @click="fnChoose(item,area)" v-for="(item,index) in area"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>性别：</span></div>
                <ul>
                    <li @click="fnChoose(item,sex)" v-for="(item,index) in sex"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul> 
            </nav>
            <nav>
                <div><span>专业：</span></div>
                <ul>
                    <li @click="fnChoose(item,major)" v-for="(item,index) in major"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>机构：</span></div>
                <ul :style="{'height': more.height}">
                    <li @click="fnChoose(item,mechanism)" v-for="(item,index) in mechanism"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <aside :class="more.active?'active':''">
                <input type="text" placeholder="搜索其他机构" />
                <i><!--搜索--></i>
                <a @click="showMore()" href="javascript:;"><span>{{more.msg}}</span><i></i></a>
            </aside>
        </div>
        <div class="main-width common-nav-sort">
            <nav>
                <div v-show="item.name!='全部' && item.name!='不限'" v-for="(item,index) of chooseItems">
                    <span>{{item.name}}</span>
                    <a @click="fnCacelChoose(item)" href="javascript:;"></a>
                </div>
            </nav>
            <ul>
                <li @click="fnSort(item)" :class="item.sort?'active':''" v-for="(item,key) in sort_type"><a href="javascript:;"><span>{{item.name}}</span><i></i></a></li>  
            </ul>
        </div>


        
        <div class="financial-item-box">
            <financial-item :key="i" v-for="i in 9"></financial-item>
        </div>

        <common-page></common-page>
        

        <div class="financial-bottom">
            <div class="main-width">
                <h2 class="common-h2">Ta的理财经</h2>
                <div class="financial-article-box">
                    <div v-for="i in 2" :key="i" class="financial-article">
                        <h3><a @click="toQuestion()" href="javascript:;">当前经济形势下，安全稳健的投资策略是什么？</a></h3>
                        <div>
                            <div @click="toLicai()">
                                <img src="/public/noimg.png" />
                                <a href="javascript:;">3984</a>
                            </div>
                            <div>
                                <h4 @click="toLicai()"><span>蔡大大</span><i>上海宽象资本投资</i></h4>
                                <p @click="toQuestion()">如今我们处们处于一个非常关键的时期。如今我们处于一个非常关键的时期。如今我们处于一个非常关键的时期。如今我们处于一个非常关键的时期。如今我们处于一个非常关键的...<a @click="toQuestion()" class="color-red" href="javascript:;">查看全部</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a @click="toForum()" class="financial-article-more" href="javascript:;">查看全部理财问答>></a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    var k = 3000;
    export default {
        data(){
            return {
                area: [
                    {/*"id":1,*/"name": "全部","select": true,"parent":"area"},
                    {"name": "北京","select": false,"parent":"area"},
                    {"name": "上海","select": false,"parent":"area"},
                    {"name": "重庆","select": false,"parent":"area"},
                    {"name": "广东","select": false,"parent":"area"},
                    {"name": "江苏","select": false,"parent":"area"},
                    {"name": "四川","select": false,"parent":"area"},
                    {"name": "山东","select": false,"parent":"area"},
                    {"name": "江西","select": false,"parent":"area"},
                    {"name": "湖南","select": false,"parent":"area"},
                    {"name": "河北","select": false,"parent":"area"},
                    {"name": "河南","select": false,"parent":"area"},
                    {"name": "广西","select": false,"parent":"area"},
                    {"name": "甘肃","select": false,"parent":"area"},
                    {"name": "贵州","select": false,"parent":"area"}
                ],
                sex: [
                   {"name": "不限","select": true,"parent":"sex"}, 
                   {"name": "男","select": false,"parent":"sex"}, 
                   {"name": "女","select": false,"parent":"sex"}
                ],
                major: [
                    {"name": "全部","select": true,"parent":"major"}, 
                    {"name": "房地产","select": false,"parent":"major"}, 
                    {"name": "互联网","select": false,"parent":"major"}, 
                    {"name": "基础设施","select": false,"parent":"major"}, 
                    {"name": "工商企业","select": false,"parent":"major"},
                    {"name": "金融市场","select": false,"parent":"major"},
                    {"name": "资金池","select": false,"parent":"major"},
                    {"name": "其他","select": false,"parent":"major"}
                ],
                mechanism: [
                    {"name": "全部","select": true,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"},
                    {"name": "紫熙投资","select": false,"parent":"mechanism"}
                ],
                more: {
                    height: '36px',
                    msg: '查看更多',
                    active: false
                },
                sort_type: [
                    {"name": "综合", "sort": true},
                    {"name": "成交量", "sort": false},
                    {"name": "服务客户", "sort": false},
                    {"name": "理财师评级", "sort": false}
                ]
            }
        },
        computed: {
            chooseItems(){
                return this.fnSelect(this.area)
                    .concat(this.fnSelect(this.sex))
                    .concat(this.fnSelect(this.major))
                    .concat(this.fnSelect(this.mechanism))
            }
        },
        methods: {
            fnSelect(parent){
                var arr = [];
                for (var i = 0; i < parent.length; i++) {
                    if(parent[i].select){
                        arr.push(parent[i])
                    }
                }
                return arr;
            },
            fnCacelChoose(item){
                item.select = false;
                var parents = ["area","sex","major","mechanism"];
                this[parents[parents.indexOf(item.parent)]][0].select = true;
                
            },
            fnChoose(item,parent){
                for(var i=0; i<parent.length;i++){
                    parent[i].select = false;
                }
                item.select = true;
            },
            fnSort(item){
                for (var i = 0; i < this.sort_type.length; i++) {
                    this.sort_type[i].sort = false;
                }
                item.sort = true;
            },
            showMore(){
                var json = {}
                if (!this.more.active) {
                    json.height = 'auto';
                    json.msg = '收起'
                }else{
                    json.height = '36px';
                    json.msg = '查看更多';
                }
                json.active = !this.more.active;
                this.more = json;
            },
            toQuestion(){
                this.$router.push({"name":"question","params":{"id":++k}});
            },
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++k}});
            },
            toForum(){
                this.$router.push({name:'forum'});
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .financial-bottom
        background-color #fff

    .financial-article-box
        display flex
    .financial-article
        flex 1
        padding 25px 
        border color-border
        cursor pointer
        &:hover
            border 1px solid #fff
            box-shadow 0 0 8px rgba(0,0,0,0.11)

        &:first-child
            margin-right 16px 
        > h3 
            height size1 
            line-height size1
            font-size size1 
            &,a 
                color size1 
        > div 
            padding-top 18px 
            display flex 
            > div 
                &:nth-child(1)
                    margin-right 18px 
                    width 46px 
                    text-align center
                    img 
                        display block 
                        width 46px 
                        height 46px 
                    a 
                        margin 12px auto 
                        display block
                        font-size 10px
                        width 42px 
                        height 18px 
                        line-height 18px 
                        color #fff 
                        border-radius 5px 
                        background url(/public/zan.png) no-repeat
                        text-indent 10px 

                &:nth-child(2)
                    flex 1
                    h4  
                        margin-bottom 14px 
                        height size2
                        line-height size2
                        font-size size2 
                        color color2 

                        i 
                            margin-left 12px 
                            font-size size5
                            color color5
                    > p 
                        line-height 18px 
                        font-size size3 
                        color color3 
                        text-align justify
    .financial-article-more 
        display block
        height 40px 
        line-height 40px 
        text-align right
        font-size size2 
        color color2 
</style>