import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { LightState } from './types';
import { AppState } from '../types';

export const state: LightState = {};

const namespaced: boolean = true;
export const namespace = 'light';

export const light: Module<LightState, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
