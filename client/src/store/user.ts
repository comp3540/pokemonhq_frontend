export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  getters: {
    getIsUserLoggedIn(state: any) {
      return state.isUserLoggedIn;
    },
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state: any, user: any) {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }: any, token: string) {
      commit('setToken', token);
    },
    setUser({ commit }: any, user: string) {
      commit('setUser', user);
    },
  },
};
