<!-- This template is used for displaying success messages in the GUI -->
<template>
  <div class="alert alert-success alert-dismissible" v-show="message">
    <button href="#" class="close" data-dismiss="alert" aria-label="close" @click="$emit('close')">&times;</button>
    <strong>Success!</strong> {{message}}.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    message: {
      type: String,
    },
  },
});
</script>
