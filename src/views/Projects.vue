<template>
    <div class="projects">
        <div class="projects__title">
            <div class="projects__title__text">Projects</div>
            <img class="projects__title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div class="items block block2">
            <div v-for="item in data" 
                :key="item.name" 
                class="project" 
                :class="{ active__project: item.isActive }"
            >
                <div class="thumbnail">
                    <div class="thumbnail__img">
                        <img 
                            v-for="(image, index) in item.images" :key="index" 
                            :class="{ active__img: image.isActive, hidden: !image.isActive }" 
                            :src="image.lien">
                    </div>
                </div>
                <div class="project__content">
                    <div class="project__date">{{ item.date }}</div>
                    <div class="project__name">{{ item.name }}</div>
                    <div class="project__desc">{{ item.desc }}</div>
                    <div class="project__tags">
                        <div v-for="tag in item.tags" :key="tag" class="project__tag">
                            {{tag}}
                        </div>
                    </div>
                    <div class="project__links">
                        <a :href="item.links[0]" target="_blank">
                            <img src="../assets/views/projects/redirection.svg" alt="external link">
                        </a>
                        <a :href="item.links[1]" target="_blank">
                            <img src="../assets/header/github.svg" alt="github logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel_navigation">
            <img class="carousel_navigation__chevron" src="../assets/views/projects/chevron-left.svg" @click="step(false)" alt="left arrow">
            <div class="carousel_navigation__number">{{ index + 1 }}  / {{ data.length }}</div>
            <img class="carousel_navigation__chevron" src="../assets/views/projects/chevron-right.svg" @click="step(true)" alt="right arrow">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            data: [
                {
                    name: "Portfolio",
                    date: "Avril - Juin 2022",
                    desc: "Site sur lequel vous êtes actuellement ! Créer pendant mon temps libre sous le framework Vue 2.",
                    tags: ["VueJS", "SCSS", "JS", "HTML"],
                    links: ["#", "https://github.com/Jojo6392/Portfolio"],
                    images: [
                        {
                            lien: require('../assets/views/projects/portfolio/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/views/projects/portfolio/image2.png'),
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
                            lien: require('../assets/views/projects/fyc/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/views/projects/fyc/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/fyc/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/fyc/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/fyc/image5.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/fyc/image6.png'),
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
                            lien: require('../assets/views/projects/resto/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image5.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image6.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/resto/image7.png'),
                            isActive: false,
                        },
                        
                    ],
                    isActive: false,
                },
                {
                    name: "Dinosaur List iOS",
                    date: "10 février 2022",
                    desc: "Application iOS qui permet de créer des listes de dinosaures avec plusieurs informations ainsi que quelques fonctionnalités et les garder sur une collection firestore de firebase.",
                    tags: ["Swift", "iOS", "Firebase", "Xcode"],
                    links: ["", "https://github.com/Jojo6392/DinosauresList-iOS"],
                    images: [
                        {
                            lien: require('../assets/views/projects/dino-iOS/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/views/projects/dino-iOS/image2.png'),
                            isActive: false,
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
                            lien: require('../assets/views/projects/aeroports/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/views/projects/aeroports/image2.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/aeroports/image3.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/aeroports/image4.png'),
                            isActive: false,
                        },
                        {
                            lien: require('../assets/views/projects/aeroports/image5.png'),
                            isActive: false,
                        },
                    ],
                    isActive: false,
                },
            ],
            index: 0,
            indexImg: -1,
        }
    },

    watch: {
        indexImg (newVal) {
            const imgTab = this.data[this.index].images
            
            if(newVal == imgTab.length - 1) {
                setTimeout(() => {
                    imgTab[this.indexImg].isActive = false
                    this.indexImg = 0
                    imgTab[this.indexImg].isActive = true
                }, 5000)
            }
            else {
                setTimeout(() => {
                    imgTab[this.indexImg].isActive = false
                    this.indexImg = newVal + 1
                    imgTab[this.indexImg].isActive = true
                }, 5000)
            }
        }
    },

    mounted() {
        this.indexImg += 1
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
    padding: 2.5em 1em 0 1em;
    font-size: 32px;

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

    &__desc {
        width: 75%;
    }
}

