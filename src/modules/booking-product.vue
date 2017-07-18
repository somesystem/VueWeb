<template>
    <div v-show="show">
        <div class="book-mask"></div>
        <div class="book-con">
            <h3>预约产品</h3>
            <a @click="close()" class="close" href="javascript:;"></a>
            <div>
                <h4><span>产品信息</span></h4>
                <section>
                    <div class="book-con-l">
                        <p>
                            <span>产品简称：</span>
                            <span>天交所-林州重机</span>
                        </p>
                        <p>
                            <span>产品状态：</span>
                            <span>在售</span>
                        </p>
                        <p>
                            <span>返佣率：</span>
                            <span>10%</span>
                        </p>
                        <p>
                            <span>最高收益：</span>
                            <span>30%</span>
                        </p>
                    </div>
                    <div class="book-con-r">
                        <p>
                            <span>发行人：</span>
                            <img src="http://s1.dwstatic.com/group1/M00/9D/75/af7681ad9856be9f73821f77212602bf.jpg" />
                            <b>
                                <i>蔡大大</i>
                                <i>上海宽象资本投资</i>
                            </b>
                        </p>
                        <p><span>筹集进度：</span></p>
                        <p><span><i style="width:70%"></i></span><span>70%</span></p>
                    </div>
                </section>

                <h4><span>客户信息</span></h4>
                <article>
                    <div class="book-cell">
                        <span>客户姓名：</span>
                        <select v-show="!isAdd">
                            <option>请选择客户</option>
                            <option>张三</option>
                            <option>李四</option>
                        </select>
                        <input v-show="isAdd" />
                        <a class="add" v-show="!isAdd" @click="isAdd=true" href="javascript:;">+</a>
                        <span>认购额度：</span>
                        <div class="num">
                            <input type="number" placeholder="请输入额度" />
                            <span>万</span>
                        </div>
                    </div>
                    <div class="book-item">
                        <span>身份证号：</span>
                        <input type="text" placeholder="请输入客户身份证号" />
                    </div>
                    <div class="book-item">
                        <span>手机号码：</span>
                        <input type="text" placeholder="请输入客户手机号码" />
                    </div>
                </article>

                <a @click="edit()" class="book-btn" href="javascript:;">立刻预约</a>
            </div>
        </div>
        <p v-show="isSuccess" class="common_person_my_info_alert">修改成功</p>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            show: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                isAdd: false,
                isSuccess: false
            }
        },
        methods: {
            edit(){
                this.isSuccess = true;
                setTimeout(()=>{
                    this.isSuccess = false;
                    this.close();
                }, 2000);
            },
            close(){
                this.$emit('update:show', false);
            }
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../styl/base";
    .book-mask
        z-index 90
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.5)
    
    .book-btn
        display block
        width 134px
        height 32px
        line-height 32px
        margin 24px auto 0 
        text-align center
        background-color color-red
        color #fff
        font-size size1
        &:hover,&:active
            background-color color-red-select
    .book-con
        z-index 100
        position fixed
        top 50%
        left 50%
        margin-left -350px
        margin-top -260px
        padding-bottom 20px 
        width 700px
        background-color #fff
        border-radius 5px 
        font-size size3
        color color3
        line-height 40px 

        > h3
            height 38px
            line-height 38px
            border-bottom color-border
            text-indent 18px
            color color1
        h4 
            height 14px
            line-height 14px 
            padding 13px 0
            color color-red
            > span
                display block
                border-left 4px solid color-red
                text-indent 6px 
        > div
            padding 0 18px 
            > section 
                display flex 
                border-bottom color-border2
                padding-bottom 10px
        .close 
            position absolute
            top 0
            right 0
            width 38px
            height 38px
            background url('/public/close.png') no-repeat center center

    .book-con-l
        flex 1
        > p 
            display flex
            padding-left 22px
            > span
                display block
                height 40px 
                &:nth-child(1)
                    width 90px
                &:nth-child(2)
                    width 190px
                    text-align center

    .book-con-r
        flex 1
        > p 
            display flex
            padding-left 22px

            > span:nth-child(1)
                display block
                width 90px

        p:nth-child(1)
            height 80px 
            img 
                display block
                width 50px
                height 50px
                border-radius 50%
                margin-right 14px 
            b 
                display block
            i 
                display block
                line-height 25px

        p:nth-child(3)
            margin-left 49px 
            margin-top 14px 
            span 
                display block
                &:nth-child(1)
                    width 188px
                    height 14px
                    border-radius 7px
                    margin-right 12px 
                    background-color #e5e5e5
                    overflow hidden
                    i
                        display block
                        height 14px
                        background-color color-blue

                &:nth-child(2)
                    height 14px
                    line-height 14px
                    font-size 12px
                    color color1            


    .book-cell,.book-item
        padding-right 6px 
        display flex 
        align-items center
        margin-bottom 18px 
        > span
            display block
            width 87px
            height 40px
            text-align center
        input,select
            display block
            border color-border
            box-sizing border-box
            height 40px 
            padding 9px 
            line-height 22px 
            color color3
            font-size size3
    .book-item > input 
        flex 1
        
    .book-cell
        > select 
            width 200px 
        > input
            width 222px 
        span:nth-of-type(2)
            margin-left 22px 
        .add
            display block
            margin-left 8px
            width 12px
            height 12px
            line-height 12px
            border 1px dashed color-blue
            text-align center
            font-size 16px
            color color-blue
            border-radius 50%
        .num
            position relative
            width 240px 
            input 
                width 100%
                padding-right 38px
            > span
                position absolute
                top 0
                right 0
                width 38px
                height 38px
                line-height 38px 
                text-align center
</style>