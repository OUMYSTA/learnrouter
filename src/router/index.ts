import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'About',
          name: 'about',
          component: () => import('@/pages/AboutPage.vue')
        },
        {
          path: 'Contact',
          name: 'contact',
          component: () => import('@/pages/ContactPage.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})

export default router
