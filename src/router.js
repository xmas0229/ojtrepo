import Vue from 'vue'
import Router from 'vue-router'
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1.vue',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2.vue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/page2.vue')
    }
  ]
})
