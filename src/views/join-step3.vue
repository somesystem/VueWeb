<template>
    <div class="join-step3">
        <join-top step="3"></join-top>
        <nav class="join-step3-main">
            <p>请选择您擅长的投资领域：</p>
            <ul>
                <li @click="item.select=!item.select" :class="item.select?'active':''" v-for="item in list">{{item.name}}</li>
            </ul>
            <a @click="fnChange()" href="javascript:;">换一批</a>
        </nav>

        <a @click="fnNext()" class="join-btn active" href="javascript:;">下一步</a>
    </div>
</template>

<script type="text/javascript">
    import joinTop from "../modules/join-top.vue";
    export default {
        data(){
            return {
                list: [],
                testNum: 0, // 测试用
                type: this.$route.params.type
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
            fnNext(){
                this.$router.push({name: 'joinStep4', params:{type:this.type,num: 1024}});
            }
        },
        components: {
            joinTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    
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
</style>