<template>
    <div class="projects">
        <div class="projects__title">
            <div class="projects__title__text">Projects</div>
            <img class="projects__title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div class="items">
            <div v-for="item in data" :key="item.name" class="item" >
                <Project v-bind:data="item" :class="{ active: item.isActive }"/>
            </div>
        </div>
        <div class="carousel_navigation">
            <img class="carousel_navigation__chevron" src="../assets/projects/chevron-left.svg" @click="step(false)" alt="left arrow">
            <div class="carousel_navigation__number">{{ index + 1 }} <span class="carousel_navigation__number_2">/ {{ data.length }}</span></div>
            <img class="carousel_navigation__chevron" src="../assets/projects/chevron-right.svg" @click="step(true)" alt="right arrow">
        </div>
    </div>
</template>

<script>
import Project from './SingleProject.vue'

export default {
    data() {
        return {
            // RESOLUTION IMAGE : 1907 x 924
            data: [
                {
                    name: "Portfolio",
                    date: "Avril - Juin 2022",
                    desc: "Site sur lequel vous êtes actuellement ! Créer pendant mon temps libre sous le framework Vue 2.",
                    tags: ["VueJS", "SCSS", "JS", "HTML"],
                    links: ["#", "https://github.com/Jojo6392/Portfolio"],
                    images: [
                        {
                            lien: require('../assets/projects/portfolio/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/projects/portfolio/image2.png'),
                            isActive: false,
                        },
                        
                    ],
                    isActive: true,
                },
                {
                    name: "FYC",
                    date: "Janvier - Avril 2022",
                    desc: "Projet créé pendant ma licence professionnelle en groupe de 4, je m'occupais de la partie front. Nous avons utilisé le framework Vue pour le front et Symfony pour le back. L'objectif était de faire un site au style de fonctionnement égale à StackOverflow.",
                    tags: ["VueJS", "SCSS", "Symfony"],
                    links: ["https://fyc.killianm.fr/", "https://github.com/Ki2lian/FYC/tree/killian"],
                    images: [
                        {
                            lien: require('../assets/projects/fyc/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/projects/fyc/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/fyc/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/fyc/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/fyc/image5.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/fyc/image6.png'),
                            isActive: false,
                        },
                        
                    ],
                    isActive: false,
                },
                {
                    name: "Application de restaurant",
                    date: "Janvier 2022",
                    desc: "Ce projet est une application de prise de commande et de gestion d'un restaurant effectué sous le framework Symfony pendant ma licence professionnelle. De plus, celui-ci se trouve sur un Dockerfile.",
                    tags: ["PHP", "Symfony", "Twig", "Dockerfile", "CSS"],
                    links: ["", "https://github.com/Jojo6392/Restaurant---Symfony"],
                    images: [
                        {
                            lien: require('../assets/projects/resto/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/projects/resto/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/resto/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/resto/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/resto/image5.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/resto/image6.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/resto/image7.png'),
                            isActive: false,
                        },
                        
                    ],
                    isActive: false,
                },
                {
                    name: "Dinosaur List iOS",
                    date: "10 février 2022",
                    desc: "Application iOS qui permet de créer des listes de dinosaures avec plusieurs informations ainsi que quelques fonctionnalités et les garder sur une collection firestore de firebase.",
                    tags: ["Swift", "iOS", "Firebase"],
                    links: ["", "https://github.com/Jojo6392/DinosauresList-iOS"],
                    images: [
                        {
                            lien: require('../assets/projects/dino-iOS/no_image.webp'),
                            isActive: true,
                        },
                    ],
                    isActive: false,
                },
                {
                    name: "Aeroports Maps",
                    date: "3-4 Janvier 2022",
                    desc: "Site qui permet de visualiser, créer, modifier et supprimer des aéroports sur une map dont les données sont stockées sur une base de données. Le tout est géré par une API créée sous PHP.",
                    tags: ["PHP", "API", "JS", "HTML", "CSS"],
                    links: ["", "https://github.com/Jojo6392/Aeroports-API-Maps"],
                    images: [
                        {
                            lien: require('../assets/projects/aeroports/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/projects/aeroports/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/aeroports/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/aeroports/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/projects/aeroports/image5.png'),
                            isActive: false,
                        },
                    ],
                    isActive: false,
                },
            ],
            index: 0,
        }
    },

    components: {
        Project
    },

    methods: {
        step: function(isNext) {
            if(isNext) {
                if(this.index != this.data.length - 1) {
                    this.data[this.index].isActive = false
                    this.index += 1
                    this.data[this.index].isActive = true
                }
            }

            else {
                if(this.index != 0) {
                    this.data[this.index].isActive = false
                    this.index -= 1
                    this.data[this.index].isActive = true
                }
            }
        },
    }
};
</script>

<style lang="scss" scoped>
$color: #6D8536;
$second_color: #9bb868;
$third_color: #C9CAD9;

.projects {
    margin: 1em;
    margin-top: 2.5em;
    font-size: 32px;
    font-family: 'Acme';

    &__title {
        display: flex;
        flex-direction: row;
        color: $second_color;
        font-family: 'Jurassic Park';
        height: 100px;
        font-size: 144px;
        margin-left: 1em;
        margin-bottom: 0.5em;

        &__img {
            transform: translate(-30px, 30px) rotate(60deg);
            z-index: 1;
            width: 10%;
            filter: invert(47%) sepia(26%) saturate(876%) hue-rotate(37deg) brightness(95%) contrast(87%);
        }

        &__text {
            z-index: 2;
            width: fit-content;
        }
    }

    .item {
        position: absolute;

        &s {
            position: relative;
            width: 100vw;
            height: 55vh;
        }
    }

    .active {
        display: flex;
        flex-wrap: wrap;
    }

    .carousel_navigation {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;
        align-items: center;

        &__chevron {
            font-size: 44px;
            margin: 1em;
            filter: invert(97%) sepia(1%) saturate(7361%) hue-rotate(187deg) brightness(83%) contrast(105%);

            &:hover {
                filter: invert(52%) sepia(7%) saturate(3200%) hue-rotate(37deg) brightness(90%) contrast(81%);
            }
        }

        &__number {
            font-size: 34px;
            color: $color;
            &_2 {
                font-size: 30px;
            }
        }
    }
}

@media (min-width: 900px) and (max-width: 1800px) {
    .projects {
        margin: 0;
    }
}

@media (max-width: 900px) {
    .projects {
        margin: 0;
        margin-top: 2.5em;
    }

    .carousel_navigation {
        
        &__chevron {
            font-size: 34px !important;
        }

        &__number {
            width: 50px;
        }
    }
}
</style>