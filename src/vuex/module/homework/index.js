/**
 * @Author zlx
 * @Date 2018/5/7 下午6:33
 */
export default {
  namespaced: true,
  persistent: [],
  state: {

  },
  mutations: {
    updateState(state, {key, val}) {
      state[key] = val;
    }
  },
  actions: {
    GET_LIST({commit}, params) {

    }
  }
}
