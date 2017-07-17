import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            "personTitle": "我是买家的订单",
            "upfileStep": 1
        },
        actions,
        mutations,
        getters
    })
}
