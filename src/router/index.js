import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/AuthHome.vue'
import Signin from '../views/SignIn.vue'
import DashBoard from '../views/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'AuthHome',
        component: Home
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: Signin
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router    