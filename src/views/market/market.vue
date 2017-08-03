<template>
    <div>
        <p class="common-nav-top-p">首页>金融超市</p>
        <div class="common-nav-top main-width">
            
            <nav>
                <div><span>产品类型：</span></div>
                <ul>
                    <li @click="fnChoose(item,pro_type)" v-for="(item,index) in pro_type"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>认购起点：</span></div>
                <ul>
                    <li @click="fnChoose(item,origin)" v-for="(item,index) in origin"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>产品期限：</span></div>
                <ul>
                    <li @click="fnChoose(item,pro_time)" v-for="(item,index) in pro_time"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>预期收益：</span></div>
                <ul>
                    <li @click="fnChoose(item,expect)" v-for="(item,index) in expect"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>产品状态：</span></div>
                <ul>
                    <li @click="fnChoose(item,pro_status)" v-for="(item,index) in pro_status"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>金斗云评级：</span></div>
                <ul>
                    <li @click="fnChoose(item,star)" v-for="(item,index) in star"><a :class="item.select?'color-base':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
        </div>
        <div class="main-width common-nav-sort">
            <nav>
                <div v-show="item.name!='不限'" v-for="(item,index) of chooseItems">
                    <span>{{item.name}}</span>
                    <a @click="fnCacelChoose(item)" href="javascript:;"></a>
                </div>
            </nav>
            <ul>
                <li @click="fnSort(item)" :class="item.sort?'active':''" v-for="(item,key) in sort_type"><a href="javascript:;"><span>{{item.name}}</span><i></i></a></li>  

                <li class="market-newproduct"><a href="javascript:;">发布新产品</a></li>
            </ul>
        </div>
        <div class="main-width market-main">
            <common-item :key="item" v-for="item in 5"></common-item>
            <common-page></common-page>
        </div>

        <div class="market-bottom">
            <div class="main-width">
                <financial-adv title="您可能需要的理财师"></financial-adv>
            </div>
        </div>
    </div>    
</template>

<script>

    export default {
        data(){
            return {
                pro_type: [
                    {/*"id":1,*/"name": "不限","select": true,"parent":"pro_type"},
                    {"name": "信托","select": false,"parent":"pro_type"},
                    {"name": "资管","select": false,"parent":"pro_type"},
                    {"name": "债券基金","select": false,"parent":"pro_type"},
                    {"name": "证券基金","select": false,"parent":"pro_type"},
                    {"name": "股权基金","select": false,"parent":"pro_type"}
                ],
                origin: [
                   {"name": "不限","select": true,"parent":"origin"}, 
                   {"name": "0~50万","select": false,"parent":"origin"}, 
                   {"name": "50~100万","select": false,"parent":"origin"}, 
                   {"name": "100~300万","select": false,"parent":"origin"}, 
                   {"name": "300万以上","select": false,"parent":"origin"} 
                ],
                pro_time: [
                    {"name": "不限","select": true,"parent":"pro_time"}, 
                    {"name": "0~6个月","select": false,"parent":"pro_time"}, 
                    {"name": "6~12个月","select": false,"parent":"pro_time"}, 
                    {"name": "12~24个月","select": false,"parent":"pro_time"}, 
                    {"name": "24~36个月","select": false,"parent":"pro_time"},
                    {"name": "36个月以上","select": false,"parent":"pro_time"}
                ],
                expect: [
                    {"name": "不限","select": true,"parent":"expect"}, 
                    {"name": "0~10%","select": false,"parent":"expect"}, 
                    {"name": "10~20%","select": false,"parent":"expect"}, 
                    {"name": "20~50%","select": false,"parent":"expect"}, 
                    {"name": "50%以上","select": false,"parent":"expect"}
                ],
                pro_status: [
                    {"name": "不限","select": true,"parent":"pro_status"},
                    {"name": "预热","select": false,"parent":"pro_status"},
                    {"name": "在售","select": false,"parent":"pro_status"},
                    {"name": "已结束","select": false,"parent":"pro_status"}
                ],
                star: [
                    {"name": "不限","select": true,"parent":"star"},
                    {"name": "五星","select": false,"parent":"star"},
                    {"name": "四星","select": false,"parent":"star"},
                    {"name": "三星","select": false,"parent":"star"},
                    {"name": "二星","select": false,"parent":"star"},
                    {"name": "一星","select": false,"parent":"star"},
                ],

                sort_type: [
                    {"name": "综合", "sort": true},
                    {"name": "成交量", "sort": false},
                    {"name": "收益", "sort": false},
                    {"name": "佣金", "sort": false},
                    {"name": "人气", "sort": false},
                    {"name": "抵押", "sort": false},
                ]
            }
        },
        computed: {
            chooseItems(){
                return this.fnSelect(this.pro_type)
                    .concat(this.fnSelect(this.origin))
                    .concat(this.fnSelect(this.pro_time))
                    .concat(this.fnSelect(this.expect))
                    .concat(this.fnSelect(this.pro_status))
                    .concat(this.fnSelect(this.star))
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
                var parents = ["pro_type","origin","pro_time","expect","pro_status","star"];
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
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

    .market-bottom
        background-color #fff
        padding-bottom 40px 

</style>