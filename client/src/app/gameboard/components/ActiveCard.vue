<template>

  <div class="kard">

    <!-- for active card -->
    <div class="row-1a" v-if="card.props.clazz === 'POKEMON'">
        <div class="stage"> {{card.props.stage}} </div>
        <div class="hp"> {{card.props.initialHP}} </div>
    </div>

    <div class="row-2a" v-if="card.props.clazz === 'POKEMON'">
        <div> {{card.props.name}} </div>
    </div>

    <div class="row-3a" v-if="card.props.abilities" v-for="ability in card.props.abilities" :key="ability.id">
        <div class="ability-name"> {{ability.name}} </div>
        <div class="energy-req" v-for="energyReq in ability.energyReq" :key="energyReq.id">
            {{energyReq.type}}
            {{energyReq.amount}}
        </div>
        <div class="ability-desc"> {{ability.description}} </div>
    </div>

    <div class="row-4a" v-if="card.props.clazz === 'POKEMON'">
        <div class="retreat"> {{card.props.retreatCost}} </div>
        <div class="status"> {{card.props.status}} </div>

    </div>

    <!-- for trainer card -->
    <div class="row-1b" v-if="card.props.clazz === 'TRAINER'">
        <div class="category"> {{card.props.category}} </div>
    </div>

    <div class="row-2b" v-if="card.props.clazz === 'TRAINER'">
        <div> {{card.props.name}} </div>
    </div>

    <div class="row-3b" v-if="card.props.clazz === 'TRAINER'">
        <div class="ability"> {{card.props.ability}} </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: 'active-card',

  props: {
    card: {
      default: null,
      type: Object
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
        height: 350px;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 35px;
    }

    .row-1a {
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
        width: 45%;
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

    .row-2a {
        height: 10%;
        justify-content: center;
    }

    .row-3a {
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

    .row-4a {
        display: flex;
        height: 10%;
        justify-content: space-between;
    }

    .retreat {
        width: 10%;
        border-radius:50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;
        background-color: rgb(194, 194, 194);
    }

    .status {
        width: 30%;
        font-weight: bold;
        font-size: 14px;
    }

    .row-1b {
        display: flex;
        justify-content: space-between;
        height: 15%;
        border-radius: 10px 10px 0px 0px;
        background-color: #cacaca;
        flex-direction: row;
    }

    .row-2b {
        background-color: #4f61b3;
        height: 15%;
        justify-content: center;
        font-size: 18px;
    }

    .row-3b {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 70%;
        border-radius: 0px 0px 10px 10px;
        background-color: #cacaca;
        align-content: flex-start;
        font-family: Helvetica;
        flex-wrap: wrap;
        line-height: 22px;
        text-align: left;
    }

    .category {
        width: 50%;
        border-radius: 10px 0px 0px 0px;
        font-size: 14px;
        font-family: monospace;
        background-color: rgb(151, 0, 0);
        color: white;
        font-weight: bold;
    }

    .ability {
        font-size: 10px;
    }

</style>
