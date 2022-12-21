import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Category Index',
        component: () => import('@/pages/products')
    },
    {
        path: '/categories/:categoryId',
        name: 'Category Single',
        component: () => import('@/pages/products')
    },
    {
        path: '/categories/:categoryId/products/:productId',
        name: 'Product Single',
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
    {
        path: '/sign-in',
        name: 'Sign In',
        component: () => import('@/pages/sign/signIn.vue')
    },
    {
        path: '/sign-up',
        name: 'Sign Up',
        component: () => import('@/pages/sign/signUp.vue')
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('@/pages/account'),
        children: [
            {
                path: '/orders',
                name: 'AccountOrders',
                component: () => import('@/pages/account/orders.vue')
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router