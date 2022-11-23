<template>
    <div class="home__content">
        <img class="dino_walk" src="../assets/global/dino_walk.gif" alt="gif dino walk">
        <div id="home">
            <div class="home__header">
                <div class="text">
                    <div class="text__hello opacity0 animate__animated animate__fadeInLeft">
                        Hi, I am
                    </div>
                    <div class="text__name opacity0 animate__animated animate__fadeInLeft">
                        Joris Margotteau
                    </div>
                    <div class="text__metier opacity0 animate__animated animate__fadeInLeft">
                        Web Developer
                        <img class="text__metier__img" src="../assets/header/dinosaur-skull.png" alt="">
                    </div>
                </div>
                <div class="social-links animate__animated animate__zoomInRight animate__slow">
                    <a :href="pdfLink" download="CV_MARGOTTEAU_Joris_2022">
                        <div class="social-btn social-btn__cv flex-center" id="cv">
                            <img src="../assets/header/CV.svg" alt="cv logo" class="social-btn__cv__img">
                            <span>Télécharger <br> <i>last update : 2022</i> </span>
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
            </div>
            <div class="menu">
                <div class="menu__item animate__animated animate__zoomIn">
                    <div class="menu__item__content" 
                        @mouseenter="onHover($event)" 
                        @mouseleave="onHover($event)" 
                        @click="$router.push({name: 'AboutMe'})"
                    >
                        <img class="menu__item__img" src="../assets/global/a_propos_de_moi.png" alt="About me">
                        <div class="menu__item__content__text" style="background-color: rgba(128, 91, 104, 0.5); backdrop-filter: blur(2px);">
                            <!-- Here, you will be able to see more details about me -->
                            Ici, vous pourrez voir plus de détails sur moi
                        </div>
                    </div>
                    
                </div>
                <div class="menu__item animate__animated animate__zoomIn">
                    <div class="menu__item__content"
                        @mouseenter="onHover($event)"
                        @mouseleave="onHover($event)"
                        @click="$router.push({name: 'Competences'})"
                    >
                        <img class="menu__item__img" src="../assets/global/competences.png" alt="Competences">
                        <div class="menu__item__content__text" style="background-color: rgba(4, 141, 116, 0.5); backdrop-filter: blur(2px);">
                            Voir les compétences acquises
                        </div>
                    </div>
                </div>
                <div class="menu__item animate__animated animate__zoomIn">
                    <div class="menu__item__content"
                        @mouseenter="onHover($event)"
                        @mouseleave="onHover($event)"
                        @click="$router.push({name: 'Realisations'})"
                    >
                        <img class="menu__item__img" src="../assets/global/realisations.png" alt="Realisations">
                        <div class="menu__item__content__text" style="background-color: rgba(109, 133, 54, 0.5); backdrop-filter: blur(2px);">
                            <!-- List of projects that I have currently completed  -->
                            Liste de projets réalisés
                        </div>
                    </div>
                </div>
                <div class="menu__item animate__animated animate__zoomIn">
                    <div class="menu__item__content"
                        @mouseenter="onHover($event)"
                        @mouseleave="onHover($event)"
                        @click="$router.push({name: 'Parcours'})"
                    >
                        <img class="menu__item__img" src="../assets/global/parcours.png" alt="Parcours">
                        <div class="menu__item__content__text" style="background-color: rgba(0, 112, 143, 0.5); backdrop-filter: blur(2px);">
                            <!-- Look at all my degrees and experiences  -->
                            Voir mes formations et experiences
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact opacity0 animate__animated animate__fadeInUp" @click="$router.push({name: 'Contact'})">
                Contactez-moi
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
    },
}
</script>

<style lang="scss" scoped>
$about_me: rgb(128, 91, 104);
$competences: rgb(4, 141, 116);
$realisations: rgb(109, 133, 54);
$parcours: rgb(0, 112, 143);
$background_image: rgb(27, 26, 35);
$red: rgb(165, 50, 50);
$white: rgb(229, 229, 229);

a {
    text-decoration: inherit;
}

.opacity0 {
    opacity: 0;
}

.dino_walk {
    position: absolute;
    transform: rotate(270deg);
    right: 10%;
    bottom: 0%;
    width: 20vw;
}

#home {
    width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 20px;
}

.home {
    &__content {
        height: 100vh;
        overflow: hidden;
    }
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
    font-family: 'Playfair Display';
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
        color: $white;
        animation-delay: 500ms;
    }

    &__metier {
        display: flex;
        align-items: center;
        color: $red;
        animation-delay: 750ms;

        &__img {
            width: 42px;
            margin-left: 10px;
            margin-top: 5px;
        }
    }
}

.menu {
    padding: 10px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    overflow: hidden;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 64px;
        font-family: 'Jurassic Park';

        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                animation-delay: calc(1s + $i * 350ms);
            }
        }

        &__content {
            margin: 0 20px 10px 20px;
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
                font-size: 32px;
                font-family: 'SlasherFilm';
                color: $white;
            }
        }

        &__img {
            border-radius: 20px;
            width: 400px;
        }
    }
}

.contact {
    $border_height: 2px;

    font-size: 32px;
    font-family: 'KG Compassion';
    color: $white;

    border-bottom: $border_height solid rgba($color: $red, $alpha: .9);
    position: relative;
    animation-delay: 2.65s;
    
    &::before {
        content: '';
        border-bottom: calc($border_height - 1px) solid $red;

        width: 100%;
        height: 100%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.03) rotate(2deg);
    }

    &:after {
        content: "";
        width: 100%;
        height: $border_height;

        background-color: $parcours;

        position: absolute;
        left: 0;
        bottom: -$border_height;

        transform-origin: left; 
        transform: scale(0);
        transition: 0.25s linear;
    }

    &:hover:after {
        transform: scale(1);
    }

    &:hover:before {
        border-color: $parcours;
    }
}

@media (hover: hover) {
    .onHover {
        display: flex;
        align-items: center;
        justify-content: center;
    }
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
    animation-delay: 1s;
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

@media (max-width: 1800px) {

    .home__content {
        overflow-y: auto;
    }

    .menu {
        height: auto;
    }
}

@media (min-width: 900px) and (max-width: 1500px) {
    .text__name {
        font-size: 96px;
    }

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
                    font-size: 18px;
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

@media (max-width: 1200px) and (min-width: 1100px) {
    .dino_walk {
        bottom: -40%;
    }
}

@media (max-width: 1250px) {
    .text__name {
        font-size: 64px;
    }
}

@media (max-width: 900px) {

    .home__content {
        height: auto;
        overflow: auto;
        margin-top: 50px;
    }

    .text {
        font-size: 32px;
        color: $white;
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
                    font-size: 14px;
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

@media (max-width: 500px) {

    .menu__item__content:hover {
        transform: scale(1.05);
    }

    .text__name {
        font-size: 64px;
    }

    .menu {
        width: inherit;
    }
}
</style>
