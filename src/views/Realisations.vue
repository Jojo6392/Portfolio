<template>
    <div class="container">
        <div class="projects page">
            <div class="projects__title">
                <div class="projects__title__text">Realisations</div>
                <img class="projects__title__img" src="../assets/global/cursor.svg" alt="">
            </div>
            <div class="projects__desc">
                <div class="arceaux">
                    <div 
                        v-for="index in 7"
                        :key="index"
                        class="arceau"
                    ></div>
                </div>
                <div class="title">Sur cette page vous trouverez les différentes réalisations que j'ai pu réalisé</div>
                <ul>
                    <li>Faites défiler pour afficher chaque réalisation une par une.</li>
                    <li>Cliquez sur une réalisation pour afficher ses détails.</li>
                    <li>Des images pour illustrer les réalisations sont disponibles.</li>
                    <li>Possibiliter de sélectionner une image à visionner dans le carrousel d'une réalisation.</li>
                </ul>
                <img
                    class="gif"
                    src="../assets/projects/ok_dino.webp" alt="ok gif"
                >
            </div>
        </div>
        <div 
            class="project page"
            v-for="(item, indexItem) in realisations"
            v-observe-visibility="{
                callback: (isVisible, entry) => visibilityChanged(isVisible, entry, indexItem),
                once: true
            }"
            :key="indexItem"
        >
            <div class="card"
                @click="toggleContent($event.target)"
            >
                <div class="card__img">
                    <div
                        v-for="(image, index) in item.images"
                        :key="index"
                        class="carrousel"
                    >
                        <div 
                            class="carrousel__item"
                            :class="{ carrousel__item__active: image.isActive }"
                            v-if="image.isActive">
                            <img 
                                :src="image.lien"
                            >
                        </div>
                    </div>
                </div>
                <div class="card__content offHover">

                    <!-- Nom de la réalisation -->
                    <div class="name">
                        {{ item.name }}
                    </div>

                    <!-- Date de la réalisation -->
                    <div class="date">
                        {{ item.date }}
                    </div>

                    <!-- Tags de la réalisation -->
                    <div class="tags">
                        <div 
                            v-for="tag in item.tags" 
                            :key="tag" 
                            class="tag"
                        >
                            {{ tag }}
                        </div>
                    </div>

                    <!-- Description de la réalisation -->
                    <div class="description">
                        {{ item.desc }}
                    </div>

                    <!-- Pour éviter le déclenchement du click sur le content -->
                    <div class="filtre"></div>

                    <!-- Liens de la réalisation -->
                    <div class="links">
                        <a :href="item.links[0]" target="_blank">
                            <img
                                class="link"
                                src="../assets/projects/redirection.svg" 
                                alt="external link">
                        </a>
                        <a :href="item.links[1]" target="_blank">
                            <img
                                class="link"
                                src="../assets/header/github.svg" 
                                alt="github logo">
                        </a>
                    </div>
                </div>
            </div>
            <div class="bottom_carrousel">
            <div
                v-for="(image, indexImage) in item.images"
                :key="indexImage"
            >
                    <div
                        class="dot"
                        :class="{ dot__active: image.isActive }"
                        @click="changeActive(item.images, indexImage, indexItem)"
                    ></div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
import PanelSnap from 'panelsnap';

