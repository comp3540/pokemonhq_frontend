<template>
  <div class="form-group" :class="{'has-error' : field.error !== ''}">
    <label class="control-label">{{field.label}}:</label>
    <input class="form-control" type="text" :name="field.name" :value="field.value" @input="$emit('input', $event.target.value)">
    <span class="help-block" v-if="field.error" v-text="field.error"></span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    field: {
      required: true,
      type: Object,
      default: () => {
        return {
          value: '',
          label: '',
          error: '',
          name: ''
        }
      }
    }
  }
}
</script>
