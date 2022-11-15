<template>
    <div class="container_contact">
        <div class="title">
            Me contacter !
        </div>
        <div class="text">
            Vous avez la possibilité de me contacter par mail et de cliquer pour copier les différentes informations ci-dessous.
        </div>
        <div class="informations">
            <div v-for="information in informations" 
                :key="information.text" 
                class="information"
                @click="copyText(information.text)"
                @mouseenter="information.isHover = true"
                @mouseleave="information.isHover = false"
                :class="{ onHover: information.isHover, offHover: !information.isHover }"
            >
                <img class="icon" :src="information.icon" alt="icon">
                <div>{{ information.text }}</div>
            </div>
        </div>

        <form @submit.prevent="sendMessage" id="form">
            <div class="inputs">

                <div class="label">Votre Nom et Prénom *</div>
                <div class="input">
                    <img class="icon" src="../assets/contact/user.svg" alt="user icon">
                    <input type="text" name="name" id="name" 
                        placeholder="Joris Margotteau" 
                        v-model="form.user"
                        autocomplete="off"
                    >
                </div>

                <div class="label">Mail *</div>
                <div class="isValidMail" v-if="!isValidMail">Email Invalide</div>
                <div class="input">
                    <img class="icon" src="../assets/contact/mail.svg" alt="mail icon">
                    <input type="mail"
                        name="mail" 
                        id="mail" 
                        placeholder="jorismargotteau@gmail.com" 
                        v-model="form.mail"
                        autocomplete="off"
                    >
                </div>

                <VueRecaptcha class="recaptcha" ref="recaptcha" 
                    :sitekey="siteKey" 
                    @verify="notARobot = true" 
                    @expired="notARobot = false"
                />
                <input type="submit" value="Envoyer le message" :class="[validForm === true ? 'activated' : 'disabled']">
            </div>
            <textarea 
                v-model="form.message"
                name="message" 
                id="message"
                cols="30"
                rows="10"
                placeholder="Votre message ..."
            ></textarea>
        </form>
        <!-- Snackbar pour la copie -->
        <Snackbar v-if="copied" :icon="require('../assets/icons/copy.svg')" text="Texte copié avec succès." backgroundColor="#1391bf" />
        <!-- Snackbar pour le msg d'envoi du mail -->
        <Snackbar v-if="informationSendMail.isSend" 
            :icon="informationSendMail.icon" 
            :text="informationSendMail.text" 
            :backgroundColor="informationSendMail.backgroundColor" 
        />
    </div>
</template>

<script>
import dotenv from "dotenv"
dotenv.config()
import emailjs from "@emailjs/browser"

import { VueRecaptcha } from 'vue-recaptcha';
import Snackbar from "../components/Snackbar.vue"

export default {
    data() {
        return {
            informations: [
                {
                    icon: require("../assets/contact/mail.svg"),
                    text: "jorismargotteau@gmail.com",
                    isHover: false,
                },

                {
                    icon: require("../assets/contact/phone.svg"),
                    text: "06 59 61 01 37",
                    isHover: false,
                },
            ],
            siteKey: process.env.VUE_APP_SITE_KEY,
            notARobot: false,
            form: {
                user: "",
                mail: "",
                message: "",
            },
            validForm: false,
            isValidMail: true,
            copied: false,
            informationSendMail: {
                isSend: false,
                text: "",
                icon: "",
                backgroundColor: "",
            },
        }
    },

    watch: {
        "form.user"() {
            this.checkForm()
        },
        "form.mail"() {
            this.checkForm()
        },
        "form.message"() {
            this.checkForm()
        },
        notARobot() {
            this.checkForm()
        },

        isValidMail(newVal) {
            if(!newVal) {
                this.form.mail = ""
            }
        },
    },

    components: {
        VueRecaptcha,
        Snackbar
    },

    methods: {

        checkForm() {
            this.validForm = false
            if(this.form.user == "") return

            if(this.form.mail == "" && this.isFormMail) return

            if(this.form.phone == "" && this.isFormPhone) return

            if(this.form.message == "") return
            
            if (!this.notARobot) return

            this.validForm = true
        },

        resetForm() {
            // Reset les valeurs du formulaire
            Object.keys(this.form).forEach(key => {
                this.form[key] = ""
            })
            this.$refs.recaptcha.reset()
        },

        sendMessage() {
            this.isValidMail = this.validateEmail(this.form.mail)
            if(!this.isValidMail) return

            emailjs.init(process.env.VUE_APP_EMAILJS_INIT)

            const data = {
                from_name: this.form.user,
                from_mail: this.form.mail,
                message: this.form.message
            }
            const sendMail = emailjs.send(
                process.env.VUE_APP_EMAILJS_SERVICE,
                process.env.VUE_APP_EMAILJS_TEMPLATE,
                data
            )

            sendMail.then(res => {
                if(res.status === 200) {
                    this.informationSendMail.isSend = true
                    this.informationSendMail.text = "Mail envoyé avec succès."
                    this.informationSendMail.icon = require("../assets/icons/check.svg")
                    this.informationSendMail.backgroundColor = "#4BB543"

                    setTimeout(() => {
                        this.informationSendMail.isSend = false
                    }, 3000);
                }
                else {
                    this.informationSendMail.isSend = true
                    this.informationSendMail.text = "Erreur, le mail n'a pas été envoyé."
                    this.informationSendMail.icon = require("../assets/icons/alert.svg")
                    this.informationSendMail.backgroundColor = "#721c24"

                    setTimeout(() => {
                        this.informationSendMail.isSend = false
                    }, 3000);
                }
                this.resetForm()
            }, err => {
                this.informationSendMail.isSend = true
                    this.informationSendMail.text = "Erreur, le mail n'a pas été envoyé. Erreur : " + err 
                    this.informationSendMail.icon = require("../assets/icons/alert.svg")
                    this.informationSendMail.backgroundColor = "#721c24"

                    setTimeout(() => {
                        this.informationSendMail.isSend = false
                    }, 3000);
            })
        },

        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },

        copyText(text) {
            this.copied = true
            navigator.clipboard.writeText(text);
            setTimeout(() => {
                this.copied = false
            }, 3000);
        },
    }
}
</script>

