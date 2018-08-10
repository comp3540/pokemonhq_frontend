<template>
  <div class="container">
    <logout></logout>
    <p-header header="DECK UPLOAD"></p-header>
    <div class="row">
      <div class="col-md-6">
        <p-form>
          <p-input-text label="Deck name" :error="errors.name" @clearError="errors.name== ''" v-model="params.name" />
          <p-input-file label="Upload Your Deck" id="upload" @upload="getUpload($event)"/>
          <p-text-area label="Preview Deck" rows="10" cols="30" v-model="upload" :error="errors.deck" @clearError = "errors.deck = ''"/>
          <p-alert-success :message="successMessage" @close="successMessage = ''" />
          <p-alert-fail :message="failMessage" @close="failMessage = ''" />
          <button class="button" @click="save">Upload!</button>
        </p-form>
      </div>
      <div class="col-md-6 left-border">
        <my-decks :myDecks="myDecks" @selectedDeck="selectedDeck = $event" @error="majorErrorSet($event)"></my-decks>
        <label>Shuffle?</label>
        <input type="checkbox" :disabled="selectedDeck.length <= 0" v-model="shuffled" />
        <button class="btn btn-success" :disabled="majorError || selectedDeck <= 0" @click="newGame()">New Game!</button>
        OR
        <button class="btn btn-success" @click="resumeGame()">Resume Game!</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import DeckApi from '../../services/Deck';
import MyDecks from '@/app/uploadDeck/components/MyDecks.vue';
import Logout from '@/app/Logout.vue';
import ValidationErrorHelper from '../../utilities/errors/ValidationError';
import Vue from 'vue';
import _ from 'lodash';
import { mapMutations, mapActions } from 'vuex';

export default Vue.extend({
  name: 'UploadDeck',
  components: {
    MyDecks,
    Logout
  },
  data() {
    return {
      params: {
        name: '',
        deck: '',
      },
      errors: {
        name: '',
        deck: '',
      },
      upload: '',
      failMessage: '',
      majorError:false,
      successMessage: '',
      myDecks: [],
      selectedDeck: [],
      shuffled:false,
      state: {}
    };
  },
  created() {
    this.getMyDecks();
  },
  methods: {
    ...mapActions('board', ['getLatestState']),
    ...mapMutations('board', ['setDeck','setState','resetState']),
    async save() {
      try {
        this.checkUpload();
        const response = await DeckApi.save(this.params);
        this.successMessage = response.data.message;
        this.getMyDecks();
      } catch (error) {
        if (error.response.status === 419) {
          ValidationErrorHelper.set(this.errors, error.response.data);
        } else {
          this.failMessage = error.response.data.message;
        }
      }
    },

    getUpload(event: any) {
      this.upload = event.file;
    },

    checkUpload() {
      // replace next line with spaces
      this.params.deck = this.upload.replace(/\n/g, ' ');
    },
    async getMyDecks() {
      try {
        const decks = await DeckApi.get();
        this.myDecks = decks.data.decks;
      } catch (error) {
        this.failMessage = error.response.data.message;
      }
    },
    shuffle(){
      this.selectedDeck = _.shuffle(this.selectedDeck);
    },
    newGame () {
      if (this.shuffled) {
        this.shuffle();
      }
      this.resetState();
      this.setDeck({player:'your', deck:this.selectedDeck});
      this.setDeck({player:'opponent', deck:this.selectedDeck});
      this.$router.replace({
        name: 'GameBoard',
      });
    },
    async resumeGame () {
      try {
        await this.getLatestState();
        this.$router.replace({
            name: 'GameBoard',
        });
      } catch (error) {
        if (error.hasOwnProperty('response')) {
          this.failMessage = error.response.data.message;
        } else {
          console.log(error);
          this.failMessage = error;
        }
      }

    },
    majorErrorSet(event) {
      this.failMessage = event;
      this.majorError = true;
    }
  },
});
</script>
<style scoped>
  #upload input{
    height: 200px;
    background-color: lightblue;
  }
  .left-border {
    border-left: 1px solid lightgrey;
  }
  .btn{
    margin-right: 5px;
    margin-top: 5px;
  }
</style>
