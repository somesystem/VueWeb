<template>
    <div>
        <div class="common-person-order-top">
            <ul>
                <li @click="user_controller=1" :class="user_controller==1?'active':''"><a href="javascript:;">普通用户</a></li>
                <li @click="user_controller=2" :class="user_controller==2?'active':''"><a href="javascript:;">理财师用户</a></li>
            </ul>
            <nav>
                <a href="javascript:;">导出列表</a>
                <input placeholder="姓名" type="text" />
            </nav>
        </div>
        <div v-show="user_controller==1" class="person-custom-main">
            <dl class="common-person-custom-table">
                <dt>
                    <p>用户姓名</p>
                    <p>身份证号</p>
                    <p>手机号码</p>
                    <p>邮箱</p>
                    <p>累计成交</p>
                    <p>操作</p>
                </dt>
                <dd v-for="i in 20" :key="i">
                    <p>游老板</p>
                    <p>122232877654567890</p>
                    <p>18810658874</p>
                    <p>12345678@3456.com</p>
                    <p>340万</p>
                    <p><a @click="edit()" href="javascript:;">编辑</a><a @click="detail()" href="javascript:;">详情</a></p>
                </dd>
            </dl>
            <common-page></common-page>
        </div>
        <div v-show="user_controller==2" class="person-custom-main">
            <dl class="common-person-custom-table">
                <dt>
                    <p>理财师姓名</p>
                    <p>机构</p>
                    <p>手机号码</p>
                    <p>邮箱</p>
                    <p>累计成交</p>
                    <p>操作</p>
                </dt>
                <dd v-for="i in 12" :key="i">
                    <p>游老板</p>
                    <p>北京顺顺理财</p>
                    <p>18810658874</p>
                    <p>12345678@3456.com</p>
                    <p>340万</p>
                    <p><a @click="edit()" href="javascript:;">编辑</a><a @click="detail()" href="javascript:;">详情</a></p>
                </dd>
            </dl>
            <common-page></common-page>
        </div>
        
        <custom-edit :show="editShow" :type="user_controller"></custom-edit>
    </div>
</template>

<script type="text/javascript">
    import customEdit from "../../modules/person-custom-edit.vue";
    import eventHub from "../../modules/eventHub.js";
    export default {
        data(){
            return {
                user_controller: 1,
                user_normal: [],
                user_special: [],
                editShow: false
            }
        },
        mounted(){
            eventHub.$on("edit-close",()=>{
                this.editShow = false;
            });
            eventHub.$on("edit-confirm",(data)=>{
                // console.log(data);
                this.editShow = false;
            });
        },
        methods: {
            edit(item){
                this.editShow = true;
            },
            detail(item){
                this.$router.push({name:'cus_detail',params:{id:1,type:this.user_controller}});
            }
        },
        components: {
            customEdit
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
</style>