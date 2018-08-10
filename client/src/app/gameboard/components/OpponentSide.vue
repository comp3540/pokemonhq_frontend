<template>

<!-- opponent side -->
<div class="side">

  <div class="active-column">
    <div class="active-card">
        <big-card v-if="board.opponent.active.length > 0" :card="board.opponent.active[0]" />
      </div>
  </div>

  <div class="super-column">
    <!-- options bar -->
    <div class="actions-row">
      <div class="interact-row">
        <endTurn></endTurn> 
        <forfeit></forfeit> 
        <coin></coin>
      </div>
      <div class="log">
        <log></log> 
      </div>
    </div>
    <div class="hand-row">
    <!-- hands -->
      <div class="hand-card" v-for="card in board.opponent.hand" :key="card.id">
        <face-down-card :card="card" />
      </div>
    </div>

    <div class="everything-row">

        <div class="column-1">
        <!-- bench -->
          <div class="small-card" v-for="card in board.opponent.bench" :key="card.id">
              <small-card :card="card" />
          </div>
        </div>

        <div class="column-2">
        <!-- deck and discard -->
            <div class="deck">
              <face-down-card :card="board.opponent.discard[0]" />
              <div class="amount-deck"> &nbsp;:{{board.opponent.deck.length}} </div>
            </div>
            <div class="discard">
              <face-down-card :card="board.opponent.discard[0]" />
              <div class="amount-discard"> &nbsp;:{{board.opponent.discard.length}} </div>
            </div>
        </div>

        <div class="column-3">
            <div class="prize-card" v-for="card in board.opponent.prize" :key="card.id">
            <face-down-card :card="card" />
            </div>
        </div>
    </div>

  </div>

</div>

</template>

<script lang="ts">
import Vue from 'vue';
import BigCard from './BigCard.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import deck from '../../../faker/deck';
import SmallCard from './SmallCard.vue';
import FaceDownCard from './FaceDownCard.vue';
import endTurn from './ButtonEndTurn.vue';
import forfeit from './ButtonForfeit.vue';
import log from './Logs.vue';
import coin from './CoinFlip.vue';

export default Vue.extend({
  name: 'opponent-side',
  components: {
    BigCard,
    SmallCard,
    FaceDownCard,
    endTurn,
    forfeit,
    log,
    coin,
  },
  created() {
    this.init();
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('board', ['setHand', 'draw', 'setPrize']),
    ...mapMutations('board', ['draw', 'setDeck']),
      init () {
          if (this.board.opponent.hand.length === 0) {
              this.setHand('opponent');
              this.setPrize('opponent');
          }
      }
  },
  computed: {
    ...mapGetters('board', {board: 'getState', cards: 'getCards'}),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .side {
    background: #fff;
    border-bottom: 2px solid #ff6600;
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
    display: flex;
    width: 100%;
    height: 30%;
    background-color:#b80000;
    flex-direction: column;
    border-radius: 0px 0px 0px 20px;
  }

  .interact-row {
    display: flex;
    justify-content: space-around;
    height:50%;
    width: 100%;
  }

  .log {
    align-content: flex-start;
    text-align: left;
    height: 30%;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.479);
  }

  .hand-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    height: 20%;
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
    height: 2em;
    width: 2em;
    margin: 4px;
    border-radius: 5px;
    color: white;
  }

  .small-card {
    width: 145px;
    height: 22vh;
    margin: 5px;
    text-align: center;
    /*line-height: 75px;*/
    font-size: 20px;
    border-radius: 10px;
  }

  .active-card{
    display: flex;
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
    color: #b30000;
    width: 2em;
    height: 3em;
    border-radius: 8px;
    margin: 4px;
    font-size: 12px;
  }

  .deck, .discard {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #0099cc;
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
