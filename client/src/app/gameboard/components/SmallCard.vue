<template>

  <div class="kard">

    <!-- POKEMON -->
    <div class="row-1a" v-if="card.props.clazz === 'POKEMON'">
        <div class="stage" v-if="card.props.stage"> {{card.props.stage}} </div>
        <div class="hp" v-if="card.props.initialHP"> {{card.props.initialHP}} </div>
    </div>

    <div class="row-2a" v-if="card.props.clazz === 'POKEMON'">
        <div> {{card.props.name}} ID: {{card.props.id}}</div>
    </div>

    <div class="row-3a" v-if="card.props.clazz === 'POKEMON'" v-for="ability in card.props.abilities" :key="ability.id">
        <div class="ability-name"> {{ability.name}} </div>
        <div class="energy-req" v-for="energyReq in ability.energyReq" :key="energyReq.id">
            {{energyReq.type}}
            {{energyReq.amount}}
        </div>
    </div>

    <!-- TRAINER -->
    <div class= "row-1b" v-if="card.props.clazz === 'TRAINER'">
        <div class="category" v-if="card.props.category"> {{card.props.category}} </div>
    </div>

    <div class="row-2b" v-if="card.props.clazz === 'TRAINER'">
        <div> {{card.props.name}} </div>
    </div>

    <div class="row-3b" v-if="card.props.clazz === 'TRAINER'">
        <div v-if="card.props.ability">
                <div class="ability"> {{card.props.ability}} </div>
        </div>
    </div>

    <!-- ENERGY -->
    <div class= "energy-card" v-if="card.props.clazz === 'ENERGY'">
        <div> {{card.props.name}} </div>
    </div>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'small-card',
  props: {
    card: {
      default: null,
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>

    .kard {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        width: 145px;
        height: 162px;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 25px;
    }

    .row-1a {
        display: flex;
        justify-content: space-between;
        height: 15%;
        flex-direction: row;
        border-radius: 10px 10px 0px 0px;
        background-color: #ffcc00;
    }

    .row-1b {
        display: flex;
        justify-content: space-between;
        height: 15%;
        border-radius: 10px 10px 0px 0px;
        background-color: #cacaca;
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

    .category {
        width: 50%;
        border-radius: 10px 0px 0px 0px;
        font-size: 13px;
        font-family: monospace;
        background-color: rgb(151, 0, 0);
        color: white;
        font-weight: bold;
    }

    .row-2a {
        background-color: #ffcc00;
        height: 15%;
        justify-content: center;
        font-size: 14px;
    }

    .row-2b {
        background-color: #4f61b3;
        height: 15%;
        justify-content: center;
        font-size: 14px;
    }

    .row-3a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 70%;
        border-radius: 0px 0px 10px 10px;
        background-color: #ffff33;
        align-content: flex-start;
        font-family: Helvetica;
        flex-wrap: wrap;
        line-height: 22px;
        text-align: left;
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

    .ability-name {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
    }

    .energy-req {
        width:50%;
        font-size: 10px;
    }

    .ability {
        font-size: 10px;
    }

    .energy-card {
        display:flex;
        width: 145px;
        height: 162px;
        font-size: 20px;
        text-align: center;
        border-radius: 10px;
        background-color: #ffcc00;
        align-items: center;
        justify-content: center;
    }

</style>
