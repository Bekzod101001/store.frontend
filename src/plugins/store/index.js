import Vue from 'vue'
import Vuex from 'vuex'

// modules
import menu from "./modules/menu"
import products from "./modules/products"
import useful from "./modules/useful"

// plugins
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        products,
        menu,
        useful
    }
})
export default store