<template>
	<div class="common_person_my_info">
        <h3>上传产品</h3>
        <v-step :step="upfileStep"></v-step>
        <transition name="fade" mode="out-in">
            <router-view class="pmain"></router-view>
        </transition>
	</div>
</template>

<script scoped type="text/javascript">
    import {mapState} from 'vuex';
	import vStep from "../../modules/upfile-step.vue";
	export default {
		data(){
			return {
			}
		},
        computed: mapState(["upfileStep"]),
        components: {
            vStep
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/upfile";
</style>