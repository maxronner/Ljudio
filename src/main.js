import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueTour from 'vue-tour'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
require('vue-tour/dist/vue-tour.css')
Vue.use(VueTour)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(Vuesax, {
  // options here
})

// eslint-disable-next-line no-unused-vars
window.app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
