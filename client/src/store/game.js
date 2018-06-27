export default {
  strict: true,
  namespaced: true,
  state: {
    board: {
      your: {
        bench: [],
        active: [],
        deck: [],
        discard: [],
        prize: [],
        hand: []
      },
      opponent: {
        bench: [],
        active: [],
        deck: [],
        discard: [],
        prize: [],
        hand: []
      }
    }
  },
  getters: {
    getBoard (state) {
      return state.board;
    }
  },
  mutations: {

  },
  actions: {
  }
};
