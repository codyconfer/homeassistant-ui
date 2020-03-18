import { GetterTree } from 'vuex';
import { AppState } from '../types';
import { DisplayState } from './types';

export const getters: GetterTree<DisplayState, AppState> = {
  showMenu(state): boolean {
    const { menu } = state;
    return menu.showMenu;
  },
  showSubMenu(state): boolean {
    const { subMenu } = state;
    return subMenu.showSubMenu;
  },
};
