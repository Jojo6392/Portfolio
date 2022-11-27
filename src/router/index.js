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
        meta: {
            title: 'Joris Margotteau - Web Developer',
            metaTags: [
                {
                  name: 'description',
                  content: 'Bonjour je suis Joris Margotteau et développeur web front-end. Bienvenue sur mon portfolio.'
                },
            ]
        },
    },
    {
        path: "/about_me",
        name: "AboutMe",
        component: AboutMe,
        meta: {
            title: 'Joris Margotteau - À propos de moi',
        },
    },
    {
        path: "/competences",
        name: "Competences",
        component: Competences,
        meta: {
            title: 'Joris Margotteau - Compétences',
            metaTags: [
                {
                  name: 'description',
                  content: 'Ici vous pourrez retrouver mes compétences techniques et soft.'
                },
            ]
        },
    },
    {
        path: "/realisations",
        name: "Realisations",
        component: Realisations,
        meta: {
            title: 'Joris Margotteau - Réalisations',
            metaTags: [
                {
                  name: 'description',
                  content: 'Liste de certains projets que j\'ai pu réalisé tout seul ou en équipe.'
                },
            ]
        },
    },
    {
        path: "/parcours",
        name: "Parcours",
        component: Parcours,
        meta: {
            title: 'Joris Margotteau - Parcours',
            metaTags: [
                {
                  name: 'description',
                  content: 'Présentation de mon parcours professionnels et des études que j\'ai fait.'
                },
            ]
        },
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
        meta: { 
            transition: "overlay-down-full",
            title: 'Joris Margotteau - Contact',
            metaTags: [
                {
                  name: 'description',
                  content: 'Contactez- moi ! Mail : jorismargotteau@gmail.com, Tel: 06 59 61 01 37'
                },
            ]
        }
    },
    // 404 error
    { 
        path: '/404',
        name: "Page404",
        component: Page404,
        meta: {
            transition: "overlay-down-full",
            title: 'Joris Margotteau - Page Introuvable',
        }
    },  
    { 
        path: '*', 
        redirect: '/404'
    },  
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
    else if(previousNearestWithMeta) document.title = previousNearestWithMeta.meta.title;
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
        });
  
        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  
    next();
});

export default router