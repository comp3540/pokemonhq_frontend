<template>

<div class="side">

  <div class="active-column">
    <div class="active-card">
        <card :card="your.active[0]" />
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

export default {
  name: 'your-side',
  components: {
    Card
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
    width: 99%;
  }

  .column-1 {
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: center;
  }

  .column-2 {
    display: flex;
    flex-direction: column;
    width: 10%;
    margin-right: 10px;
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
     margin: 5px;
  text-align: center;
  line-height: 75px;
  font-size: 20px;
  border-radius: 10px;

  }

  .column-3{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 10%;
  }

  .prize-card {
    border: 1px solid white;
  background-color: deeppink;
  width: 2em;
  height: 3em;
  border-radius: 8px;
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

/*html {
  background: #ff5e0e;
}

h1 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000066;
    color: #73b79b;
    text-align: left;
    font-size: 3em;
    margin-top: -15px;
    font-family: "Kooky", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.06);
    color: #545454;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 70%;
    margin: 0 auto;
    max-width: 920px;
    min-height: 45em;
    padding: 2em 2em 4em;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  color: orange;
  justify-content: space-around;
}

.flex-container > div {
  border: 3px solid orange;
  width: 98px;
  height: 6em;
  margin: 5px;
  text-align: center;
  line-height: 75px;
  font-size: 20px;
  border-radius: 10px;
}

.flex-container > .column1 {
  display: flex;
  flex-direction: column;
  width: 25vw;
}

.flex-container > .column2 {
  display: flex;
  flex-direction: row;
  width: 25vw;
}

.flex-container > .column3 {
  display: flex;
  flex-direction: column;
  width: 25vw;
}

.flex-container > .column1 > .activeCard {
    background-color: deeppink;
    width: 200px;
    color: white;
    border: none;
}

.flex-container > .column1 > .prizeCard {
  background-color: white;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: white;
  justify-content: center;
  border: none;
}

.flex-container > .column1 > .prizeCard > div {
  border: 1px solid white;
  background-color: deeppink;
  width: 3em;
  height: 3em;
  border-radius: 8px;
}

.flex-container > .column2 > .hand-row {
  background-color: white;
  flex-direction: row;
}

.flex-container > .column2 > .bench-row {
  background-color: #ff80b3;
  flex-direction: row;
}

.flex-container > .column3 > #column {
    display: flex;
    flex-direction: column;
    background: none;
}
.squareBox {
    background-color:#000066;
    height: 4em;
    width: 4em;
    margin: 4px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 5px;
    border: none;
}*/

</style>
