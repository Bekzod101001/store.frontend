import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/pages/products')
    },
    {
        path: '/products/:id',
        name: 'productsId',
        component: () => import('@/pages/products/_id')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about')
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: () => import('@/pages/delivery')
    },
    {
        path: '/offerta',
        name: 'offerta',
        component: () => import('@/pages/offerta')
    },
    {
        path: '/partners',
        name: 'partners',
        component: () => import('@/pages/partners')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/contact')
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: () => import('@/pages/shopping')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router