<template>

  <div :class="cardColor">

    <!-- for active card -->
    <!-- stage and hp -->
    <div class="row-1a" v-if="card instanceof Pokemon">
        <div class="stage"> {{card.stage}} </div>
        <div class="currentHp"> current: {{card.state.hp}} </div> 
        <div class="hp"> {{card.initialHp}} </div>
    </div>

    <!-- name -->
    <div class="row-2a" v-if="card instanceof Pokemon">
        <div class="name"> {{card.name}} </div>
        <!-- <div class="evolved-from" v-if="card.state.evolvedFrom instanceOf Pokemon"> ({{card.state.evolvedFrom}}) </div> -->
    </div>

    <!-- number of energy or item cards attached -->
    <div class="row-3a" v-if="card instanceof Pokemon">
        <div class="energy-attached"> energy: {{card.state.energyCards}} </div> <!-- unfinished -->
        <div class="item-attached"> items: {{card.state.itemCards}} </div> <!-- unfinished -->
    </div>

    <!-- abilities -->
    <div class="row-4a" v-if="card.abilities" v-for="attack in card.abilities" :key="attack.ability.id">
        <div class="ability-name"> {{attack.ability.name}} </div>
        <div class="energy-req" v-for="energyReq in attack.energyReq" :key="energyReq.id">
            <div :class="`symbol-${energyReq.type} card-img`"> </div> 
            <div class="amount"> &nbsp;: {{energyReq.amount}} </div>
        </div>
        <div class="ability-desc"> {{attack.ability.description}} </div>
    </div>

    <!-- retreat cost and status -->
    <div class="row-5a" v-if="card instanceof Pokemon">
        <div class="retreat"> 
            <div :class="`symbol-${card.retreatCost.type} card-img-retreat`"> 
            </div>
            <div class="retreat-cost">
                &nbsp;: {{card.retreatCost.amount}} 
            </div>
        </div>
        <div class="status"> status: {{card.state.status}} </div> 

    </div>

    <!-- for trainer card -->
    <div class="row-1b" v-if="card instanceof Trainer">
        <div class="category"> {{card.category}} </div>
    </div>

    <div class="row-2b" v-if="card instanceof Trainer">
        <div> {{card.name}} </div>
    </div>

    <div class="row-3b" v-if="card instanceof Trainer">
        <div class="ability"> {{card.ability}} </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pokemon from '@/types/cards/pokemon';
import energy from '@/types/cards/energy';
import trainer from '@/types/cards/trainer';

export default Vue.extend({
  name: 'big-card',

  props: {
    card: {
      default: null,
      type: Object,
    },
  },
  data() {
      return {
          // We inject some types for the templates to see,
          Pokemon: pokemon.Pokemon,
          Energy: energy.Energy,
          Trainer: trainer.Trainer,
      };
  },
  computed: {
    cardColor(this: any): any {
        const ct = this.card.type;
        return {
            kard: true,
            lightning: ct === 'lightning',
            water: ct === 'water',
            fighting: ct === 'fightning',
            psychic: ct === 'psychic',
        };
    },
  },
});
</script>

<style scoped>

    .kard {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        width: 300px;
        height: 350px;
        color: black;
        text-align: center;
        border-radius: 10px;
        line-height: 35px;
        border-style: solid;
        border-color:#00000067;
    }

    .card-img {
        display: block;
        width: 30%;
        height: 15px;
        margin-top: 2px; 
        margin-left: 2px;
        background-size: cover;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow(2px 2px 2px #222);
    }

    .card-img-retreat {
        display: block;
        width: 25%;
        height: 22px;
        margin-top: 5px; 
        margin-left: 5px; 
        background-size: cover;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow(2px 2px 2px #222);
    }

    .lightning {
        background-color: #ffe600;
    }
    .water {
        background-color: rgb(84, 84, 216);
    }

    .fighting { 
        background-color: #ff6600;
    }

    .psychic {
        background-color: #e90d9f;
    }

    .row-1a {
        display: flex;
        justify-content: space-between;
        background-color:#04ffff94;
        border-radius: 10px 10px 0px 0px;
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

    .currentHp {
        color: rgb(179, 20, 20);
        font-family: Helvetica;
        font-size: 20px;
    }

    .hp {
        align-content: flex-start;
        color: rgb(0, 0, 0);
        background-color:rgba(255, 255, 255, 0.514);
        width: 15%;
        border-radius: 0px 10px 0px 0px;
        font-family: Helvetica;
        font-weight: bold;
        font-size: 20px;
    }

    .row-2a {
        display: flex;
        flex-direction: row;
        height: 7%;
        width: 100%;
        justify-content: center;
        background-color: #ffffff85;
    }

    .name {
        width: 70%
    }

    .evolved-from {
        width: 30%;
        font-family: Helvetica;
        font-size: 16px;
    }

    .row-3a {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 7%;
        background-color: #ffffff85;
        color: rgb(97, 97, 97);
        font-family: Helvetica;
        font-weight: bold;
        font-size: 14px;
        line-height: 27px;
    }

    .energy-attached {
        width: 50%;
    }

    .item-attached {
        width: 50%;
    }

    .row-4a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 66%;
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
        display: flex;
        flex-direction: row;
        width:17%;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
    }
     
    .ability-desc {
        width: 100%;
        font-size: 14px;
        text-align: left;
    }

    .row-5a {
        display: flex;
        height: 10%;
        justify-content: space-between;
        border-radius: 0px 0px 10px 10px;
        background-color: #ffffff42;
    }

    .retreat-cost {
        font-family: Helvetica;
        font-weight: bold;
    }

    .retreat {
        display: flex;
        flex-direction: row;
        width: 30%;
    }

    .status {
        width: 55%;
        font-weight: bold;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.295);
        border-radius: 0px 0px 10px 0px;
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
