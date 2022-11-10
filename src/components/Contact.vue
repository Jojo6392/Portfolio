<template>
    <div class="container">
        <div class="title">
            Me contacter !
        </div>
        <div class="text">
            Contactez moi pour avoir plus d'informations, pouvoir échanger...
        </div>
        <div class="informations">
            <div v-for="information in informations" 
                :key="information.text" 
                class="information" 
                @click="changeForm(information.isMail)"
            >
                <img :src="information.icon" alt="icon">
                <div>{{ information.text }}</div>
            </div>
        </div>

        <form 
            @submit.prevent="sendMessage"
        >
            <div class="inputs">

                <div class="label">Votre Nom et Prénom *</div>
                <div class="input">
                    <img src="../assets/contact/user.svg" alt="user icon">
                    <input type="text" name="name" id="name" 
                        placeholder="Joris Margotteau" 
                        v-model="form.user"
                        autocomplete="off"
                    >
                </div>

                <div v-if="isFormMail" class="label">Mail *</div>
                <div class="isValidMail" v-if="!isValidMail">Email Invalide</div>
                <div v-if="isFormMail" class="input">
                    <img src="../assets/contact/mail.svg" alt="mail icon">
                    <input type="mail"
                        name="mail" 
                        id="mail" 
                        placeholder="jorismargotteau@gmail.com" 
                        v-model="form.mail"
                        autocomplete="off"
                    >
                </div>

                <div v-if="isFormPhone" class="label">Numéro de téléphone *</div>
                <div v-if="isFormPhone" class="input">
                    <img src="../assets/contact/phone.svg" alt="phone icon">
                    <input type="tel" name="mail" id="mail" placeholder="0659610137" v-model="form.phone">
                </div>

                <VueRecaptcha class="recaptcha" ref="recaptcha" 
                    :sitekey="siteKey" 
                    @verify="notARobot = true" 
                    @expired="notARobot = false"
                />
                <input type="submit" value="Envoyer le message" :class="{disabled: !validForm}">
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
    </div>
</template>

<script>
import dotenv from "dotenv"
dotenv.config()
import { VueRecaptcha } from 'vue-recaptcha';
import emailjs from "@emailjs/browser"

export default {
    data() {
        return {
            informations: [
                {
                    icon: require("../assets/contact/mail.svg"),
                    text: "jorismargotteau@gmail.com",
                    isMail: true
                },

                {
                    icon: require("../assets/contact/phone.svg"),
                    text: "06 59 61 01 37",
                    isMail: false
                },
            ],
            siteKey: process.env.VUE_APP_SITE_KEY,
            notARobot: false,
            form: {
                user: "",
                mail: "",
                phone: "",
                message: "",
            },
            validForm: false,
            isFormMail: true,
            isFormPhone: false,
            isValidMail: true,
        }
    },

    watch: {
        "form.user"() {
            this.checkForm()
        },
        "form.mail"() {
            this.checkForm()
        },
        "form.phone"() {
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
    },

    methods: {

        changeForm(isMail) {
            if(isMail) {
                this.isFormMail = true
                this.isFormPhone = false
            }
            else {
                this.isFormMail = false
                this.isFormPhone = true
            }
            this.resetForm()
        },

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
            console.log("envoie du message");
            if(this.isFormMail) {
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
                    console.log('SUCCESS!', res.status, res.text);
                    this.resetForm()
                }, err => {
                    console.log('FAILED...', err);
                })
            }
        },

        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
    }
}
</script>

<style scoped lang="scss">
$main_color: rgb(113, 30, 30);
$white: rgb(229, 229, 229);
$gray: rgb(86, 86, 86);

// RESIZE RECAPTCHA
// .recaptcha {
//     transform:scale(0.77);
//     transform-origin:0 0;
// }

.container {
    width: 100vw;
    height: 100vh;
    background-color: rgb(175, 175, 175);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        color: $white;

        margin-bottom: 40px;
    }
}

.informations {
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 75px;

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
</style>