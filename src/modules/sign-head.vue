<template>
    <header class="sign-head">
        <div class="main-width">
            <router-link v-if="type==1" tag="a" to="/login">马上登录</router-link>
            <router-link v-if="type==2" tag="a" to="/join">免费注册</router-link>
        </div>
    </header>
</template>

<script type="text/javascript">
    export default {
        props: ['type'],
        data(){
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    
    .sign-head
        > div
            display flex
            padding 0 20px 
            height 126px 
            justify-content flex-end
            align-items center 
            > a 
                display block
                width 98px 
                height 30px
                line-height 30px
                font-size size3
                color color3 
                text-align right
                background url("/public/user.png") no-repeat left center 

</style>