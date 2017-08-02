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
const productVS = () => import('../views/market/productVS.vue')

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
const myInfo4 = () => import('../views/person/my_info4.vue')
const upfile = () => import('../views/person/upfile.vue')
const upfile1 = () => import('../views/person/upfile1.vue')
const upfile2 = () => import('../views/person/upfile2.vue')
const upfile3 = () => import('../views/person/upfile3.vue')
const upfile4 = () => import('../views/person/upfile4.vue')
const msgSys = () => import('../views/person/msg_sys.vue')
const msgCus = () => import('../views/person/msg_cus.vue')
const msgCon = () => import('../views/person/msg_con.vue')
const orderDetail = () => import('../views/person/order_detail.vue')

// 理财社区
const forumView = () => import('../views/forum/index.vue')
const forum = () => import('../views/forum/forum.vue')
const article = () => import('../views/forum/article.vue')
const question = () => import('../views/forum/question.vue')

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
                                path: 'productVS',
                                name: 'productVS',
                                component: productVS
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
                                name: 'p_buy',
                                component: orderBuy
                            },
                            {
                                path: 'sell',
                                name: 'p_sell',
                                component: orderSell
                            },
                            {
                                path: 'order_detail',
                                name: 'p_order_detail',
                                component: orderDetail
                            },
                            {
                                path: 'cus_place',
                                name: 'p_cus_place',
                                component: customPlace
                            },
                            {
                                path: 'cus_no',
                                name: 'p_cus_no',
                                component: customNo
                            },
                            {
                                path: 'detail',
                                name: 'cus_detail',
                                component: customDetail
                            },
                            {
                                path: 'publish',
                                name: 'p_publish',
                                component: proPub
                            },
                            {
                                path: 'take',
                                name: 'p_take',
                                component: proTake
                            },
                            {
                                path: 'select',
                                name: 'p_select',
                                component: proSelect
                            },
                            {
                                path: 'my_info1',
                                name: 'p_my_info1',
                                component: myInfo1
                            },
                            {
                                path: 'my_info2',
                                name: 'p_my_info2',
                                component: myInfo2
                            },
                            {
                                path: 'my_info3',
                                name: 'p_my_info3',
                                component: myInfo3
                            },
                            {
                                path: 'my_info4',
                                name: 'p_my_info4',
                                component: myInfo4
                            },
                            {
                                path: 'upfile',
                                component: upfile,
                                children: [
                                    {
                                        path: '',
                                        name: 'p_upfile',
                                        component: upfile1
                                    },
                                    {
                                        path: 'upfile2',
                                        name: 'upfileStep2',
                                        component: upfile2
                                    },
                                    {
                                        path: 'upfile3',
                                        name: 'upfileStep3',
                                        component: upfile3
                                    },
                                    {
                                        path: 'upfile4',
                                        name: 'upfileStep4',
                                        component: upfile4
                                    }
                                ]
                            },
                            {
                                path: 'msg_sys',
                                name: 'p_msg_sys',
                                component: msgSys
                            },
                            {
                                path: 'cus_sys',
                                name: 'p_msg_cus',
                                component: msgCus
                            },
                            {
                                path: 'con_sys',
                                name: 'p_msg_con',
                                component: msgCon
                            }
                        ]
                    },
                    {
                        path: 'forum',
                        component: forumView,
                        children: [
                            {
                                path: '',
                                component: forum
                            },
                            {
                                path: 'article/:id?',
                                name: 'article',
                                component: article
                            },
                            {
                                path: 'question/:id?',
                                name: 'question',
                                component: question
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
            }
        ]
    })
}
