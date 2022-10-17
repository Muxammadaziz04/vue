import {createWebHistory, createRouter} from 'vue-router'

import HomePage from '../pages/Home.vue'
import AboutPage from '../pages/About.vue'
import DinamicPage from '../pages/Dinamic.vue'
import NotFound from '../pages/404'
import Layout from '../pages/Layout'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/about',
        name: 'Layout',
        component: Layout,
        children: [
          {
            path: '',
            name: 'about',
            component: AboutPage
          },
          {
            path: ':id',
            name: 'dinamic',
            component: DinamicPage
          }
        ]
      },
      {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound
      },
    ]
  })

  export default router
