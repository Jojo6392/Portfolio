<template>
    <div class="test">
        <div class="fullScreen">
            <h1>PREND TOUTE LA PLACE</h1>
        </div>
        <div class="block" v-scrollanimation-mobile>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum aliquid autem cumque officiis doloribus labore, dolores tenetur placeat sint inventore repudiandae expedita quaerat minus tempore aut, accusamus quos suscipit.
        </div>
        <div class="block" v-scrollanimation-mobile>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum aliquid autem cumque officiis doloribus labore, dolores tenetur placeat sint inventore repudiandae expedita quaerat minus tempore aut, accusamus quos suscipit.
        </div>
        <div class="block" v-scrollanimation-mobile>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum aliquid autem cumque officiis doloribus labore, dolores tenetur placeat sint inventore repudiandae expedita quaerat minus tempore aut, accusamus quos suscipit.
        </div>
        <div class="block" v-scrollanimation-mobile>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum aliquid autem cumque officiis doloribus labore, dolores tenetur placeat sint inventore repudiandae expedita quaerat minus tempore aut, accusamus quos suscipit.
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    mounted() {
        
    },

    methods: {

    },
}
</script>

<style scoped lang="scss">

.test {
    font-family: "Poppins Light";
    margin: 0 auto;
    margin-top: 10vh;
    text-align: center;
}

.fullScreen {
    width: 100vw;
    height: 100vh;
}

.block {
    background: blue;
    border: 2px solid red;
    margin: 1em;
}

.beforeEnter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateX(0px);
}
</style>