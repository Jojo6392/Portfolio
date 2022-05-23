<template>
    <div class="projects">
        <div class="projects__title">
            <div class="projects__title__text">Projects</div>
            <img class="projects__title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div class="items">
            <!-- <Project v-bind:data="item" /> -->
            <div class="project">
                <div class="thumbnail">
                    <div class="thumbnail__img">
                        <img src="../assets/projects/portfolio/image1.png">
                        <img src="../assets/projects/portfolio/image2.png">
                    </div>
                    <div class="thumbnail__text">1 / 5</div>
                </div>
                <div class="project__content">
                    <div class="project__date">15 janvier 2022</div>
                    <div class="project__name">Projet Test</div>
                    <div class="project__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus quam totam error modi quibusdam saepe, delectus consequatur deleniti necessitatibus ipsum nesciunt placeat pariatur rerum nobis perspiciatis, quidem tempore praesentium?
                    </div>
                    <div class="project__tags">
                        <div class="project__tag">HTML</div>
                        <div class="project__tag">CSS</div>
                        <div class="project__tag">JS</div>
                    </div>
                    <div class="project__links">
                        <a href="" target="_blank">
                            <img src="../assets/projects/redirection.svg" alt="external link">
                        </a>
                        <a href="" target="_blank">
                            <img src="../assets/header/github.svg" alt="github logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel_navigation">
            <img class="carousel_navigation__chevron" src="../assets/projects/chevron-left.svg" @click="step(false)" alt="left arrow">
            <div class="carousel_navigation__number">1 / 1</div>
            <img class="carousel_navigation__chevron" src="../assets/projects/chevron-right.svg" @click="step(true)" alt="right arrow">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
           
        }
    },

    components: {

    },

    watch: {
    },

    mounted() {
    },

    methods: {

    }
}
</script>

<style scoped lang="scss">
$color: #6D8536;
$second_color: #9bb868;
$third_color: #C9CAD9;

.projects {
    margin: 1em;
    margin-top: 2.5em;
    font-size: 32px;
    font-family: 'Acme';
    display: flex;
    flex-direction: column;
    align-items: center;

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
}

.items {
    position: relative;
}

.project {
    display: flex;
    flex-direction: row;
    

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

    &__text {
        color: $third_color;
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

//GRANDE RESO
@media (min-width: 1500px) {
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

        &__text {
            font-size: 24px;
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
        &__text {
            font-size: 18px;
        }
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