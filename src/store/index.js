import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  teacher: null,
  isAuth: false,
  navIndex: 'favourite'   // upload_teacher sign_in
}

const mutations = {
  setTeacher (state, { teacher }) {
    state.teacher = teacher
  },
  clearTeacher (state) {
    state.teacher = null
  },
  authStatus (state, { isAuth }) {
    state.isAuth = isAuth
  },
  setNavIndex (state, { navIndex }) {
    state.navIndex = navIndex
  }
}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
