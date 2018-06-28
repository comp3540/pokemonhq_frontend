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
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: 'small-card',

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
        width: 145px;
        height: 162px;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 25px;
    }

    .row-1 {
        display: flex;
        justify-content: space-between;
        height: 15%;
        flex-direction: row;
    }

    .stage {
        flex-direction: row;
        align-content: flex-start;
        border-radius: 10px 0px 0px 0px;
        background-color: grey;
        width: 65%;
        color: #cccccc;
        font-family: monospace;
        font-style: italic;
        font-weight: bold;
        font-size: 13px;
    }

    .hp {
        align-content: flex-start;
        color: rgb(179, 20, 20);
        width: 15%;
        font-family: Helvetica;
        font-size: 13px;
    }

    .row-2 {
        height: 15%;
        justify-content: center;
        font-size: 14px;
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
        font-size: 14px;
        font-weight: bold;
    }

    .energy-req {
        width:50%;
        font-size: 10px;
        text-align: left;
    }

</style>