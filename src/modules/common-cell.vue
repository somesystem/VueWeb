<template>
    <div class="common-cell">
        <a class="common-cell-a" @click="toLicai()"></a>
        <h3>已在该平台成交100单</h3>
        <div class="common-cell-c">
            <div class="common-cell-c-img">
                <img src="http://s1.dwstatic.com/group1/M00/9D/75/af7681ad9856be9f73821f77212602bf.jpg" />
                <div>
                    <p><span>蔡大大</span><span>江西</span></p>
                    <a @click="setZixunId(222)" href="javascript:;">马山咨询</a>
                </div>
            </div>
           
            <p>所属机构：宽象资本</p>
            <p>擅长领域：基础建设、房地产</p>
        </div>
    </div>
</template>
<script>
    var b = 121;
    import {mapMutations} from "vuex";
    export default {
        data(){
            return {

            }
        },
        methods: {
            ...mapMutations(["setZixunId"]),
            toLicai(){
                this.$router.push({name:'f_pro',params:{id:++b}});
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .common-cell
        position relative
        padding 18px 0
        cursor pointer
        > h3 
            height 14px 
            line-height 14px
            text-indent 18px 
            font-size size4 
            color color4 
    .common-cell-a
        position absolute
        top 0
        left 0
        right 0
        bottom 0
    .common-cell-c
        padding 26px 18px 0
        border-right color-border
        margin-top -8px     
        > p 
            font-size size3 
            color color3 
            line-height 26px 
    
    .common-cell:last-of-type .common-cell-c
        border-right none

    .common-cell-c-img
        display flex
        margin-bottom 20px 
        > img
            display block
            width 60px
            height 60px
            margin-right 18px
        > div
            width 120px
            > p 
                height 18px 
                line-height 18px 
                span:nth-child(1)
                    font-size size1 
                    color color1 
                    margin-right 12px
                    white-space:nowrap
                    overflow:hidden
                    text-overflow:ellipsis
                    width 72px
                    display inline-block

                span:nth-child(2)
                    font-size size5 
                    color color5
                    display inline-block
            > a 
                position relative
                display block
                margin-top 12px
                margin-left 49px
                width 72px
                height 26px
                line-height 26px
                background-color color-yellow
                font-size 12px 
                text-align center 
                color #fff 
                border-radius 5px 
</style>