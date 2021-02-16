import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    SearchResult: []
  },
  mutations: {
    InsertResults (state,result) {
      state.SearchResult = result;
    }
  }
})