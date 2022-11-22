import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"
import Competences from "../views/Competences.vue"
import Realisations from "../views/Realisations.vue"
import Parcours from "../views/Parcours.vue"
import Contact from "../views/Contact.vue"
import Test from "../components/Test.vue"
import Page404 from "../views/404.vue"

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
        path: "/realisations",
        name: "Realisations",
        component: Realisations,
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
    // 404 error
    { 
        path: '/404',
        name: "Page404",
        component: Page404,
        meta: { transition: "overlay-down-full"}
    },  
    { 
        path: '*', 
        redirect: '/404'
    },  
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router