<style scoped lang="scss">
$main_color: rgb(113, 30, 30);
$white: rgb(229, 229, 229);
$gray: rgb(86, 86, 86);

.icon {
    filter: invert(10%) sepia(77%) saturate(2485%) hue-rotate(346deg) brightness(103%) contrast(88%);
}

.container_contact {
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    background-color: rgb(175, 175, 175);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title, .text {
        opacity: 0;
        animation: fadeInTop 500ms ease-in;
        animation-fill-mode: forwards;
        animation-delay: 750ms;
    }

    .title {
        font-size: 64px;
        font-family: 'KG Compassion';
        font-weight: 600;
        text-align: center;
        color: $main_color;

        margin-bottom: 25px;
        margin-top: 50px;
    }

    .text {
        font-size: 24px;
        font-family: 'RobotoCondensed Light';
        text-align: center;
        color: $white;

        margin-bottom: 40px;
    }
}

.informations {
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 75px;

    opacity: 0;
    animation-name: scaleZ;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 500ms;

    .information {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 175px;

        color: $main_color;
        font-family: 'Poppins SemiBold';
        font-size: 14px;
        background-color: $white;
        border: 2px solid $main_color;
        box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);

        padding: 20px 40px;

        @media (hover: hover) {
            &.onHover {
                animation: buttonAnimationIn 250ms forwards;
            }

            &.offHover {
                animation: buttonAnimationOut 250ms forwards;
            }
        }

        img {
            margin-bottom: 15px;
            width: 35px;
        }
    }
}

form {
    width: 75vw;
    height: 40vh;
    padding: 50px;

    display: flex;

    background-color: $white;
    box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 0.1);

    opacity: 0;
    animation-name: fadeInBottom;
    animation-duration: 750ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: 1s;

    .inputs {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .label {
            font-family: 'RobotoCondensed Regular';
            color: $gray;
            margin-bottom: 10px;
        }

        .isValidMail {
            font-family: 'RobotoCondensed Regular';
            font-size: 13px;
            color: red;
            margin-bottom: 10px;
        }

        .input {
            display: flex;
            gap: 10px;

            border-radius: 10px;
            border: 2px solid $main_color;
            background-color: white;

            width: 75%;
            padding: 15px 10px;
            margin-bottom: 30px;

            img {
                width: 25px;
            }

            input {
                all: unset;
                width: 100%;

                font-family: 'RobotoCondensed Light';
                color: $gray;
                border-bottom: 1px solid rgba($color: $gray, $alpha: .50);
            }
        }

        .recaptcha {
            margin-bottom: 20px;
        }

        input[type="submit"] {
            padding: 20px;

            border-radius: 10px;
            border: none;
            background-color: $main_color;
            box-shadow: 5px 2px 0px 2px rgba(255, 255, 255, 0.5);

            font-family: 'KG Compassion';
            font-size: 18px;
            color:$white;

            &.activated {

                @media (hover: hover) {
                     &:hover {
                        animation-name: animationSubmitBtn;
                        animation-duration: 250ms;
                        animation-fill-mode: forwards;
                        animation-timing-function: ease-in;
                        cursor: none;
                    }

                    &:not(:hover) {
                        animation-name: animationSubmitBtn2;
                        animation-duration: 250ms;
                        animation-fill-mode: forwards;
                        animation-timing-function: ease-out;
                    }
                }
            }

            &.disabled {
                cursor: none;
                background-color: rgba(239, 239, 239);
                color: rgba(17, 17, 17, 0.3);
                border: 1px solid;
                border-color: rgba(118, 118, 118, 0.3);
                box-shadow: none;
            }
        }
    }

    textarea {
        all: unset;
        width: 50%;
        padding: 20px;

        font-family: 'RobotoCondensed Light';
        color: $gray;
        border-radius: 10px;
        border: 2px solid $main_color;
        background-color: white;
    }
}

