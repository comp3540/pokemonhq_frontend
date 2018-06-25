<template>
<div id="container">
  <your-side :your="board.opponent"></your-side>
  <your-side :your="board.your"></your-side>
</div><!--end of CONTAINER-->
</template>

<script>
import YourSide from './components/YourSide';
export default {
  name: 'GameBoard',
  components: {
    YourSide
  },
  data () {
    const f = this.fakeCard;
    return {
      board: {
        your: {
          bench: [f(1), f(2), f(3), f(4), f(5)],
          active: [f(10)],
          deck: [f(20)],
          discard: [f(30)],
          prize: [f(40), f(41), f(42), f(43), f(44), f(45)],
          hand: [f(50), f(51), f(52), f(53), f(54), f(55), f(56)]
        },
        opponent: {
          bench: [f(100), f(101), f(102)],
          active: [f(110)],
          deck: [f(120), f(121), f(122)],
          discard: [f(130), f(131), f(132)],
          prize: [f(140), f(141), f(142), f(143), f(144), f(145)],
          hand: [f(150), f(151), f(152), f(153), f(154), f(155), f(156)]
        }
      }
    };
  },

  methods: {
    fakeCard (id) {
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
          evolvesFrom: null
        }
      };
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
  background-color: white;
  height: 100vh;
}
/*END OF DECK AND DISCARD*/
</style>
