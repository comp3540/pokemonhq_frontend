<template>

<!-- opponent side -->
<div class="side">

  <div class="active-column">
    <div class="active-card">
        <active-card v-if="board.opponent.active.length > 0" :card="board.opponent.active[0]" />
      </div>
  </div>

  <div class="super-column">

    <div class="actions-row"> This area will be reserved for buttons and options. </div>
    <div class="hand-row">
    <!-- hands -->
      <div class="hand-card" v-for="card in board.opponent.hand" :key="card.props.id">
        <face-down-card :card="card" />
      </div>
    </div>

    <div class="everything-row">

        <div class="column-1">
        <!-- bench -->
          <div class="small-card" v-for="card in board.opponent.bench" :key="card.props.id">
              <small-card :card="card" />
          </div>
        </div>

        <div class="column-2">
        <!-- deck and discard -->
            <div class="deck">
            <face-down-card :card="card" />
            </div>
            <div class="discard">
            <face-down-card :card="card" />
            </div>
        </div>

        <div class="column-3">
            <div class="prize-card" v-for="card in board.opponent.prize" :key="card.props.id">
            <face-down-card :card="card" />
            </div>
        </div>
    </div>

  </div>

</div>

</template>

<script>
import Card from './Card';
import ActiveCard from './ActiveCard';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Deck from './../../../../faker/deck';
import SmallCard from './SmallCard';
import FaceDownCard from './FaceDownCard';

export default {
  name: 'opponent-side',
  components: {
    Card,
    ActiveCard,
    SmallCard,
    FaceDownCard
  },
  created () {
    this.setDeck({player: 'opponent', deck: Deck.deck});
    this.setHand('opponent');
  },
  data () {
    return {
    };
  },
  methods: {
    ...mapActions('board', ['setHand', 'draw']),
    ...mapMutations('board', ['draw', 'setDeck'])
  },
  computed: {
    ...mapGetters('board', {board: 'getBoard'})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .side {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.06);
    color: #545454;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .active-column {
    width: 27%;
  }

  .super-column {
    width: 73%;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
  }

  .actions-row {
    width: 100%;
    height: 30%;
    background-color:#e6e6e6;
  }

  .hand-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    height:20%;
  }

  .everything-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 50%;
  }

  .column-1 {
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: center;
  }

  .column-2 {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
  }

  .column-3{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 7%;
  }

  .hand-card {
    background-color:cadetblue;
    height: 2em;
    width: 2em;
    margin: 4px;
    border-radius: 5px;
    color: white;
  }

  .small-card {
    border: 3px solid orange;
    width: 145px;
    height: 22vh;
    margin: 5px;
    text-align: center;
    line-height: 75px;
    font-size: 20px;
    border-radius: 10px;
  }

  .active-card{
    display: flex;
    background-color:#b30000;
    width: 90%;
    height: 47vh;
    color: white;
    margin: 2px;
    text-align: center;
    line-height: 75px;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-content: center;
  }

  .prize-card {
    border: 1px solid #b30000;
    background-color: white;
    color: #b30000;
    width: 2em;
    height: 3em;
    border-radius: 8px;
    margin: 4px;
    font-size: 12px;
  }

  .deck, .discard {
    background-color:cadetblue;
    color: white;
    height: 4em;
    width: 4em;
    margin: 4px;
    font-size: 13px;
    line-height: 30px;
    border-radius: 10px;
  }

  .OppSquareBox {
    background-color:cadetblue;
    height: 2em;
    width: 2em;
    margin: 4px;
    border-radius: 5px;
    color: white;

}

</style>
