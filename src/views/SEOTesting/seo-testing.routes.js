export default [
  {
    path: '/seo-testing',
    name: 'SEOTesting',
    meta: { title: 'SEO Testing' },
    children: [
      {
        path: 'seo-1',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Sample Route 1' }
      },
      {
        path: 'seo-2',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Sample Route 2' }
      }
    ]
  }
]
