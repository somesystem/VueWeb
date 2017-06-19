<template>
    <div class="bg-grey">
        <div class="common-nav-top main-width">
            <p>首页>找理财师</p>
            <nav>
                <div><span>地区：</span></div>
                <ul>
                    <li @click="fnChoose(item,area)" v-for="(item,index) in area"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>性别：</span></div>
                <ul>
                    <li @click="fnChoose(item,sex)" v-for="(item,index) in sex"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
                </ul> 
            </nav>
            <nav>
                <div><span>专业：</span></div>
                <ul>
                    <li @click="fnChoose(item,major)" v-for="(item,index) in major"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
            </nav>
            <nav>
                <div><span>机构：</span></div>
                <ul :style="{'height': more.height}">
                    <li @click="fnChoose(item,mechanism)" v-for="(item,index) in mechanism"><a :class="item.select?'color-red':''" href="javascript:;">{{item.name}}</a></li>
                </ul>
                <a @click="showMore()" :class="more.active?'active':''" href="javascript:;"><span>{{more.msg}}</span><i></i></a>
            </nav>
        </div>
        <div class="main-width common-nav-sort">
            <nav>
                <div v-show="item.name!='全部' || item.name!='不限'" v-for="(item,index) of chooseItems">
                    <span>{{item.name}}</span>
                    <a @click="fnCacelChoose(item)" href="javascript:;"></a>
                </div>
            </nav>
            <ul>
                <li @click="fnSort(item)" :class="item.sort?'active':''" v-for="(item,key) in sort_type"><a href="javascript:;"><span>{{item.name}}</span><i></i></a></li>  

            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
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
                    {"name": "综合评分", "sort": false},
                    {"name": "理财师评级", "sort": false}
                ]
            }
        },
        computed: {
            computed: {
                chooseItems(){
                    return this.fnSelect(this.area)
                        .concat(this.fnSelect(this.sex))
                        .concat(this.fnSelect(this.major))
                        .concat(this.fnSelect(this.mechanism))
                }
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
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>