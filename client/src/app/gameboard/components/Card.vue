<template>
  <div class="cardd">

    <h3>{{card.id}}</h3>

  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Card from '../../../types/cards/Card';
import pokemon from '../../../types/cards/pokemon';
import energy from '../../../types/cards/energy';
import trainer from '../../../types/cards/trainer';
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
