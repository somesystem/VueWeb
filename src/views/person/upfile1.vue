<template>
	<div>
        <nav>
            <a @click="choose(index)" v-for="(item,index) in list" :class="item.active?'active':''" href="javascript:;">{{item.name}}</a>
        </nav>
        <a @click="next()" :class="typeId?'active':''" href="javascript:;">下一步</a>
	</div>
</template>

<script scoped type="text/javascript">
    import {mapMutations} from "vuex";
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
        mounted(){
            this.setUpfileStep(1);
        },
        methods: {
            ...mapMutations(["setUpfileStep"]),
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
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>