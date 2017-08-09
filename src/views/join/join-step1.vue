<template>
    <div class="join-step1">
        <join-top step="1"></join-top>
        <ul>
           <li :class="type=='account'?'active':''" @click="fnChoose('account')">我是理财师</li> 
           <li :class="type=='investor'?'active':''" @click="fnChoose('investor')">我是投资者</li> 
        </ul>
        <a @click="fnNext()" :class="{'join-btn':true,'active':type}" href="javascript:;">下一步</a>
    </div>
</template>

<script type="text/javascript">
    import joinTop from "../../modules/join-top.vue";

    export default {
        data(){
            return {
                type: ""
            }
        },
        methods: {
            fnChoose(type){
                this.type = type;
            },
            fnNext(){
                if (this.type) {
                    this.$router.push({name: 'joinStep2', params:{type:this.type}});
                }
            }
        },
        components: {
            joinTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .join-step1
        > ul 
            padding 120px 0
            display flex
            justify-content center
            align-items center 
            flex-direction column

            > li 
                height 60px
                line-height 60px
                text-indent 78px
                font-size 18px
                color #a5a5a5
                background-repeat no-repeat
                background-position left top 
                cursor pointer

                &:nth-child(1)
                    margin-bottom 60px
                    background-image url(/public/licai.png)
                    &.active,&:hover
                        color color-base
                        background-image url(/public/licai-ac.png)

                &:nth-child(2)
                    background-image url(/public/touzi.png)
                    &.active,&:hover
                        color color-base
                        background-image url(/public/touzi-ac.png)

</style>