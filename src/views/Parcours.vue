<template>
    <div class="container">
        <!-- TITLES SECTION -->
        <div v-show="showExperiences"
            :class="['experiences__title', (showExperiences === true ? 'active' : '')]"
        >
            <div class="tiret"></div>
            Expériences
        </div>
        <div v-show="!showExperiences" class="formations__title"
            :class="['formations__title', (showExperiences === true ? '' : 'active')]"
        >
            <div class="tiret"></div>
            Formations
        </div>
        <div :class="['divider', (showExperiences === true ? 'active' : 'active')]"></div>

        <!-- SWITCH SECTION -->
        <div class="switch">
            <div :class="{ active: showExperiences }">Expériences</div>
            <SwitchParcours @click.native="showExperiences = !showExperiences"/>
            <div :class="{ active: !showExperiences }">Formations</div>
        </div>

        <!-- EXPERIENCES SECTION -->
        <div :class="['experiences', 'cards', (showExperiences === true ? 'active' : '')]"
            v-show="showExperiences"
        >
            <div class="experience card"
                v-for="(experience, index) in experiences" :key="index"
            >
                <div class="img"
                    :style="{backgroundImage: `url(${experience.img}`}"
                >
                    <div class="blur"></div>
                    <div class="img__center"
                        :style="{backgroundImage: `url(${experience.img}`}"></div>
                </div>
                <div class="content">
                    <div class="title">
                        {{ experience.title }}
                    </div>
                    <div class="nom_and_type">
                        {{ experience.entreprise }} - {{ experience.type }}
                    </div>
                    <div class="date">
                        {{ experience.date }}
                    </div>
                    <div class="lieu">
                        {{ experience.lieu }}
                    </div>
                    <div class="description">
                        <div class="description__title">
                            <div class="tiret"></div>
                            Description
                        </div>
                        <div class="divider"></div>
                        {{ experience.description }}
                    </div>
                </div>
            </div>
        </div>

        <!-- FORMATIONS SECTION -->
        <div :class="['formations', 'cards', (showExperiences === true ? '' : 'active')]" 
            v-show="!showExperiences"
        >
            <div class="formation card"
                v-for="(formation, index) in formations" :key="index"
            >
                <div class="img"
                    :style="{backgroundImage: `url(${formation.img}`}"
                >
                    <div class="blur"></div>
                    <div class="img__center"
                        :style="{backgroundImage: `url(${formation.img}`}"></div>
                </div>
                <div class="content">
                    <div class="title">
                        {{ formation.title }}
                    </div>
                    <div class="nom_and_type">
                        {{ formation.institut }} ∘ {{ formation.progression }}
                    </div>
                    <div class="date">
                        {{ formation.date }}
                    </div>
                    <div class="lieu">
                        {{ formation.lieu }}
                    </div>
                    <div class="description">
                        <div class="description__title">
                            <div class="tiret"></div>
                            Description
                        </div>
                        <div class="divider"></div>
                        {{ formation.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchParcours from "../components/SwitchParcours.vue"

export default {
    data() {
        return {
            showExperiences: true,

            experiences: [
                {
                    title: "Développeur Web",
                    entreprise: "EDOSTAR Group",
                    type: "Contrat en alternance",
                    date: "Octobre 2021 - Novembre 2022, 1 an et 1 mois",
                    lieu: "Paris, France",
                    description: "Développement d’applications et d’outils de gestion, de suivi et de marketing. Refonte plus attractives et mise à jour régulière des différents sites, outils et applications du groupe. Structuration du code, des infrastructures et des data dans une optique de croissance. Participation à la mise en place de processus de développement coopératif.",
                    img: require("../assets/views/parcours/edostar.png"),
                },
                {
                    title: "Développeur Web",
                    entreprise: "Université de Bourgogne",
                    type: "Stage",
                    date: "Avril 2021 - Juin 2021, 3 mois",
                    lieu: "Dijon, France",
                    description: "Développement d'un site \"leboncoin-uB\" sous le CMS WordPress. HTML, CSS, JavaScript et JQuery ont été aussi utilisé dans le front et le back du site. L'apprentissage de création de plugins sous WP a été nécessaire.",
                    img: require("../assets/views/parcours/universite_de_bourgogne.png"),
                },
                {
                    title: "Employé",
                    entreprise: "Monoprix",
                    type: "CDD",
                    date: "Juillet 2019 - Août 2019, 2 mois",
                    lieu: "Paris, France",
                    description: "Relation client en fromagerie coupe, mise en rayon",
                    img: require("../assets/views/parcours/monoprix.png"),
                },
            ],

            formations: [
                {
                    title: "LP Développement Web",
                    institut: "Université de Cergy Paris",
                    progression: "Obtenu",
                    date: "Septembre 2021 - Septembre 2022, 1 an",
                    lieu: "Gennevilliers, France",
                    description: "Cette formation forme chaque année des développeuses et développeurs prêts à évoluer avec internet en partageant le même amour du web, de sa culture, beaucoup de curiosité et un solide socle de compétences. Contenu de la formation : HTML/CSS, SQL/PHP, Sécurité web, API/WebServices, Symfony, Android/iOS ...",
                    img: require("../assets/views/parcours/cy.png"),
                },
                {
                    title: "DUT Informatique",
                    institut: "Université de Versailles - Yvelines",
                    progression: "Obtenu",
                    date: "Septembre 2019 - Septembre 2021, 2 ans",
                    lieu: "Vélizy, France",
                    description: "Le DUT Informatique prépare aux métiers de développeur et d’intégrateur. On apprend à concevoir, réaliser et mettre en œuvre des applications pour répondre aux besoins des utilisateurs. Permet d’intégrer directement le marché du travail ou propose des passerelles permettant un approfondissement des connaissances.",
                    img: require("../assets/views/parcours/uvsq.png"),
                },
                {
                    title: "BAC STI2D",
                    institut: "Lycée Richelieu",
                    progression: "Obtenu",
                    date: "Septembre 2016 - Septembre 2019, 3 ans",
                    lieu: "Rueil-Malmaison, France",
                    description: "Le bac STI2D s'adresse aux lycéens qui s'intéressent à l'innovation technologique dans le respect de l'environnement et se montrent sensibles à une approche concrète de l'enseignement des sciences.",
                    img: require("../assets/views/parcours/lycée.png"),
                },
            ],
        }
    },

    components: {
        SwitchParcours,
    },
}
</script>

<style scoped lang="scss">
$white: rgb(229, 229, 229);
$main_color: rgb(0, 112, 143);
$light_gray: rgb(64, 62, 80);
$extra_light_gray: rgb(76, 73, 95);
$gray: rgb(50, 48, 62);
$background: rgb(27, 26, 35);

.switch {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin: 0 auto;
    transform: translateY(-75px);

    font-family: 'KG Compassion';
    color: $white;
    font-size: 18px;
    
    div {
        border-color: $main_color !important;
    }

    .active {
        border-bottom: 1px solid;
        transform: rotate(2deg);

        transition: all 500ms ease-in;
    }
}

.container {
    width: 100vw;
    padding: 60px 50px;
    padding-bottom: 10px;
    overflow-y: hidden;
}

.divider {
    width: calc(100% - 100px);
    opacity: 0;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: $light_gray;

    &.active {
        animation: fadeInLeft 1s forwards;
        animation-delay: 250ms;
    }
}

.experiences, .formations {
    width: calc(100% - 100px);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 25px;

    &.active {
        .card {
            opacity: 0;
            animation-name: fadeInBottom;
            animation-fill-mode: forwards;

            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    animation-duration: 1s;
                    animation-delay: calc($i * 500ms);
                }
            }
        }

    }

    &__title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        color: $white;
        font-size: 44px;
        font-family: 'Playfair Display';

        .tiret {
            width: 40px;
            height: 5px;
            background-color: $main_color;
        }

        &.active {
            animation: fadeInLeft 1s forwards;
        }
    }
}

