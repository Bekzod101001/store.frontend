const state = () => ({
    isPreloaderActive: false
})

const getters = {
    isPreloaderActive (state) {
        return state.isPreloaderActive
    }
}

const mutations = {
    setPreloader(state, payload) {
        state.isPreloaderActive = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}