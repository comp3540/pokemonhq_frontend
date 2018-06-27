<template>

  <div class="kard">

    <div class="row-1">
        <div class="stage"> {{card.props.stage}} </div>
        <div class="hp"> {{card.props.initialHP}} </div>
    </div>

    <div class="row-2">
        <div> {{card.props.name}} </div>
    </div>

    <div class="row-3" v-if="card.props.abilities" v-for="ability in card.props.abilities" :key="ability.id">
        <div class="ability-name"> {{ability.name}} </div>
        <div class="energy-req" v-for="energyReq in ability.energyReq" :key="energyReq.id">
            {{energyReq.type}}
            {{energyReq.amount}}
        </div>
        <div class="ability-desc"> {{ability.description}} </div>
    </div>

    <div class="row-4">
        <div> 2 </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: 'default-card',

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

    .kard {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        background-color: #ffcc00;
        width: 300px;
        height: 300px;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 35px;
    }

    .row-1 {
        display: flex;
        justify-content: space-between;
        height: 10%;
        flex-direction: row;
    }

    .stage {
        flex-direction: row;
        align-content: flex-start;
        border-radius: 10px 0px 0px 0px;
        background-color: grey;
        width: 30%;
        color: #cccccc;
        font-family: monospace;
        font-style: italic;
        font-weight: bold;
        font-size: 20px;
    }

    .hp {
        align-content: flex-start;
        color: rgb(179, 20, 20);
        width: 15%;
        font-family: Helvetica;
        font-size: 20px;
    }

    .row-2 {
        height: 10%;
        justify-content: center;
    }

    .row-3 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        background-color: #ffff33;
        height: 67%;
        align-content: flex-start;
        font-family: Helvetica;
        flex-wrap: wrap;
        line-height: 22px;
    }

    .ability-name {
        width: 100%;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
    }

    .energy-req {
        width:25%;
        font-size: 12px;
        text-align: left;
    }

    .ability-desc {
        width: 100%;
        font-size: 14px;
        text-align: left;
    }

    .row-4 {
        background-color: #ffff33;
        width: 10%;
        height: 10%;
        border-radius:50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;
        background-color: rgb(194, 194, 194);
        justify-content: flex-start;
    }

</style>
