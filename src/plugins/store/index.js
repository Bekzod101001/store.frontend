import Vue from 'vue'
import Vuex from 'vuex'

// modules
import menu from "./modules/menu"
import products from "./modules/products"
import basket from "@/plugins/store/modules/basket";
import auth from '@/plugins/store/modules/auth.js';

// plugins
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        products,
        menu,
        basket
    }
})
export default store