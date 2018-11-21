import * as mtypes from '../mutation-types';

const state = {
  key: 'value'
};

const getters = {
  getString: state => state.key
};

const actions = {
  /**
   * テストアクション
   * @param {*} commit
   * @param {String} value string param
   */
  async testAction ({commit}, value) {
    commit(mtypes.ACTION_NAME, value);
  }
};

const mutations = {
  [mtypes.ACTION_NAME] (state, value) {
    // TODO: Do something
    console.log(state);
    console.log(value);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
