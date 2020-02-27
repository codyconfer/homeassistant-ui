import Vue from 'vue';
import Vuex from 'vuex';
import displayState from './displayState';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    display: displayState,
  },
});
