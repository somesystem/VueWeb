import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

const navView = () => import('../views/nav.vue')
const topView = () => import('../views/top.vue')
const marketView = () => import('../views/market.vue')

const loginView = () => import('../views/login.vue')
const loginAccoutView = () => import('../views/login-account.vue')
const loginMobileView = () => import('../views/login-mobile.vue')
const joinView = () => import('../views/join.vue')
const joinStep1View = () => import('../views/join-step1.vue')
const joinStep2View = () => import('../views/join-step2.vue')
const joinStep3View = () => import('../views/join-step3.vue')
const joinStep4View = () => import('../views/join-step4.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/', redirect: '/nav' },
            { 
                path: '/nav', 
                component: navView,
                children: [
                    {
                        path: '',
                        component: topView
                        // child path: stock trust bond negotiable donations
                    },
                    {
                        path: 'market',
                        component: marketView
                    },
                    // ...
                ]
            },

            { 
                path: '/login', 
                component: loginView,
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
                component: joinView,
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


            { path: '/new/:page(\\d+)?', component: createListView('new') },
            { path: '/show/:page(\\d+)?', component: createListView('show') },
            { path: '/ask/:page(\\d+)?', component: createListView('ask') },
            { path: '/job/:page(\\d+)?', component: createListView('job') },
            { path: '/item/:id(\\d+)', component: ItemView },
            { path: '/user/:id', component: UserView }
        ]
    })
}
