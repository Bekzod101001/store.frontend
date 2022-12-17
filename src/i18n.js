import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n)

let activeLang = localStorage.getItem('lang')

if(!activeLang) {
    localStorage.setItem('lang', 'uz')
    activeLang = 'uz'
}

const {default: messages} = require('./locale/index')
const i18n = new VueI18n({
    locale: activeLang,
    messages
})

export default i18n