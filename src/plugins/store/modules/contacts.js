import api from "@/api";

const state = () => ({
    contacts: {
        partners_phone: '',
        phone: ''
    }
})

const actions = {
    async getContacts (context) {
        const {data} = await api.contacts.get()
        context.commit('setContacts', data.data.attributes)
    }
}

const getters = {
    contacts(state) {
        return state.contacts
    }
}

const mutations = {
    setContacts (state, payload) {
        state.contacts = payload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}