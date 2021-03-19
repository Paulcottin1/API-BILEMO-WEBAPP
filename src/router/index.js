import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mobiles',
    name: 'mobiles',
    component: () => import('@/views/Mobiles.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/Clients')
  },
  {
    path: '/clientEdit',
    name: 'clientEdit',
    props: true,
    component: () => import('@/views/ClientEdit')
  },
  {
    path: '/clientAdd',
    name: 'clientAdd',
    component: () => import('@/views/ClientAdd')
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
