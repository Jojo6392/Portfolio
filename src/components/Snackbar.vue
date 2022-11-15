<template>
    <div class="snackbar" :style="{ backgroundColor: backgroundColor} ">
        <img :src="icon" alt="">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ""
        },

        backgroundColor: {
            type: String,
            default: "white"
        },

        text: {
            type: String,
            default: "Snackbar text"
        },
    },

}
</script>

<style scoped lang='scss'>
$white: rgb(229, 229, 229);

.snackbar {
    width: auto;
    height: 50px;
    padding-inline: 20px;

    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    position: absolute;
    bottom: 2.5%;
    z-index: 5;

    // border: 1px solid $white;
    border-radius: 10px;

    color: $white;
    font-family: 'RobotoCondensed Regular';
    font-size: 16px;

    img {
        width: 25px;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    }
}

@media (max-width: 500px) {
    .snackbar {
        height: 40px;
        padding-inline: 10px;
        gap: 5px;
        font-size: 12px;
        
        img {
            width: 15px;
        }
    }
}
</style>