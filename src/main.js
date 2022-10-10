import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import store from '@/store/index.js'
import '@/config/rem.js'
import '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
