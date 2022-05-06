import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./assets/main.scss"

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
