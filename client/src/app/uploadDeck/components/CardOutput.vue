<template>
  <div class="output">
    <div v-if="card.pokemon">
      <h4>{{card.pokemon.name}}</h4>
      <p>type: Pokemon</p>
    </div>
    <div v-if="card.trainer">
      <h4>{{card.trainer.name}}</h4>
      <p>type: Trainer</p>
    </div>
    <div v-if="card.energy">
      <h4>{{card.energy.name}}</h4>
      <p>type: Energy</p>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';
export default Vue.extend({
  name: 'card-output',
  props: {
    card: {
      type: Object
    }
  }
})
</script>

<style type="text/css" scoped>
  .output{
    border-bottom: 5px solid black;
  }
  p {
    text-align: left;
    padding-top: 0px;
  }
</style>
