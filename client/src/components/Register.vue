<template>
  <div id="registration">
    <h1 id="title">POKEMON GO BACK!</h1>
    <h3>Registration</h3>
    <div class="form">
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('first_name')}">
        <label class="control-label">First name:</label>
        <input type="text" class="form-control" v-model="form.fields.first_name.value">
        <span class="help-block" v-text="form.validationErrors.get('first_name')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('last_name')}">
        <label class="control-label">Last name:</label>
        <input type="text" class="form-control" v-model="form.fields.last_name.value">
        <span class="help-block" v-text="form.validationErrors.get('last_name')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('email')}">
        <label class="control-label">Email:</label>
        <input type="text" class="form-control" v-model="form.fields.email.value">
        <span class="help-block" v-text="form.validationErrors.get('email')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('password')}">
        <label class="control-label">Password:</label>
        <input type="password" class="form-control" v-model="form.fields.password.value">
        <span class="help-block" v-text="form.validationErrors.get('password')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('confirmed_password')}">
        <label class="control-label">Confirm password:</label>
        <input type="password" class="form-control" v-model="form.fields.confirmed_password.value">
        <span class="help-block" v-text="form.validationErrors.get('confirmed_password')"></span>
      </div>
      <button id="loginButton">Submit</button>
      <router-link :to="{ path: '/' }">Back to login!</router-link>
    </div>
  </div>
</template>

<script>
import Form from './../helpers/form'
export default {
  data () {
    return {

      form: new Form({
        first_name: {
          type: 'text',
          value: ''
        },
        last_name: {
          type: 'text',
          value: ''
        },
        email: {
          type: 'text',
          value: ''
        },
        password: {
          type: 'text',
          value: ''
        },
        confirmed_password: {
          type: 'text',
          value: ''
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
