export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {
    getIsUserLoggedIn (state) {
      return state.isUserLoggedIn;
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser (state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token);
    },
    setUser ({ commit }, user) {
      commit('setUser', user);
    }
  }
};
