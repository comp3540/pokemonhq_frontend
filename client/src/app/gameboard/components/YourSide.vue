<template>

<!-- your side -->
<div class="side">
  <!-- active -->
  <div class="active-column">
    <div class="active-card">
        <big-card v-if="board.your.active.length > 0" :card="board.your.active[0]" />
      </div>
  </div>

  <div class="super-column">

    <div class="everything-row">

      <div class="column-1">
        <!-- bench -->
        <draggable class="hand-row" v-model="board.your.bench" :options="{group:'board'}">
          <div class="small-card" v-for="card in board.your.bench" :key="card.id">
            <small-card :card="card" />
          </div>
        </draggable>
      </div>

      <div class="column-2">
        <!-- deck and discard -->
            <div class="deck">
              <face-down-card :card="board.opponent.discard[0]" />
              <div class="amount-deck"> &nbsp;:40 </div>
            </div>
            <div class="discard">
              <face-down-card :card="board.opponent.discard[0]" />
              <div class="amount-discard"> &nbsp;:10 </div>
            </div>
        </div>

      <div class="column-3">
          <div class="prize-card" v-for="card in board.your.prize" :key="card.id">
            <face-down-card :card="card" />
          </div>
      </div>

    </div>

    <div >
      <!-- hands -->
        <!-- don't really need hand row for now, but just in case we choose to chabge its colour -->
        <draggable class="hand-row" v-model="board.your.hand" :options="{group:'board'}">
          <div class="small-card" v-for="card in board.your.hand" :key="card.id">
            <small-card :card="card" />
          </div>
        </draggable>
    </div>

  </div>

</div>

</template>

<script lang="ts">

import Vue from 'vue';
import Card from './Card.vue';
import BigCard from './BigCard.vue';
import draggable from 'vuedraggable';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Deck from './../../../faker/deck';
import SmallCard from './SmallCard.vue';
import FaceDownCard from './FaceDownCard.vue';

export default Vue.extend({
  name: 'your-side',
  components: {
    Card,
    BigCard,
    SmallCard,
    FaceDownCard,
    draggable,
  },
  created() {
    this.setCard();
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('board', ['setHand', 'draw', 'setCard']),
    ...mapMutations('board', ['draw', 'setDeck','setCards']),
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
    width: 100%;
    height:100%;
    overflow-x: scroll;
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
    display: flex;
    flex-direction: row;
    align-items: center;
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
