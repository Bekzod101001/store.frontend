import api from "@/api";
import {strapiFileUrlRetriever} from "@/utils/helper";
const state = () => ({
    socialProfiles: ''
})

const actions = {
    async getSocialProfiles (context) {
        const {data} = await api.socialProfiles.get({
            populate: 'icon'
        })
        context.commit('setSocialProfiles', data.data)
    }
}

const mutations = {
    setSocialProfiles (state, payload) {
        state.socialProfiles = payload.map(item => {
            const icon = process.env.VUE_APP_BASE_URL + strapiFileUrlRetriever(item, 'icon')
            item = item.attributes
            item.icon = icon
            return item
        })
    }
}

const getters = {
    socialProfiles (state) {
        return state.socialProfiles
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}