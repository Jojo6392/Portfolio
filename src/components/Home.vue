<template>
    <div id="home">
        <div class="menu">
            <div class="menu__item">
                <span style="color: rgb(128, 91, 104);">About me</span>
                <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)">
                    <img class="menu__item__img" src="../assets/dilophosaurus.png" alt="About me">
                    <div class="menu__item__content__text" style="background-color: rgba(128, 91, 104, 0.5);">
                        Here, you will be able to see more details about me
                    </div>
                </div>
                
            </div>
            <div class="menu__item">
                <span style="color: rgb(4, 141, 116);">Services</span>
                <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)">
                    <img class="menu__item__img" src="../assets/spinosaurus.png" alt="Services">
                    <div class="menu__item__content__text" style="background-color: rgba(4, 141, 116, 0.5);">
                        Check out what can I do for you 
                    </div>
                </div>
            </div>
            <div class="menu__item">
                <span style="color: rgb(109, 133, 54);">Projects</span>
                <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)">
                    <img class="menu__item__img" src="../assets/iguanodon.png" alt="Projects">
                    <div class="menu__item__content__text" style="background-color: rgba(109, 133, 54, 0.5);">
                        List of projects that I have currently completed 
                    </div>
                </div>
            </div>
            <div class="menu__item">
                <span style="color: rgb(0, 112, 143);">Professional Experiences | Formations</span>
                <div class="menu__item__content" @mouseenter="onHover($event)" @mouseleave="onHover($event)">
                    <img class="menu__item__img" src="../assets/therizinosaurus.png" alt="Professional Experiences">
                    <div class="menu__item__content__text" style="background-color: rgba(0, 112, 143, 0.5);">
                        Look at all my degrees and experiences 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',

    data() {
        return {
            page: 1,
        }

    },

    methods: {
        onHover: function(e) {
            const contentToDisplay = e.target.children[1]
            contentToDisplay.classList.toggle("onHover")
            
        },
    },
}
</script>

<style lang="scss" scoped>
$about_me: rgb(128, 91, 104);
$services: rgb(4, 141, 116);
$projects: rgb(109, 133, 54);
$experiences: rgb(0, 112, 143);
$background_image: rgb(27, 26, 35);

#home {
    width: 100vw;
    display: flex;
    justify-content: center;

}

.menu {
    margin: 10px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 64px;
        font-family: 'Jurassic Park';

        &__content {
            margin: 0 40px 0 40px;
            position: relative;

            &:hover {
                transition: all 500ms ease-in-out;
                transform: scale(1.15);
            }

            &:not(:hover) {
                transition: all 500ms ease-in-out;
            }

            &__text {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 97%;
                border-radius: 20px;
                font-size: 90px;
                color: $background_image;
                cursor: pointer;
            }
        }

        &__img {
            border-radius: 20px;
            width: 750px;
            cursor: pointer;
        }
    }
}

.onHover {
    display: flex;
    align-items: center;
    justify-content: center;
}

span {
    margin: 40px;
}

@media (min-width: 900px) and (max-width: 1500px) {
    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        width: 100%;
        &__item {

            &__content {
                margin: 0 20px 0 20px;

                &__text {
                    height: 95%;
                    font-size: 64px;
                }
            }
            &__img {
                width: 500px;
            }
        }
    }

    span {
        margin: 20px;
    }
}

@media (max-width: 900px) {
    .menu {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
        width: 75vw;

        &__item {
            &__content {
                &__text {
                    height: 92%;
                    font-size: 42px;
                }
            }

            &__img {
                width: 100%;
            }
        }
    }

    span {
        margin: 20px;
    }
}
</style>
