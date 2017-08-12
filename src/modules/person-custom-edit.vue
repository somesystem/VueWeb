<template>
    <div v-show="show">
        <div class="mask"></div>
        <div v-if="type==2 && !isAdd" class="content">
            <h3><span>编辑理财师信息</span><a @click="close()" href="javascript:;"></a></h3>
            <ul class="clearfix">
                <li>
                    <span>理财师姓名：</span><input v-model="name" type="text" placeholder="请输入姓名" />
                    <p><!--理财师姓名--></p>
                </li>
                <li><span>性别：</span><div class="checkbox-ui"><div @click="sex=1" :class="sex==1?'active':''">男</div><div @click="sex=2" :class="sex==2?'active':''">女</div></div></li>
                <li><span>手机号码：</span><input type="tel" v-model="tel" placeholder="请输入手机号码" /></li>
                <li>
                    <span>邮箱：</span><input v-model="email" type="email" placeholder="请输入邮箱" />
                    <p><!--请输入正确的手机号码--></p>
                </li>
                <li class="large">
                    <span>所属机构：</span><input v-model="card" type="text" placeholder="请输入所属机构" />
                    <p><!--请输入所属机构--></p>
                </li>
                <li class="large"><span>地址：</span><input v-model="address" type="text" placeholder="请输入地址" /></li>
                <li class="large"><span>备注：</span><input v-model="note" type="text" placeholder="请输入备注" /></li>
            </ul>
            <a @click="confirm()" href="javascript:;">确定</a>
        </div>
        <div v-if="type==1 || isAdd" class="content">
            
            <h3>
                <span v-if="isAdd">新增{{isZhike?'直客':'渠道'}}客户</span>
                <span v-else>编辑客户信息</span>
                <a @click="close()" href="javascript:;"></a>
            </h3>
            <ul class="clearfix">
                <li class="large warn" v-if="!isZhike">
                    <span>理财师：</span>
                    <select>
                        <option>请选择理财师</option>
                        <option>张三</option>
                        <option>李四</option>
                    </select>
                </li>
                <li class="warn">
                    <span>用户姓名：</span><input type="text" v-model="name" placeholder="请输入姓名" />
                    <p>请输入正确的用户姓名</p>
                </li>
                <li><span>性别：</span><div class="checkbox-ui"><div @click="sex=1" :class="sex==1?'active':''">男</div><div @click="sex=2" :class="sex==2?'active':''">女</div></div></li>
                <li class="warn">
                    <span>手机号码：</span><input type="tel" v-model="tel" placeholder="请输入手机号码" />
                    <p>请输入正确的手机号码</p>
                </li>
                <li class="warn">
                    <span>邮箱：</span><input type="email" v-model="email" placeholder="请输入邮箱" />
                    <p>请输入正确的邮箱</p>
                </li>
                <li class="warn large">
                    <span>身份证号：</span><input v-model="card" type="text" placeholder="请输入身份证号" />
                    <p>请输入正确的身份证号</p>
                </li>
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
            },
            isZhike: {
                type: Boolean,
                default: true
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
        padding-bottom 12px 
        width 700px
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
                height 58px
                &.warn input , &.warn select 
                    border 1px solid color-red
                > span,> input,> div, > select
                    float left
                    height 40px
                    line-height 40px
                    font-size size3
                    color color3
                > span 
                    width 84px
                    text-align center
                > input, > select
                    float left
                    width 234px
                    padding 8px 14px
                    line-height 22px
                    border color-border
                    box-sizing border-box
                > p 
                    clear both
                    height 18px 
                    line-height 18px 
                    color color-red 
                    text-indent 84px 
                    font-size 12px 

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
        
</style>