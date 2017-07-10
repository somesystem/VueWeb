<template>
    <div class="common_person_my_info">
        <h3>个人擅长</h3>
        <nav class="join-step3-main">
            <p v-if="isEdit">请选择您擅长的投资领域：</p>
            <p v-else>您擅长的投资领域有：</p>
            <ul>
                <li @click="isEdit?item.select=!item.select:''" :class="item.select?'active':''" v-for="item in list">{{item.name}}</li>
            </ul>
            <a @click="isEdit?fnChange():''" href="javascript:;">换一批</a>
        </nav>
        <a @click="edit()" class="join-step3-main-btn" href="javascript:;">{{editText}}</a>

        <p v-show="isSuccess" class="common_person_my_info_alert">修改成功</p>
    </div>
</template>

<script type="text/javascript">

    export default {
        data(){
            return {
                list: [],
                isEdit: false,
                isSuccess: false,
                testNum: 0, // 测试用
            }
        },
        computed: {
            editText(){
                return this.isEdit?'保存':'编辑';
            }
        },
        created(){
            this.list = this.createTest()
        },
        methods: {
            createTest(){
                var name = '信托';
                var arr = [];
                for (var i = 0; i < 9; i++) {
                    arr[i] = {
                        name: name+ ++this.testNum,
                        select: false,
                        id: this.testNum
                    }
                }
                return arr;
            },
            fnChange(){
                this.list = this.createTest()
            },
            edit(){
                if (this.isEdit) {
                    this.isSuccess = true;
                    setTimeout(()=>{
                        this.isSuccess = false;
                    },1500);
                }
                this.isEdit = !this.isEdit;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .join-step3-main
        width 360px
        margin 30px auto 
        > p, > a 
            height size4
            line-height size4 
            font-size size4
            color color4 
        > p
            margin-bottom 18px 
        > ul 
            overflow hidden
            li 
                float left 
                margin-right 60px 
                margin-bottom 30px 
                width 80px
                height 80px
                border 1px solid color5
                box-sizing border-box
                text-align center
                line-height 78px 
                color color5 
                cursor pointer 

                &.active
                    color color-red 
                    border 1px solid color-red
                    background url('/public/select-red.png') no-repeat right bottom
                &:nth-child(3n)
                    margin-right 0
                &:nth-child(7),&:nth-child(8),&:nth-child(9)
                    margin-bottom 18px 
        > a 
            display block 
            text-align right 

    .join-step3-main-btn
        display block
        margin 0 auto
        width 120px
        height 30px 
        line-height 30px 
        text-align center
        border-radius 5px
        font-size 14px
        color #fff
        background-color color-yellow

        &:active,&:hover
            background-color color-yellow-select
</style>