const state = () => ({
    totalSum: 0,
    totalSale: 0,
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
        let total = 0
        state.products.map(item => {
            if(!item.discount) return
            total += item.discount * item.amount
        })

        state.totalSale = total
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
        state.products.filter((item, index) => {
            if(item.id !== id) return
            if(amount === 0) {
                state.products.splice(index, 1)
                this.state.products.products.data.map((product) => {
                    if(product.id === id) product.amount = 0
                })
            }
            item.amount = amount

        })
        localStorage.setItem('basketProducts', JSON.stringify(state.products))
    },

    clearBasket(state) {
        state.products.length = 0
        state.totalSum = 0
        state.totalSale = 0
        localStorage.removeItem('basketProducts')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}