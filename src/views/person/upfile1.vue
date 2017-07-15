<template>
	<div class="common_person_my_info">
        <h3>上传产品</h3>
        <upfile-step step="1"></upfile-step>

        <div class="pmain">
            <h3>产品类型：</h3>
            <nav>
                <a @click="choose(index)" v-for="(item,index) in list" :class="item.active?'active':''" href="javascript:;">{{item.name}}</a>
            </nav>
            <a @click="next()" :class="typeId?'active':''" href="javascript:;">下一步</a>
        </div>
	</div>
</template>

<script scoped type="text/javascript">
	import upfileStep from "../../modules/upfile-step.vue";
	export default {
		data(){
			return {
                list: [
                    {
                        id: 1,
                        name: "信托计划",
                        active: false
                    },
                    {
                        id: 2,
                        name: "股权基金",
                        active: false
                    },
                    {
                        id: 3,
                        name: "债券基金",
                        active: false
                    },
                    {
                        id: 4,
                        name: "证券基金",
                        active: false
                    },
                    {
                        id: 5,
                        name: "资管计划",
                        active: false
                    }
                ],
                typeId: ""
			}
		},
        computed: {
            
        },
        methods: {
            choose(index){
                this.list.forEach(item=>item.active=false);
                this.list[index].active = true;
                this.typeId = this.list[index].id;
            },
            next(){
                if (this.typeId) {
                    this.$router.push({name:'upfileStep2',params:{typeId:this.typeId}});
                }
            }
        },
        components: {
            upfileStep
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/upfile";
</style>