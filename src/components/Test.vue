<template>
    <div class="container">
        <div v-for="item in items" :key="item.id">
            <div class="test" :class="{ active: item.isActive, hidden: !item.isActive }">{{ item.id }}</div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
           index: -1,
           items: [
               {
                   id: 1,
                   isActive: true
               },
               {
                   id: 2,
                   isActive: false
               },
               {
                   id: 3,
                   isActive: false
               },
               {
                   id: 4,
                   isActive: false
               },
               {
                   id: 5,
                   isActive: false
               },
           ],
           
        }
    },

    components: {

    },

    watch: {
        index (newVal) {
            
            if(newVal == this.items.length - 1) {
                setTimeout(() => {
                    this.items[this.index].isActive = false
                    this.index = 0
                    this.items[this.index].isActive = true
                }, 5000)
            }
            else {
                setTimeout(() => {
                    this.items[this.index].isActive = false
                    this.index = newVal + 1
                    this.items[this.index].isActive = true
                }, 5000)
            }
        }
    },

    mounted() {
        this.index += 1
    },

    methods: {

    }
}
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.test {
    text-align: center;
    font-size: 48px;
    font-family: 'Acme';
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.active {
    animation-name: displayAnimation;
    animation-duration: 1s;
    animation-direction: normal;
}

.hidden {
    display: none;
}

@keyframes displayAnimation {
    from {
        display: none;
        opacity: 0;
    }

    to {
        display: block;
        opacity: 1;
    }
}
</style>