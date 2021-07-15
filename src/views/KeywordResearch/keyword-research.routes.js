export default [
  {
    path: '#',
    name: 'KeywordResearch',
    meta: { title: 'Keyword Research' },
    children: [
      {
        path: 'keyword-1',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Sample Route 1' }
      },
      {
        path: 'keyword-2',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Sample Route 2' }
      },
      {
        path: 'keyword-3',
        component: () => import('@/views/BlankPage'),
        meta: { title: 'Sample Route 3' }
      }
    ]
  }
]
