<template>
    <div class="join-step2">
        <join-top step="2"></join-top>
        <div class="join-step2-main">
            <div>
                <div class="join-input-box">
                    <input :class="nameType>1?'input-error input-bg-user':'input-bg-user'" v-model="yz.name" @focus="yzfocus('name')" @blur="yzBlur('name')" maxlength="20" type="text" placeholder="请输入您的用户名" />
                    <p v-show="nameType==1" >请输入4-20位由字母、数字、中文、“-”、“_”组成的字符</p> 
                    <p v-show="nameType==2" class="color-red">用户名不能为空！</p>
                    <p v-show="nameType==3" class="color-red">用户名格式错误！</p>
                </div>
                <div class="join-input-box">
                    <input :class="passType>1?'input-error input-bg-password':'input-bg-password'" v-model="yz.pass" @focus="yzfocus('pass')" @blur="yzBlur('pass')"  maxlength="20" type="password" placeholder="请输入您的密码" />
                    <p v-show="passType==1">请输入6-20位由字母数字组成的字符</p>
                    <p v-show="passType==2" class="color-red">密码不能为空！</p>
                    <p v-show="passType==3" class="color-red">请输入正确的密码！</p>
                </div>
                <div class="join-input-box">
                    <input :class="pass2Type>1?'input-error input-bg-password':'input-bg-password'" v-model="yz.pass2" @focus="yzfocus('pass2')" @blur="yzBlur('pass2')" maxlength="20" type="password" placeholder="请再次输入您的密码" />
                    <p v-show="pass2Type==1">请再次输入密码</p> 
                    <p v-show="pass2Type==2" class="color-red">请再次输入密码！</p>
                    <p v-show="pass2Type==3" class="color-red">两次输入的密码不一致！</p>
                </div>
                <div class="join-input-box">
                    <input :class="telType>1?'input-error input-bg-mobile':'input-bg-mobile'" v-model="yz.tel" @focus="yzfocus('tel')" @blur="yzBlur('tel')" maxlength="11" type="tel" placeholder="请输入手机号码" />
                    <p v-show="telType==1">请输入11位由数字组成的手机号码！</p>
                    <p v-show="telType==2" class="color-red">手机号不能为空！</p>
                    <p v-show="telType==3" class="color-red">请输入正确的手机号！</p>
                </div>
                <div class="join-input-box">
                    <input :class="codeType>1?'input-error input-bg-yzm':'input-bg-yzm'" v-model="yz.code" @focus="yzfocus('code')" @blur="yzBlur('code')" maxlength="6" type="text" placeholder="请输入短信验证码" />
                    <a @click="getcode()" :class="code.iNow==60?'active join-yzm-btn':'join-yzm-btn'" href="javascript:;">{{code.msg}}</a>
                    <p v-show="codeType==1">请输入6位由数字组成的短信验证码！</p> 
                    <p v-show="codeType==2" class="color-red">请输入短信验证码！</p>
                    <p v-show="codeType==3" class="color-red">短信验证码不正确！</p>
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
                            <input @focus="yzfocus2('company')" :class="companyType>1?'input-error input-bg-company':'input-bg-company'" v-model="yz2.company" type="text" placeholder="请输入您的所属公司" /> 
                            <p v-show="companyType==2" class="color-red">所属公司不能为空！</p>
                        </div>
                        <div class="join-input-box">
                            <input :class="companyFileType>1?'input-error join-input-readonly':'join-input-readonly'" type="text" v-model="yz2.companyFile" readonly="readonly" />
                            <input id="file1" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>营业执照/私募基金管理人登记证明</p>
                            <p v-show="companyFileType==2" class="color-red">公司证明不能为空</p>
                        </div>
                        <div class="join-input-box">
                            <input @focus="yzfocus2('job')" :class="jobType>1?'input-error input-bg-user':'input-bg-user'" v-model="yz2.job" type="text" placeholder="请填写您的职位" /> 
                            <p v-show="jobType==2" class="color-red">职位不能为空</p>
                        </div>
                        <div class="join-input-box">
                            <input :class="jobFileType>1?'input-error join-input-readonly':'join-input-readonly'" type="text" v-model="yz2.jobFile" readonly="readonly" />
                            <input id="file2" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>名片/工牌与身份证</p>
                            <p v-show="jobFileType==2" class="color-red">职位证明不能为空</p>
                        </div> 
                    </div>
                    <div v-show="licaiType==2">
                        <div class="join-input-box">
                            <input :class="personFileType>1?'input-error join-input-readonly':'join-input-readonly'" type="text" v-model="yz2.personFile" readonly="readonly" />
                            <input id="file3" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>身份证</p>
                            <p v-show="personFileType==2" class="color-red">证明文件不能为空</p>
                        </div>
                        <div class="join-input-box">
                            <input :class="personFile2Type>1?'input-error join-input-readonly':'join-input-readonly'" type="text" v-model="yz2.personFile2" readonly="readonly" />
                            <input id="file4" class="join-input-file" type="file" />
                            <a class="active join-input-upload" href="javascript:;">上传证明文件</a>
                            <p>许可证</p>
                            <p v-show="personFile2Type==2" class="color-red">证明文件不能为空</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <p class="join-step2-aside">
            <i @click="isRead=!isRead" :class="isRead?'active':''"></i><span @click="isRead=!isRead">我已阅读<a @click="showTk=true" href="javascript:;">《私募基金监管管理暂行方法》</a>确认为合格投资者</span>
        </p>
        <tiaokuan :show-tk.sync="showTk"></tiaokuan>
        <a @click="fnNext()" class="join-btn active" href="javascript:;">下一步</a>

    </div>
