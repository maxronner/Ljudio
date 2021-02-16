import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import test from '../components/Login'
import PlaylistView from '../views/PlaylistView'

Vue.use(VueRouter)

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
  },
  { path: '/playlist', name: 'playlist', component: PlaylistView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
