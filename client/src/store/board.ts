export default {
  namespaced: true,
  state: {
    board: {
      your: {
        bench: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        },
        {
          state: {

          },
          props: {
            id: 102,
            name: 'Red Card',
            clazz: 'TRAINER',
            category: 'item',
            ability: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.',
          },
        },
        ],
        active: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        deck: [],
        discard: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        prize: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        hand: [],
      },
      opponent: {
        bench: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        active: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        deck: [],
        discard: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        prize: [{
          state: {

          },
          props: {
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: 'lightning',
            clazz: 'POKEMON',
            stage: 'basic',
            evolvesFrom: null,
            status: 'none',
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: 'lightning', amount: 1, id: 100}, {type: 'colorless', amount: 1, id: 200}],
                id: 20,
              },
            ],
          },
        }],
        hand: [],
      },
    },
  },
  getters: {
    getBoard: (state: any) => state.board,
  },
  mutations: {
    setDeck(state: any, payload: any) {
      payload.deck.forEach((card: any) => {
        state.board[payload.player].deck.push(card);
      });
    },

    draw(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.board[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.board[player].hand.push(deckTopCard);
    },

    discard(state: any, {player, card}: any) {
      // discard a selected card from it's location to the discard pile
    },
  },
  actions: {
    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand(context: any, player: string) {
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    },
  },
};
