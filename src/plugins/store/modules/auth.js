import api from "@/api";

const actions = {
  getAuthUser ({ commit }) {
    api.auth.get()
      .then((response) => {
        commit('setUser', response.data)
      });
  },
  signIn ({ commit }, payload) {
    api.auth.signIn(payload)
      .then((response) => {
        commit('setUser', response.data.user)
      });
  },
  signUp ({ commit }, payload) {
    api.auth.signUp(payload)
      .then((response) => {
        commit('setUser', response.data.user)
      });
   },
}

const state = () => ({
    authUser: null
})

const mutations = {
    setUser (state, payload) {
      state.authUser = payload;
    },
}

export default {
  namespaced: true,
  actions,
  state,
  mutations
}