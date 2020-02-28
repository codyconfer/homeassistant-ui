import { ActionTree } from 'vuex';
import axios from 'axios';
import { AppState } from '../types';
import { DisplayState, Menu } from './types';

export const actions: ActionTree<DisplayState, AppState> = {
  toggleMenu({ commit }): any {
    commit('toggleMenu');
  },
};
