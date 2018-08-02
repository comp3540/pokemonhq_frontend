<template>

<v-popover placement="top-start">

  <div :class="cardColor" class="tooltip-target">

    <!-- POKEMON -->
    <div class="row-1a" v-if="card instanceof Pokemon"> 
        <div class="stage"> {{card.stage}} </div>
        <div class="currentHp"> {{card.state.hp}} </div>
        <div class="hp"> {{card.initialHp}} </div>
    </div>

    <div class="row-2a" v-if="card instanceof Pokemon">
            <div class="evolved-from" v-if="card.state.evolvedFrom"> 
                {{card.state.evolvedFrom.name}} <span class="arrow"> &rarr;&nbsp; </span> 
            </div> 
        <div class="name" :class="{'more-room': !card.state.evolvedFrom}"> {{card.name}} </div>
    </div>

    <!-- number of energy or item cards attached -->
    <div class="row-3a" v-if="card instanceof Pokemon">
        <div class="energy-attached" :class="{'more-room': !card.state.itemCard}"> e: 
            <div class="energy-symbol" v-for="energycard in card.state.energyCards" :key="energycard.instanceId"> 
                <div :class="`symbol-${energycard.type} card-img`"> </div> 
            </div> 
        </div> 
        <div class="item-attached tooltip-target" v-if="card.state.itemCard"> 
            <v-popover placement="top-start">
                i: {{card.state.itemCard.name}} 
                <template slot="popover">
                    <big-card :card="card.state.itemCard"/>
                </template>
            </v-popover>
        </div> 
    </div>

    <div class="row-4a" v-if="card instanceof Pokemon" v-for="attack in card.abilities" :key="attack.ability.id">
        <div class="ability-name"> {{attack.ability.name}} </div>
        <div class="energy-req" v-for="energyReq in attack.energyReq" :key="energyReq.id">
            <div :class="`symbol-${energyReq.type} card-img`"> </div> 
            <div class="amount"> &nbsp;: {{energyReq.amount}} </div>
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
            <div class="ability"> {{card.ability.interpretation}} </div>
        </div>
    </div>

    <!-- ENERGY -->
    <div class="energy-card" v-if="card instanceof Energy">
        <div :class="`symbol-${card.name.toLowerCase()} card-img-energy-card`"> </div>
    </div>

  </div>

  <template slot="popover">
    <big-card :card="card"/>
  </template>

</v-popover>

</template>

<script lang="ts">
import Vue from 'vue';
import BigCard from './BigCard.vue';
import * as pokemon from '@/types/cards/pokemon';
import * as energy from '@/types/cards/energy';
import * as trainer from '@/types/cards/trainer';
import VTooltip from 'v-tooltip';

Vue.use(VTooltip);

export default Vue.extend({
  name: 'small-card',
  props: {
    card: {
      default: null,
      type: Object,
      required: true,
    },
  },
  components: { BigCard },
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
        fighting: ct === 'fighting',
        psychic: ct === 'psychic',
        };
    },
  },
});
</script>

<style lang="scss" scoped>

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
        border-style: solid;
        border-color:#00000067;
    }
    .card-img {
        display: block;
        width: 12px;
        height: 12px;
        margin-top: 2px; 
        margin-left: 2px;
        background-size: cover;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow(2px 2px 2px #222);
    }

    .card-img-energy-card {
        display: block;
        width: 70%;
        height: 100px;
        background-size: cover;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow(5px 5px 5px #222);
    }

    .row-1a {
        display: flex;
        justify-content: space-between;
        height: 15%;
        background-color:#04ffff94;
        flex-direction: row;
        border-radius: 10px 10px 0px 0px;
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

    .currentHp {
        color: rgb(179, 20, 20);
        font-family: Helvetica;
        font-size: 13px;
    }

    .hp {
        align-content: flex-start;
        color: rgb(0, 0, 0);
        width: 15%;
        font-family: Helvetica;
        font-size: 13px;
        background-color: rgba(255, 255, 255, 0.514);
        border-radius: 0px 10px 0px 0px;
        font-weight: bold;
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
        display: flex;
        flex-direction: row;
        height: 15%;
        width: 100%;
        justify-content: center;
        font-size: 14px;
        background-color: #ffffff85;
    }

    .row-2b {
        background-color: #4f61b3;
        height: 15%;
        justify-content: center;
        font-size: 14px;
    }

    .evolved-from {
        font-family: Helvetica;
        font-size: 11px;
        line-height: 25px;
    }

    .more-room {
        width: 100%;
    }

    .row-3a {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 12%;
        background-color: #ffffff85;
        color: rgb(97, 97, 97);
        font-family: Helvetica;
        font-weight: bold;
        font-size: 10px;
        line-height: 15px;
    }

    .energy-attached {
        display: flex;
        flex: wrap;
        width: 50%;
        justify-content: flex-start;
        line-height: 15px;
    }

    .more-room {
        width: 100%;
    }

    .item-attached {
        width: 50%;
    }

    .row-4a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 58%;
        border-radius: 0px 0px 10px 10px;
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
        display: flex;
        flex-direction: row;
        width:30%;
        font-size: 10px;
    }

    .ability {
        font-size: 10px;
    }

    .energy-card {
        display:flex;
        width: 145px;
        height: 162px;
        align-items: center;
        justify-content: center;
    }

</style>

