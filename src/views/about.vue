<template>
    <div class="about">
        <div class="about-banner"></div>
        <div class="about-top main-width">
            <h2 class="about-icon2">简介</h2>
            <p>AI理财师是由杭州现象级网络科技有限公司创立的中国首个基于人工智能技术（Artificial Intelligence）的理财知识、资源、经验共享平台。平台以互联网为载体，以大数据为依托，通过严格的审核机制、全新的运营模式、庞大的用户数据，为理财师和投资者提供产品交易、自主学习、知识分享、兴趣社交等全方面服务，让理财更安全、更简单、更有趣。<br/>AI理财师定位“互联网+金融科技”平台，遵守金融风险本质，以安全为根本基础，通过“技术+数据”，包括大数据应用、人工智能等新兴技术，为广大用户提供智能化互联网甚至物联网的极致体验，让金融真正服务生活，智慧生活。</p>
        </div>

        <div class="about-main main-width">
            <h2 class="about-icon">三大优势</h2>
            <h3>严格的入驻审核</h3>
            <p>在前期注册方面，AI理财师引入了严格的注册程序，理财师需提供照片、证件、证明等多种证明材料，通过后台人工+机器双重审核，只有在确保理财师身份真实以及信用等级达标后，理财师能入驻平台。</p>
            <p>短期来说，复杂的程序不利于新增用户，但从长远来说，这建立平台稳步发展的基础，从始至终保障安全、有序的环境至关重要。</p>
            <h3>完美的诚信体系</h3>
            <p>AI理财师平台针对投资人和理财师设置了双向评价体系。一方面投资人可以从诚信、服务态度、专业度三个维度对理财师进行评价；另一方面，AI理财师可以结合投资者的评分，再从活跃度、评论质量、成交量等维度对平台用户进行评级，以此建立一个完整的诚信评价闭环。</p>
            <h3>全新的智能服务</h3>
            <p>AI理财师平台开创了全新的互联网理财师平台模式。</p>
            <p>1.打破了传统理财师平台的包销模式：平台本身并不提供任何产品，也不参与销售，平台上的所有产品均由注册成功的理财师上传或者站外数据爬取，这不仅提高了理财师产品选择的自由度，也极大拓宽了产品范围和种类，解决理财师和投资者“好产品难找”的问题；</p>
            <p>2.引入了全新的金融知识社区功能：线下投资者最大的痛点其实是理财渠道的单一，平台提供“找理财师”的入口，用户根据条件搜索可以快速联系到需求匹配的理财师。同时理财师和投资者可在平台自主学习、知识分享、兴趣活动，既满足了用户的社交需求，同时帮助理财师和投资者建立了良好的关系。</p>
            <p>3.运用人工智能技术使理财更智能：平台引入了最新人工智能（Artificial Intelligence）技术，通过对大数据的运用，用户可以快速获得投资方案、智能匹配理财师、精准推荐理财产品、高效的交易管理系统，增加用户使用频次，让理财更加智能高效。</p>
        </div>

        <div class="about-banner2">
            <div class="main-width">
                <h2 class="about-icon2">发展历程</h2>
                <ol>
                    <li>2017年2月，杭州现象级网络科技有限公司在互联网之都注册成立，同时IT团队与运营团队开始组建。</li>
                    <li>2017年6月28日，AI理财师CEO蔡益锋与熊猫传媒创始人面对面交流达成初步战略合作。</li>
                </ol>
            </div>
        </div>
        
        <div class="about-more main-width">
            <h2 class="about-icon">媒体报道</h2>
            <ul>
               <li><a target="_blank" href="http://hebei.sina.com.cn/wenhua/news/2017-06-30/142323050.html">AI理财师对话熊猫传媒，“互联网+理财师“也玩内容营销！</a></li>
               <li><a target="_blank" href="http://home.henan.163.com/17/07/06/CMSHBOMOXY701559.html">错过了移动互联网，你还要错过这波人工智能+？</a></li>
            </ul>
        </div>

    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../styl/base";
    .about
        font-size 16px
        line-height 32px
        color color-black
        h2 
            font-size 36px
            line-height 48px
            
    .about-banner
        height 600px
        background url('/public/about-banner.jpg') no-repeat center center

    .about-top
        padding 60px 100px 
        border-radius 5px
        background linear-gradient(to bottom,#208ce9,#0174b8)
        color #fff
        margin-top -150px 
        margin-bottom 120px
        
        p 
            padding 30px 0
            text-align justify

    .about-icon,.about-icon2
        position relative
        &:after
            content ""
            position absolute
            left -68px
            height 40px
            width 40px
            top 5px
            background url('/public/rect.png') no-repeat center center
    .about-icon2:after
        background-image url('/public/rect2.png')

    .about-main
        padding-left 100px 
        
        h3
            font-size 24px
            line-height 24px
            padding 60px 0 20px 
            color color-blue3

        p
            padding 0 20px
            color color-about
            border-left 2px solid #e5e4e3
            text-align justify

    .about-banner2
        position relative
        margin 120px 0 60px 
        height 280px 
        background url('/public/about-banner2.jpg') no-repeat center center
        &:before
            content ""
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            background-color rgba(32,120,233,0.75)

        > div
            padding 60px 0 60px 100px 
            color #fff
        
        ol 
            padding 30px 32px
            li 
                position relative
                &:after
                    content ""
                    position absolute
                    top 50%
                    margin-top -6px 
                    left -32px
                    width 12px 
                    height 12px 
                    border-radius 50%
                    background-color #fff 

    .about-more 
        margin 60px auto 
        padding-left 100px 

        ul 
            padding 20px 32px
            li 
                position relative
                border-bottom 1px dotted color-black
                line-height 56px 
                a 
                    color color-about
                    &:hover 
                        color color-blue3
                &:after
                    content ""
                    position absolute
                    top 50%
                    margin-top -6px 
                    left -32px
                    width 12px 
                    height 12px 
                    border-radius 50%
                    background-color color-about
</style>