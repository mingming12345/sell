// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/reset.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routerConifg = [
  {
    path: '/',
    component: Goods
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }
]
let router = new VueRouter({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: routerConifg
})
// eslint-disable-next-line
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// router.go('/ratings')
