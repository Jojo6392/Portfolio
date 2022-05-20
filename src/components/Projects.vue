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
        <img class="chevron chevron__droite" src="../assets/projects/chevron-left.svg" @click="step(false)" alt="left arrow">
        <img class="chevron chevron__gauche" src="../assets/projects/chevron-right.svg" @click="step(true)" alt="right arrow">
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
                    desc: "Site sur lequel vous êtes actuellement ! Créer pendant ma licence professionnelle sous le framework Vue 2.",
                    tags: ["VueJS", "SCSS"],
                    links: ["#", "https://github.com/Jojo6392/Portfolio"],
                    images: [require('../assets/projects/portfolio/image1.png'), require('../assets/projects/portfolio/image2.png')],
                    isActive: true,
                },
                {
                    name: "TEST",
                    date: "Avril - Juin 2022",
                    desc: "Site sur lequel vous êtes actuellement ! Créer pendant ma licence professionnelle sous le framework Vue 2.",
                    tags: ["VueJS", "SCSS"],
                    links: ["#", "https://github.com/Jojo6392/Portfolio"],
                    images: [require('../assets/global/spinosaurus.png'), require('../assets/global/spinosaurus.png')],
                    isActive: false,
                }
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
            overflow-y: hidden;
        }
    }

    .active {
        display: flex;
    }

    .chevron {
        position: absolute;
        bottom: 0;
        font-size: 44px;
        margin: 1em;
        filter: invert(97%) sepia(1%) saturate(7361%) hue-rotate(187deg) brightness(83%) contrast(105%);

        &:hover {
            filter: invert(52%) sepia(7%) saturate(3200%) hue-rotate(37deg) brightness(90%) contrast(81%);
        }
        
        &__droite {
            right: 50%;
        }

        &__gauche {
            left: 50%;
        }
    }
}
</style>