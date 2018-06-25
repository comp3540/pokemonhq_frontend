<template>

<div class="flex-container">

<div class="activeCard">
  <card :card="your.active[0]" />
</div>

<!-- hands -->
<div v-for="card in your.hand" :key="card.props.id">
  <card :card="card" />
</div>

<div class="prizeCard">
  <div v-for="card in your.prize" :key="card.props.id">
    <card :card="card" />
  </div>
</div>

<div v-for="card in your.bench" :key="card.props.id">
    <card :card="card" />
</div>

<div id="column">
<div class="squareBox">Deck</div>
<div class="squareBox">Discard</div>
</div><!--end of COLUMN-->

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
html {
  background: #ff5e0e;
}

h1 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #197270;
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
  justify-content: center;
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

/*ACTIVE CARD*/
.flex-container > .activeCard {
    background-color: deeppink;
    width: 200px;
    color: white;
    border: none;
}

/*PRIZE CARDs*/
.flex-container > .prizeCard {
  background-color: white;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  border: none;
}

.flex-container > .prizeCard > div {
  border: 1px solid white;
  background-color: deeppink;
  width: 3em;
  height: 3em;
  border-radius: 8px;
}

/*PLACEHOLDER*/
.flex-container > #placeholder {
    background: none;
}

/*DECK AND DISCARD*/
.flex-container > #column {
    display: flex;
    flex-direction: column;
    background: none;
}
.squareBox {
    background-color:cadetblue;
    height: 4em;
    width: 4em;
    margin: 4px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 5px;
    border: none;
}
</style>
