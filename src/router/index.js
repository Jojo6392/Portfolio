import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/Home.vue"
import AboutMe from "../components/AboutMe.vue"
import Services from "../components/Services.vue"
import Projects from "../components/Projects.vue"
import Experiences from "../components/Experiences.vue"
import Test from "../components/Test.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about_me",
        name: "AboutMe",
        component: AboutMe,
    },
    {
        path: "/services",
        name: "Services",
        component: Services,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/experiences",
        name: "Experiences",
        component: Experiences,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router