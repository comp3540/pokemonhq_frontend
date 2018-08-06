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
    setDeck(state: any, payload: any) {
      state.state[payload.player].setDeck(payload.deck);
    },

    setCards(state: any, payload: any) {
      state.cards = payload;
    },

    setState(state: any, payload: any){
      console.log(payload.state.content);
      state.state = new statez.State(payload.state.content);
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
      context.commit('clearHand', player);
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    },

    async getStateRemote (context: any) {
        try {
          const state = await StateApi.get();
          context.commit('setState',{state: state.state});
        } catch (error) {
          console.log(error);
        }
      },
      async saveState (context:any, state: any) {
        try {
          console.log(context.state.state);
          StateApi.save({content:context.state.state});
        } catch (error) {
          console.log(error.response.data.message);
        }
      },
  },
};
