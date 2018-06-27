<template>

<!-- your side -->
<div class="side">

  <div class="active-column">
    <div class="active-card">
        <active-card :card="your.active[0]" />
      </div>
  </div>
  <div class="super-column">

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

  <div class="hand-row">
    <!-- hands -->
      <!-- don't really need hand row for now, but just in case we choose to chabge its colour -->
      <div class="card" v-for="card in your.hand" :key="card.props.id">
        <card :card="card" />
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
    height:50%;
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
    display: flex;
    background-color:seagreen;
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
    border: 1px solid seagreen;
    background-color: white;
    color: seagreen;
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
