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
    setDeck (state, userType, deck) {
      // the chosen deck from the "deck upload screen" will be set here
      this.state.board[userType].deck = deck;
    },

    draw (state, userType) {
      // remove top card from the deck (index[0])...
      let deckTopCard = this.state.board[userType].deck.shift();

      // push deckTopCard to the end of the player's hand
      this.state.board[userType].hand.push(deckTopCard);
    },

    discard (state, userType, card) {
      // discard a selected card from it's location to the discard pile
    }
  },
  actions: {
    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand (commit, userType, numCards) {
      for (let x = 1; x <= numCards; x++) {
        commit('draw', userType);
      }
    }
  }
};
