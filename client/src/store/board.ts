import * as statez from '@/types/states/State';
import Card from '@/types/cards/Card';
import CardService from './../services/Card';
import AbilityService from './../services/Ability';

export default {
  namespaced: true,
  state: {
    cards: [],
    abilities: [],
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
    getState: (state: any) => state.state,
    getCards: (state: any) => state.cards,
    getAbilities: (state:any) => state.abilities
  },
  mutations: {

    setDeck(state: any, payload: any) {
      payload.deck.forEach((card: any) => {
        state.board[payload.player].deck.push(card);
      });
    },

    setCards(state: any, payload: any) {
      state.cards = payload;
    },

    setAbilities(state: any, payload: any) {
      state.abilities = payload;
    },

    setState(state: any){
      state.state = new statez.State({
        activePlayer: statez.Player.YOUR,
        your: {
          active: [state.cards[0]],
          bench: [state.cards[2],state.cards[20],state.cards[30]],
          discard: [state.cards[6], state.cards[7], state.cards[8]],
          deck: [state.cards[21], state.cards[22], state.cards[23], state.cards[24]],
          hand: [state.cards[11], state.cards[12], state.cards[13], state.cards[14],state.cards[15]],
          prize: [state.cards[36], state.cards[37]]
        },
        opponent: {
          active: [state.cards[1]],
          bench: [state.cards[2],state.cards[20],state.cards[30]],
          discard: [state.cards[6], state.cards[7], state.cards[8]],
          deck: [state.cards[21], state.cards[22], state.cards[23], state.cards[24]],
          hand: [state.cards[11], state.cards[12], state.cards[13], state.cards[14],state.cards[15]],
          prize: [state.cards[36], state.cards[37]]
        }
      })
    },

    draw(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.board[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.board[player].hand.push(deckTopCard);
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
    },

    async setCard (context: any) {
      let response = await CardService.get();
      context.commit('setCards', response);
      context.commit('setState');
    },

    async setAbilities(context: any) {
      let response = await AbilityService.get();
      context.commit('setAbilities', response);
    }
  },
};
