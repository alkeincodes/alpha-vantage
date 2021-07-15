export default [
  {
    path: '/',
    name: 'SiteTesting',
    component: () => import('@/views/SiteTesting/Index'),
    meta: { title: 'Site Testing' },
    children: [
      {
        path: 'site-audit',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Site Audit' }
      },
      {
        path: 'all-sites-dashboard',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'All Sites Dashboard' }
      },
      {
        path: 'page-performance',
        component: () => import('@/views/SiteTesting/Pages/PagesPerformance'),
        meta: { title: 'Pages Performance' }
      },
      {
        path: 'low-ctr-pages',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Low CTR Pages' }
      },
      {
        path: 'missing-keyword',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Missing Keyword' }
      },
      {
        path: 'top-pages',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Top Pages' }
      },
      {
        path: 'track-keywords',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Track Keywords' }
      }
    ]
  }
]
