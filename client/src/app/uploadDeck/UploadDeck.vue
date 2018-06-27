<template>
  <div class="container">
    <p-header header="DECK UPLOAD"></p-header>
    <div class="row">
      <div class="col-md-6">
        <p-form>
          <p-input-text label="Deck name" :error="errors.name" @clearError="errors.name== ''" v-model="params.name" />
          <p-input-file label="Upload Your Deck" id="upload" @upload="getUpload($event)"/>
          <p-text-area label="Preview Deck" rows="10" cols="30" v-model="params.deck" :error="errors.deck" @clearError = "errors.deck = ''"/>
          <p-alert-success :message="successMessage" @close="successMessage = ''" />
          <p-alert-fail :message="failMessage" @close="failMessage = ''" />
          <button class="button" @click="save">Upload!</button>
        </p-form>
      </div>
      <div class="col-md-6 left-border">
        <my-decks :myDecks="myDecks"></my-decks>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import DeckApi from '@/services/DeckService';
import MyDecks from '@/app/uploadDeck/components/MyDecks';
import ValidationErrorHelper from '@/utilities/errors/ValidationError';
export default {
  name: 'GameBoard',
  components: {
    MyDecks
  },
  data () {
    return {
      params: {
        name: '',
        deck: ''
      },
      errors: {
        name: '',
        deck: ''
      },
      failMessage: '',
      successMessage: '',
      myDecks: []
    };
  },
  created () {
    this.getMyDecks();
  },

  methods: {
    async save () {
      try {
        this.checkDeck();
        let response = await DeckApi.save(this.params);
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

    setDeck (deck) {
      this.params.deck = deck;
    },

    setMyDecks (decks) {
      this.myDecks = decks;
    },

    getUpload (event) {
      this.setDeck(event.file);
    },

    checkDeck () {
      // replace next line with spaces
      var checkedDeck = this.params.deck.replace(/\n/g, ' ');
      this.params.deck = checkedDeck;
    },

    async getMyDecks () {
      try {
        let decks = await DeckApi.get();
        this.setMyDecks(decks.data.decks);
      } catch (error) {
        this.failMessage = error.response.data.message;
      }
    }
  }
};
</script>
<style scoped>
  #upload input{
    height: 200px;
    background-color: lightblue;
  }
  .left-border {
    border-left: 1px solid lightgrey;
  }
</style>
