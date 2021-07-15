import Vue from 'vue'
import VueRouter from 'vue-router'
import SeoTesting from '@/views/SEOTesting/seo-testing.routes'
import KeywordResearch from '@/views/KeywordResearch/keyword-research.routes'
import SiteTesting from '@/views/SiteTesting/site-testing.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...SeoTesting,
    ...KeywordResearch,
    ...SiteTesting,
    {
      path: '*',
      hidden: true,
      component: () => import('@/views/404')
    }
  ]
})

export default router
