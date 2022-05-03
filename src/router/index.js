import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/Home.vue"
import Test from "../components/Test.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/test",
        name: "Test",
        component: Test
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router