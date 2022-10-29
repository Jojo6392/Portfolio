import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./assets/main.scss"

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
