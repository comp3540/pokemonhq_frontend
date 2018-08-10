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
        <draggable id="YB" class="hand-row" v-model="board.your.bench" :options="{group:'board'}" :move="moveHand">
          <div class="small-card" v-for="card in board.your.bench" :key="card.id">
            <small-card :card="card" />
          </div>
        </draggable>
      </div>

      <div class="column-2">
        <!-- deck and discard -->
            <div class="deck">
              <face-down-card :card="board.your.deck[0]" />
              <div class="amount-deck"> &nbsp;:{{board.your.deck.length}} </div>
            </div>
            <div class="discard">
              <face-down-card :card="board.your.discard[0]" />
              <div class="amount-discard"> &nbsp;:{{board.your.discard.length}} </div>
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
        <draggable id="YH" class="hand-row" v-model="board.your.hand" :options="{group:'board'}">
          <div class="small-card" v-for="card in board.your.hand" :key="card.id">
            <small-card :card="card" />
          </div>
        </draggable>
    </div>

  </div>
  <p-alert-fail :message="failMessage" @close="failMessage = ''" />
</div>

</template>

<script lang="ts">

import Vue from 'vue';
import BigCard from './BigCard.vue';
import draggable from 'vuedraggable';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import SmallCard from './SmallCard.vue';
import FaceDownCard from './FaceDownCard.vue';

export default Vue.extend({
  name: 'your-side',
  components: {
    BigCard,
    SmallCard,
    FaceDownCard,
    draggable,
  },
  created() {
    this.init();
  },
  mounted () {
    this.save();
  },
  data() {
    return {
      failMessage: ''
    };
  },
  methods: {

    ...mapActions('board', ['setHand', 'draw', 'saveState', 'setPrize']),
    ...mapMutations('board', ['draw', 'setDeck','setState']),

    moveHand(evt) {
      const card = evt.draggedContext.element;
      const from = evt.from.id;
      const to = evt.to.id;
      console.log('Move',card.name,'from',from,'to',to);
      return false;
    },
    init () {
      if (this.board.your.hand.length === 0) {
       if (this.board.your.deck.length === 0) {
         this.$router.replace({
            name: 'UploadDeck',
        });
       } else {
         this.setHand('your');
         this.setPrize('your');
       }
      }

    },
    save () {
      let $this = this;
      setInterval($this.saveState, 15000);
    }
  },
  computed: {
    ...mapGetters('board', {board: 'getState'}),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .side {
    background: #fff;
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
