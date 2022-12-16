import api from "@/api";
const state = () => ({
    about: {
        full_text: ''
    }
})

const actions = {
    async getAbout (context) {
        const {data} = await api.about.get()
        context.commit('setAbout', data.data.attributes)
    }
}

const mutations = {
    setAbout (state, payload) {
        state.about = payload
    }
}

const getters = {
    about (state) {
        return state.about
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}