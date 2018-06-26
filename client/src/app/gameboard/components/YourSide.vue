<template>

<div class="side">

  <div class="active-column">
    <div class="active-card">
        <active-card :card="your.active[0]" />
      </div>
  </div>
  <div class="super-column">
    <div class="hand-row">
    <!-- hands -->
      <!-- don't really need hand row for now, but just in case we choose to chabge its colour -->
      <div class="card" v-for="card in your.hand" :key="card.props.id">
        <card :card="card" />
      </div>
  </div>

  <div class="everything-row">

    <div class="column-1">
      <!-- bench -->
        <div class="card" v-for="card in your.bench" :key="card.props.id">
          <card :card="card" />
        </div>
    </div>

    <div class="column-2">
      <!-- deck and discard -->
      <div class="deck">Deck</div>
      <div class="discard">Discard</div>
    </div>

    <div class="column-3">
        <div class="prize-card" v-for="card in your.prize" :key="card.props.id">
          <card :card="card" />
        </div>
    </div>
  </div>

  </div>

</div>
</template>

<script>
import Card from './Card';
import ActiveCard from './ActiveCard';

export default {
  name: 'your-side',
  components: {
    Card,
    ActiveCard
  },
  props: {
    your: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .side {
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
  }

  .hand-row {
    display: flex;
    flex-direction: row;
  }

  .everything-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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
    width: 8%;
    margin-right: 5px;
  }

  .column-3{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 6%;
  }

  .card {
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
    background-color: deeppink;
    width: 90%;
    height: 47vh;
    color: white;
    margin: 2px;
    text-align: center;
    line-height: 75px;
    font-size: 20px;
    border-radius: 10px;
  }

  .prize-card {
    border: 1px solid white;
    background-color: deeppink;
    width: 2em;
    height: 3em;
    border-radius: 8px;
    font-size: 12px;
  }

  .deck, .discard {
    background-color: #000066;
    color: white;
    width: 60px;
    height: 3em;
    margin: 5px;
    text-align: center;
    line-height: 75px;
    font-size: 20px;
    border-radius: 10px;
  }

</style>
