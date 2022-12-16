const state = () => ({
    totalSum: 45235,
    totalSale: 250000,
    products: JSON.parse(localStorage.getItem('basketProducts')) ?? []
})

const getters = {
    totalSum(state) {
        let acc = 0
        state.products.map(item => {
            if(typeof item.price === 'string') item.price = item.price.replaceAll(' ', '')
            acc += +item.price * +item.amount
        })
        return acc
    },

    totalProductsAmount(state) {
        return state.products.length
    },

    totalSale(state) {
        return state.totalSale
    },
    productsInBasket(state) {
        return state.products
    }
}

const mutations = {
    setProduct (state, payload) {
        const item = state.products.find(product => product.id === payload.id)

        if(item) {
            Object.keys(payload).forEach(key => item[key] = payload[key])
        }
        else {
            state.products.unshift(payload)
        }

        localStorage.setItem('basketProducts', JSON.stringify(state.products))
    },

    setAmount(state, {id, amount}) {
        state.products.find((item, index) => {
            if(item.id !== id) return false;
            if(amount === 0) {
                state.products.splice(index, 1)
                this.state.products.products.data.map((product) => {
                    if(product.id === id) product.amount = 0
                })
            }
            item.amount = amount

        })
        localStorage.setItem('basketProducts', JSON.stringify(state.products))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}