<template>
    <div class="container">
        <vue-flux
            :options="options"
            :images="images"
            :transitions="transitions"
            style="width: 1024px; height: 576px;"
            >
            <!-- <template v-slot:preloader>
                <flux-preloader />
            </template> -->

            <!-- <template v-slot:controls>
                <flux-controls />
            </template> -->
        </vue-flux> 
    </div>
</template>

<script>
import { VueFlux, } from "vue-flux"

export default {
    data() {
        return {
            options: {
                allowFullscreen: false,
                allowToSkipTransition: true,
                autohideTime: 2500,
                autoplay: true,
                bindKeys: false,
                delay: 3000,
                enableGestures: false,
                infinite: true,
                lazyLoad: true,
                lazyLoadAfter: 3,
            },
            images: [ require('../assets/projects/portfolio/image1.png'), require('../assets/projects/portfolio/image2.png'), require('../assets/projects/portfolio/image1.png')],
            transitions: ['kenburn'],
        }
    },

    components: {
        VueFlux,
        
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>