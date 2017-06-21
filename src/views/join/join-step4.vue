<template>
    <div class="join-step4">
        <join-top step="4"></join-top>
        <div class="join-step4-main">
            <div class="join-step4-img">
                <img src="/public/success.png" >
                <p>注册成功</p>
            </div>
            <p v-if="type=='account'">恭喜您成为金斗云第<i>{{num}}</i>个理财师</p>
            <p>{{time}}秒后自动跳转至<router-link tag="a" to="/">主页>></router-link></p>

        </div>
    </div>
</template>

<script type="text/javascript">
    import joinTop from "../../modules/join-top.vue";
    export default {
        data(){
            return {
                time: 5,
                timer: null,
                num: this.$route.params.num, 
                type: this.$route.params.type
            }
        },
        created(){
            clearInterval(this.timer);
            this.timer = setInterval(this.fn.bind(this),1000);
        },
        methods: {
            fn(){
                if(this.time-- == 1){
                    this.$router.push({path:'/'});
                }
            }
        },
        beforeRouteLeave(from,to,next){
            clearInterval(this.timer);
            next();
        },
        components: {
            joinTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .join-step4-main
        padding 120px 0
        > p 
            height size3
            line-height size3 
            font-size size3
            color color3 
            text-align center 
            &:last-of-type
                margin-top 18px 

            > i 
                margin 4px 
                color color-yellow
            > a 
                margin-left 2px 
                color color-red 
                text-decoration underline

    .join-step4-img
        img
            display block
            margin 0 auto
        p 
            height size1
            line-height size1
            margin 18px 0 60px
            font-size size1
            color color1
            text-align center
    
</style>