<template>
	<div>
		<div class="common-person-order-top">
            <ul>
                <li @click="user_controller=1" :class="user_controller==1?'active':''"><a href="javascript:;">普通用户</a></li>
                <li @click="user_controller=2" :class="user_controller==2?'active':''"><a href="javascript:;">理财师用户</a></li>
            </ul>
            <nav>
                <a @click="addUser()" href="javascript:;">{{user_controller==1?'新增客户':'新增渠道'}}</a>
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
    				<p><a @click="edit()" href="javascript:;">编辑</a><a @click="dele()" href="javascript:;">删除</a></p>
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
                    <p><a @click="edit()" href="javascript:;">编辑</a><a href="javascript:;">删除</a></p>
                </dd>
            </dl>
            <common-page></common-page>
        </div>

        
        <div v-show="zhikeConCtrl" class="custom-add-mask"></div>
        <div v-show="zhikeConCtrl" class="custom-add-con">
            <h4>新增客户<a href="javascript:;" class="close" @click="zhikeConCtrl=false"></a></h4>
            <div class="checkbox-ui">
                <div @click="isZhike=true" :class="isZhike?'active':''">直客</div>
                <div @click="isZhike=false" :class="!isZhike?'active':''">渠道</div>
            </div> 
            <a @click="edit(null,true)" href="javascript:;">确定</a>
        </div>

        <custom-edit :show="editShow" :is-zhike="isZhike" :is-add="isAdd" :type="user_controller"></custom-edit>

        <div v-show="deleteCtrl" class="delete-mask"></div>
        <div v-show="deleteCtrl" class="delete-con">
            <a @click="deleteCtrl=false" href="javascript:;"></a>
            <p>确定要删除该条信息吗？</p>
            <nav>
                <a @click="deleteCtrl=false" href="javascript:;">取消</a>
                <a @click="dele2()" href="javascript:;">确定</a>
            </nav>
        </div>
	</div>
</template>

<script type="text/javascript">
    import customEdit from "../../modules/person-custom-edit.vue";
    import eventHub from "../../modules/eventHub.js";
    export default {
        data(){
            return {
                isAdd: false,
                user_controller: 1,
                user_normal: [],
                user_special: [],
                editShow: false,
                deleteCtrl: false,

                isZhike: true,
                zhikeConCtrl: false
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
            addUser(){
                if (this.user_controller==1) {
                    // 新增客户 弹窗选择
                    this.isZhike = true; // 此行可加可不加
                    this.zhikeConCtrl=true;
                }else{
                    // 新增渠道 直接进去
                    this.isZhike = false;
                    this.edit(null,true);
                }
            },
            edit(item,isAdd){
                // 此处item 为循环中单元，给予编辑赋值用

                this.editShow = true;
                if (item===null) {
                    // 新增
                    this.zhikeConCtrl = false;
                    this.isAdd = !!isAdd;
                    this.isZhike = this.isZhike;
                }
                
            },
            dele(item){
                // 此处item 为循环中单元，给予删除id用
                this.deleteCtrl = true;
            },
            dele2(){
                this.deleteCtrl = false;
                // DELETE
            }

        },
        components: {
            customEdit
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../../styl/base";
	.delete-mask
        z-index 900
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.5)
    .delete-con
        z-index 1000
        position fixed
        top 50%
        left 50%
        margin-left -140px
        margin-top -80px
        width 280px
        height 160px
        background-color #fff
        border-radius 5px
        > a
            position absolute
            top 0
            right 0
            width 32px
            height 32px 
            background url('/public/close.png') no-repeat center center
        > p 
            height 120px 
            border-bottom color-border
            box-sizing border-box
            padding 50px 15px 20px
            font-size size3
            color color3
            text-align center
        > nav
            display flex 
            padding 10px 0
            a 
                display block
                flex 1
                height 20px 
                line-height 20px 
                font-size size3
                color color3 
                text-align center 
                border-right color-border
                &:last-child
                    border-right none

    .custom-add-mask
        z-index 900
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.5)
    .custom-add-con
        z-index 1000
        position fixed
        top 50%
        left 50%
        margin-left -140px
        margin-top -80px
        width 280px
        height 160px
        background-color #fff
        border-radius 5px

        h4
            position relative
            font-size size2
            color color2 
            text-align center 
            line-height 40px 
            border-bottom color-border 
            a 
                position absolute
                top 0
                right 0
                width 40px 
                height 40px 
                background url('/public/close.png') no-repeat center center
        .checkbox-ui
            padding 20px 50px
        > a 
            display block
            clear both
            line-height 40px 
            border-top color-border
            text-align center 
</style>