import * as statez from '@/types/states/State';

export default {
  namespaced: true,
  state: {
    state: new statez.State({
        activePlayer: statez.Player.YOUR,
        your: {
          active: [],
          bench: [],
          discard: [],
          deck: [],
          hand: [],
          prize: []
        },
        opponent: {
          active: [],
          bench: [],
          discard: [],
          deck: [],
          hand: [],
          prize: []
        }
      }),
  },
  getters: {
    getState: (state: any) => state.state
  },
  mutations: {

    setDeck(state: any, payload: any) {
      state.state[payload.player].setDeck(payload.deck);
    },

    setCards(state: any, payload: any) {
      state.cards = payload;
    },

    setState(state: any, payload: any){
      state.state = new statez.State(payload.state);
    },

    draw(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.state[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.state[player].hand.push(deckTopCard);
    },

    discard(state: any, {player, card}: any) {
      // discard a selected card from it's location to the discard pile
    }
  },
  actions: {

    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand(context: any, player: string) {
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    }
  },
};
