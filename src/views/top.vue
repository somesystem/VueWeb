<template>
    <div class="bg-grey">
        <div class="top-banner">
            <div class="main-width">
                <div class="top-fill">
                    <div class="top-select">
                        <select>
                            <option>投资金额</option>
                            <option>50~100万</option>
                            <option>100~300万</option>
                            <option>300万以上</option>
                        </select>
                    </div>
                    <div class="top-select">
                        <select>
                            <option>预期收益</option>
                            <option>0%~10%</option>
                            <option>10%~20%</option>
                            <option>20%~50%</option>
                            <option>50%以上</option>
                        </select>
                    </div>
                    <div class="top-select">
                        <select>
                            <option>投资期限</option>
                            <option>1~6月</option>
                            <option>6~12月</option>
                            <option>12~24月</option>
                            <option>24~36月</option>
                            <option>36月以上</option>
                        </select>
                    </div>
                    <a @click="toSuggest()" class="top-select-btn" href="javascript:;">快速获取投资方案</a>
                </div> 
            </div>
        </div>

        <nav class="top-menu">
            <ul>
                <li @click="navTab(item)" v-for="item in navList" :class="item.active?'active':''">{{item.name}}</li>
            </ul>
            
            <section>
                <h2>热门话题</h2>
                <ol>
                    <li><a href="javascript:;">贵xx</a></li>
                    <li><a href="javascript:;">8%~9%</a></li>
                    <li><a href="javascript:;">按年付息</a></li>
                    <li><a href="javascript:;">房地产</a></li>
                    <li><a href="javascript:;">按年xx</a></li>
                </ol>
                <a href="javascript:;">查看更多话题>></a>
            </section>
            
        </nav>

        <div class="top-warpper main-width">

            <common-item :key="item" v-for="item in 5"></common-item>
            
            <!-- <router-view class="view"></router-view> -->
            <a href="javascript:;" class="top-more">查询全部266个信托产品</a>
        </div>

        <financial-adv title="优秀理财师"></financial-adv>

        <article class="top-articel">
            <div class="main-width">
                <h2 class="common-h2">媒体报道</h2>
                <div class="top-articel-main">
                    <section>
                        <a href="http://www.caijing.com.cn/20170726/4306514.shtml">
                            <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1504709651324&amp;di=75c5184f63fd2a92ebe01b432e404b61&amp;imgtype=0&amp;src=http%3A%2F%2Fbmp.skxox.com%2F201707%2F24%2Fq168239.113844.jpg" />
                            <p>白热化的金融电商市场，买信托网如何破局而入</p>
                        </a>
                    </section>
                    <section>
                        <a href="http://www.sohu.com/a/169423154_116173">
                            <img src="http://img.p2peye.com/2017/09/01/cbdeb283c4d9ae8c7173c1f4d9e1db34.jpg" />
                            <p>北银消费金融被重罚900万 两高管被禁从事银行业</p>
                        </a>
                    </section>
                    <ul>
                        <!--<li :key="i" v-for="i in 5"><a href="http://www.yoka.com/dna/d/259/533.html">是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算是多少打算倒萨倒萨打算打算按时倒萨打算打算按时打算</a></li>-->
                        <li><a href="http://www.sinotf.com/GB/News/1001/2017-09-01/yOMDAwMDI2NjQyOQ.html">央行为什么一定要建设网联？根本原因是......</a></li>
                        <li><a href="http://iof.hexun.com/2017-09-06/190747480.html">全球首例！迪拜一房地产项目将接受比特币付款</a></li>
                        <li><a href="http://finance.caixin.com/2017-05-04/101085959.html">信用债新常态 4月取消发行1400亿</a></li>
                        <li><a href="http://finance.sina.com.cn/money/bank/bank_hydt/2017-09-06/doc-ifykpzey4691257.shtml">互金两大巨头迎来新战役 微信上线零钱通单挑余额宝</a></li>
                        <li><a href="http://news.ifeng.com/a/20170903/51856781_0.shtml">中国支付产业发展现状及趋势</a></li>
                    </ul>
                </div>
                
            </div>
        </article>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                navList: [
                    {name: "集合信托", active: true, id: 1},
                    {name: "资管计划", active: false, id: 2},
                    {name: "债权基金", active: false, id: 3},
                    {name: "政府债", active: false, id: 4},
                    {name: "股权基金", active: false, id: 5},
                    {name: "政府基金", active: false, id: 6}
                ]
            }
        },
        methods: {
            toSuggest(){
                this.$router.push({"name":"suggest",params:{id:111}});
            },
            navTab(item){
                this.navList.forEach(item=>item.active=false);
                item.active = true;

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";

    .top-banner
        height 340px
        padding-top 30px
        background url("/public/banner.png") no-repeat center center
        box-sizing border-box
    .top-fill
        float right
        padding 30px 0
        background-color #484a4c

        .top-select
            width 200px
            padding: 0 20px
            border-bottom 1px solid #434343
            select
                display block
                width 100%
                height 50px
                color #fff
                font-size 18px
                background-color #484a4c
                border none

    a.top-select-btn
        display block
        margin 30px auto 0
        width 200px
        height 40px
        line-height 40px
        text-align center
        font-size 18px
        color #fff
        background-color color-yellow
        &:active,&:hover 
            background-color color-yellow-select

    .top-menu
        background-color #fff
        > ul
            display flex
            padding 40px 0 30px
            margin 0 auto
            width main-width
            border-bottom 2px solid color-base

            > li
                position relative
                flex 1
                height 18px
                padding-top 125px
                text-align center
                font-size 16px
                line-height 16px
                background-position center top
                background-repeat no-repeat
                cursor pointer
                transition transform 0.3s

                &:nth-child(1){
                    background-image: url(/public/xintuo.png)
                }
                &:nth-child(2){
                    background-image: url(/public/ziguan.png)
                }
                &:nth-child(3){
                    background-image: url(/public/zhaiquan.png)
                }
                &:nth-child(4){
                    background-image: url(/public/zhengfuzhai.png)
                }
                &:nth-child(5){
                    background-image: url(/public/guquan.png)
                }
                &:nth-child(6){
                    background-image: url(/public/zhengquan.png)
                }
                
                &:hover
                    transform translate3d(0,-10px,0)
                &.active
                    transform none
                    &:nth-child(1){
                        background-image: url(/public/xintuo_ac.png)
                    }
                    &:nth-child(2){
                        background-image: url(/public/ziguan_ac.png)
                    }
                    &:nth-child(3){
                        background-image: url(/public/zhaiquan_ac.png)
                    }
                    &:nth-child(4){
                        background-image: url(/public/zhengfuzhai_ac.png)
                    }
                    &:nth-child(5){
                        background-image: url(/public/guquan_ac.png)
                    }
                    &:nth-child(6){
                        background-image: url(/public/zhengquan_ac.png)
                    }


                    &:after
                        content ""
                        position absolute
                        bottom -32px
                        left 50%
                        margin-left -18px
                        width 36px
                        height 19px
                        background #fff url(/public/arrow-top.png) no-repeat

        > section
            width main-width
            margin 0 auto
            height 42px
            line-height 42px
            display flex
            
            h2
                color color-base
                font-size 18px
                width 125px

            > ol
                width 910px
                display flex
                > li
                    font-size 14px 
                    color #000
                    margin-right 34px
                    a
                        color color2 
                        font-size size2 
            > a
                display block
                width 125px
                text-align right
                color #000

    .top-more
        display block
        width 300px
        height 32px 
        line-height 32px 
        border-radius 16px
        text-align center 
        margin 12px auto
        border 1px solid color-base
        color color-base
        font-size 16px

    .top-articel
        background-color #fff
        padding-bottom 40px
    
    .top-articel-main
        display flex

        > section
            width 320px 
            height 210px
            position relative
            > a
                display block
                width 100%
                height 100%
                transition transform 0.3s
                &:hover,&:active
                    transform scale(0.98)

            &:nth-child(1)
                margin-right 20px
            img 
                display block
                width 100%
                height 100%
            p 
                position absolute
                bottom 0
                left 0
                width 100%
                height 56px
                line-height 24px 
                background-color rgba(0,0,0,0.5)
                color #fff
                box-sizing border-box
                padding 4px 18px
                font-size 12px 
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
        
        > ul
            width 480px
            padding 18px
            box-sizing border-box

            li  
                position relative
                height 14px 
                margin-bottom 26px 
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                line-height 14px 
                text-indent 24px 
                &:after 
                    content ""
                    position absolute
                    top 50%
                    left 0
                    margin-top -4px 
                    width 8px
                    height 8px 
                    border-radius 50%
                    background-color color-yellow
                a 
                    font-size size3 
                    color color3 
                &:hover a 
                    color color-red
                
                &:last-of-type
                    margin-bottom 0
</style>    