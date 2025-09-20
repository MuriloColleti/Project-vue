import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

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
      redirect: '/login',
    },
  ],
})

export default router
