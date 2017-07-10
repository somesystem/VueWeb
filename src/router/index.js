import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting -- 待删除
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

// 菜单
const nav = () => import('../views/nav.vue')
const topView = () => import('../views/top.vue')

// 金融超市
const market = () => import('../views/market/index.vue')
const marketView = () => import('../views/market/market.vue')
const suggestView = () => import('../views/market/suggest.vue')
const productDetailView = () => import('../views/market/product.vue')

// 找理财师
const financial = () => import('../views/financial/index.vue')
const financialView = () => import('../views/financial/financial.vue')
const finanDetailView = () => import('../views/financial/finan-detail.vue')
const finanDetailArt = () => import('../views/financial/finan-detail-art.vue')
const finanDetailEva = () => import('../views/financial/finan-detail-eva.vue')
const finanDetailPro = () => import('../views/financial/finan-detail-pro.vue')
const finanDetailQue = () => import('../views/financial/finan-detail-que.vue')

// 个人中心
const person = () => import('../views/person/index.vue')
const orderBuy = () => import('../views/person/order_buy.vue')
const orderSell = () => import('../views/person/order_sell.vue')
const customPlace = () => import('../views/person/custom_place.vue')
const customNo = () => import('../views/person/custom_no.vue')
const customDetail = () => import('../views/person/custom_detail.vue')
const proPub = () => import('../views/person/pro_pub.vue')
const proTake = () => import('../views/person/pro_take.vue')
const proSelect = () => import('../views/person/pro_select.vue')
const myInfo1 = () => import('../views/person/my_info1.vue')
const myInfo2 = () => import('../views/person/my_info2.vue')
const myInfo3 = () => import('../views/person/my_info3.vue')




// 搜索
const search = () => import('../views/search/index.vue')
const searchProView = () => import('../views/search/s_pro.vue')
const searchFinanView = () => import('../views/search/s_finan.vue')
const searchTopicView = () => import('../views/search/s_topic.vue')

// 登陆
const login = () => import('../views/login/index.vue')
const loginAccoutView = () => import('../views/login/login-account.vue')
const loginMobileView = () => import('../views/login/login-mobile.vue')

// 注册
const join = () => import('../views/join/index.vue')
const joinStep1View = () => import('../views/join/join-step1.vue')
const joinStep2View = () => import('../views/join/join-step2.vue')
const joinStep3View = () => import('../views/join/join-step3.vue')
const joinStep4View = () => import('../views/join/join-step4.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/', redirect: '/nav' },
            { 
                path: '/nav', 
                component: nav,
                children: [
                    {
                        path: '',
                        component: topView
                        // child path: stock trust bond negotiable donations
                    },
                    {
                        path: 'market',
                        component: market,
                        children: [
                            {
                                path: '',
                                component: marketView
                            },
                            {
                                path: 'suggest/:id?',
                                name: 'suggest',
                                component: suggestView
                            },
                            {
                                path: ':id',
                                name: 'product',
                                component: productDetailView
                            }
                        ]
                    },
                    {
                        path: 'financial',
                        component: financial,
                        children: [
                            {
                                path: '',
                                component: financialView
                            },
                            {
                                path: 'detail/:id',
                                component: finanDetailView,
                                children: [
                                    {
                                        path: '',
                                        name: 'f_pro',
                                        component: finanDetailPro
                                    },
                                    {
                                        path: 'question',
                                        name: 'f_que',
                                        component: finanDetailQue
                                    },
                                    {
                                        path: 'article',
                                        name: 'f_art',
                                        component: finanDetailArt
                                    },
                                    {
                                        path: 'evaluate',
                                        name: 'f_eva',
                                        component: finanDetailEva
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        path: 'search/:id',
                        name: 'search',
                        component: search,
                        children: [
                            {
                                path: 'product',
                                name: 's_pro',
                                component: searchProView
                            },
                            {
                                path: 'financial',
                                name: 's_finan',
                                component: searchFinanView
                            },
                            {
                                path: 'topic',
                                name: 's_topic',
                                component: searchTopicView
                            }
                        ]
                    },
                    {
                        path: 'person/:id',
                        component: person,
                        children: [
                            {
                                path: '',
                                redirect: 'buy'
                            },
                            {
                                path: 'buy',
                                component: orderBuy
                            },
                            {
                                path: 'sell',
                                component: orderSell
                            },
                            {
                                path: 'cus_place',
                                component: customPlace
                            },
                            {
                                path: 'cus_no',
                                component: customNo
                            },
                            {
                                path: 'detail',
                                name: 'cus_detail',
                                component: customDetail
                            },
                            {
                                path: 'publish',
                                component: proPub
                            },
                            {
                                path: 'take',
                                component: proTake
                            },
                            {
                                path: 'select',
                                component: proSelect
                            },
                            {
                                path: 'my_info1',
                                component: myInfo1
                            },
                            {
                                path: 'my_info2',
                                component: myInfo2
                            },
                            {
                                path: 'my_info3',
                                component: myInfo3
                            }
                        ]
                    }
                ]
            },

            { 
                path: '/login', 
                component: login,
                children: [
                    {
                        path: '',
                        component: loginAccoutView
                    },
                    {
                        path: 'mobile',
                        component: loginMobileView
                    }
                ]
            },
            { 
                path: '/join', 
                component: join,
                children: [
                    {
                        path: '',
                        component: joinStep1View
                    },
                    {
                        path: 'step2/:type',
                        name: 'joinStep2',
                        component: joinStep2View
                    },
                    {
                        path: 'step3/:type',
                        name: 'joinStep3',
                        component: joinStep3View
                    },
                    {
                        path: 'step4/:type',
                        name: 'joinStep4',
                        component: joinStep4View
                    }
                ]
            },

            // 以下待删除
            { path: '/new/:page(\\d+)?', component: createListView('new') },
            { path: '/show/:page(\\d+)?', component: createListView('show') },
            { path: '/ask/:page(\\d+)?', component: createListView('ask') },
            { path: '/job/:page(\\d+)?', component: createListView('job') },
            { path: '/item/:id(\\d+)', component: ItemView },
            { path: '/user/:id', component: UserView }
        ]
    })
}
