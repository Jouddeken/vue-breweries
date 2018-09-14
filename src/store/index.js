import Vue from 'vue';
import Vuex from 'vuex';
import breweries from './modules/breweries';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // React: reducers
    breweries,
  },
  getters: {
    // React: selectors
    breweries: state => state.breweries,
  },
});

export default store;
