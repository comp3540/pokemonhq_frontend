<template>
  <div>
    <h3>MY DECKS</h3>
    <ul v-if="myDecks.length > 0" v-for="deck in myDecks" :key="deck.id">
      <li>Name: {{deck.name}}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'my-decks',
  props: {
    myDecks: {
      type: Array
    }
  }
};
</script>
