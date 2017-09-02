<template>
    <div>
        <div class="main-width">
            <p class="common-detail-top">首页>找理财师>岳大大1号</p>

            <div class="common-person-top" style='background-image: url("/public/warp/bg1.png");'>
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

            <div class="finan-detail-man">
                <div class="finan-detail-man-l">
                    <p>已成交100单</p>
                    <div v-if="false" class="detail-man-nav">
                        <div><p>4.7</p><p>专业度</p></div>
                        <div><p>4.5</p><p>服务态度</p></div>
                        <div><p>4.9</p><p>诚信度</p></div>
                    </div>
                    <ul class="detail-man-data">
                        <li><span>用户等级</span><span>c7</span></li>
                        <li><span>地区</span><span>江西 九江</span></li>
                        <li><span>毕业院校</span><span>上海交通大学</span></li>
                        <li><span>最高学历</span><span>硕士</span></li>
                        <li><span>星座</span><span>处女</span></li>
                        <li><span>其他</span><span>获得CFA证书<br/>二级理财师</span></li>
                    </ul>
                    <a @click="setZixunId(666)" class="common-zixun" href="javascript:;">咨询</a>
                    <p>已有320位金友联系过他</p>
                </div>
                <div class="common-person-order-top finan-detail-man-r">
                    <ul>
                        <router-link :to="{name:'f_pro'}" tag="li" exact><a href="javascript:;">发布的产品</a></router-link>
                        <router-link :to="{name:'f_art'}" tag="li"><a href="javascript:;">发布的文章</a></router-link>
                        <router-link :to="{name:'f_que'}" tag="li"><a href="javascript:;">回答的问题</a></router-link>
                    </ul>
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <financial-adv class="pd40" title="您可能需要的理财师"></financial-adv>
        <div class="height40"></div>
    </div>
</template>

<script type="text/javascript">
    import {mapMutations} from "vuex";
    export default {
        methods: mapMutations(["setZixunId"]),
        data(){
            return {
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
    .pd40
        padding-bottom 40px
    
    .finan-detail-man
        display flex
        justify-content space-between
    .finan-detail-man-l
        width 248px
        border color-border
        background-color #fff
        box-sizing border-box
        > p
            &:nth-of-type(1)
                padding 18px
                height size3
                line-height size3
                font-size size3
                color color3
            &:nth-of-type(2)
                line-height size5
                font-size size5
                color color5
                text-align center
        > a
            margin-bottom 12px
            

    .detail-man-nav
        margin-top 32px
        display flex
        > div
            flex 1
            > p
                text-align center
                &:nth-child(1)
                    font-size 20px
                    line-height 20px
                    color color-red
                    margin-bottom 12px
                &:nth-child(2)
                    line-height size5
                    font-size size5
                    color color5

    .detail-man-data
        padding 45px 18px

        > li
            display flex
            line-height 28px
            margin-bottom 9px
            > span 
                display block
                flex 1
                &:nth-child(1)
                    font-size size3
                    color color3
                &:nth-child(2)
                    font-size size2
                    color color2

    .finan-detail-man-l
        border color-border
    .finan-detail-man-r
        width 900px
    
</style>