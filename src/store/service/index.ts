import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ServiceState } from './types';
import { AppState } from '../types';

export const state: ServiceState = {
  hasRunning: false,
};

const namespaced: boolean = true;
export const namespace = 'service';

export const service: Module<ServiceState, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
