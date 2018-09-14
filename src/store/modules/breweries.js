import fetchBreweries from '@/services/breweriesService';
import { FETCH_BREWERIES } from '../actions';
import { SET_BREWERIES } from '../mutations';

export const state = {
  data: {},
};

export const actions = {
  [FETCH_BREWERIES]({ commit }, action) {
    return fetchBreweries(action.payload)
      .then(({ data }) => {
        commit(SET_BREWERIES, data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_BREWERIES](currentState, breweries) {
    currentState.data = {
      ...currentState.data,
      ...breweries,
    };
    currentState.lastFetch = new Date().getTime();
  },
};

export default {
  state,
  actions,
  mutations,
};
