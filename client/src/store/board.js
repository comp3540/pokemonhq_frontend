export default {
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
    getBoard: state => state.board
  },
  mutations: {
    setDeck (state, payload) {
      payload.deck.forEach((card) => {
        state.board[payload.player].deck.push(card);
      });
    },

    draw (state, player) {
      // remove top card from the deck (index[0])...
      let deckTopCard = state.board[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.board[player].hand.push(deckTopCard);
    },

    discard (state, player, card) {
      // discard a selected card from it's location to the discard pile
    }
  },
  actions: {
    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand (context, player) {
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    }
  }
};
