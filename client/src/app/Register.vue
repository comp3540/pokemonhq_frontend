<template>
  <div id="registration">
    <p-header header="Registration"/>
    <p-form>
      <p-input-text label="First name" v-model="params.first_name" @clearError="errors.first_name = ''" :error="errors.first_name"/>
      <p-input-text label="Last name" v-model="params.last_name" @clearError="errors.last_name = ''" :error="errors.last_name"/>
      <p-input-text label="Email" v-model="params.email" @clearError="errors.email = ''" :error="errors.email"/>
      <p-input-password :value="params.password" @clearError="errors.password = ''" label="Password" v-model="params.password" :error="errors.password"/>
      <button class="button" @click="register()">Submit</button>
      <router-link :to="{ name: 'Login' }">Back to login!</router-link>
    </p-form>
    <br>
    <p-alert-success :message="successMessage" @close="successMessage = ''" />
    <p-alert-fail :message="failMessage" @close="failMessage = ''" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AuthenticationService from '@/services/AuthenticationService';
import ValidationError from '@/utilities/errors/ValidationError';
import InputHelper from '@/utilities/form/Input';
export default {
  name: 'Register',
  data () {
    return {
      params: { // all input fields
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      errors: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        file: ''
      },
      // the message associated to the fail alert
      failMessage: '',

      // the message associated to the success alert
      successMessage: ''
    };
  },

  methods: {
    // this method will attempt to register based on the input values filled by the user
    async register () {
      try {
        // set the fail message to an empty just in case it is set at this point
        this.failMessage = '';

        // set the success message to an empty just in case it is set at this point
        this.successMessage = '';

        // call the register which is an asynchronous method, passing in the input values.
        // Once the method has finished execution save the response.
        let response = await AuthenticationService.register(this.params);

        // set the success message to the response which will contain a "message" field containing the
        // success message
        this.successMessage = response.data.message;

        // clear all input values
        InputHelper.clear(this.params);
      } catch (error) {
        // catch validation errors if any
        if (error.response.status === 419) {
          // set the validation errors by associating them to the fields that did not
          // pass the backend validation
          ValidationError.set(this.errors, error.response.data);
        } else if (error.response.status === 400) {
          // Set the fail message to the response error message
          this.failMessage = error.response.data.message;
        }
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
