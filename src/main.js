import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(vueAxios, axios)

Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
