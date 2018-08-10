<template>
  <div class="form-group" :class="{'has-error' : error !== ''}">
    <label class="control-label">{{label}}:</label>
    <input class="form-control" type="text" :value="value" @input="input($event.target.value)" />
    <span class="help-block" v-if="error">{{error}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String,
    },
    error: {
      required: true,
      type: String,
      default: '',
    },
    value: {
      required: true,
    },
  },

  methods: {
    input(text: string) {
      this.$emit('input', text);
      this.$emit('clearError');
    },
  },
});
</script>
