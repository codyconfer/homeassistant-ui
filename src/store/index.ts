import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { AppState } from './types';
import { display } from './display/index';
import { light } from './lights/index';
import { scene } from './scenes/index';

Vue.use(Vuex);

const store: StoreOptions<AppState> = {
  state: {
    version: '1.0.0',
    name: 'homeassistant-ui',
  },
  modules: {
    display,
    light,
    scene,
  },
};

export default new Vuex.Store<AppState>(store);
