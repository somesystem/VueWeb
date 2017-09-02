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
            "upfileStep": 1,
            "toast": {
                msg: "",
                timer: null,
                status: 0
            },
            "zixun": {
                isOpen: false,
                id: ""
            },
            // 搜索 关键词、结果数量
            "searchKey": "",
            "searchNum": 0,
            // 登录状态 0未登录 1已登录（不在个人中心） 2已登录（在个人中心）
            "loginStatus": 1,
            "confirm": {
                isShow: false,
                msg: ""
            },
            "promt": {
                isShow: false
            },
            "yufu": {
                isShow: false
            },
            "dakuan": {
                isShow: false
            }
        },
        actions,
        mutations,
        getters
    })
}
