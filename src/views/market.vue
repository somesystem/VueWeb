<template>
    <div>
        <div class="market-top main-width">
            <p>首页>金融超市</p>
            <ul>
                <li><span>产品类型：</span></li>
                <li @click="fnChoose(item,pro_type)" v-for="(item,index) in pro_type" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
            <ul>
                <li><span>认购起点：</span></li>
                <li @click="fnChoose(item,origin)" v-for="(item,index) in origin" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
            <ul>
                <li><span>产品期限：</span></li>
                <li @click="fnChoose(item,pro_time)" v-for="(item,index) in pro_time" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
            <ul>
                <li><span>预期收益：</span></li>
                <li @click="fnChoose(item,expect)" v-for="(item,index) in expect" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
            <ul>
                <li><span>产品状态：</span></li>
                <li @click="fnChoose(item,pro_status)" v-for="(item,index) in pro_status" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
            <ul>
                <li><span>金斗云评级：</span></li>
                <li @click="fnChoose(item,star)" v-for="(item,index) in star" :key="index"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
            </ul>
        </div>
        <div class="main-width market-main">
            <nav>
                <div v-show="item.name!='不限'" v-for="(item,index) of chooseItems" :key="index">
                    <span>{{item.name}}</span>
                    <a @click="fnCacelChoose(item)" href="javascript:;"></a>
                </div>
            </nav>
            <ul>
                <li @click="fnSort(item)" :class="item.sort?'active':''" v-for="(item,key) in sort_type" :key="index"><a href="javascript:;">{{item.name}}</a></li>  

                <li class="market-newproduct"><a href="javascript:;">发布新产品</a></li>
            </ul>

            <div>
                <common-item v-for="item in 5"></common-item>
                <nav class="market-page">
                    <a href="javascript:;">首页</a>
                    <a href="javascript:;">上一页</a>
                    <span>第1页/共5页</span>
                    <a href="javascript:;">下一页</a>
                    <a href="javascript:;">尾页</a>
                </nav>
            </div>
        </div>

        <div class="market-bottom">
            <div class="main-width">
                <financial-adv title="您可能需要的理财师"></financial-adv>
            </div>
        </div>
    </div>    
</template>

<script>
    import commonItem from "../modules/common-item.vue";
    import financialAdv from "../modules/financial-adv.vue";

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
        },
        components: {
            commonItem,
            financialAdv
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .market-top
        background-color #fff
        box-sizing border-box
        padding 18px
        margin-top 18px 
        > p 
            height 30px
            line-heght 30px
            font-size 14px
            color #000
        > ul 
            display flex
            height 36px
            line-heght 36px
            
            > li 
                width 100px
                font-size 14px 
                text-align center
            > li:nth-child(1)
                text-align left
    
    .market-main
        > nav
            display flex
            padding 12px 0 16px
            > div
                position relative
                // min-width 80px
                height 30px
                line-height 30px 
                margin-right 12px
                background-color color-red
                font-size 14px 
                color #fff
                box-sizing border-box
                padding 0 20px 0 7px
                > a 
                    position absolute
                    top 5px 
                    right 0 
                    width 20px 
                    height 20px 
                    background url(/public/delete.png) no-repeat center center 
        > ul 
            position relative
            display flex
            padding 0 18px

            li 
                width 100px
                height 14px 
                line-height 14px 
                font-size 14px 
                background url(/public/sort-g.png) no-repeat 31px center

                &.active
                    background-image url(/public/sort-r.png)
                    a 
                        color color-red

                &:nth-child(2)
                    background-position 45px center
            li.market-newproduct
                position absolute
                top -14px
                right 0
                width 130px
                height 30px
                line-height 30px 
                text-align center
                font-size 14px 
                background color-yellow
                a
                    color #fff

    .market-page 
        display flex
        justify-content center 
        align-items center 
        padding-bottom 12px
        > a 
            display block
            width 60px
            height 26px 
            line-height 26px 
            border 1px solid #e5e5e5
            text-align center
            font-size 14px
            color #000
            margin-right 20px 
            &:last-child 
                margin-right 0px
        > span 
            color #000
            margin-right 20px 

    .market-bottom
        background-color #fff
        padding-bottom 40px 

</style>