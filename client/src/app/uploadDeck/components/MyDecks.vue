<template>
  <div>
    <h3>MY DECKS</h3>
    <ul>
      <li v-if="myDecks.length > 0" v-for="deck in myDecks" :key="deck.id" @click="preview=deck">Name: {{deck.name}}</li>
    </ul>
    <div id="view" v-if="preview.deck">
      {{preview.deck}}
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'my-decks',
  props: {
    myDecks: {
      type: Array,
    },
  },
  data() {
    return {
      preview: {},
    };
  },
  methods: {
  },
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
  #view {
    background-color: white;
    height: 200px;
  }
</style>
