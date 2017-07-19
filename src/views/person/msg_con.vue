<template>
    <div class="common_person_my_info person_msg_con">
        <h3>系统消息</h3>
        
        <div class="person_msg">
            <div class="person_msg_item" v-for="i in 7" :key="i">
                <span>xxx收藏了您的文章</span>
                <span>2017-07-16</span>
            </div>
        </div>
        <div class="person_bottom bg-grey">
            <common-page></common-page>
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
    @import "../../styl/base";
    @import "../../styl/person_msg";
</style>