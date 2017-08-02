<template>
    <div class="person-menu">
        <nav class="person-menu-cell">
            <div v-for="item in list">
                <h3 :class="item.active?'':'active'" @click="item.active=!item.active">{{item.title}}</h3>
                <ul :style="{'height':item.active?item.height:'0px'}">
                    <li @click="to(i,item.item
                    )" :class="i.active?'active':''" :key="index" v-for="(i,index) in item.item">{{i.name}}</li>
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
                                name: '我的订单',
                                to: "p_buy",
                                active: true
                            },
                            {
                                name: '收藏的产品',
                                to: "p_select",
                                active: false
                            }
                        ]
                    },
                    {
                        title: '我的社区',
                        active: false,
                        height: '123px',
                        item: [
                            {
                                active: false,
                                name: '我的回答',
                                to: "p_answer"
                            },
                            {
                                active: false,
                                name: '我的文章',
                                to: "p_article"
                            },
                            {
                                active: false,
                                name: '我的收藏',
                                to: "p_myselect"
                            }
                        ]
                    },
                    {
                        title: '我的资料',
                        active: false,
                        height: '123px',
                        item: [
                            {
                                active: false,
                                name: '个人信息',
                                to: "p_my_info1"
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
                            },
                            {
                                active: false,
                                name: '社区消息',
                                to: "p_msg_con"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            ...mapMutations(["setPersonTitle"]),
            to(item,parent){
                this.$router.push({name: item.to});
                for (var i = 0; i < parent.length; i++) {
                    parent[i].active=false;
                }
                
                this.setPersonTitle(item.name);
                item.active = true;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    
    .person-menu
        background-color #fff
        width 248px
        border color-border
        
    .person-menu-cell
        padding-bottom 50px
        h3
            height 40px
            line-height 40px
            font-size size3
            color color-red
            text-indent 14px
            cursor pointer
            border-bottom color-border
            background url('/public/person1.png') no-repeat 220px center

            &.active
                background-image url('/public/person2.png')

        ul
            transition 0.3s
            overflow hidden
            li 
                height 40px
                line-height 40px
                text-indent 28px
                border-bottom color-border
                cursor pointer

                &:hover,&.router-link-active,&.active
                    background-color #f1f1f1
</style>