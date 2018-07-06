import pokemon from '@/types/cards/pokemon';
import energy from '@/types/cards/energy';
import trainer from '@/types/cards/trainer';

export default {
  namespaced: true,
  state: {
    board: {
      your: {
        bench: [{
          new pokemon.Pokemon({
            id: 1,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                id: 20,
              },
            ],
          }),
        },
        {
          new pokemon.Pokemon({
            id: 2,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                id: 20,
              },
            ],
          }),
        },
        {
        new trainer.Trainer ({
          props: {
            id: 102,
            name: 'Red Card',
            category: trainer.Category.ITEM,
            ability: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.',
          },
        }),
        }
        ],
        active: [{
          new pokemon.Pokemon({
            id: 6,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                id: 20,
              },
            ],
          }),
        }],
        deck: [],
        discard: [{
          new pokemon.Pokemon({
            id: 3,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                name: 'Thunderbolt',
                description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                id: 20,
              },
            ],
          }),
        }],
        prize: [{
            new pokemon.Pokemon({
              id: 4,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          },
            {
            new pokemon.Pokemon({
              id: 5,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          },
            {
            new pokemon.Pokemon({
              id: 7,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          }],
        hand: [{
          new energy.Energy({
            id:3,
            name: 'lightning',
            type: energy.Energy.LIGHTNING,
          })

        }],
      },
      opponent: {
        bench: [{
          bench: [{
            new pokemon.Pokemon({
              id: 8,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          },
          {
            new pokemon.Pokemon({
              id: 9,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          },
          {
          new trainer.Trainer ({
            props: {
              id: 102,
              name: 'Red Card',
              category: trainer.Category.ITEM,
              ability: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.',
            },
          }),
          }
          ],
          active: [{
            new pokemon.Pokemon({
              id: 10,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          }],
          deck: [],
          discard: [{
            new pokemon.Pokemon({
              id: 61,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  id: 20,
                },
              ],
            }),
          }],
          prize: [{
              new pokemon.Pokemon({
                id: 16,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                    id: 20,
                  },
                ],
              }),
            },
              {
              new pokemon.Pokemon({
                id: 46,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                    id: 20,
                  },
                ],
              }),
            },
              {
              new pokemon.Pokemon({
                id: 26,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                    id: 20,
                  },
                ],
              }),
            }],
          hand: [],
      },
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
