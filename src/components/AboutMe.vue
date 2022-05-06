<template>
    <div class="wrapper">
        <div class="title">About me</div>
        <div class="img">
            <img src="../assets/IMG_0006.jpg" alt="profil picture" />
        </div>

        <div class="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            explicabo dolore natus exercitationem dolor non minus rerum nobis earum
            accusantium inventore a temporibus, facere amet eveniet laboriosam cum
            perferendis officiis.
        </div>
        <div class="interest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto
            delectus corrupti atque est quis impedit ratione temporibus ut aliquam
            voluptatibus aperiam possimus odio at deserunt, excepturi earum eos
            modi?
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-width: 900px) {
    .wrapper {
        border: 1px solid red;
        display: grid;
        grid-template-areas: 
            "title img"
            "about interest";
        grid-gap: 15px;
        margin: 0 5vw 0 5vw;
    }

    .title {
        grid-area: title;
        height: 100px;
        font-size: 96px;
        border: 1px solid blue;
        width: 50vw;
    }

    .img {
        grid-area: img;
        height: 400px;
        display: flex;
        justify-content: center;
    }

    img {
        border-radius: 20%;
    }

    .about {
        grid-area: about;
        border: 1px solid yellow;
        margin-top: -300px;
        color: white;
        font-size: 32px;
        width: 50vw;
    }

    .interest {
        text-align: center;
        font-size: 32px;
        color: white;
    }
}

@media (max-width: 900px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        margin: 5em 1em 0 1em;
    }

    .title {
        font-size: 64px;
        text-align: center;
        height: 100px;
    }

    .img {
        display: flex;
        justify-content: center;
    }

    img {
        width: 50%;
        border-radius: 20%;
    }

    .about, .interest {
        margin-top: 1em;
        font-size: 32px;
        text-align: center;
    }
}
</style>