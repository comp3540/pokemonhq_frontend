<template>
  <div id="login">
    <p-header header="Forgot Password"/>
    <p-form @clearValidationErrors = "ValidationError.clear(fields, $event)">
      <p-input-text :field="fields.email" v-model="fields.email.value" />
      <button id="loginButton" @click="passwordReset()">Login</button>
      <router-link :to="{ name: 'Login' }">Back to login!</router-link>
    </p-form>
    <br>
    <p-alert-fail :message="failMessage" @close="failMessage = ''" />
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import ValidationError from '@/utilities/errors/ValidationError';
import Input from '@/utilities/form/Input';
export default {
  name: 'ForgotPassword',
  data () {
    return {
      ValidationError: ValidationError, // ValidationError helper
      Input: Input, // Input helper
      fields: { // all input fields
        password: {
          name: 'password',
          value: '',
          label: 'Password',
          error: ''
        }
      },

      // the message associated to the fail alert
      failMessage: ''
    };
  },

  methods: {
    // this method will attempt to send a reset password email based on the input values filled by the user
    async passwordReset () {
      try {
        // set the fail message to an empty just in case it is set at this point
        this.failMessage = '';

        // call the passwordReset which is an asynchronous method, passing in the input values.
        // Once the method has finished execution save the response.
        let response = await AuthenticationService.login(this.Input.getValue(this.fields));

        // set the success message to the response which will contain a "message" field containing the
        // success message
        this.successMessage = response.data.message;

        // clear all input values
        this.Input.clear(this.fields);
      } catch (error) {
        // catch validation errors if any
        if (error.response.status === 419) {
          // set the validation errors by associating them to the fields that did not
          // pass the backend validation
          this.ValidationError.set(this.fields, error.response.data);
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
