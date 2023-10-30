import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'

const routes = [
    { path: '/', component: Home, name:'Home' },
    { path: '/login', component: () => import('../components/Login.vue') , name:'Login'},
    { path: '/register', component: () => import('../components/Register.vue'), name:'Register' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router