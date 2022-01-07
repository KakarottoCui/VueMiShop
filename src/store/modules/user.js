/*
 * @Description: 用户登录状态模块
 *
 * @Date: 2020-02-19 17:42:11
 *
 * @LastEditTime: 2020-02-26 23:14:32
 */
export default {
  state: {
    user: "", // 登录的用户
    showLogin: false // 用于控制是否显示登录组件
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getShowLogin (state) {
      return state.showLogin
    }
  },
  mutations: {
    setUser (state, data) {
      state.user = data;
    },
    setShowLogin (state, data) {
      state.showLogin = data;
    }
  },
  actions: {
    setUser ({ commit }, data) {
      commit('setUser', data);
    },
    setShowLogin ({ commit }, data) {
      commit('setShowLogin', data);
    }
  }
}
