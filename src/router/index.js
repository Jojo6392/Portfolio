import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"
import Services from "../views/Services.vue"
import Projects from "../views/Projects.vue"
import Realisations from "../views/Realisations.vue"
import Projets from "../views/Projects.vue"
import Experiences from "../views/Experiences.vue"
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
        path: "/realisations",
        name: "Realisations",
        component: Realisations,
    },
    {
        path: "/projets",
        name: "Projets",
        component: Projets,
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