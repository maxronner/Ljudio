import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../Views/Welcome'
import HelloWorld from '../components/HelloWorld'
import VueYoutube from 'vue-youtube'

Vue.use(VueRouter)
Vue.use(VueYoutube)
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },

  {
    path: '/Search',
    name: 'search',
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