</template>

<script type="text/javascript">
    import joinTop from "../../modules/join-top.vue";
    import tiaokuan from "./tiaokuan.vue";

    export default {
        data(){
            return {
                showTk:false,
                yz: {
                    name: '',
                    pass: '',
                    pass2: '',
                    tel: '',
                    code: '',
                    nameFocus: false,
                    passFocus: false,
                    pass2Focus: false,
                    telFocus: false,
                    codeFocus: false
                },
                yz2: {
                    company: '',
                    companyFile: '',
                    job: '',
                    jobFile: '',
                    personFile: '',
                    personFile2: ''
                },

                code: {
                    msg: "获取",
                    timer: null,
                    iNow: 60
                },
                



                nameType: 0,
                passType: 0,
                pass2Type: 0,
                telType: 0,
                codeType: 0,

                companyType: 0,
                companyFileType: 0,
                jobType: 0,
                jobFileType: 0,
                personFileType: 0,
                personFile2Type: 0,

                licaiType: 1,
                isRead: true,
                type: this.$route.params.type
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
            getcode(){
                if (this.code.iNow==60) {
                    clearInterval(this.code.timer);
                    this.timebase.call(this);
                    this.code.timer = setInterval(this.timebase.bind(this),1000);
                }
            },
            timebase(){
                if (this.code.iNow-- >= 1) {
                    this.code.msg = this.code.iNow + 's';
                }else{
                    this.cleanCode();
                }
            },
            cleanCode(){
                clearInterval(this.code.timer);
                this.code.msg = '获取';
                this.code.iNow = 60;
            },
            yzfocus(type){
                this.yz[type+'Focus'] = true;
                this[type+'Type'] = 1;
            },
            yzfocus2(type){
                this[type+'Type'] = 0;
            },
            yzBlur(type){
                this.yz[type+'Focus'] = false;
                this[type+'Type'] = 0;
            },
            yzAll(){
                var reName = /^[\w\-\u4E00-\u9FA5\uFE30-\uFFA0]{4,20}$/;
                var rePass = /^[\w-]{6,20}$/;
                var reTel = /^1[3-9]\d{9}$/;
                var reCode = /^\d{6}$/;
                var status = true;
                if (!this.yz.name) {
                    this.nameType = 2;
                    status = false;
                }else if (!reName.test(this.yz.name)) {
                    this.nameType = 3;
                    status = false;
                }
                if (!this.yz.pass) {
                    this.passType = 2;
                    status = false;
                }else if (!rePass.test(this.yz.pass)) {
                    this.passType = 3;
                    status = false;
                }
                if (!this.yz.pass2) {
                    this.pass2Type = 2;
                    status = false;
                }else if ( this.yz.pass2 != this.yz.pass ) {
                    this.pass2Type = 3;
                    status = false;
                }
                if (!this.yz.tel) {
                    this.telType = 2;
                    status = false;
                }else if (!reTel.test(this.yz.tel)) {
                    this.telType = 3;
                    status = false;
                }
                if (!this.yz.code) {
                    this.codeType = 2;
                    status = false;
                }else if(!reCode.test(this.yz.code)){
                    this.codeType = 3;
                    status = false;
                }

                if (this.type == 'account') {
                    if (this.licaiType == 1) {
                        if (!this.yz2.company) {
                            this.companyType = 2;
                            status = false;
                        }
                        if (!this.yz2.companyFile) {
                            this.companyFileType = 2;
                            status = false;
                        }

                        if (!this.yz2.job) {
                            this.jobType = 2;
                            status = false;
                        }
                        if (!this.yz2.jobFile) {
                            this.jobFileType = 2;
                            status = false;
                        }

                    }else{
                        if (!this.yz2.personFile) {
                            this.personFileType = 2;
                            status = false;
                        }
                        if (!this.yz2.personFile2) {
                            this.personFile2Type = 2;
                            status = false;
                        }
                    }

                }

                return status;
            },
            fnNative(){
                // 切换页面时绑定得取消,故用on
                var _this = this;
                document.getElementById('file1').onchange = function(){
                    _this.yz2.companyFile = this.files[0].name;
                    _this.companyFileType = 0;
                }
                document.getElementById('file2').onchange = function(){
                    _this.yz2.jobFile = this.files[0].name;
                    _this.jobFileType = 0;
                }
                document.getElementById('file3').onchange = function(){
                    _this.yz2.personFile = this.files[0].name;
                    _this.personFileType = 0;
                }
                document.getElementById('file4').onchange = function(){
                    _this.yz2.personFile2 = this.files[0].name;
                    _this.personFile2Type = 0;
                }
            },
            fnNext(){
                var check = this.yzAll();
                if (!check) {
                    return false 
                }

                // licaiType
                this.$router.push({name: 'joinStep3', params:{type:this.type}});
            }
        },
        components: {
            joinTop,
            tiaokuan
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
        margin-top 18px
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
            &:last-of-type
                position absolute
                bottom 0 
                left 0
                width 100%
    
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