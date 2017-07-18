<template>
    <div class="common_person_my_info">
        <h3>修改密码</h3>
        <div class="my_info3">
            <div class="my_info3_item">
                <input type="password" placeholder="请输入您的密码" />
            </div>
            <div class="my_info3_item">
                <input type="password" placeholder="请再次输入您的旧密码" />
            </div>
            <div class="my_info3_item">
                <input type="password" placeholder="请再次输入您的密码" />
            </div>

            <a @click="edit()" class="my_info3_btn" href="javascript:;">再次修改</a>
        </div>
        

        <p v-show="isSuccess" class="common_person_my_info_alert">修改成功</p>
    </div>
</template>

<script type="text/javascript">

    export default {
        data(){
            return {
                isSuccess: false
            }
        },
        
        created(){
            
        },
        methods: {
            edit(){
                this.isSuccess = true;
                setTimeout(()=>{
                    this.isSuccess = false;
                },2000)
            }
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../../styl/base";
    .my_info3
        padding 30px 
    .my_info3_item
        > input
            display block
            margin 0 auto 18px
            width 300px
            height 40px
            padding 0 40px
            border color-border
            background #fff url('/public/password.png') no-repeat 10px center
            font-size size3
            color color3
            box-sizing border-box
    
    .my_info3_btn
        display block
        width 120px
        height 30px
        line-height 28px
        margin 30px auto 
        text-align center
        border 1px solid color-blue
        color color-blue
        box-sizing border-box
        font-size size3
        border-radius 2px 

</style>