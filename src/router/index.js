import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import test from '../components/Login'
import VueYoutube from 'vue-youtube'

Vue.use(VueRouter)
Vue.use(VueYoutube)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
