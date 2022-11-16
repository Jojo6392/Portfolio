<template>
    <div id="app">
        <Navbar id="navbar" class="sticky" />
        <div class="container">
            <!-- Cursor : hover needed to not see the cursor block when travelling on the site -->
            
            <vue-page-transition name="zoom">
                <router-view />
            </vue-page-transition>
            <div :class="[ 'cursor', { 'cursor_hover': hover }, {'cursor_hide': hideCursor} ]">
                <div :style="cursorCircle" class="cursor__circle"></div>
                <img class="cursor__point" ref="point" :style="cursorPoint" src="./assets/global/cursor.svg" alt="cursor">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
    name: "App",

    data() {
        return {
            xChild: 0,
            yChild: 0,
            xParent: 0,
            yParent: 0,
            hover: false,
            hideCursor: true,
        }
    },

    components: {
        Navbar
    },

    computed: {
        cursorCircle() {
            return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
        },

        cursorPoint() {
            return `transform: translateX(${this.xChild - 10}px) translateY(${this.yChild - 10}px) translateZ(0) translate3d(0, 0, 0);`
        }
    },

    watch: {
        $route(to, from) {
            document.documentElement.scrollTop = document.body.scrollTop = 0;

            // CONTACT SECTION
            const containerElement = document.querySelector(".container");
        
            if(to.name === 'Contact') containerElement.classList.add("background_contact")
            else if (from.name === 'Contact') containerElement.classList.remove("background_contact")
        }
    },

    mounted() {
        // Curseur
        const clientWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Ne pas créer le curseur si la longueur de la page de l'utilisateur est inférieur à 900 pixels
        // Cela concerne les téléphones portables et certains types de tablette
        if(clientWidth <= 900) return

        // Le curseur ne marche pas sur Firefox, il faudra creuser le pourquoi du comment, 
        // le temps petit fix pour éviter de ne pas avoir de curseur 
        const isFirefox = navigator.userAgent.search("Firefox");
        if(isFirefox !== -1) {
            document.body.style.cursor = "crosshair" 
            return
        }

        document.addEventListener("mousemove", this.moveCursor);
        document.addEventListener('mouseleave', () => {
            this.hideCursor = true;
        });

        document.addEventListener('mouseenter', () => {
            this.hideCursor = false;
        });
    },

    methods: {
        moveCursor(e) {
            this.xChild = e.clientX;
            this.yChild = e.clientY;

            setTimeout(() => {
                this.xParent = e.clientX - 22;
                this.yParent = e.clientY - 23;
            }, 100);
        }
    },
};
</script>

<style scoped lang="scss">

.background_contact {
    background-color: rgb(175, 175, 175);
}

.cursor {

    &_hide {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
        height .6s ease,
        opacity .6s ease;
    }

    &__circle {
        pointer-events: none;
        user-select: none;
        top: 0;
        left: 0;
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius: 100%;
        z-index: 99;
        backface-visibility: hidden;
        transition: opacity .6s ease;
    }

    &__point {
        top: 0;
        left: 0;
        position: fixed;
        width: 20px;
        height: 20px;
        pointer-events: none;
        user-select: none;
        border-radius: 100%;
        z-index: 100;
    }

    &_hover {
        .cursor__circle {
            opacity: 0;
            width: 60px;
            height: 60px;
            transition: width .6s ease,
            height .6s ease,
            opacity .6s ease;
        }
    }
}

.sticky {
  position: fixed;
  top: 0;
  width: 100vw;
}
</style>
