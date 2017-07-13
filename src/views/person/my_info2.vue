<template>
	<div class="common_person_my_info">
        <h3>个人资质</h3>
		<div class="person_my_info_main">
            <ul class="clearfix">
                <li>
                    <span>理财师姓名：</span>
                    <article v-show="!isEdit">{{name}}</article>
                    <input v-show="isEdit" v-model="name" placeholder="请输入您的姓名" type="text" />
                </li>
                <li></li>
                <li>
                    <span>公司：</span>
                    <article v-show="!isEdit">{{company}}</article>
                    <input v-show="isEdit" v-model="company" placeholder="请输入您的所属公司" type="text" />
                </li>
                <li>
                    <span>职位：</span>
                    <article v-show="!isEdit">{{work}}</article>
                    <input v-show="isEdit" v-model="work" placeholder="请填写您的职位" type="text" />
                </li>
                
                <li v-show="isEdit" class="fileLi fileLi2">
					<span></span>
                    <input type="text" v-model="companyFile" readonly="readonly" />
                    <input id="file7" type="file" />
                    <a class="active" href="javascript:;">上传证明文件</a>
                </li>
                <li v-show="isEdit" class="fileLi fileLi2">
                    <span></span>
                    <input type="text" v-model="workFile" readonly="readonly" />
                    <input id="file8" type="file" />
                    <a class="active" href="javascript:;">上传证明文件</a>
                </li>

                <li v-show="!isEdit" class="fileImg">
                	<span></span>
                	<section class="imgbox">
                		<img src="/public/fileImg.png" />
                	</section>
                </li>
                <li v-show="!isEdit" class="fileImg">
                	<span></span>
                	<section class="imgbox">
                		<img src="/public/fileImg.png" />
                	</section>
                </li>
                
                <li class="large">
                    <span>服务宣言：</span>
                    <article v-show="!isEdit">{{say}}</article>
                    <input v-show="isEdit" v-model="say" type="text" />
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
				isEdit: false,
				name: "大刚",
				company: "上海宽象资本投资",
				work: "客户经理",
				companyFile: "",
				workFile: "",
				say: "",
				editAlert: false
			}
		},
		computed: {
			editMsg(){
				return this.isEdit?'保存信息':'修改信息';
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
                document.getElementById('file7').onchange = function(){
                    _this.companyFile = this.files[0].name;
                }
                document.getElementById('file8').onchange = function(){
                    _this.workFile = this.files[0].name;
                }
            },
			fnEdit(){
				if (this.isEdit) {
                    this.editAlert = true;
                    setTimeout(()=>{
                        this.editAlert = false;
                    },1500)
                }
                this.isEdit = !this.isEdit;
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
</style>