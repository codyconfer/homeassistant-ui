import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { DisplayState } from './types';
import { AppState } from '../types';

export const state: DisplayState = {
  menu: { showMenu: false, menuItems: [] },
};

const namespaced: boolean = true;
export const namespace = 'display';

export const display: Module<DisplayState, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
