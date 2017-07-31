<template>
    <div :class="{'toast-fadeIn': this.status==1,'toast-hide': this.status==0,'toast-fadeOut': this.status==2,'toast':true}">
        <p v-html="msg"></p>
    </div>
</template>


<script>
    export default {
        props: {
            msg: {
                type: String,
                required: true
            },
            status: {
                type: String | Number,
                default: 1
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .toast-fadeIn
        animation fadeInUp 1s 0s ease both;
    .toast-fadeOut
        animation fadeOutDown .6s 0s ease both;
    .toast
        z-index 1100
        display flex
        jusitify-content center
        align-items center
        position fixed
        top: 0
        left 0
        bottom 0
        right 0
    .toast-hide
        z-index -1
        opacity 0
    .toast p
        margin 0 auto
        padding 30px 20px
        border-radius 5px
        font-size 12px
        color #fff
        line-height 16px
        background-color rgba(0,0,0,0.8)
    
    @keyframes fadeInUp{
        0%{
            z-index: 1000;
            opacity:0;
            transform:translateY(20px)
        }
        100%{
            z-index: 1000;
            opacity:1;
            transform:translateY(0)
        }
    }
    @keyframes fadeOutDown{
        0%{
            z-index: 1000;
            opacity:1;
            transform:translateY(0)
        }
        100%{
            z-index: -1;
            opacity:0;
            transform:translateY(20px)
        }
    }
</style>
