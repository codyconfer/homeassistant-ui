import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserScenes } from './types';
import { AppState } from '../types';

export const state: UserScenes = {
  id: 0,
  username: '',
  scenes: [],
};

const namespaced: boolean = true;
export const namespace = 'light';

export const scene: Module<UserScenes, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
