<template>

  <div class="kard">

    <!-- POKEMON -->
    <div :class="cardColor" v-if="card instanceof Pokemon"> 
        <div class="stage" v-if="card.stage"> {{card.stage}} </div>
        <div class="hp" v-if="card.initialHP"> {{card.initialHP}} </div>
    </div>

    <div class="row-2a" v-if="card instanceof Pokemon">
        <div> {{card.name}} ID: {{card.id}}</div>
    </div>

    <div class="row-3a" v-if="card instanceof Pokemon" v-for="ability in card.abilities" :key="ability.attack.id">
        <div class="ability-name"> {{ability.attack.name}} </div>
        <div class="energy-req" v-for="energyReq in ability.energyReq" :key="energyReq.id">
            {{energyReq.type}}
            {{energyReq.amount}}
        </div>
    </div>

    <!-- TRAINER -->
    <div class= "row-1b" v-if="card instanceof Trainer">
        <div class="category" v-if="card.category"> {{card.category}} </div>
    </div>

    <div class="row-2b" v-if="card instanceof Trainer">
        <div> {{card.name}} </div>
    </div>

    <div class="row-3b" v-if="card instanceof Trainer">
        <div v-if="card.ability">
                <div class="ability"> {{card.ability}} </div>
        </div>
    </div>

    <!-- ENERGY -->
    <div :class="cardColor" v-if="card instanceof Energy">
        <div> {{card.name}} </div>
    </div>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import pokemon from '@/types/cards/pokemon';
import energy from '@/types/cards/energy';
import trainer from '@/types/cards/trainer';

export default Vue.extend({
  name: 'small-card',
  props: {
    card: {
      default: null,
      type: Object,
      required: true,
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
    cardColor(this:any):any {
        const ct = this.card.type;
        return { 
        'row-1a': true, 
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
        align-items: center;
        justify-content: center;
    }

</style>
