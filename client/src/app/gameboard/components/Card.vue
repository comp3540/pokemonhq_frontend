<template>
  <div class="cardd">

    <h3>{{card.id}}</h3>

  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Card from '../../../types/cards/Card';
import Pokemon from '../../../types/cards/pokemon';
import Energy from '../../../types/cards/energy';
import Trainer from '../../../types/cards/trainer';
export default Vue.extend({
  name: 'card',
  props: {
    card: {
      default: null,
      type: Card,
      required: true,
    },
  },
});
</script>
<style scoped>
h3 {
  font-size: unset;
}
</style>
