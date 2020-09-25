import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'




Vue.config.productionTip = false

// Import de Bootstrap pour Vue 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install Axios
Vue.use(VueAxios, axios)


new Vue({
  store: store,
  VueAxios, axios,
  router,
  render: h => h(App),
}).$mount('#app')
