<template>
    <div class="bg-grey">
        <div class="main-width">
            <p class="common-detail-top">首页>{{personTitle}}</p>

            <div :style="{'backgroundImage':mainBg}" class="common-person-top">
                <a @click="showChooseBg=true" href="javascript:;">更改封面图</a>
                <img src="http://s1.dwstatic.com/group1/M00/9D/75/af7681ad9856be9f73821f77212602bf.jpg" />
                <p>岳大大</p>
                <p>上海宽象资本投资</p>
                <nav>
                    <a href="javascript:;">私募基金</a>
                    <a href="javascript:;">股权基金</a>
                    <a href="javascript:;">信托</a>
                </nav>
                <p>理财服务宗旨：理财学到家，幸福你我他</p>
            </div>
            
            <div class="person-main">
                <person-menu v-if="test" class="person-main-l"></person-menu>
                <person-menu2 v-if="!test" class="person-main-l"></person-menu2>
                <router-view class="person-main-r"></router-view>
            </div>
        </div>  

        <div :class="['person-bg-warp',showChooseBg?'active':'']">
            <div class="person-bg">
                <h3>更改封面图<a class="close" @click="showChooseBg=false" href="javascript:;"></a></h3>
                <ul class="clearfix">
                    <li @click="changeBg(item)" :class="[item.active?'active':'']" v-for="item in bg">
                        <img :src="item.src_m" />
                    </li>
                </ul>
                <a @click="chooseBg()" href="javascript:;">确定更改</a>
            </div>
        </div>  

        <d-confirm></d-confirm>
        <d-promt></d-promt>
    </div>
</template>

<script type="text/javascript">
    import personMenu from "../../modules/person-menu.vue";
    import personMenu2 from "../../modules/person-menu2.vue";
    import dConfirm from "../../modules/d-confirm.vue";
    import dPromt from "../../modules/d-promt.vue";
    import {mapState,mapActions,mapMutations} from "vuex";

    export default {
        data(){
            return {
                test: true,
                bg: [
                    {"src":"/public/warp/bg1.png","src_m":"/public/warp/bg1-small.png","active":true},
                    {"src":"/public/warp/bg2.png","src_m":"/public/warp/bg2-small.png","active":false},
                    {"src":"/public/warp/bg3.png","src_m":"/public/warp/bg3-small.png","active":false},
                    {"src":"/public/warp/bg4.png","src_m":"/public/warp/bg4-small.png","active":false},
                    {"src":"/public/warp/bg5.png","src_m":"/public/warp/bg5-small.png","active":false},
                    {"src":"/public/warp/bg6.png","src_m":"/public/warp/bg6-small.png","active":false}
                ],
                showChooseBg: false 
            }
        },
        mounted(){
            this.test = Math.random() < 0.5;
        },
        computed: {
            ...mapState(["personTitle"]),
            mainBg(){
                for (var i = 0; i < this.bg.length; i++) {
                    if(this.bg[i].active){
                        return 'url("' + this.bg[i].src + '")';
                    }
                    
                }
            }
        },
        methods: {
            ...mapActions(["toast"]),
            ...mapMutations(["setLoginStatus"]),
            changeBg(self){
                this.bg.forEach((item)=>{
                    item.active = false;
                });
                self.active = true;
            },
            chooseBg(){
                this.toast("更换成功");
                this.showChooseBg = false;
            }
        },
        components: {
            personMenu,
            personMenu2,
            dConfirm,
            dPromt
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                vm.setLoginStatus(2);
            });
        },
        beforeRouteLeave(to, from, next){
            this.setLoginStatus(1);
            next();
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    
    .person-main
        margin 12px 0
        display flex
        justify-content space-between

    .person-main-r
        width 898px

    .person-bg-warp
        position fixed
        bottom 0
        left 0
        width 100%
        min-width main-width
        background-color #fff
        border-top color-border 
        padding-bottom 30px 
        transition 0.6s
        transform translateY(100%)
        &.active
            transform translateY(0)
    .person-bg
        margin 0 auto
        width 528px
        > h3
            position relative
            text-indent 2px 
            line-height 40px 
            color color2
            font-size size3 
        .close 
            position absolute
            top 0
            right 0
            width 40px
            height 40px 
            background url('/public/close.png') no-repeat center center
        > ul 
            padding-top 20px
            li 
                position relative
                float left
                margin-right 60px 
                margin-bottom 30px 
                width  230px 
                height 60px 
                border 2px solid transparent
                cursor pointer
                img 
                    display block
                    width 100%
                    height 100%

                &.active
                    border-color color-yellow
                    &:after
                        content ""
                        position absolute
                        right 0
                        bottom 0
                        width 20px 
                        height 20px 
                        background url('/public/select-y.png') no-repeat
                &:nth-child(2n)
                    margin-right 0
        > a 
            display block
            margin 0 auto
            width 100px 
            height 30px 
            line-height 30px 
            text-align center 
            background-color color-yellow 
            font-size size3 
            color #fff 
</style>