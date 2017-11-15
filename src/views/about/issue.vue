<template>
    <div class="about-issue">
        <h3>反馈问题</h3>
        <textarea placeholder="问题描述" v-model="usertext"></textarea>
        <div class="about-issue-email">
            <p>你的邮箱地址：</p>
            <input type="email" v-model="email" />
        </div>
        <a @click="send()" :class="canClick?'active':''" href="javascript:;">提交</a>
        <p>Ai理财师，有你参与真好。</p>
    </div>    
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data(){
            return {
                usertext: '',
                email: ''
            }
        },
        computed: {
            canClick(){
                return this.usertext && this.email;
            }
        },
        methods: {
            ...mapActions(['toast']),
            send(){
                if (this.canClick) {
                    this.toast('感谢您的提交，我们将尽快处理');
                    this.usertext = '';
                    this.email = '';
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";

</style>