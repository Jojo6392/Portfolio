<template>
    <div class="navbar">
        <div id="menu">
            <img class="navbar__logo" src="../assets/global/logo.png" alt="logo" @click="navigate(0)">
            <div class="hyperliens">
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(1)">A propos de moi</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="1">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(2)">Competences</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="2">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(3)">Realisations</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="3">
                </div>
                <div class="hyperlien">
                    <div id="lien" class="hidden" @click="navigate(4)">Parcours</div>
                    <img class="img__lien" src="../assets/global/cursor.svg" alt="4">
                </div>
            </div>
        </div>
        <div class="menu__items">
            <div class="icons_menu">
                <div class="icons_menu__btn"
                    :class="{ onHover: btnHoverHome, offHover: !btnHoverHome }"
                    @mouseenter="btnHoverHome = true"
                    @mouseleave="btnHoverHome = false"
                    @click="goHome"
                >HOME</div>
                <div class="icons_menu__btn"
                    :class="{ onHover: btnHoverBack, offHover: !btnHoverBack }"
                    @mouseenter="btnHoverBack = true"
                    @mouseleave="btnHoverBack = false"
                    @click="goBack"
                >BACK</div>
                <div @click="goContact">CONTACT</div>
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
            btnHoverHome: false,
            btnHoverBack: false,
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

        goContact: function() {
            this.$router.push({name: "Contact"})
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
                    this.$router.push({name: 'Competences'})
                    break;

                case 3:
                    this.$router.push({name: 'Realisations'})
                    break;

                case 4:
                    this.$router.push({name: 'Parcours'})
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

    &__logo {
        height: 33%;
        width: auto;
    }
}

.menu__items {
    display: flex;
}

$menu-bg: rgb(113, 30, 30);
$hamburger-color: #fff;
$hamburger-width: 50px;
$hamburger-height: 50px;
$hamburger-zindex: 10;

.icons_menu {
    flex: 50%;
    display: flex;
    align-items: center;
    gap: 20px;

    margin: 1em;
    margin-left: 2em;

    &__btn {
        font-family: 'KG Compassion';
        color: white;
        background-color: #212028;
        box-shadow: 5px 5px 0px 2px rgba(0,0,0,0.10);
        font-size: 20px;
        padding: 10px 20px;

        @media (hover: hover) {
            &.onHover {
                animation: buttonAnimationIn 250ms forwards;
            }

            &.offHover {
                animation: buttonAnimationOut 250ms forwards;
            }
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

.hyperliens {
    display: flex;
    flex-direction: column;
    height: 67%;
}

.hyperlien {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 15vh;
    width: 40vh;
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

@keyframes buttonAnimationIn {
    from {
        transform: translate(0px, 0px);
        box-shadow: 5px 5px 0px 2px rgba(0,0,0,0.10);
    }
    to {
        transform: translate(5px, 5px);
        box-shadow: none;
    }
}

@keyframes buttonAnimationOut {
    from {
        transform: translate(5px, 5px);
        box-shadow: none;
    }
    to {
        transform: translate(0px, 0px);
        box-shadow: 5px 5px 0px 2px rgba(0,0,0,0.10);
    }
}

// Petite resolution
@media (max-width: 900px) {
    .hyperlien {
        width: 100vw;
    }
}

// Mobile screen
@media (max-width: 500px) {
    .icons_menu {
        gap: 10px;

        &__btn {
            font-size: 12px;
            padding: 7.5px 15px;
        }
    }
}
</style>