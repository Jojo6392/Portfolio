<template>
    <div class="navbar">
        <div id="menu">
            <img class="navbar__logo" src="../assets/global/logo.png" alt="logo" @click="navigate(0)">
            <div class="hyperliens">
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(1)">About me</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="1">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(2)">Services</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="2">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(3)">Projects</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="3">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(4)">Professional experiences | Formations</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="4">
                </div>
            </div>
        </div>
        <div class="menu__items">
            <div class="icons_menu">
                <img class="icons_menu__home icons_menu__colors" src="../assets/navbar/home-circle-outline.svg" alt="home" @click="goHome">
                <img class="icons_menu__return icons_menu__colors" src="../assets/navbar/arrow-left-bold-circle-outline.svg" @click="goBack" alt="back arrow">
            </div>
            <button class="toggle-menu">
                <span></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
        }
    },

    mounted() {

        const hamburgerMenu = document.querySelector(".toggle-menu");
        const menu = document.querySelector("#menu")
        const liens = document.querySelectorAll("#lien")

        hamburgerMenu.addEventListener("click", () => {
            hamburgerMenu.classList.toggle('active')
            menu.classList.toggle('open')
            liens.forEach((lien, i) => {
                switch (i) {
                    case 0:
                        this.animateLien(lien, i)
                        break;
                    case 1:
                        this.animateLien(lien, i)
                        break;
                    case 2:
                        this.animateLien(lien, i)
                        break;
                    case 3:
                        this.animateLien(lien, i)
                        break;

                    default: break;
                }
                
            })

        })

        const imgs = document.querySelectorAll(".img__lien")

        liens.forEach((lien, i) => {
            lien.addEventListener("mouseenter", () => {
                imgs[i].classList.toggle("move")
            })
            lien.addEventListener("mouseleave", () => {
                imgs[i].classList.toggle("move")
            })
        })
    },

    methods: {

        animateLien: function (el, i) {
            setTimeout(() => {
                el.classList.toggle('animate_lien');
                el.classList.toggle('hidden')
            }, i * 100 + 300)
        },

        goBack: function() {
            this.$router.go(-1)
        },

        goHome: function() {
            this.$router.push({name: "Home"})
        },

        navigate: function(page) {

            // to close and reset the menu
            const hamburgerMenu = document.querySelector(".toggle-menu");
            const menu = document.querySelector("#menu")
            hamburgerMenu.classList.toggle('active')
            menu.classList.toggle('open')

            
            const liens = document.querySelectorAll("#lien")
            liens.forEach(lien => {
                lien.classList.toggle("hidden")
                lien.classList.toggle("animate_lien")
            })

            switch(page) {
                case 0:
                    this.$router.push({name: 'Home'})
                    break;

                case 1:
                    this.$router.push({name: 'AboutMe'})
                    break;

                case 2:
                    this.$router.push({name: 'Services'})
                    break;

                case 3:
                    this.$router.push({name: 'Projects'})
                    break;

                case 4:
                    this.$router.push({name: 'Experiences'})
                    break;

                default: break;
            }
            
        }
    },
}
</script>

<style scoped lang="scss">
.navbar {
    width: 100%;
    overflow: hidden;
    height: 100px;
    z-index: 10;
    background-color: transparent;
}

.menu__items {
    display: flex;
}

$menu-bg: rgb(165, 50, 50);
$hamburger-color: #fff;
$hamburger-width: 50px;
$hamburger-height: 50px;
$hamburger-zindex: 10;

.icons_menu {
    flex: 50%;

    &__home {
        width: 48px;
        margin: 1em;
        margin-left: 2em;
    }

    &__return {
        width: 48px;
        margin: 1em;
        margin-left: 0;
    }

    &__colors {
        &:hover {
            filter: invert(43%) sepia(79%) saturate(322%) hue-rotate(37deg) brightness(95%) contrast(85%);
        }
    }
}

.toggle-menu {
    margin: 1em;
    margin-right: 2em;
    background-color: transparent;
    border: none;
    cursor: none;
    height: $hamburger-height;
    outline: none;
    padding: 0;
    pointer-events: initial;
    position: relative;
    vertical-align: middle;
    width: $hamburger-width;
    z-index: $hamburger-zindex;

    span {
        background-color: $hamburger-color;
        content: "";
        display: block;
        height: 2px;
        left: calc(50% - 13px );
        position: absolute;
        top: calc(50% - 1px );
        transform-origin: 50% 50%;
        transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,  transform 0.2s linear;
        width: 26px;

        &:before, &:after {
            background-color: $hamburger-color;
            content: "";
            display: block;
            height: 2px;
            position: absolute;
            transform-origin: 50% 50%;
            transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,  transform 0.2s linear;
            width: 26px;
        }

        &:before {
            top: 7px;
        }

        &:after {
            top: -7px;
        }
    }

    &.active {
        span {
            background-color: transparent;
            transition: background 0.2s ease-out;

            &:before, &:after {
                transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out;
            }

            &:before {
                top: 0;
                transform: rotate3d(0, 0, 1, -45deg);
            }

            &:after {
                top: 0;
                transform: rotate3d(0, 0, 1, 45deg);
            }
        }
    }
}

#menu {
    background: $menu-bg;
    height: 100%;
    left: 0;
    opacity: 0;
    overflow: hidden;
    position: fixed;
    text-align: center;
    top: 0;
    transition: all 0.7s ease-in-out;
    visibility: hidden;
    width: 100%;
    z-index: $hamburger-zindex - 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.open {
        opacity: 1;
        visibility: visible;
    }
}

.hyperlien {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 150px;
    width: 450px;
    text-align: left;
}

.animate_lien {
    animation-name: fadeInBottom;
    animation-duration: 1s;
    animation-fill-mode: both;
}

.hidden {
    opacity: 0;
}

#lien {
    font-family: 'Jurassic Park';
    font-size: 64px;
    color: white;
    text-decoration: none;
    z-index: 100;
    text-align: center;

    &:hover {
        color: rgb(253, 254, 0);
    }
}

.move {
    display: block !important;
    animation: move 1.5s forwards;
    transform: rotate(65deg);
}

.img__lien {
    width: 15%;
    position: absolute;
    display: none;
    left: 25%;
}

@keyframes move {

    33% {
        transform: translateX(50px) rotate(45deg);
    }

    66% {
        transform: translateX(100px) rotate(100deg);
    }

    100% {
        transform: translateX(150px) rotate(60deg) ;
    }
}

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
}

.hyperliens {
    transform: translateY(-75px);
}

@media (max-width: 900px) {
    .navbar{
        &__logo {
            width: 90%;
        }
    }

    .hyperlien {
        height: 100px;
    }

    .hyperliens {
        transform: translateY(0px);
    }
}
</style>