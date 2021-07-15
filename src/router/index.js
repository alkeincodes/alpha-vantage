import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteTesting from '@/views/SiteTesting/site-testing.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...SiteTesting,
    {
      path: '*',
      component: () => import('@/views/404')
    }
  ]
})
console.log('@router: ', router.options.routes)

export default router
