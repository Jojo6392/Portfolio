<template>
    <div class="project">
        <vue-flux
            :options="options"
            :images="data.images"
            :transitions="transitions"
            style="width: 100%;"
            >
        </vue-flux> 
            <!-- <img src="../assets/projects/portfolio/image1.png" alt=""> -->
        <div class="project__content">
            <div class="project__title">
                <div class="project__title__date">{{ data.date }}</div>
                <div class="project__title__name">{{ data.name }}</div>
            </div>
            <div class="project__desc">{{ data.desc }}</div>
            <div class="project__tags">
                <div v-for="tag in data.tags" :key="tag" class="project__tag">{{tag}}</div>
            </div>
            <div class="project__links">
                <a :href="data.links[0]" target="_blank">
                    <img src="../assets/projects/redirection.svg" alt="external link">
                </a>
                <a :href="data.links[1]" target="_blank">
                    <img src="../assets/header/github.svg" alt="github logo">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { VueFlux } from "vue-flux"

export default {

    data() {
        return {
            options: {
                allowFullscreen: false,
                allowToSkipTransition: true,
                autohideTime: 2500,
                autoplay: true,
                bindKeys: false,
                delay: 3000,
                enableGestures: false,
                infinite: true,
                lazyLoad: true,
                lazyLoadAfter: 3,
            },
            transitions: ['kenburn'],
        }
    },

    props: {
        data: {
            Array,
            default: null,
        }
    },

    components: {
        VueFlux,
    }

}
</script>

<style lang="scss" scoped>
$color: #6D8536;
$second_color: #9bb868;
$third_color: #C9CAD9;

.hidden {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 250ms;
}

.project {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -50px;
    margin: 1em;
    margin-top: 2.5em;
    font-size: 28px;
    font-family: 'Acme';
    justify-content: center;

    &__content {
        margin-left: 70px;
        margin-right: 70px;
        text-align: right;
        color: $second_color;
    }

    &__title {
        &__date {
            font-size: 24px;
            color: $third_color;
            margin-bottom: 10px;
            font-family: monospace;
        }

        &__name {
            font-size: 44px;
            margin-bottom: 20px;
            color: $color;
        }
    }

    &__desc {
        border-radius: 10px;
        background-color: $color;
        color: $third_color;
        padding: 50px 20px 50px 20px;
        box-shadow: 0px 0px 9px 1px $second_color;
        margin-bottom: 20px;
        font-family: 'Poppins Light';
        font-size: 24px;
    }

    &__tags {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
        font-family: monospace;
    }

    &__tag {
        padding: 0px 10px 0px 10px;
        font-size: 24px;
        color: #C9CAD9;
    }

    &__links {
        display: flex;
        flex-direction: row-reverse;

        & img {
            padding: 10px;
            width: 32px;
            filter: invert(43%) sepia(79%) saturate(322%) hue-rotate(37deg) brightness(95%) contrast(85%);

            &:hover {
                filter: invert(89%) sepia(18%) saturate(186%) hue-rotate(199deg) brightness(91%) contrast(85%);
            }
        }
    }
}

</style>