import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import M from 'materialize-css'
import "materialize-css/dist/css/materialize.min.css"
import store from './store';

Vue.prototype.$http = Axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  timeout: 3000,
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "0357283b83msh313e6bd9ed94363p11a2f6jsn5d3e67945c84"
   }
});

Vue.prototype.$audio = new Audio(null);

Vue.prototype.M = M;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
