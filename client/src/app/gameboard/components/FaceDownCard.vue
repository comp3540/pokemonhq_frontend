<template>

  <div class="kard">

    <div class="face-down">
        <div class="fukin-hell card-img">
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'face-down-card',

  props: {
    card: {
      default: null,
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>

    .card-img {
        display: block;
        width: 25px;
        height: 41px;
        background-size: cover;
    }

    .kard {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 35px;
    }

</style>
