import Vue from 'vue';
import Vuex from 'vuex';
import album from './modules/album';
import cancion from './modules/cancion';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      album,
      cancion,
  },
});