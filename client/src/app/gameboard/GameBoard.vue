<template>
<div id="container">
  <opponent-side :opponent="board.opponent"></opponent-side>
  <your-side :your="board.your"></your-side>
</div><!--end of CONTAINER-->
</template>

<script>
import YourSide from './components/YourSide';
import OpponentSide from './components/OpponentSide';
export default {
  name: 'GameBoard',
  components: {
    YourSide,
    OpponentSide
  },
  data () {
    const fp = this.fakeCardPokemon;
    const fe = this.fakeCardEnergy;
    const ft = this.fakeCardTrainer;
    return {
      board: {
        opponent: {
          bench: [fp(1), fp(2), fp(3), fp(4), fp(5)],
          active: [fp(10)],
          deck: [fp(20)],
          discard: [fp(30)],
          prize: [fp(40), fp(41), fp(42), fp(43), fp(44), fp(45)],
          hand: [fp(50), ft(51), ft(52), fe(53), fp(54), fe(55), fe(56)]
        },
        your: {
          bench: [fp(11), fp(22), fp(33), fp(44), fp(55)],
          active: [fp(111)],
          deck: [fp(222)],
          discard: [fp(333)],
          prize: [fp(40), fp(41), fp(42), fp(43), fp(46), fp(45)],
          hand: [fp(50), ft(51), ft(52), fe(53), fp(54), fe(55), fe(56)]
        }
      }
    };
  },

  methods: {
    fakeCardPokemon (id) {
      return {
        state: {

        },
        props: {
          id,
          name: 'Pikachu',
          initialHP: 40,
          type: 'lightning',
          clazz: 'POKEMON',
          stage: 'basic',
          evolvesFrom: null,
          abilities: [
            {
              name: 'Thunderbolt',
              description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
              energyReq: [{type: 'lightning', amount: 1, id: id}, {type: 'colorless', amount: 1, id: id}],
              id: id
            }
          ],
          status: 'none'
        }
      };
    },
    fakeCardEnergy (id) {
      return {
        state: {

        },
        props: {
          id,
          type: 'lightning',
          clazz: 'ENERGY'
        }
      };
    },
    fakeCardTrainer (id) {
      return {
        state: {

        },
        props: {
          id,
          name: 'Red Card',
          clazz: 'TRAINER',
          type: 'item',
          ability: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.'
        }
      };
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 100vh;
}
/*END OF DECK AND DISCARD*/
</style>