.items {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
}

.active__project {
    display: flex !important;
}

.project {
    display: none;
    flex-direction: row;
    position: absolute;

    &__content {
        display: flex;
        flex-direction: column;
        width: 40vw;
    }

    &__date {
        color: $third_color;
        font-family: monospace;
    }

    &__name {
        color: $color;
        font-size: 38px;
        margin: 2vw 0 2vw 0;
    }

    &__desc {
        border-radius: 10px;
        background-color: $color;
        color: $third_color;
        padding: 50px 20px 50px 20px;
        box-shadow: 0px 0px 9px 1px $second_color;
        margin-bottom:3vh;
        font-family: 'Poppins Light';
        font-size: 24px;
        width: inherit;
    }

    &__tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-family: monospace;
    }

    &__tag {
        padding: 0 0.75vw 0 0.75vw;
        font-size: 24px;
        color: #C9CAD9;
    }

    &__links {
        display: flex;
        flex-direction: row-reverse;

        & img {
            padding: 0.75vw;
            width: 32px;
            cursor: none;
            filter: invert(43%) sepia(79%) saturate(322%) hue-rotate(37deg) brightness(95%) contrast(85%);

            &:hover {
                filter: invert(89%) sepia(18%) saturate(186%) hue-rotate(199deg) brightness(91%) contrast(85%);
            }
        }
    }
}

.thumbnail {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        position: relative;
        width: 40vw;

        & img {
            position: absolute;
            width: inherit;
            border-radius: 20px;
            border: 5px solid $color;
            box-shadow: 10px -3px 5px -1px rgba(109,133,54,0.3);
        }
    }
}

.carousel_navigation {
    width: 100vw;
    display: flex;
    justify-content: center;

    &__chevron {
        filter: invert(97%) sepia(1%) saturate(7361%) hue-rotate(187deg) brightness(83%) contrast(105%);

        &:hover {
            filter: invert(52%) sepia(7%) saturate(3200%) hue-rotate(37deg) brightness(90%) contrast(81%);
        }
    }

    &__number {
        color: $color;
    }
}

// CAROUSEL CSS
.active__img {
    animation-name: displayAnimation;
    animation-duration: 2s;
    animation-direction: normal;
}
.hidden {
    display: none;
}
@keyframes displayAnimation {
    from {
        display: none;
        opacity: 0;
    }
    to {
        display: block;
        opacity: 1;
    }
}

//GRANDE RESO
@media (min-width: 1500px) {
    .items {
        height: 60vh;
    }

    .project {
        align-items: center;

        &__content {
            margin-left: 8vw;
        }

        &__date, &__name {
            text-align: end;
        }

        &__desc {
            align-self: flex-end;
            text-align: end;
        }

        &__tags {
            justify-content: flex-end;
        }
    }

    .thumbnail {
        height: 40vh;
    }
}

//MOYENNE RESO
@media (max-width: 1500px) {
    .items {
        height: 145vh;
    }

    .project {
        flex-direction: column;
        align-items: center;

        &__content {
            width: 80vw;
            margin-top: 5vw;
            align-items: center;
        }
    }

    .thumbnail {
        height: 65vh;

        &__img {
            width: 80vw;
        }
    }
}

@media (max-width: 1200px) {
    .thumbnail {
        height: 50vh;
    }
}


//PETITE RESO
@media (max-width: 900px) {
    .items {
        height: 80vh;
    }

    .projects__title {
        margin-left: 0;
        justify-content: center;
        font-size: 96px;
        margin-bottom: 0.25em;

        &__img {
            transform: translateX(10px) rotate(60deg);
        }
    }

    .project {
        &__name, &__date, &__desc, &__tag {
            font-size: 18px;
        }

        &__tags {
            margin-bottom: 0.25vh;
        }
    }

    .thumbnail {
        height: 40vh;
    }
}

@media (max-width: 700px) {
    .thumbnail {
        height: 33vh;
    }
}

@media (max-width: 500px) {
    .thumbnail {
        height: 27vh;
    }
}
</style>