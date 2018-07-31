<template>
  <div>
    <h3>MY DECKS</h3>
    <ul>
      <li v-if="myDecks.length > 0" v-for="deck in myDecks" :key="deck.id" @click="mapDeck(deck.deck)" :class="{'active' : active === deck.deck}">Name: {{deck.name}}</li>
    </ul>
    <h3>Quick view:</h3>
    <div id="view" v-if="mapped">
      <card-output v-for="card in mapped" :card="card.card" :key="card.card.id"></card-output>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Mapper from '@/utilities/deck/Map';
import AbilityApi from '@/services/Ability';
import CardApi from '@/services/Card';
import CardOutput from '@/app/uploadDeck/components/CardOutput.vue';
export default Vue.extend({
  name: 'my-decks',
  components:{
    CardOutput
  },
  props: {
    myDecks: {
      type: Array,
    },
  },
  data () {
    return {
      abilities: [],
      cards: [],
      mappedDeck: [],
      active: {}
    };
  },
  created () {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.abilities = await AbilityApi.get();
        this.cards = await CardApi.get();
        Mapper.abilitiesToCards(this.abilities, this.cards);
      } catch (e) {
        console.log(e);
      }
    },
    mapDeck (deck) {
      this.active = deck;
      let deckArray = deck.split(" ");
      Mapper.cardsToDeck(this.cards, deckArray);
      this.mappedDeck = deckArray;
      this.$emit('selectedDeck', this.mappedDeck);
    }
  },
  computed: {
    mapped () {
      return this.mappedDeck;
    }
  }
});
</script>
<style type="text/css" scoped>
  #view {
    height: 30px;
  }
  ul {
    background-color: white;
    max-height: 200px;
    margin-bottom: 20px;
    overflow-y: scroll;
  }
  li {
    display: block;
    cursor: pointer;
    padding: 5px;
  }
  li:hover {
    background-color: red;
    color: white;
  }
  .active{
    background-color: red;
    color: white;
  }
  #view {
    background-color: white;
    height: 200px;
    overflow: scroll;
  }
</style>
