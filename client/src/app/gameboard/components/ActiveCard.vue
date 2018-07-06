<template>

  <div :class="cardColor1">

    <!-- for active card -->
    <div class="row-1a" v-if="card instanceof Pokemon">
        <div class="stage"> {{card.stage}} </div>
        <div class="hp"> {{card.initialHp}} </div>
    </div>

    <div class="row-2a" v-if="card instanceof Pokemon">
        <div> {{card.name}} </div>
    </div>

    <div class="row-3a" v-if="card.abilities" v-for="attack in card.abilities" :key="attack.ability.id">
        <div class="ability-name"> {{attack.ability.name}} </div>
        <div class="energy-req" v-for="energyReq in attack.energyReq" :key="energyReq.id">
            {{energyReq.type}}
            {{energyReq.amount}}
        </div>
        <div class="ability-desc"> {{attack.ability.description}} </div>
    </div>

    <div class="row-4a" v-if="card instanceof Pokemon">
        <div class="retreat"> {{card.retreatCost.amount}} </div>
        <div class="status"> {{card.status}} </div>

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
  name: 'active-card',

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
    cardColor1(this:any):any {
        const ct = this.card.type;
        return { 
        'kard': true, 
        'lightning': ct === 'lightning',
        'water': ct === 'water',
        'fighting': ct === 'fightning',
        'psychic': ct === 'psychic',
        };
    },
   cardColor2(this:any):any {
        const ct = this.card.type;
        return { 
        'row-3a': true, 
        'lightning': ct === 'lightning',
        'water': ct === 'water',
        'fighting': ct === 'fightning',
        'psychic': ct === 'psychic',
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
    }

    .lightning {
        background-color: #ffcc00;
    }
    .water {
        background-color: rgb(84, 84, 216);
    }

    .fighting { 
        background-color: #c95000;
    }

    .psychic {
        background-color: #f110d3;
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
