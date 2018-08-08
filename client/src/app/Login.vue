<template>
  <div id="login">
    <p-header header=""/>
    <p-form @clearValidationErrors = "ValidationError.clear(errors, $event)">
      <p-input-text label="Email" v-model="params.email" @clearError="errors.email = ''" :error="errors.email" />
      <p-input-password label="Password" @clearError="errors.password = ''" v-model="params.password" :error="errors.password" />
      <button class="button" @click="login()">Login</button>
      <router-link :to="{ name: 'Register' }">Register now!</router-link>
    </p-form>
    <br>
    <p-alert-fail :message="failMessage" @close="failMessage = ''" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AuthenticationService from '../services/AuthenticationService';
import ValidationErrorHelper from '../utilities/errors/ValidationError';
import Auth from '../utilities/auth/Cookie';
import InputHelper from '../utilities/form/Input';
import { mapActions } from 'vuex';
export default Vue.extend({
  name: 'Login',
  data() {
    return {
      params: { // all input fields
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      },
      // the message associated to the fail alert
      failMessage: '',
    };
  },

  methods: {
    ...mapActions('user', [
      'setToken',
      'setUser',
    ]),

    // this method will attempt to loging based on the input values filled by the user
    async login() {
      try {
        // set the fail message to an empty just in case it is set at this point
        this.failMessage = '';

        // call the login which is an asynchronous method, passing in the input values.
        // Once the method has finished execution save the response.
        const response = await AuthenticationService.login(this.params);

        // set the global user token
        Auth.setToken(response.data.token);

        // go to card upload screen
        this.$router.push({
          name: 'UploadDeck',
        });

        // clear all input values
        InputHelper.clear(this.params);
      } catch (error) {
        // catch validation errors if any
        if (error.response.status === 419) {
          // set the validation errors by associating them to the fields that did not
          // pass the backend validation
          ValidationErrorHelper.set(this.errors, error.response.data);
        } else if (error.response.status === 403 || error.response.status === 500) {
          // Set the fail message to the response error message
          this.failMessage = error.response.data.message;
        }
      }
    },
    logout() {
      (this as any).setToken(null);
      (this as any).setUser(null);
      this.$router.push({
        name: 'Login',
      });
    },
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
