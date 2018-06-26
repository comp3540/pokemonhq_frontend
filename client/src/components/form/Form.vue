<template>
  <div class="form">
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
export default {
  created () {
    this.$on('upload', (file) => {
      this.$emit('upload', file);
    });
  }
};
</script>
