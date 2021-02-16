import { userService } from '../../services/user.service'
import router  from '../../router/index'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

export const authentication = {
  state: initialState,
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      commit('loginRequest', { email })
      try {
        let user = await userService.login(email, password)
        commit('loginSuccess', user)
        router.push('/')
      }
      catch(e) {
        commit('loginFailure', e)
        dispatch('alert/error', e, { root: true })
      }
    },
    logout ({ commit }) {
      userService.logout()
      commit('logout')
    }
  },
  mutations: {
    loginRequest (state, user) {
      state.status = { loggingIn: true }
      state.user = user
    },
    loginSuccess (state, user) {
      state.status = { loggedIn: true }
      state.user = user
    },
    loginFailure (state) {
      state.status = {}
      state.user = null
    },
    logout (state) {
      state.status = {}
      state.user = null
    }
  }
}
