<template>

  <button>END TURN</button>

</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend ({
  name: 'button-endTurn',

  props: {
      default: null,
      type: Object,
    },
 });

 </script>

 

 <style>

 button{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 8px;
    color: cadetblue;
    border: 2px solid cadetblue;
    background-color: white;
}

 </style>