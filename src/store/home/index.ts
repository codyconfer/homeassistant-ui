import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { HomeState } from './types';
import { AppState } from '../types';

export const state: HomeState = {};

const namespaced: boolean = true;
export const namespace = 'home';

export const home: Module<HomeState, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
