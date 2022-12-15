import api from "@/api";

const actions = {
  getAuthUser ({ commit }) {
    api.auth.get()
      .then((response) => {
        commit('setUserInfo', response.data)
      });
  },
  async signIn ({ commit }, payload) {
    await api.auth.signIn(payload)
      .then((response) => {
        localStorage.setItem('accessToken', response.data.jwt);
        commit('setUser', response.data.user)
      });
  },
  async signUp ({ commit }, payload) {
    await api.auth.signUp(payload)
      .then((response) => {
        localStorage.setItem('accessToken', response.data.jwt);
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