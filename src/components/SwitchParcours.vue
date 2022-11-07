<template>
    <div class="button r" id="button-2">
        <input type="checkbox" class="checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
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
$white: rgb(229, 229, 229);

.knobs, .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.button {
    position: relative;
    top: 0;
    width: 74px;
    height: 36px;
    overflow: hidden;
}

.button.r,
.button.r .layer {
    border-radius: 100px;
}

.checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 3;
    cursor: none;
}

.knobs {
    z-index: 2;
}

.layer {
    width: 100%;
    background-color: $white;
    transition: 0.3s ease all;
    z-index: 1;
}

#button-2 .knobs:before,
#button-2 .knobs:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: rgb(0, 112, 143);
    border-radius: 50%;
    transition: 0.3s ease all;
}

#button-2 .knobs:after {
    right: -28px;
    left: auto;
    background-color: #912720;
}

#button-2 .checkbox:checked + .knobs:before {
    left: -28px;
}

#button-2 .checkbox:checked + .knobs:after {
    right: 4px;
}

#button-2 .checkbox:checked ~ .layer {
    background-color: $white;
}
</style>