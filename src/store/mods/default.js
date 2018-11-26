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
   * @param {*} commit Commit
   * @param {String} value String value
   */
  async testAction({ commit }, value) {
    commit(mtypes.ACTION_NAME, value);
  }
};

const mutations = {
  /**
   * テストミューテーション
   * @param {Object} state State
   * @param {Object} value Params
   */
  [mtypes.ACTION_NAME](state, value) {
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
