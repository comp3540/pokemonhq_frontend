<template>
  <div>
    <h1 id="title">POKEMON GO BACK!</h1>
    <h3 v-if="header">{{header}}</h3>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    header: {
      type: String,
      default: null
    }
  }
};
</script>
