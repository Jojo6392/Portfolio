<template>
    <div class="home__content">
        <div id="home">
            <div class="home__header">
                <div class="text">
                    <div class="text__hello">
                        Hi, I am
                    </div>
                    <div class="text__name">
                        Joris
                    </div>
                    <div class="text__metier">
                        
                        Web Developer
                        <img class="text__metier__img" src="../assets/header/spider-web.svg" alt="">
                    </div>
                </div>
                <div class="social-links">
                    <a :href="pdfLink" download="CV_MARGOTTEAU_Joris_2021">
                        <div class="social-btn social-btn__cv flex-center" id="cv">
                            <img src="../assets/header/CV.svg" alt="cv logo" class="social-btn__cv__img">
                            <span>Télécharger <br> <i>last update : 2021</i> </span>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/joris-margotteau-23a761218/" target="_blank">
                        <div class="social-btn social-btn__linkedin flex-center" id="linkedin">
                            <img src="../assets/header/linkedin.svg" alt="linkedin logo">
                            <span>in/joris-margotteau</span>
                        </div>
                    </a>

                    <a href="https://github.com/Jojo6392" target="_blank">
                        <div class="social-btn flex-center" id="github">
                            <img src="../assets/header/github.svg" alt="github logo">
                            <span>Jojo6392</span>
                        </div>
                    </a>
                </div>
                <!-- <img class="home__header__gif" src="../assets/header/header_dino_gif.gif" alt=""> -->
            </div>
            <div class="menu">
                <div class="menu__item">
                    <span class="menu__title" style="color: rgb(128, 91, 104);">About me</span>
                    <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)" @click="redirectToPage(0)">
                        <img class="menu__item__img" src="../assets/global/dilophosaurus.png" alt="About me">
                        <div class="menu__item__content__text" style="background-color: rgba(128, 91, 104, 0.5); backdrop-filter: blur(2px);">
                            Here, you will be able to see more details about me
                        </div>
                    </div>
                    
                </div>
                <div class="menu__item">
                    <span class="menu__title" style="color: rgb(4, 141, 116);">Services</span>
                    <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)" @click="redirectToPage(1)">
                        <img class="menu__item__img" src="../assets/global/spinosaurus.png" alt="Services">
                        <div class="menu__item__content__text" style="background-color: rgba(4, 141, 116, 0.5); backdrop-filter: blur(2px);">
                            Check out what can I do for you 
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <span class="menu__title" style="color: rgb(109, 133, 54);">Projects</span>
                    <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)" @click="redirectToPage(2)">
                        <img class="menu__item__img" src="../assets/global/iguanodon.png" alt="Projects">
                        <div class="menu__item__content__text" style="background-color: rgba(109, 133, 54, 0.5); backdrop-filter: blur(2px);">
                            List of projects that I have currently completed 
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <span class="menu__title" style="color: rgb(0, 112, 143);">Experiences | Formations</span>
                    <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)" @click="redirectToPage(3)">
                        <img class="menu__item__img" src="../assets/global/therizinosaurus.png" alt="Professional Experiences">
                        <div class="menu__item__content__text" style="background-color: rgba(0, 112, 143, 0.5); backdrop-filter: blur(2px);">
                            Look at all my degrees and experiences 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',

    data() {
        return {
            page: 1,
            pdfLink: require("@/assets/global/CV_Joris_MARGOTTEAU.pdf"),
        }

    },

    methods: {
        onHover: function(e) {
            const contentToDisplay = e.target.children[1]
            contentToDisplay.classList.toggle("onHover")
            
        },

        redirectToPage: function(i) {
            switch(i) {
                case 0:
                    this.$router.push({name: "AboutMe"})
                    break;

                case 1:
                    this.$router.push({name: "Services"})
                    break;

                case 2:
                    this.$router.push({name: "Projects"})
                    break;

                case 3:
                    this.$router.push({name: "Experiences"})
                    break;

                default: break;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
$about_me: rgb(128, 91, 104);
$services: rgb(4, 141, 116);
$projects: rgb(109, 133, 54);
$experiences: rgb(0, 112, 143);
$background_image: rgb(27, 26, 35);

a {
    text-decoration: inherit;
}

#home {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

.home {
    &__header {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;

        &__gif {
            margin-right: 10vw;
        }
    }
}

.text {
    font-size: 44px;
    font-family: 'Acme';
    color: white;
    width: 100%;
    padding-left: 10%;
    flex: 2;

    &__hello {
        font-size: 32px;
        color: rgb(134, 134, 134);
    }

    &__name {
        font-size: 120px;
        
    }

    &__metier {
        display: flex;
        align-items: center;
        color: rgb(165, 50, 50);

        &__img {
            filter: invert(17%) sepia(38%) saturate(4479%) hue-rotate(342deg) brightness(109%) contrast(80%);
            width: 42px;
            margin-left: 10px;
        }
    }
}

.menu {
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 64px;
        font-family: 'Jurassic Park';

        &__content {
            margin: 0 40px 0 40px;
            position: relative;

            &:hover {
                transition: all 500ms ease-in-out;
                transform: scale(1.15);
            }

            &:not(:hover) {
                transition: all 500ms ease-in-out;
            }

            &__text {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 94%;
                border-radius: 20px;
                font-size: 60px;
                color: $background_image;
            }
        }

        &__img {
            border-radius: 20px;
            width: 400px;
        }
    }
}

.onHover {
    display: flex;
    align-items: center;
    justify-content: center;
}

span.menu__title {
    margin: 40px;
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.social-links {
	display: flex;
    margin-right: 10%;
}

.social-btn {
	height: 50px;
	width: 50px;
	font-family: 'Acme';
	color: #333;
	border-radius: 10px;
	box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	background: white;
	margin: 5px;
	transition: 1s;

}

.social-btn span {
	width: 0px;
	overflow: hidden;
	transition: 1s;
	text-align: center;

    & i {
        font-size: 10px;
    }
}

.social-btn:hover {
	width: 150px;
	border-radius: 5px;
}

.social-btn__cv:hover img {
    margin-left: -10px !important;
    transition: 2s;
}

.social-btn__linkedin:hover img {
    margin-left: 10px;
}

.social-btn:hover span {
	padding: 2px;
	width: max-content;
}

#cv img{
	filter: invert(16%) sepia(0%) saturate(1346%) hue-rotate(142deg) brightness(98%) contrast(89%);
}

#linkedin img{
	filter: invert(29%) sepia(95%) saturate(6525%) hue-rotate(186deg) brightness(100%) contrast(89%);
}

#github img{
	filter: invert(16%) sepia(0%) saturate(1346%) hue-rotate(142deg) brightness(98%) contrast(89%);
}

@media (min-width: 900px) and (max-width: 1500px) {
    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        width: 100%;
        &__item {

            &__content {
                margin: 0 20px 0 20px;

                &__text {
                    height: 91%;
                    font-size: 44px;
                }
            }
            &__img {
                width: 250px;
            }
        }
    }
    span.menu__title {
        margin: 20px;
    }

}

@media (max-width: 900px) {

    .home__content {
        margin-top: 50px;
    }

    .text {
        font-size: 32px;
        font-family: 'Acme';
        color: white;
        width: 100%;
        text-align: center;
        padding: 0;

        &__metier {
            justify-content: center;
        }
    }

    .menu {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
        width: 75vw;

        &__item {
            &__content {
                &__text {
                    height: 92%;
                    font-size: 42px;
                }
            }

            &__img {
                width: 100%;
            }
        }
    }

    span.menu__title {
        margin: 20px;
    }

    .home {
        &__header {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            flex-wrap: wrap;

            &__gif {
                margin-left: 10vw;
                width: 80%;
            }
        }
    }

    .social-links {
        margin-right: 0px;
    }
}
</style>
