<template>

  <p>log: </p>

</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend ({
  name: 'log',

  props: {
      default: null,
      type: Object,
    },
 });

 </script>

 <style>

 p{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

 </style>