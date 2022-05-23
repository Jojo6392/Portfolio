<template>
    <div class="project">
        <div class="thumbnail">
            <div class="thumbnail__img">
                <img v-for="(image, index) in data.images" :key="index" :class="{ active: image.isActive, hidden: !image.isActive }" :src="image.lien" alt="">
            </div>
            <div class="thumbnail__text">{{ index + 1 }} / {{ data.images.length }}</div>
        </div>
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

export default {

    data() {
        return {
            index: -1,
        }
    },

    props: {
        data: {
            Object,
            default: null,
        }
    },

    watch: {
        index (newVal) {
            const imgTab = this.data.images
            
            if(newVal == imgTab.length - 1) {
                setTimeout(() => {
                    imgTab[this.index].isActive = false
                    this.index = 0
                    imgTab[this.index].isActive = true
                }, 5000)
            }
            else {
                setTimeout(() => {
                    imgTab[this.index].isActive = false
                    this.index = newVal + 1
                    imgTab[this.index].isActive = true
                }, 5000)
            }
        }
    },

    mounted() {
        this.index += 1
    },

}
</script>

<style lang="scss" scoped>
$color: #6D8536;
$second_color: #9bb868;
$third_color: #C9CAD9;

.project {
    display: none;
    flex-direction: row;
    align-items: center;
    margin-top: -50px;
    margin-top: 0.5em;
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
        width: 40vw;
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
            cursor: none;
            filter: invert(43%) sepia(79%) saturate(322%) hue-rotate(37deg) brightness(95%) contrast(85%);

            &:hover {
                filter: invert(89%) sepia(18%) saturate(186%) hue-rotate(199deg) brightness(91%) contrast(85%);
            }
        }
    }

    .thumbnail {
        width: 50vw;
        height: 56vh;
        position: relative;

        &__img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            height: 480px; //temporaire
            border-radius: 20px;

            & img {
                border-radius: 20px;
                border: 5px solid $color;
                box-shadow: 10px -3px 5px -1px rgba(109,133,54,0.3);
                width: 100%;
            }
        }

        &__text {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            color: $third_color;
            font-size: 20px;
        }
    }
}

//RESPONSIVE
@media (max-width: 1800px) {
    .project {
        &__content {
            margin-top: 3em;
        }
    }
}

@media (min-width: 900px) and (max-width: 1500px) {
    .thumbnail {
        width: 90vw !important;
        height: 35vh !important;
    }
}

@media (max-width: 1500px) {
    .thumbnail {
        height: 75vh !important;
    }
}

@media (max-width: 900px) {
    .thumbnail {
        width: 90vw !important;
        height: 33vh !important;
    }

    .project {
        width: 100vw;

        &__content {
            margin-top: 2em;
            text-align: center;
        }

        &__desc {
            width: 70vw;
        }

        &__tags, &__links {
            justify-content: center;
        }

    }
}

// CAROUSEL CSS
.active {
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

</style>