<template>
    <div class="wrapper">
        <div class="title">
            <div class="title__text">A propos de moi</div>
            <img class="title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div class="img animate__animated animate__zoomIn">
            <div class="img__profile"></div>
            <div class="img__color"></div>
        </div>

        <div ref="about" class="about animate__animated animate__zoomIn">
            <div class="about__ombre about__ombre1"></div>
            <div class="about__ombre about__ombre2"></div>
            <div class="about__content">
                <p class="hello">
                    Hello, Je suis Joris
                </p>

                <p>
                    Développeur front-end et fullstack junior et jeune fasciné par les dinosaures ainsi que les jeux vidéo.
                    Je travaille principalement avec <b>Vue</b> en <b>front-end</b>.
                </p>

                <p>
                    Soucieux de l’adaptabilité et du rendu de mes réalisations, je prends toujours en compte le côté <b>responsive</b> via des <b>frameworks CSS</b>
                    ou par mes propres moyens et communique facilement avec le côté UX/UI pour que l'attente du client soit respectée à 100%.
                </p>

                <p>
                    Actuellement basé à Rueil-Malmaison, je peux me déplacer dans les 20 kilomètres qui l'entoure.
                </p>

                <p class="check_out" @click="$router.push({name: 'Realisations'})">
                    N'hésite pas à regarder mes travaux
                </p>
            </div>
            
        </div>
        <div class="interest animate__animated animate__fadeInUp" v-scrollanimation-mobile>
            <div class="interest__title">Informations additionnelles</div>
            <div class="interest__item dino">
                <img class="interest__logo" src="../assets/views/about/interest/dino.svg" alt="dino logo">
                <span class="interest__text">Passioné par la préhistoire</span>
            </div>

            <div class="interest__item animals">
                <img class="interest__logo" src="../assets/views/about/interest/cat.svg" alt="cat logo">
                <span class="interest__text">Wildlife Lover</span>
            </div>

            <div class="interest__item anime">
                <img class="interest__logo" src="../assets/views/about/interest/bookshelf.svg" alt="anime logo">
                <span class="interest__text">Grand intérêt pour les animes/mangas</span>
            </div>

            <div class="interest__item game">
                <img class="interest__logo" src="../assets/views/about/interest/microsoft-xbox-controller.svg" alt="game logo">
                <span class="interest__text">Joueur régulier de multiples jeux vidéo</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isHover: false,
        }
    },
    
    mounted () {
        document.title = "Joris Margotteau - À propos de moi";
    },
}
</script>

<style lang="scss" scoped>
$text: #9e7282;
$lien: #EDBFB7;
$second_color: #805B68;
$color: #2D2B36;

.wrapper {
    color: $text;

    &::-webkit-scrollbar {
        display: none;
    }
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__img {
        z-index: 1;
        width: 10%;
        filter: invert(38%) sepia(6%) saturate(1800%) hue-rotate(288deg) brightness(98%) contrast(92%);
        opacity: 0;
        animation: fadeInLeftForImageTitle 1s forwards;
        animation-delay: 1s;
    }

    &__text {
        z-index: 2;
        width: fit-content;
        animation: fadeInLeft 1s forwards;
    }
}

.interest {
    display: flex;
    flex-direction: column;
    font-family: 'RobotoCondensed Regular';
    border: 3px solid $lien;
    color: $lien;
    background-color: $second_color;
    padding: 20px;
    margin: 20px;
    opacity: 0;

    animation-delay: 2.5s;
    box-shadow: 20px 20px rgba(128,91,104,.25);
    transition: all 0.4s ease;

    &:hover {
        border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
        box-shadow: 10px 10px rgba(128,91,104,.35);
    }

    &__item {
        width: fit-content;
        display: flex;
        align-items: center;
    }

    &__title {
        font-size: 64px;
        font-family: 'Jurassic Park';
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }

    &__text {
        letter-spacing: 2px;
    }


    &__logo {
        height: 48px;
        width: auto;
        margin-right: 10px;
    }
}

