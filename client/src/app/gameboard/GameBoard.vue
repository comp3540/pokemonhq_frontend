<template>
<div id="container">
  <opponent-side></opponent-side>
  <your-side></your-side>
</div><!--end of CONTAINER-->
</template>

<script lang="ts">
import YourSide from './components/YourSide.vue';
import OpponentSide from './components/OpponentSide.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'GameBoard',
  components: {
    YourSide,
    OpponentSide,
  },
  data() {
    return {};
  },

  methods: {

  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 100vh;
}
/*END OF DECK AND DISCARD*/
</style>