export default {
    data() {
        return {
            realisations: [
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
                    interval: null,
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
                    interval: null,
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
                    interval: null,
                },
                {
                    name: "Dinosaur List iOS",
                    date: "10 février 2022",
                    desc: "Application iOS qui permet de créer des listes de dinosaures avec plusieurs informations ainsi que quelques fonctionnalités et les garder sur une collection firestore de firebase.",
                    tags: ["Swift", "iOS", "Firebase", "Xcode"],
                    links: ["", "https://github.com/Jojo6392/DinosauresList-iOS"],
                    images: [
                        {
                            lien: require('../assets/projects/dino-iOS/image1.png'),
                            isActive: true,
                        },
                        {
                            lien: require('../assets/projects/dino-iOS/image2.png'),
                            isActive: false,
                        },
                    ],
                    interval: null,
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
                    interval: null,
                },
            ],
            time: 5000,
        }
    },

    watch: {

    },

    mounted() {
        
        const options = {
            container: document.body,
            panelSelector: '.page',
            directionThreshold: 1,
            delay: 0,
            duration: 500,
            easing: function(t) { return t },
        };

        // Ne pas appliquer l'effet "fullPage" aux écrans de téléphone portable
        const clientWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if(clientWidth > 500) {
            this.panelSnapInstance = new PanelSnap(options);
    
            this.panelSnapInstance.on('activatePanel', this.activatePanel);
        }
    },

    methods: {
        activatePanel: function (panel) {
            this.activePanel = panel;
        },

        toggleContent(element) {
            let contentElement = null
            
            if(element.className === "link") return
            else if(element.tagName === "IMG") contentElement = element.parentNode.parentNode.parentNode.parentNode.lastElementChild;
            else if(element.className === "filtre") contentElement = element.parentNode;
            else contentElement = element

            contentElement.classList.toggle('onHover')
            contentElement.classList.toggle('offHover')
        },

        /**
         * @param {Array<Object>} items
         * @param {Number} indexItem
         */
        autoCarrousel(items, indexItem) {
            const index = items.map(e => e.isActive).indexOf(true)
            // si on arrive à la fin du tableau, recommencez au début
            if(index == items.length - 1) this.changeActive(items, 0, indexItem)
            else this.changeActive(items, index + 1, indexItem)
        },

        /**
         * @param {Array<Object>} items
         * @param {Number} indexImage
         * @param {Number} indexItem
         */
        changeActive(items, indexImage, indexItem) {
            // stop interval
            clearInterval(this.realisations[indexItem].interval)

            // récupérer le dernier actif pour le mettre à false
            const previousIndex = items.map(e => e.isActive).indexOf(true);
            items[previousIndex].isActive = false

            // mettre à true le nouveau isActive
            items[indexImage].isActive = true

            // restart interval
            this.realisations[indexItem].interval = setInterval(() => {
                this.autoCarrousel(items, indexItem)
            }, this.time)
        },

        visibilityChanged (isVisible, entry, index) {
            if(isVisible && entry !== null) {
                this.realisations[index].interval = setInterval(() => {
                    this.autoCarrousel(this.realisations[index].images, 0)
                }, this.time)
            }
        },

    },

}
</script>

<style scoped lang="scss">
$color: #6D8536;
$second_color: #9bb868;
$third_color: #C9CAD9;

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
}

.page {
    width: 100vw;
    height: 100vh;

    &:nth-child(even) {
        background-color: rgb(74, 72, 87);
    }
}

.filtre {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom:0;
    left:0;
}

.projects {
    padding: 2.5em 1em 0 1em;
    font-size: 32px;
    font-family: 'Acme';
    height: 90vh;

    &__title {
        display: flex;
        color: $second_color;
        font-family: 'Jurassic Park';
        height: 100px;
        font-size: 144px;
        padding-left: 1em;
        padding-bottom: 0.5em;

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
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 75%;
        height:70%;
        padding: 20px;
        padding-left: 50px;
        margin: 0 auto;

        background-color: $second_color;
        border-radius: 20px;
        color: white;
        box-shadow: 10px 1px 6px 2px rgba(100, 100, 100, 0.6);

        & .arceaux {
            height: 100%;

            position: absolute;
            left: -20px;
            top: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10%;
        }

        & .arceau {
            width: 40px;
            height: 20px;
            background-color: white;
            border-radius: 110px;
        }

        & .title {
            text-align: center;
            font-family: 'Acme';
            font-style: italic;
            font-size: 48px;
            width: 90%;
            font-family: 'Back Out';
        }

        & li {
            list-style-type: circle;
            font-family: 'RobotoCondensed Light';
        }

        & .gif {
            width: 20%;
            cursor: none;
            transform: translateX(-20px);
        }
    }
}

.project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
}

.card {
    width: 90%;
    height: 90%;
    border-radius: 20px;
    box-shadow: 20px 20px 5px 0px rgb(0 0 0 / 16%);
    overflow: hidden;
    position: relative;

    &__img {
        position: relative;
        width: 100%;
        height: 100%;
        & img {
            width: 100%;
        }
    }

    &__content {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(85%);

        background: rgb(175, 175, 175);
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        & .date {
            padding-bottom: 5vh;
            color: $third_color;
            font-family: monospace;
            font-size: 32px;
        }

        & .name {
            color: $color;
            font-size: 144px;
        }

        & .tags {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 5%;
            font-family: monospace;
        }

        & .tag {
            padding: 2.5% 5%;
            font-size: 24px;
            background-color: #5e6661;
            color: #C9CAD9;
            border-radius: 10px;
        }

        & .description {
            width: 80%;
            font-size: 24px;
            font-family: 'Poppins Light';
            background-color: $color;
            color: $third_color;
            text-align: center;

            border-radius: 10px;
            box-shadow: 0px 0px 9px 1px $second_color;

            margin-top: 2%;
            margin-bottom:3%;
            padding: 50px 20px;
        }

        & .links {
        display: flex;
        flex-direction: row-reverse;
        gap: 20%;

        & img {
            width: 36px;
            cursor: none;
            filter: invert(89%) sepia(18%) saturate(186%) hue-rotate(199deg) brightness(91%) contrast(85%);

            &:hover {
                filter: invert(43%) sepia(79%) saturate(322%) hue-rotate(37deg) brightness(95%) contrast(85%);
                
            }
        }
    }
    }
}

