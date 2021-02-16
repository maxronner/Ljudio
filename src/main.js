import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueTour from 'vue-tour'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import { store } from './store/index'
require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(Vuesax, {
  // options here
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
