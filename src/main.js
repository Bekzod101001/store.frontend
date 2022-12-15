import Vue from 'vue'
import App from './App.vue'

// plugins
import store from './plugins/store'
import router from './plugins/router'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// plugins

// assets
import 'ant-design-vue/dist/antd.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import "swiper/css/swiper.min.css";
import '@/assets/fonts/Sf-pro-display/stylesheet.css';
import '@/assets/fonts/icomoon/style.css';
import '@/assets/scss/index.scss';

// assets

// registration
Vue.use(Antd);
Vue.use(PerfectScrollbar)
Vue.use(VueAwesomeSwiper);
// registration



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
