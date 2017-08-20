import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: '河蟹號',
  teacher: null,
  homework: null,
  sidebarShow: false
}

const mutations = {
  UPDATE_TITLE (state, title) {
    state.title = title || '河蟹號'
  },
  UPDATE_TEACHER (state, teacher) {
    state.teacher = teacher
  },
  UPDATE_HOMEWORK (state, homework) {
    state.homework = homework
  },
  UPDATE_SIDEBARSHOW (state) {
    state.sidebarShow = !state.sidebarShow
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
