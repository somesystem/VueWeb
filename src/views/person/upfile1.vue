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
                        name: "集合信托",
                        active: false
                    },
                    {
                        id: 2,
                        name: "资管计划",
                        active: false
                    },
                    {
                        id: 3,
                        name: "债权基金",
                        active: false
                    },
                    {
                        id: 4,
                        name: "政府债",
                        active: false
                    },
                    {
                        id: 5,
                        name: "股权基金",
                        active: false
                    },
                    {
                        id: 6,
                        name: "证券基金",
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
                    this.$router.push({name:'upfileStep2',params:{type:this.typeId}});
                }
            }
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>