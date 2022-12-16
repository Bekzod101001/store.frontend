import Vue from 'vue'
import Vuex from 'vuex'

// modules
import menu from "./modules/menu"
import products from "./modules/products"
import basket from "@/plugins/store/modules/basket";
import contacts from "@/plugins/store/modules/contacts";
import auth from '@/plugins/store/modules/auth.js';
import about from "@/plugins/store/modules/about";
import socialProfiles from "@/plugins/store/modules/socialProfiles";

// plugins
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        products,
        menu,
        basket,
        contacts,
        about,
        socialProfiles
    }
})
export default store