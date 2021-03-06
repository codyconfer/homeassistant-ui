import { MutationTree } from 'vuex';
import { DisplayState } from './types';

export const mutations: MutationTree<DisplayState> = {
  toggleMenu(state) {
    state.menu.showMenu = !state.menu.showMenu;
  },
  toggleSubMenu(state) {
    state.subMenu.showSubMenu = !state.subMenu.showSubMenu;
  },
};
