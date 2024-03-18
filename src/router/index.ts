import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //URL de mach eden path'i alt tarafda componentimiz load ediyor.
  routes: [
    {
      
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      
      path: '/',
      name: 'form',
      component: FormView
    },
    {
      //URL de about sayfası varsa alt trafdaki componenti load 'et (yükle)
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
