import api from "@/api";
import {strapiFileUrlRetriever} from "@/utils/helper";

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

const mutations = {
    setProducts(state, payload) {
        state.products = payload
        state.products.data = state.products.data.map(item => {
            Object.keys(item.attributes).forEach(key => {
                item[key] = item.attributes[key]
            })
            const images = strapiFileUrlRetriever(item, 'images')
            item.images = images.map(image => process.env.VUE_APP_BASE_URL + image)
            delete item.attributes

            if(item.discount_percent) {
                item.oldPrice = JSON.parse(JSON.stringify(item.price))
                item.discount = item.oldPrice / 100 * item.discount_percent
                item.price = item.oldPrice - item.discount
            }

            return item
        })
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

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations

}