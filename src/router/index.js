import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../Views/Welcome'
import Search from '../components/HelloWorld'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },

  {
    path: '/Search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
