import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '@/pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: Login,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: Register,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: Home,
    },
  ],
})

export default router
