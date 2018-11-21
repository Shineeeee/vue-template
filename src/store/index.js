import Vue from 'vue';
import Vuex from 'vuex';
import defaultModule from './mods/default';

Vue.use(Vuex);

export default new Vuex.Store({
  defaultModule
});
