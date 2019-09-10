import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import YjlUI from "@lib"
import "@common/filter"
Vue.config.productionTip = false ;

Vue.use(YjlUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
