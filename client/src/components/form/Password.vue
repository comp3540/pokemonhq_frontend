<template>
  <div class="form-group" :class="{'has-error' : error !== '' }">
    <label class="control-label">{{label}}:</label>
    <input class="form-control" type="password" @input="input($event.target.value)">
    <span class="help-block" v-if="error">{{error}}</span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    error: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    }
  },
  methods: {
    input (text) {
      this.$emit('input', text);
      this.$emit('clearError');
    }
  }
};
</script>
