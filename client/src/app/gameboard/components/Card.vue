<template>
  <div>
    <h3>{{card.props.id}}</h3>
  </div>
</template>
<script type="text/javascript">
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