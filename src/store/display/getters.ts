import { GetterTree } from 'vuex';
import { AppState } from '../types';
import { DisplayState } from './types';

export const getters: GetterTree<DisplayState, AppState> = {
  showMenu(state): boolean {
    const { menu } = state;
    return menu.showMenu;
  },
};
