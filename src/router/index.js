import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/main-page',
        name: 'MainPage',
        component: () => import('../views/MainPage.vue'),
    },
    {
        path: '/results',
        name: 'FinishPage',
        component: () => import('../views/ResultsPage.vue'),
    },
]
const router = new VueRouter({ routes })
export default router