// GRANDE RESOLUTION
@media (max-width: 1540px) {
    .icon {
        width: 25px !important;
    }

    .container_contact {
        .title {
            font-size: 56px;
            margin-top: 40px;
        }

        .text {
            font-size: 18px;
            margin-bottom: 20px;
        }
    }
    .informations {
        margin-bottom: 40px;

        .information {
            width: 150px;
            font-size: 12px;
        }
    }

    form {
        padding: 40px;
        padding-bottom: 50px;
        .inputs {
            .input {
                font-size: 14px;
                margin-bottom: 20px;
            }

            .label {
                font-size: 14px;
            }

            .recaptcha {
                transform:scale(0.8);
                transform-origin:0 0;
                margin: 0;
            }
        }

        textarea#message {
            width: calc(50% - 44px);
        }
    }
}

// MOYENNE ET GRANDE RESOLUTION AVEC PETITE LONGUEUR
@media (max-width: 1540px) and (min-width: 1000px) and (max-height: 800px) {
    .container_contact {
        .title {
            margin-top: 30px;
        }

        .informations {
            margin-bottom: 30px;
        }

        form {
            padding-top: 30px;
            padding-bottom: 75px;
        }
    }
}

@media (max-width: 500px) {
    .container_contact {
        height: auto;
        overflow-y: initial;
        padding-top: 25px;
        .title {
            font-size: 44px;
            margin-bottom: 0;
        }

        .text {
            font-size: 14px;
            margin: 20px 30px;
        }

        .informations {
            gap: 20px;
            justify-content: center;
            width: 100%;

            .information {
                width: 35%;
                padding: 10px;
                font-size: 8px;

                img {
                    width: 20px !important;
                    margin-bottom: 5px;
                }
            }
        }

        form {
            flex-direction: column-reverse;
            align-items: center;
            padding: 20px 0px;

            height: auto;
            width: 90%;

            .inputs {
                width: 100%;
                align-items: center;

                .input {
                    font-size: 12px;
                }

                .label {
                    align-self: flex-start;
                    margin-left: 20px;

                    font-size: 12px;
                }

                .recaptcha {
                    transform-origin: center;
                    transform: scale(0.6);
                }

                & :nth-of-type(4) {
                    margin-bottom: 0;
                }
            }

            textarea#message {
                width: -webkit-fill-available;
                height: 100px;
                margin: 20px;
                margin-top: 0;
                padding: 10px;

                font-size: 12px;
            }

            input[type="submit"] {
                font-size: 12px;
                padding: 10px;
            }
        }
    }
}

@keyframes buttonAnimationIn {
    from {
        transform: translate(0px, 0px);
        box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);
    }
    to {
        transform: translate(10px, 10px);
        box-shadow: none;
    }
}

@keyframes buttonAnimationOut {
    from {
        transform: translate(10px, 10px);
        box-shadow: none;
    }
    to {
        transform: translate(0px, 0px);
        box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);
    }
}

@keyframes fadeInTop {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes fadeInBottom {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
}

@keyframes animationSubmitBtn {
    from {
        transform: translate(0px, 0px);
        box-shadow: 5px 2px 0px 2px rgba(255, 255, 255, 0.5);
    }
    to {
        transform: translate(5px, 2px);
        box-shadow: none;
    }
}

@keyframes animationSubmitBtn2 {
    from {
        transform: translate(5px, 2px);
        box-shadow: none;
    }
    to {
        transform: translate(0px, 0px);
        box-shadow: 5px 2px 0px 2px rgba(255, 255, 255, 0.5);
    }
}

@keyframes scaleZ {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>