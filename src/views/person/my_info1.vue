<template>
    <div class="common_person_my_info">
        <h3>个人信息</h3>
        <div class="person_my_info_main">
            <ul class="clearfix">
                <li>
                    <span>理财师姓名：</span>
                    <article v-show="!isEdit">{{name}}</article>
                    <input v-show="isEdit" v-model="name" placeholder="请输入您的姓名" type="text" />
                </li>
                <li>
                    <span>性别：</span>
                    <article v-show="!isEdit">{{sex==1?'男':'女'}}</article>
                    <div v-show="isEdit" class="checkbox-ui">
                        <div @click="sex=1" :class="sex==1?'active':''">男</div>
                        <div @click="sex=2" :class="sex==2?'active':''">女</div>
                    </div>
                </li>
                <li>
                    <span>手机号码：</span>
                    <article v-show="!isEdit">{{tel}}</article>
                    <input v-show="isEdit" v-model="tel" placeholder="请输入您的手机号码" type="tel" />
                </li>
                <li>
                    <span>邮箱：</span>
                    <article v-show="!isEdit">{{email}}</article>
                    <input v-show="isEdit" v-model="email" placeholder="请输入您的邮箱" type="email" />
                </li>
                <li>
                    <span>生日：</span>
                    <article v-show="!isEdit">{{birthday}}</article>
                    <input v-show="isEdit" v-model="birthday" placeholder="请输入您的生日" type="text" />
                </li>
                <li>
                    <span>地区：</span>
                    <article v-show="!isEdit">{{area}}</article>
                    <input v-show="isEdit" v-model="area" placeholder="请输入地区" type="text" />
                </li>
                <li>
                    <span>学历：</span>
                    <article v-show="!isEdit && isHasSchool">{{school}}</article>
                    <section @click="isEdit?showSchool=true:''" v-show="!showSchool && !isHasSchool" class="add">添加学历信息</section>
                    <input v-show="isEdit && showSchool" v-model="school" placeholder="请输入学校名称" type="text" />
                </li>
                <li class="fileLi" :style="{opacity:(isEdit && showSchool)?'1':'0'}">
                    <input type="text" v-model="schoolFile" readonly="readonly" />
                    <input id="file5" type="file" />
                    <a class="active" href="javascript:;">上传证明文件</a>
                </li>
                <li>
                    <span>证书：</span>
                    <article v-show="!isEdit && isHasBook">{{book}}</article>
                    <section @click="isEdit?showBook=true:''" v-show="!showBook && !isHasBook" class="add">添加证书</section>
                    <input v-show="isEdit && showBook" v-model="book" placeholder="请输入证书名称" type="text" />
                </li>
                <li class="fileLi" :style="{opacity:(isEdit && showBook)?'1':'0'}">
                    <input type="text" v-model="bookFile" readonly="readonly" />
                    <input id="file6" type="file" />
                    <a class="active" href="javascript:;">上传证明文件</a>
                </li>
                <li class="large">
                    <span>补充：</span>
                    <article v-show="!isEdit">{{other}}</article>
                    <input v-show="isEdit" v-model="other" type="text" />
                </li>
            </ul>
            <a @click="fnEdit()" href="javascript:;">{{editMsg}}</a>
        </div>

        <p v-show="editAlert" class="common_person_my_info_alert">修改成功</p>
    </div>
</template>

<script type="text/javascript">

    export default {
        data(){
            return {
                editAlert: false,
                isEdit: false,
                name: "游老板",
                sex: 1,
                tel: 18888888888,
                email: "12345@123456.com",
                birthday: '',
                area: '',
                school: '',
                schoolFile: '',
                showSchool: false,
                book: '',
                bookFile: '',
                showBook: false,
                other: ''
            }
        },
        computed: {
            isHasSchool(){
                return this.school.trim() && this.schoolFile;
            },
            isHasBook(){
                return this.book.trim() && this.bookFile;
            },
            editMsg(){
                return this.isEdit?'保存个人信息':'修改个人信息';
            }
        },
        mounted(){
            
            this.$nextTick(()=>{
                this.fnNative();
            });
            
        },
        methods: {
            fnNative(){
                var _this = this;
                document.getElementById('file5').onchange = function(){
                    _this.schoolFile = this.files[0].name;
                }
                document.getElementById('file6').onchange = function(){
                    _this.bookFile = this.files[0].name;
                }
            },
            fnEdit(){
                if (this.isEdit) {
                    this.editAlert = true;
                    setTimeout(()=>{
                        this.editAlert = false;
                    },1500)
                }
                if (!this.isHasSchool) {
                    this.showSchool = false;
                }
                if (!this.isHasBook) {
                    this.showBook = false;
                }

                this.isEdit = !this.isEdit;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
</style>