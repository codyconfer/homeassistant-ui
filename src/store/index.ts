import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { AppState } from './types';
import { display } from './display/index';
import { home } from './home/index';
import { room } from './room/index';
import { service } from './service/index';

Vue.use(Vuex);

const store: StoreOptions<AppState> = {
  state: {
    version: '1.0.0',
    name: 'homeassistant-ui',
  },
  modules: {
    display,
    home,
    room,
    service,
  },
};

export default new Vuex.Store<AppState>(store);
