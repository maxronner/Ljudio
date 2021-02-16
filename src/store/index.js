import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './modules/alert.module'
import { authentication } from './modules/authentication.module'
import { player } from './modules/player.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    alert,
    authentication,
    player
  }
})
