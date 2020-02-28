import { GetterTree } from 'vuex';
import { AppState } from '../types';
import { DisplayState } from './types';

export const getters: GetterTree<DisplayState, AppState> = {
  showMenu(state): boolean {
    const { Menu } = state;
    return Menu.showMenu;
  },
};
