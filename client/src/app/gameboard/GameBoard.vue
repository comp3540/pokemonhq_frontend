<template>
<div id="container">
  <opponent-side></opponent-side>
  <your-side></your-side>
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
    return {};
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
          status: 'no status',
          retreatCost: 2
        }
      };
    },
    fakeCardEnergy (id) {
      return {
        state: {

        },
        props: {
          id,
          name: 'lightning',
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
          category: 'item',
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