.card {
    width: calc(33% - 20px);
    height: 75vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 5px 5px 0px 2px rgba(0,0,0,0.25);
    border: 1px solid rgba($color: #000000, $alpha: 0.25);
}

.experience, .formation {

    gap: 20px;

    .img {
        position: relative;
        width: 100%;
        height: 45%;
        background-color: $gray;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        .blur {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
        }

        &__center {
            width: 150px;
            height: 150px;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            border-radius: 50%;
            background-color: $background;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            box-shadow: 0px 0px 35px 10px rgba(0,0,0,0.6);
        }
    }

    .content {
        width: 100%;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .title {
            font-size: 44px;
            font-family: 'KG Compassion';
            color: $main_color;
            margin-bottom: 10px;
            text-align: center;
        }

        .nom_and_type {
            font-size: 24px;
            font-family: 'RobotoCondensed Light';
            color: $white;
            text-align: center;
            margin-bottom: 20px;
        }

        .date, .lieu {
            font-size: 18px;
            color: $extra_light_gray;
            font-family: 'RobotoCondensed Light';
        }

        .lieu {
            margin-bottom: 10px;
        }

        .description {
            height: 50%;
            width: 90%;

            text-align: center;
            font-size: 18px;
            font-family: 'NanumGothic';
            color: rgb(203, 203, 203);

            padding: 10px 20px;
            margin: 5px 10px;

            &__title {
                display: flex;
                align-items: center;
                gap: 10px;

                width: 100%;
                margin-bottom: 10px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 24px;
                font-weight: bold;

                .tiret {
                    width: 15px;
                    height: 2.5px;
                    background-color: $main_color;
                }
            }

            .divider {
                width: 100%;
                height: 1px;
                background-color: $light_gray;
                opacity: 1;
            }
        }
    }
}

// GRANDE MOYENNE RESOLUTION
@media (max-width: 1540px) {
    .container {
        padding-top: 70px;
    }

    .cards {
        transform: translateY(-25px);
    }

    .card {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;

        .img {
            height: 40%;

            &__center {
                width: 125px;
                height: 125px;
            }
        }

        .content {
            .title {
                font-size: 40px;
            }

            .nom_and_type {
                font-size: 20px;
                margin-bottom: 15px;
            }

            .date, .lieu {
                font-size: 16px;
            }

            .lieu {
                margin-bottom: 0;
            }

            .description {
                font-size: 15px;

                &__title {
                    font-size: 20px;
                }

                .divider {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

// MOYENNE RESOLUTION
@media (max-width: 1200px) {
    .container {
        padding-top: 80px;
    }

    .experiences, .formations {
        &__title {
            font-size: 36px;
        }
    }

    .switch {
        div {
            font-size: 14px;
        }

        ::v-deep #button-2 {
            width: 60px;
            height: 32px;

            .knobs:before, .knobs:after {
                width: 17.5px;
                height: 7.5px;
                top: 3.5px;
            }
        }
    }

    .divider {
        margin-bottom: 15px;
        margin-top: 15px;
    }

    .cards {
        $gap: 50px;
        gap: $gap;
        justify-content: center;

        .card {
            width: calc(50% - $gap);

            .content {
                .description {
                    font-size: 14px;
                }
            }
        }
    }
}

// MOBILE RESOLUTION
@media (max-width: 500px) {
    .container {
        padding: 0;
        padding-top: 70px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .switch, .cards {
        transform: none;
    }

    .switch {
        margin-bottom: 20px;
    }

    .experiences, .formations {
        &__title {
            justify-content: center;

            .tiret {
                width: 30px;
                height: 4px;
            }
        }
    }

    .cards {
        width: calc(100% - 10vw);
        margin-bottom: 20px;
        gap: 25px;

        .card {
            width: 100%;
            height: 60vh;
            gap: 10px;
            animation-name: fadeInLeft !important;

            .img {
                height: 35%;

                &__center {
                    width: 110px;
                    height: 110px;
                }
            }

            .content {
                .title {
                    font-size: 32px;
                }

                .nom_and_type {
                    font-size: 16px;
                }

                .date, .lieu {
                    font-size: 14px;
                }

                .description {
                    margin-top: 0;
                    font-size: 12px;

                    &__title {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

// OLD MOBILE
@media (max-width: 500px) and (max-height: 700px) {
    .content {
        .description {
            font-size: 10px !important;
        }
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

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>