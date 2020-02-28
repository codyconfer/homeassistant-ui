import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RoomState } from './types';
import { AppState } from '../types';

export const state: RoomState = {
  Id: '',
  Name: '',
  Config: undefined,
};

const namespaced: boolean = true;
export const namespace = 'room';

export const room: Module<RoomState, AppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
