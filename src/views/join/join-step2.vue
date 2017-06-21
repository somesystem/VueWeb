<template>
    <div class="join-step2">
        <join-top step="2"></join-top>
        <div class="join-step2-main">
            <div>
                <div class="join-input-box">
                    <input class="input-bg-user" type="text" placeholder="请输入您的用户名" />
                    <p v-show="false">请输入4-20位由字母、数字、中文、“-”、“_”组成的字符</p> 
                    <p class="color-red">用户名不能为空</p> 
                </div>
                <div class="join-input-box">
                    <input class="input-bg-password" maxlength="20" type="text" placeholder="请输入您的密码" />
                    <p>请输入6-20位由字母数字组成的字符</p> 
                </div>
                <div class="join-input-box">
                    <input class="input-bg-password" maxlength="20" type="text" placeholder="请再次输入您的密码" />
                    <p>请再次输入密码</p> 
                </div>
                <div class="join-input-box">
                    <input class="input-bg-mobile" maxlength="11" type="text" placeholder="请输入手机号码" />
                    <p>请输入11位由数字组成的手机号码！</p> 
                </div>
                <div class="join-input-box">
                    <input class="input-bg-yzm" maxlength="6" type="text" placeholder="请输入短信验证码" />
                    <a class="active join-yzm-btn" href="javascript:;">发送</a>
                    <p>请输入6位由数字组成的短信验证码！</p> 
                </div>
            </div>
            
            <div v-if="type=='account'">
                <nav class="join-step2-type">
                    <a @click="licaiType=1" :class="{'active':licaiType==1}" href="javascript:;">我有所属公司</a>
                    <a @click="licaiType=2" :class="{'active':licaiType==2}" href="javascript:;">我是独立理财师</a>
                </nav>
                <div class="join-step2-t-contet">
                    <div v-show="licaiType==1">
                        <div class="join-input-box">
                            <input class="input-bg-company" type="text" placeholder="请输入您的所属公司" /> 
                            <p class="color-red"></p>
                        </div>
                        <div class="join-input-box">
                            <input class="join-input-readonly" type="text" v-model="fileName1" readonly="readonly" />
                            <input id="file1" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>营业执照/私募基金管理人登记证明</p>
                        </div>
                        <div class="join-input-box">
                            <input class="input-bg-user" type="text" placeholder="请填写您的职位" /> 
                        </div>
                        <div class="join-input-box">
                            <input class="join-input-readonly" type="text" v-model="fileName2" readonly="readonly" />
                            <input id="file2" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>名片/工牌与身份证</p>
                        </div> 
                    </div>
                    <div v-show="licaiType==2">
                        <div class="join-input-box">
                            <input class="join-input-readonly" type="text" v-model="fileName3" readonly="readonly" />
                            <input id="file3" multiple="multiple" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>身份证与许可证</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <p class="join-step2-aside">
            <i @click="isRead=!isRead" :class="isRead?'active':''"></i><span @click="isRead=!isRead">我已阅读<a href="javascript:;">《私募基金监管管理暂行方法》</a>确认为合格投资者</span>
        </p>
        <a @click="fnNext()" class="join-btn active" href="javascript:;">下一步</a>
    </div>
</template>

<script type="text/javascript">
    import joinTop from "../../modules/join-top.vue";

    export default {
        data(){
            return {
                licaiType: 1,
                isRead: true,
                type: this.$route.params.type,
                fileName1: '',
                fileName2: '',
                fileName3: '',
            }
        },
        mounted(){
            
            if (this.type == 'account') {
                this.$nextTick(()=>{
                    this.fnNative();
                });
            }
            
        },
        methods: {
            fnNative(){
                // 切换页面时绑定得取消,故用on
                var _this = this;
                document.getElementById('file1').onchange = function(){
                    _this.fileName1 = this.files[0].name;
                }
                document.getElementById('file2').onchange = function(){
                    _this.fileName2 = this.files[0].name;
                }
                document.getElementById('file3').onchange = function(){
                    var aName = [];
                    for (var i = 0; i < this.files.length; i++) {
                        aName[i] = this.files[i].name;
                    }
                    _this.fileName3 = String(aName);
                }
            },
            fnNext(){
                // licaiType
                this.$router.push({name: 'joinStep3', params:{type:this.type}});
            }
        },
        components: {
            joinTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
    .join-yzm-btn
        position absolute
        top 6px
        right 6px 
        width 52px 
        height 28px 
        line-height 28px 
        font-size 12px 
        text-align center 
        color #fff
        background-color color-black
        &.active 
            background-color color-yellow 
            &:active,&:hover
                background-color color-yellow-select

    .join-step2-aside
        display flex
        justify-content center
        align-items center
        margin-bottom 60px  
        > i 
            display block
            width 10px
            height 10px 
            border color-border
            cursor pointer
            &.active
                background url('/public/select-yellow.png') no-repeat center center 
        > span
            padding-left 5px 
            display block
            cursor pointer
            height 12px  
            font-size 12px 
            line-height 12px 
            > a 
                color color-yellow 
                &:active,&:hover 
                    color color-yellow-select

    .join-step2-main
        display flex 
        padding-top 72px 
        justify-content center
        > div
            width 300px

            &:nth-child(2)
                margin-left 100px 
    
    .join-input-box
        position relative
        height 58px 
        > input
            display block
            width 300px
            height 40px
            border color-border
            padding 10px 40px
            line-height 20px 
            font-size size3
            color color3 
            box-sizing border-box
            background-color #fff
            background-position 10px center
            background-repeat no-repeat

        > p 
            height 18px 
            line-height 18px 
            font-size 12px 
            color color-black
    
    .join-input-box .join-input-file
        z-index 10 
        position absolute
        opacity 0
        top 0
        left 0
        cursor pointer 
        font-size 0

        &:hover,&:active 
            + .join-input-upload.active
                background-color color-yellow-select

    .join-input-upload
        position absolute
        top 6px
        left 6px 
        width 90px 
        height 28px 
        line-height 28px 
        font-size 12px 
        text-align center 
        color #fff
        background-color color-black
        &.active 
            background-color color-yellow 
            &:active,&:hover
                background-color color-yellow-select
        & + p 
            text-align right 
    .join-input-box .join-input-readonly
        padding-left 102px 

    .join-step2-type
        display flex 
        justify-content space-between
        margin-bottom 18px 
        > a 
            display block
            width 145px 
            height 40px 
            line-height 40px 
            text-align center
            border color-border
            color #a5a5a5
            font-size 14px 
            box-sizing border-box

            &.active
                color color-blue 
                border 1px solid color-blue
                background url(/public/select-blue.png) no-repeat right bottom 

    .input-bg-user
        background-image url('/public/user2.png')
    .input-bg-password
        background-image url('/public/password.png')
    .input-bg-mobile
        background-image url('/public/mobile.png')
    .input-bg-yzm
        background-image url('/public/yzm.png')
    .input-bg-company
        background-image url('/public/company.png')

</style>