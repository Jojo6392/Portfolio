<template>
    <div class="container">
        <LottieAnimation
            class="gif"
            :animationData="require('@/assets/global/lottie_404_error_dino.json')"
            :loop="true"
        />
        <div class="text">
            Je crois que vous vous êtes perdu ! Vous pouvez naviguer sur le site avec le menu situé en haut de votre écran ou 
            <span class="redirect" @click="goHome()">cliquez ici</span> pour retourner à la page d'accueil.
        </div>
    </div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue';

export default {
    components: {
        LottieAnimation,
    },
    methods: {
        goHome() {
            this.$router.push({name: "Home"})
        }
    },
}
</script>

<style scoped lang="scss">
$red: rgb(165, 50, 50);
$white: rgb(229, 229, 229);

.container {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
}

.gif, .text {
    opacity: 0;
}

.gif {
    transform: scale(1.35);
    animation: fade 500ms ease-in 500ms forwards;
}

.text {
    width: 75%;
    z-index: 2;

    font-family: 'RobotoCondensed Regular';
    font-size: 18px;
    text-align: center;
    color: $white;

    animation: fadeInBottom 500ms ease-in 1s forwards;

    .redirect {
        color: $red;
        border-bottom: 1px solid $red;
        font-size: 20px;
    }
}

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translate(0%);
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media (max-width: 1540px) {
    .container {
        height: 90vh;
        margin-top: 50px;
    }
    .gif {
        transform: scale(1.15);
    }
}

@media (max-width: 1200px) {
    .container {
        height: 80vh;
        margin-top: 75px;
    }
}

@media (max-width: 500px) {
    .container {
        margin-top: 100px;
        justify-content: flex-start;
        gap: 0px;
    }
    .gif {
        transform: scale(0.9);
    }
}
</style>