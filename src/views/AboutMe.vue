<template>
    <div class="wrapper">
        <div class="title">
            <div class="title__text">About me</div>
            <img class="title__img" src="../assets/global/cursor.svg" alt="">
        </div>
        <div class="img">
            <img class="profile_picture" src="../assets/about/profile_picture.jpg" alt="profil picture" />
            <div class="img__color"></div>
        </div>

        <div class="about">
            <div class="about__ombre about__ombre1"></div>
            <div class="about__ombre about__ombre2"></div>
            <div class="about__content">
                <p>
                    Hello à tous <span class="spacing">! </span>Je suis actuellement <b>alternant développeur web</b> chez <b>Edostar Group</b><span class="spacing">.</span>
                    De plus, je suis une formation en licence professionnelle option Développement Mobile à l'<b>Université de Cergy</b> sur le site de <b>Gennevilliers</b>.
                </p>

                <p>
                    Je travaille principalement avec <b>Vue</b> en <b>front-end</b> et <b>Node / PHP</b> pour le <b>back-end</b><span class="spacing">.</span> J'essaye de m'orienter le plus possible
                    en tant que <b>développeur full-stack</b><span class="spacing">.</span> Dans mon poste actuel<span class="spacing">,</span> j'évolue en autodidacte 
                    ce qui me permet de gérer tous les aspects d'un site web<span class="spacing">.</span>
                </p>

                <p>
                    Soucieux de l’adaptabilité et du rendu de mes réalisations<span class="spacing">,</span> je prends toujours en compte le côté <b>responsive</b> via des <b>frameworks CSS</b>
                    ou par mes propres moyens et communique facilement avec le côté UX/UI pour que l'attente du client soit respectée à 100%.
                </p>

                <p>
                    J'aime évoluer dans un endroit calme avec l'espace et les outils nécessaire au bon fonctionnement de mon métier<span class="spacing">,</span> 
                    j'aime aussi <b>travailler avec des équipes</b> même si <b>évoluer en autonomie</b> ne me dérange pas.
                </p>
                <p>
                    <b>Sérieux</b><span class="spacing">,</span> <b>attentif</b> et <b>dynamique</b><span class="spacing">,</span> je m’investis pleinement dans chaque mission confiée<span class="spacing">.</span> 
                    Je suis apte à accomplir des tâches avec <b>vigueur</b> et <b>enthousiasme</b><span class="spacing">.</span> 
                    Je suis aussi la <b>veille technologique</b> car je reste un passionné d'informatique.
                </p>
            </div>
            
        </div>
        <div class="interest">
            <div class="interest__title">Additional information</div>
            <div class="interest__item dino">
                <img class="interest__logo" src="../assets/about/interest/dino.svg" alt="dino logo">
                <span class="interest__text">Passionate about Prehistory</span>
            </div>

            <div class="interest__item animals">
                <img class="interest__logo" src="../assets/about/interest/cat.svg" alt="cat logo">
                <span class="interest__text">Wildlife Lover</span>
            </div>

            <div class="interest__item anime">
                <img class="interest__logo" src="../assets/about/interest/bookshelf.svg" alt="anime logo">
                <span class="interest__text">Interest in Anime / Manga</span>
            </div>

            <div class="interest__item game">
                <img class="interest__logo" src="../assets/about/interest/microsoft-xbox-controller.svg" alt="game logo">
                <span class="interest__text">Regular player on many games</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$text: #9e7282;
$lien: #EDBFB7;
$second_color: #805B68;
$color: #2D2B36;

.wrapper {
    color: $text;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__img {
        transform: translate(-30px, 30px) rotate(60deg);
        z-index: 1;
        width: 10%;
        filter: invert(38%) sepia(6%) saturate(1800%) hue-rotate(288deg) brightness(98%) contrast(92%);
    }

    &__text {
        z-index: 2;
        width: fit-content;
    }
}

.interest {
    display: flex;
    flex-direction: column;
    font-family: 'Acme';
    border: 3px solid $lien;
    color: $lien;
    background-color: $second_color;
    padding: 20px;
    margin: 20px;

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
    &__content {
        border: 3px solid $second_color;
        background-color: $lien;
        padding-left: 20px;
        padding-right: 20px;
        color: $text;
        font-family: 'Acme';
    }
}

.spacing {
    letter-spacing: 3px;
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

    .img {
        grid-area: img;
        height: 400px;
        display: flex;
        justify-content: center;
        position: relative;

        &__color {
            height: 400px;
            width: 400px;
            position: absolute;
            border-radius: 20%;
            animation: filterColor 3s ease-in infinite;
            animation-direction: alternate-reverse;
        }
    }

    .profile_picture {
        border-radius: 20%;
        border: 3px solid $second_color;
        box-shadow: 10px 12px rgba(128,91,104,.35);
        width: 400px;
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
        font-size: 32px;
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
            transform: translate(-20px, 10px) rotate(60deg);
        }
    }

    .img {
        display: flex;
        justify-content: center;
        margin-top: 0px;
    }

    .profile_picture {
        width: 50%;
        border-radius: 20%;
    }

    .about, .interest {
        margin-top: 1em;
        font-size: 32px;
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
</style>