.about {
    animation-delay: 1s;

    &__content {
        padding-left: 40px;
        padding-right: 20px;

        border: 3px solid $second_color;
        background-color: $lien;
        color: $text;
        font-family: 'RobotoCondensed Regular';

        p.hello {
            font-family: 'Playfair Display';
            font-weight: 800;
            font-size: 48px;
        }

        p.check_out {
            width: fit-content;
            margin-top: 50px;
            padding-bottom: 10px;

            border-bottom: 3px solid $text;

            @media (hover: hover) {
                &:hover {
                    font-style: italic;
                    color: $second_color;
                    border-color: $second_color;

                    transform: rotate(0.75deg);
                    transition: all 500ms ease;
                }

                &:not(:hover) {
                    font-style: normal;
                    transform: rotate(0deg);
                    transition: all 500ms ease;
                }
            }
        }
    }
}

.img {
    grid-area: img;
    height: 400px;
    display: flex;
    justify-content: center;
    position: relative;
    animation-delay: 2s;

    &__profile, &__color {
        height: 400px;
        width: 400px;
        position: absolute;
        border-radius: 20%;
    }

    &__profile {
        background-image: url("../assets/views/about/profile_picture.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 10px 12px rgba(128,91,104,.35);
    }

    &__color {
        border: 3px solid $second_color;
        animation: filterColor 3s ease-in infinite;
        animation-direction: alternate-reverse;
    }
}

@media (max-width: 1820px) {
    .about__content {
        font-size: 22px;
    }
}

@media (max-width: 1500px) {
    .about__content {
        font-size: 20px;
    }
}

@media (min-width: 900px) {
    .wrapper {
        display: grid;
        grid-template-areas: 
            "title img"
            "about interest";
        grid-gap: 15px;
        margin: 5em 5vw 0 5vw;
    }

    .title {
        grid-area: title;
        height: 100px;
        font-size: 144px;
        width: 50vw;
    }

    .about {
        grid-area: about;
        margin-top: -250px;
        font-size: 24px;
        width: 50vw;
        position: relative;

        &__content {
            position: absolute;
            top: 0;
            width: 90%;
            height: 96%;
        }

        &__ombre {
            width: 100%;
            height: 100%;
            padding-left: 20px;
            padding-right: 20px;
            width: 90%;
            height: 96%;
            &1 {
                position: absolute;
                top: 0;
                background-color: $second_color;
                transform: rotate(2deg);
            }

            &2 {
                position: absolute;
                top: 0;
                transform: rotate(-2deg);
                background-color: $text;
            }
        }
    }

    .interest {
        font-size: 24px;
    }
}

@media (max-width: 1200px) {
    .img {
        &__profile, &__color {
            width: 350px;
            height: 350px;
        }
    }
}

@media (max-width: 900px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        margin: 5em 1em 0 1em;
    }

    .title {
        &__text {
            font-size: 94px;
            text-align: center;
            height: 100px;
        }

        &__img {
            animation: fadeInLeftForImageTitle 1.5s linear;
            transform: translate(-20px, 10px) rotate(60deg);
        }
    }

    .img {
        display: flex;
        justify-content: center;
        margin-top: 0px;
    }

    .about, .interest {
        margin-top: 1em;
        font-size: 32px;
    }
}

@media (max-width: 500px) {
    .wrapper {
        overflow: hidden;
    }

    .title {
        transform: translateX(10px);

        &__text {
            font-size: 64px;
        }

        &__img {
            transform: translate(-10px, -10px) rotate(60deg) !important;
        }
    }

    .img, .about {
        animation: fadeInDown 1s forwards;
    }

    .img {
        grid-area: img;
        height: 270px;
        position: relative;
        margin-bottom: 5vh;

        &__profile, &__color {
            width: 275px;
            height: 275px;
        }
    }

    .interest {
        font-size: 16px;
        border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
        box-shadow: 10px 10px rgba(128,91,104,.35);

        &__title {
            font-size: 40px;
        }
        
        & img {
            width: 32px;
        }
    }

    .beforeEnter {
        opacity: 0;
        transform: translateY(50%);
        transition: all 750ms ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes filterColor {
    from {
        background-color: rgba(128, 91, 104, 0.5);
    }

    to {
        background-color: rgba(237, 191, 183, 0.35);
    }
    
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

@keyframes fadeInLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes fadeInLeftForImageTitle {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translate(-20px, 30px) rotate(60deg);
        opacity: 1;
    }
}

@keyframes bounce{
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(-15px)
    }
}

</style>