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
    getBoard: state => state.board
  },
  mutations: {
    setDeck (state, player, deck) {
      // the chosen deck from the "deck upload screen" will be set here
      this.state.board[player].deck = deck;
    },

    draw (state, player) {
      // remove top card from the deck (index[0])...
      let deckTopCard = this.state.board[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      this.state.board[player].hand.push(deckTopCard);
    },

    discard (state, player, card) {
      // discard a selected card from it's location to the discard pile
    }
  },
  actions: {
    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand (commit, player) {
      for (let x = 1; x <= 7; x++) {
        commit('draw', player);
      }
    }
  }
};
