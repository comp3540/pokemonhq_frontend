<template>

  <div id="mainContainer">
    <div class="coin">
        <div class="coin front"></div>
        <div class="back"><p>BACK</p></div>
    </div>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue';

 export default Vue.extend ({
  data () {
    return {
    };
  },
 });

 </script>

 <style>

  #mainContainer{
    position: relative;
    width: 60px;
    height: 60px;
  }

  .coin{
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
  }

  .coin:hover{
    transform: rotateY(180deg);
  }

  .front{
    position: absolute;
    width: 100%;
    height: 100%; 
    backface-visibility: hidden;
    background-color: red;
    color: #333;
    border-radius: 50%;
  }

  .back{
    position: absolute;
    width: 100%;
    height: 100%; 
    backface-visibility: hidden;
    background-color: orange;
    color: #333;
    transform: rotateY(180deg);
    border-radius: 50%;
  }

  p{
    text-align:center;
    padding-top:10%;
    font: Arial;
    font-weight: bolder;
  }

 </style>