import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio02',
    name: 'Ejercicio02',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ejercicio02')
  },
  {
    path: '/peopple/:id',
    name: 'detalle',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
