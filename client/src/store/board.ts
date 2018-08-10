import * as statez from '@/types/states/State';
import StateApi from '../services/State';
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

    clearHand (state:any, player:any) {
      state.state[player].hand = [];
    },

    clearPrize (state:any, player:any) {
      state.state[player].prize = [];
    },

    setDeck(state: any, payload: any) {
      state.state[payload.player].setDeck(payload.deck);
    },

    setCards(state: any, payload: any) {
      state.cards = payload;
    },

    setState(state: any, payload: any){
      state.state = new statez.State(payload.state);
    },

    resetState (state: any, payload: any) {
      state.state = new statez.State({
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
      });
    },

    draw(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.state[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.state[player].hand.push(deckTopCard);
    },

    drawPrize(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.state[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.state[player].prize.push(deckTopCard);
    },

    discard(state: any, {player, card}: any) {
      // discard a selected card from it's location to the discard pile
    }
  },
  actions: {

    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand(context: any, player: string) {
      context.commit('clearHand', player);
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    },
    setPrize(context: any, player: string) {
      context.commit('clearPrize', player);
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 6; x++) {
        context.commit('drawPrize', player);
      }
    },
    async getLatestState (context: any) {
        const state = await StateApi.get();
        if (state.hasOwnProperty('state')) {
            context.commit('setState',{state: state.state.content});
        } else {
          throw 'You do not have a saved game. Please start a new one';
        }
      },
      async saveState (context:any, state: any) {
        try {
          StateApi.save({content:context.state.state});
        } catch (error) {
          console.log(error.response.data.message);
        }
      },
  },
};
