<template>
    <div class="projects">
        <div class="projects__title">
            <div class="projects__title__text">Projects</div>
            <img class="projects__title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div v-for="item in data" :key="item.name">
            <Project v-bind:data="item" />
        </div>
    </div>
</template>

<script>
import Project from './SingleProject.vue'

export default {
    data() {
        return {
            data: [
                {
                    name: "Portfolio",
                    date: "Mars - Mai 2022",
                    desc: "Site sur lequel vous êtes actuellement ! Créer pendant ma licence professionnelle sous le framework Vue 2.",
                    tags: ["VueJS", "SCSS"],
                    links: ["#", "https://github.com/Jojo6392/Portfolio"],
                    images: [require('../assets/projects/portfolio/image1.png'), require('../assets/projects/portfolio/image2.png')]
                }
            ],
        }
    },

    components: {
        Project
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
        margin-bottom: 1em;

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

}
</style>