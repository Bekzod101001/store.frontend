import api from "@/api";
import {strapiRetriever} from "@/utils/helper";

const state = () => ({
    products: {
        data: [],
        meta: {}
    },
    detail: {
    }
});

const actions = {
    async getProducts (context) {
        const {data} = await api.products.get({
          populate: ['images', 'category']

        })
        context.commit('setProducts', data)
    }
}

const getters = {
    products(state, getters, store) {
        const productsInBasket = store.basket.products
        productsInBasket.map(item => {
            const foundItem = state.products.data.find(i => i.id === item.id)
            if(foundItem) {
                foundItem.amount = item.amount
            }
        })
        return state.products
    },
    shortList(state) {
        return state.products.data.slice(0, 3)
    },
    recommendList(state) {
        return state.products.data.slice(0, 5)
    },
    detail(state) {
        return state.detail
    }
};

const mutations = {
    setProducts(state, payload) {
        state.products = payload
        state.products.data = state.products.data.map(item => {
            const images = strapiRetriever(item, 'images')
            const id = item.id
            item = item.attributes
            item.id = id
            item.images = images.map(image => process.env.VUE_APP_BASE_URL + image)
            return item
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations

}