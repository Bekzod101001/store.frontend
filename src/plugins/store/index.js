import Vue from 'vue'
import Vuex from 'vuex'

// modules
import menu from "./modules/menu"
import products from "./modules/products"
import basket from "@/plugins/store/modules/basket";
import contacts from "@/plugins/store/modules/contacts";

// plugins
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        products,
        menu,
        basket,
        contacts
    }
})
export default store