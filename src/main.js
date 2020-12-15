import Vue from 'vue'
import App from './App.vue'
import M from 'materialize-css'
import "materialize-css/dist/css/materialize.min.css"
import store from './store';
import api from './api'

Vue.prototype.$http = api;

Vue.prototype.$audio = new Audio(null);

Vue.prototype.M = M;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
