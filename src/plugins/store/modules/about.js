import api from "@/api";
const state = () => ({
    about: {
        full_text: ''
    }
})

const actions = {
    async getAbout (context) {
        const {data} = await api.about.get({
            populate: 'logo'
        })
        context.commit('setAbout', data.data.attributes)
    }
}

const mutations = {
    setAbout (state, payload) {
        state.about = payload
        state.about.logo = process.env.VUE_APP_BASE_URL + state.about.logo.data.attributes.url
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