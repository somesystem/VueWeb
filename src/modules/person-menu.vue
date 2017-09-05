<template>
    <div class="person-menu">
        <nav class="person-menu-cell">
            <div v-for="item in list">
                <h3 :class="item.active?'':'active'" @click="item.active=!item.active">{{item.title}}</h3>
                <ul :style="{'height':item.active?item.height:'0px'}">
                    <li @click="to(i)" :class="i.active?'active':''" :key="index" v-for="(i,index) in item.item">{{i.name}}</li>
                </ul>
            </div>
            
        </nav>
    </div>
</template>

<script type="text/javascript">
    import {mapMutations} from "vuex";

    export default {
        data(){
            return {
                list: [
                    {
                        title: '我的订单',
                        active: true,
                        height: '82px',
                        item: [
                            {
                                name: '我是买家的订单',
                                to: "p_buy",
                                active: true
                            },
                            {
                                name: '我是卖家的订单',
                                to: "p_sell",
                                active: false
                            }
                        ]
                    },
                    {
                        title: '我的产品',
                        active: false,
                        height: '164px',
                        item: [
                            {
                                active: false,
                                name: '发布的产品',
                                to: "p_publish"
                            },
                            {
                                active: false,
                                name: '认购的产品',
                                to: "p_take"
                            },
                            {
                                active: false,
                                name: '收藏的产品',
                                to: "p_select"
                            },
                            {
                                active: false,
                                name: '上传产品',
                                to: "p_upfile"
                            }
                        ]
                    },
                    {
                        title: '我的客户',
                        active: false,
                        height: '82px',
                        item: [
                            {
                                active: false,
                                name: '已下单用户',
                                to: "p_cus_place"
                            },
                            {
                                active: false,
                                name: '未下单用户',
                                to: "p_cus_no"
                            }
                        ]
                    },
//                    {
//                        title: '我的社区',
//                        active: false,
//                        height: '123px',
//                        item: [
//                            {
//                                active: false,
//                                name: '我的回答',
//                                to: "p_answer"
//                            },
//                            {
//                                active: false,
//                                name: '我的文章',
//                                to: "p_article"
//                            },
//                            {
//                                active: false,
//                                name: '我的收藏',
//                                to: "p_myselect"
//                            }
//                        ]
//                    },
                    {
                        title: '我的资料',
                        active: false,
                        height: '164px',
                        item: [
                            {
                                active: false,
                                name: '个人信息',
                                to: "p_my_info1"
                            },
                            {
                                active: false,
                                name: '个人资质',
                                to: "p_my_info2"
                            },
                            {
                                active: false,
                                name: '个人擅长',
                                to: "p_my_info3"
                            },
                            {
                                active: false,
                                name: '修改密码',
                                to: "p_my_info4"
                            }
                        ]
                    },
                    {
                        title: '我的消息',
                        active: false,
                        height: '123px',
                        item: [
                            {
                                active: false,
                                name: '系统消息',
                                to: "p_msg_sys"
                            },
                            {
                                active: false,
                                name: '客户消息',
                                to: "p_msg_cus"
                            }
//                            {
//                                active: false,
//                                name: '社区消息',
//                                to: "p_msg_con"
//                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
            var name = this.$route.name;
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].item.length; j++) {
                    if(this.list[i].item[j].to == name){
                        this.list[i].item[j].active=true;
                        this.list[i].active = true;
                    }else{
                        this.list[i].item[j].active=false;
                    }
                }
            }
        },

        methods: {
            ...mapMutations(["setPersonTitle"]),
            to(item){
                this.$router.push({name: item.to});
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].item.length; j++) {
                        this.list[i].item[j].active=false;
                    }
                }
                
                this.setPersonTitle(item.name);
                item.active = true;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/person-menu";
</style>