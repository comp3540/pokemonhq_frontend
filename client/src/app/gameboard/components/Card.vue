<template>
  <div class="cardd">

    <h3>{{card.props.id}}</h3>

  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
export default {
  name: 'card',
  props: {
    card: {
      default: null,
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
h3 {
  font-size: unset;
}
</style>
