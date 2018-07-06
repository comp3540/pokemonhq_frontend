<template>
  <div>
    <h1 id="title">POKEMON GO BACK!</h1>
    <h3 v-if="header">{{header}}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    header: {
      type: String,
      default: null,
    },
  },
});
</script>
