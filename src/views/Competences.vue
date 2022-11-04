<template>
    <div class="competences">
        <div class="content first">
            <div class="title">Ce que je peux faire</div>
            <div class="text">
                Actuellement développeur web junior, j'essaye de me spécialiser dans le front-end mais j'ai des connaissances qui me permettent de m'orienter full-stack.
                Je suis le plus à l'aise sur le framework Vue.js pour ce qui est du front et Node.js pour ce qui est du back (notamment Express.js).
            </div>
        </div>
        <div class="content second">
            <div class="skills"
                v-for="(skill, index) in skills"
                :key="index"
                v-show="skill.isActive"
            >
                <div 
                    class="skill"
                    v-show="skill.isActive"
                >
                    <div class="title"
                        :class="{ title__active: skill.isActive, title__unactive: !skill.isActive }"
                    >
                        <div>
                            {{ skill.title }}
                        </div>
                    </div>
                    <div class="items"
                        :class="{ items__active: skill.isActive, items__unactive: !skill.isActive }"
                    >
                        <div 
                            class="item"
                            v-for="item in skill.items"
                            :key="item.name"
                        >
                            <div class="img">
                                <img 
                                    :src="item.img" 
                                    :alt="item.name"
                                    :class="{
                                        resizeImg: item.resizeImg,
                                        onHover: item.onHover,
                                        offHover: !item.onHover
                                    }"
                                    @mouseenter="item.onHover = true"
                                    @mouseleave="item.onHover = false"
                                >
                            </div>
                            <div class="name">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="indexation">
                <div 
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="index"
                    :class="{
                        index__active: skill.isActive,
                        onHover: skill.mouseEnter,
                        offHover: !skill.mouseEnter
                    }"
                    @click="changeSkill(index)"
                    @mouseenter="skill.mouseEnter = true"
                    @mouseleave="skill.mouseEnter = false"
                >
                </div>
            </div>
        </div>
        <div class="tips">
            Vous pouvez utiliser les boutons sur le côté droit de votre écran pour voir les différentes compétences triées par catégorie.
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                {
                    title: "Front-end",
                    items : [
                        {
                            img: require("../assets/views/competences/front-end/html.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "HTML"
                        },
                        {
                            img: require("../assets/views/competences/front-end/css.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "CSS"
                        },
                        {
                            img: require("../assets/views/competences/front-end/sass.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "SASS"
                        },
                        {
                            img: require("../assets/views/competences/front-end/javascript.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "JavaScript"
                        },
                        {
                            img: require("../assets/views/competences/front-end/vuejs.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "VueJs"
                        },
                        {
                            img: require("../assets/views/competences/front-end/vuetify.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Vuetify"
                        },
                        {
                            img: require("../assets/views/competences/front-end/nuxt.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Nuxt"
                        },
                    ],
                    isActive: true,
                    mouseEnter: false,
                },

                {
                    title: "Back-end",
                    items : [
                        {
                            img: require("../assets/views/competences/back-end/nodejs.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "NodeJs"
                        },
                        {
                            img: require("../assets/views/competences/back-end/express.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Express.js"
                        },
                        {
                            img: require("../assets/views/competences/back-end/php.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "PHP"
                        },
                        {
                            img: require("../assets/views/competences/back-end/symfony.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Symfony"
                        },
                        {
                            img: require("../assets/views/competences/back-end/mysql.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "MySQL"
                        },
                    ],
                    isActive: false,
                    mouseEnter: false,
                },

                {
                    title: "Services / Outils",
                    items : [
                        {
                            img: require("../assets/views/competences/outils/firebase.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Firebase"
                        },
                        {
                            img: require("../assets/views/competences/outils/docker.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Docker"
                        },
                        {
                            img: require("../assets/views/competences/outils/git.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Git"
                        },
                        {
                            img: require("../assets/views/competences/outils/github.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "GitHub"
                        },
                        {
                            img: require("../assets/views/competences/outils/vscode.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "VSCode"
                        },
                        {
                            img: require("../assets/views/competences/outils/wordpress.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Wordpress"
                        },
                    ],
                    isActive: false,
                    mouseEnter: false,
                },

                {
                    title: "Soft Skills",
                    items : [
                        {
                            img: require("../assets/views/competences/softskills/teamwork.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Travail en équipe"
                        },
                        {
                            img: require("../assets/views/competences/softskills/autonomie.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Autonomie"
                        },
                        {
                            img: require("../assets/views/competences/softskills/serieux.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Sérieux"
                        },
                        {
                            img: require("../assets/views/competences/softskills/calme.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Calme"
                        },
                        {
                            img: require("../assets/views/competences/softskills/progresser.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Envie de progresser"
                        },
                    ],
                    isActive: false,
                    mouseEnter: false,
                },

                {
                    title: "Operating System",
                    items : [
                        {
                            img: require("../assets/views/competences/os/windows.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Windows"
                        },
                        {
                            img: require("../assets/views/competences/os/macos.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "macOS"
                        },
                        {
                            img: require("../assets/views/competences/os/linux.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Linux"
                        },
                        {
                            img: require("../assets/views/competences/os/android.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "Android"
                        },
                        {
                            img: require("../assets/views/competences/os/ios.png"),
                            resizeImg: true,
                            onHover: false,
                            name: "iOS"
                        },
                    ],
                    isActive: false,
                    mouseEnter: false,
                },

                {
                    title: "Langues",
                    items : [
                        {
                            img: require("../assets/views/competences/langues/france.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Français - C2"
                        },
                        {
                            img: require("../assets/views/competences/langues/united_kingdom.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Anglais - B2"
                        },
                        {
                            img: require("../assets/views/competences/langues/espagne.png"),
                            resizeImg: false,
                            onHover: false,
                            name: "Espagnol - A2"
                        },
                    ],
                    isActive: false,
                    mouseEnter: false,
                },


            ]
        }
    },

    methods: {
        /**
         * @param {Number} index
         */
        changeSkill(index) {
            const previousIndex = this.skills.map(e => e.isActive).indexOf(true)
            this.skills[previousIndex].isActive = false
            this.skills[index].isActive = true
        },
    },
}
</script>

<style scoped lang="scss">
$main_color: #0c8c73;
$light_color: #91d17b;
$dark_color: #266353;
$most_dark_color: #1c3838;
$white: rgb(229, 229, 229);

.competences, .first {
    display: flex;
    align-items: center;
}

.competences {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}

.first {
    width: 100%;
    height: 25%;

    justify-content: space-evenly;
    flex-direction: column;

    & .title {
        font-family: 'Acme';
        font-size: 48px;
        color: $main_color;
        padding-bottom: 2vh;
    }

    & .text {
        font-family: 'Poppins Light';
        font-size: 18px;
        color: rgb(119, 119, 119);
        text-align: center;
        margin: 0 5%;
    }
}

.second {
    width: 100%;
    height: 75%;

    position: relative;

    & .skills {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        & .skill {
            display: flex;

            width: 80%;
            height: 100%;

            & .title {
                width: 10%;
                display: flex;
                align-items: center;

                &__active {
                    animation: fadeInLeft 500ms forwards;
                }

                &__unactive {
                    animation: fadeOutLeft 500ms linear;
                }

                & div {
                    width: fit-content;
                    height: fit-content;

                    font-family: 'Acme';
                    color: $white;
                    font-size: 42px;
                    border-left: 5px solid $light_color;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            }

            & .items {
                $gap: 5%;

                width: 100%;

                display: flex;
                flex-wrap: wrap;
                align-content: center;
                align-items: center;
                justify-content: center;
                gap: $gap;

                &__active {
                    animation: zoomIn 500ms forwards;
                }

                &__unactive {
                    animation: zoomOut 500ms linear;
                }

                & .item {
                    display: flex;
                    flex-direction: column;

                    box-shadow: 10px 15px 25px 10px #1a1a1a;

                    $padding: 1em;
                    padding: $padding;
                    width: calc(27.5% - $gap - ($padding * 4));
                    height: calc(42.5% - $gap - ($padding * 4));

                    & .img, & .name {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    & .img {
                        height: 75%;
                        width: 100%;
                        & img {
                            width: 75%;
                            height: auto;

                            &.resizeImg {
                                width: 60%;
                            }

                            &.onHover {
                                transition: transform 400ms ease-in;
                                transform: scale(1.15);
                            }

                            &.offHover {
                                transition: transform 400ms ease-out;
                                transform: scale(1);
                            }
                        }
                    }

                    & .name {
                        height: 25%;
                        width: 100%;

                        font-family: 'Poppins SemiBold';
                        text-transform: uppercase;
                        color: $white;
                    }
                }
            }
        }
    }

    & .indexation {
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 25px;

        & .index {
            $width: 7.5px;
            width: $width;
            height: 65px;
            background-color: $white;

            &__active {
                background-color: $dark_color;
            }

            &.onHover {
                width: 20px;
                transition: width 250ms ease-in-out;
            }

            &.offHover {
                width: $width;
                transition: width 250ms ease-in-out;
            }
        }
    }
}

.tips {
    display: none;
}

// ANIMATION

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes zoomOut {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
}

@keyframes fadeOutLeft {
    from {
        opacity: 1;
        transform: translateX(0%);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
}

// MOBILE RESOLUTION
@media (max-width: 500px) {
    .competences {
        height: 1000px;
    }
    .first {
        margin-top: 75px;

        .title {
            font-size: 32px;
        }

        .text {
            font-size: 12px;
            margin-bottom: 20px;
        }
    }

    .second {
        height: 100%;

        .skills {
            .skill {
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 20px;

                .title {
                    width: 100%;
                    justify-content: center;

                    div {
                        font-size: 26px;
                        writing-mode: horizontal-tb;
                        transform: rotate(0deg);
                        border-left: none;
                        border-bottom: 5px solid $light_color
                    }
                }

                .items {
                    justify-content: center;
                    flex-wrap: wrap;
                    align-content: baseline;
                    height: 100%;

                    .item {
                        width: 35%;
                        height: 15%;

                        .img {
                            img, img.resizeImg {
                                width: 50%;
                            }
                        }

                        .name {
                            font-size: 12px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    .tips {
        display: block;
        width: 80%;
        margin-top: 20px;

        font-family: 'Poppins Light';
        text-align: center;
        font-size: 8px;
        font-style: italic;
        color: $white;
    }
}
</style>