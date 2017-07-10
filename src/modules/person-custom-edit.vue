<template>
    <div v-show="show">
        <div class="mask"></div>
        <div v-if="type==2" class="content">
            <h3><span>编辑理财师信息</span><a @click="close()" href="javascript:;"></a></h3>
            <ul class="clearfix">
                <li><span>理财师姓名：</span><input v-model="name" type="text" placeholder="请输入姓名" /></li>
                <li><span>性别：</span><div class="checkbox-ui"><div @click="sex=1" :class="sex==1?'active':''">男</div><div @click="sex=2" :class="sex==2?'active':''">女</div></div></li>
                <li><span>手机号码：</span><input type="tel" v-model="tel" placeholder="请输入手机号码" /></li>
                <li><span>邮箱：</span><input v-model="email" type="email" placeholder="请输入邮箱" /></li>
                <li class="large"><span>所属机构：</span><input v-model="card" type="text" placeholder="请输入所属机构" /></li>
                <li class="large"><span>地址：</span><input v-model="address" type="text" placeholder="请输入地址" /></li>
                <li class="large"><span>备注：</span><input v-model="note" type="text" placeholder="请输入备注" /></li>
            </ul>
            <a @click="confirm()" href="javascript:;">确定</a>
        </div>
        <div v-if="type==1" class="content">
            <h3>
                <span v-if="isAdd">新增客户</span>
                <span v-else>编辑客户信息</span>
                <a @click="close()" href="javascript:;"></a>
            </h3>
            <ul class="clearfix">
                <li><span>用户姓名：</span><input type="text" v-model="name" placeholder="请输入姓名" /></li>
                <li><span>性别：</span><div class="checkbox-ui"><div @click="sex=1" :class="sex==1?'active':''">男</div><div @click="sex=2" :class="sex==2?'active':''">女</div></div></li>
                <li><span>手机号码：</span><input type="tel" v-model="tel" placeholder="请输入手机号码" /></li>
                <li><span>邮箱：</span><input type="email" v-model="email" placeholder="请输入邮箱" /></li>
                <li class="large"><span>身份证号：</span><input v-model="card" type="text" placeholder="请输入所属机构" /></li>
                <li class="large"><span>地址：</span><input v-model="address" type="text" placeholder="请输入地址" /></li>
                <li class="large"><span>备注：</span><input v-model="note" type="text" placeholder="请输入备注" /></li>
            </ul>
            <a @click="confirm()" href="javascript:;">确定</a>
        </div>
    </div>
</template>

<script type="text/javascript">
    import eventHub from './eventHub.js';
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            type: {
                required: true
            },
            isAdd: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                name: '',
                sex: 1, // 1 男 2 女
                tel: '',
                email: '',
                card: '',
                address: '',
                note: ''
            }
        },
        methods: {
            close(){
                eventHub.$emit('edit-close');
                this.clear();
            },
            clear(){
                this.name = '';
                this.sex = 1;
                this.tel = '';
                this.email = '';
                this.card = '';
                this.address = '';
                this.note = '';
            },
            confirm(){
                eventHub.$emit('edit-confirm',this.$data);
                this.clear();
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .mask
        position fixed
        z-index 990
        top 0
        left 0
        bottom 0
        right 0
        background-color rgba(0,0,0,.5)

    .content
        position fixed
        z-index 1000
        top 50%
        left 50%
        margin-left -350px
        margin-top -201px
        width 700px
        height 402px
        background-color #fff
        border-radius 8px

        > h3
            position relative
            height 40px
            line-height 40px
            border-bottom color-border
            text-indent 22px
            font-size size2
            color color2

            a
                position absolute
                width 40px
                height 40px
                top 0
                right 3px
                background url('/public/close.png') no-repeat center center

        > ul 
            margin-top 30px
            padding 0 32px
            li 
                float left 
                width 50%
                height 40px
                margin-bottom 18px
                > span,> input,> div
                    float left
                    height 40px
                    line-height 40px
                    font-size size3
                    color color3
                > span 
                    width 84px
                    text-align center
                > input 
                    float left
                    width 234px
                    padding 8px 14px
                    line-height 22px
                    border color-border
                    box-sizing border-box

                &.large
                    width 100%
                    input
                        width 552px

        > a 
            display block
            margin 0 auto
            width 153px
            height 30px
            line-height 30px
            color #fff
            background-color color-red
            font-size 14px
            text-align center
            &:active,&:hover
                background-color color-red-select
        
    .checkbox-ui 
        width 234px
        > div
            position relative
            float left
            width 50%
            text-indent 25px
            cursor pointer

            &:before,&:after
                content ""
                position absolute
                top 50%
                border-radius 50%
                box-sizing border-box
            
            &:before
                left 0
                margin-top -7px
                width 14px
                height 14px
                border color-border
            &.active:before
                border-color color-red
            &.active:after
                left 3px
                margin-top -4px
                width 8px
                height 8px
                background-color color-red
</style>