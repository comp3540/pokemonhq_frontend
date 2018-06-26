<template>
  <div class="kard">

    <div class="column-1">
        <div class="stage"> Basic </div>
        <div class="hp"> 60 </div>
    </div>

    <div class="column-2">
        <h3>{{card.props.id}}</h3>
        <div class="name"> Pikachu </div>
    </div>

    <div class="column-3">
        <div class = "ability"> Scratch </div>
    </div>

    <div class="column-4">
        <div class="retreat"> 2 </div>
    </div>

    <h3>{{card.props.id}}</h3>


  </div>
</template>
<script type="text/javascript">
export default {
  name: 'active-card',
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

    .kard {
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: #ffcc00;
        width: 85%;
        height: 45vh;
        color: black;
        margin: 2px;
        text-align: center;
        line-height: 75px;
        font-size: 20px;
        border-radius: 10px;
    }

    .column-1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 10%;
    }

    .stage {
        background-color: grey;
        width: 60%;
    }

    .hp {
        background-color: brown;
        width: 20%;
    }
    
    .column-2 {
        height: 20%;
    }

    .column-3 {
        height: 40%;
    }

    .column-4 {
        height: 10%;
        background-color: grey;
    }

</style>