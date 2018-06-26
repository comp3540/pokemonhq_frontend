<template>
  <div class="form-group" :class="{'has-error' : error !== ''}">
    <label class="control-label">{{label}}:</label>
    <textarea class="form-control" :rows="rows" :cols="cols" :value="value" @input="input($event.target.value)" />
  </div>
</template>
<script type="text/javascript">
export default {
  props:{
    label: {
      required: true,
      type: String
    },
    rows: {
      required: true, 
      type: String
    }, 
    cols: {
      required: true, 
      type: String
    },
    value: {
      required: true, 
      type: String
    }
  }
};
</script>