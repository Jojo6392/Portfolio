import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"
import Competences from "../views/Competences.vue"
import Projects from "../views/Projects.vue"
import Realisations from "../views/Realisations.vue"
import Projets from "../views/Projects.vue"
import Parcours from "../views/Parcours.vue"
import Contact from "../views/Contact.vue"
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
        path: "/competences",
        name: "Competences",
        component: Competences,
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
        path: "/parcours",
        name: "Parcours",
        component: Parcours,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { transition: "overlay-down-full"}
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router