// ANIMATION AND TRANSITION
.onHover {
    transform: translateY(0%);
    transition: transform 500ms;
}

.offHover {
    transform: translateY(85%);
    transition: transform 500ms;
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% { transform: scale(.9); }
    100% { transform: scale(1); }
}

@keyframes fadeInDown {
    0% {
        transform: translateY(50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
}

//CAROUSSEL DES IMAGES
.carrousel {
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

    &__item {
        display: flex;
        height: 100%;

        &__active {
            animation: fadeInDown 750ms forwards;
        }

        & img {
            object-fit: cover;
        }
    }
}

.bottom_carrousel {
    display: flex;
    gap: 10px;
    width: 100vw;
    align-items: center;
    justify-content: center;
}

.dot {
    width: 20px;
    height: 20px;
    background-color: rgb(21, 21, 24);
    border-radius: 50%;

    &__active {
        background-clip: content-box;
        border: 5px solid transparent;
        outline: 3px solid $color;
        animation: bounceIn 0.5s forwards;
    }
}

//MOYENNE RESOLUTION
@media (max-width: 1540px) {
    .projects__desc {
        & .title {
            font-size: 32px;
            width: 80%;
        }

        & li {
            font-size: 26px;
        }
    }

    .card__content {
        & .name {
            font-size: 110px;
        }

        & .date {
            padding-bottom: 3vh;
        }
    }
}

// ENTRE PETITE ET MOYENNE RESOLUTION
@media (max-width: 1200px) {
    .projects {

        &__title {
            font-size: 100px;
            padding-bottom: 0.25em;

            &__img {
                width: 7.5%;
            }
        }

        &__desc {
            & .title {
                font-size: 32px;
                width: 80%;
            }

            & li {
                font-size: 26px;
            }
        }
    }
    

    .card__content {
        & .name {
            font-size: 76px;
        }

        & .date {
            font-size: 24px;
        }

        & .tag {
            font-size: 18px;
        }
    }
}

// PETITE RESOLUTION
@media (max-width: 900px) {

    .projects {

        &__title {
            margin-left: 0;
            justify-content: center;
            font-size: 96px;
            margin-bottom: 0.25em;

            &__img {
                transform: translateX(10px) rotate(60deg);
            }
        }

        &__desc {
            & .title {
                font-size: 20px;
                width: 100%;
            }

            & ul {
                transform: translateX(-20px);
            }

            & li {
                font-size: 18px;
            }

            & .gif {
                width: auto;
                height: 30%;
            }
        }

    }

    .card__content {
        & .name {
            font-size: 64px;
        }

        & .description {
            padding: 20px;
            font-size: 18px;
        }
    }
}

// MOBILE SCREEN
@media (max-width: 500px) {
    .page{
        height: 33vh;
        padding: 20px 0 10px 0
    }

    .projects {
        height: 100vh;

        &__title {
            align-items: center;

            margin: 0;
            margin-top: 10vh;
            padding: 0;
        }

        &__desc {
            font-size: 16px;

            & .arceaux {
                left: -10px;
            }

            & .arceau {
                width: 30px;
                height: 15px;
            }
        }
    }
    
    .card {
        height: 100%;
        margin-bottom: 10px;

        &__img {
            display: flex;

            & img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .card__content {
        & .name {
            font-size: 36px;
        }

        & .date {
            font-size: 12px;
            padding-bottom: 10px;
        }

        & .description {
            font-size: 10px;
            padding: 10px;
        }

        & .tag {
            font-size: 8px;
            border-radius: 5px;
            padding: 5px;
        }

        & .links img {
            width: 24px;
        }
    }

    .carrousel__item {
        width: auto;
        display: flex;
        justify-content: center;
        height: 100%;
    }

    .dot {
        width: 16px;
        height: 16px;

        &__active {
            border: 2px solid $color;
            outline: none;
        }
    }
}
</style>