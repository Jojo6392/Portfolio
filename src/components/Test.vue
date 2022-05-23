<template>
    <div class="container">
        <img src="../assets/projects/portfolio/image1.png" class="img2" alt="">
        <img src="../assets/projects/portfolio/image1.png" class="img" alt="">
        <div class="text">TEXT</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
           
        }
    },

    components: {

    },

    watch: {
    },

    mounted() {
    },

    methods: {

    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.img {
    position: absolute;
    width: 50%;
}

.img2 {
    opacity: 0;
    width: 50%;
}
</style>