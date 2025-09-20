import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
    },
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
  ],
})

export default router
