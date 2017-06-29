import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'

import commonCell from "./modules/common-cell.vue"
import commonItem from "./modules/common-item.vue"
import commonPage from "./modules/common-page.vue"
import financialAdv from "./modules/financial-adv.vue"
import financialItem from "./modules/financial-item.vue"
import productItem from "./modules/product-item.vue"


// mixin for handling title
Vue.mixin(titleMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// components
Vue.component('common-cell',commonCell)
Vue.component('common-item',commonItem)
Vue.component('common-page',commonPage)
Vue.component('financial-adv',financialAdv)
Vue.component('financial-item',financialItem)
Vue.component('product-item',productItem)


// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
