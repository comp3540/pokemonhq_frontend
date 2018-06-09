<template>
  <div id="registration">
    <h1 id="title">POKEMON GO BACK!</h1>
    <h3>Registration</h3>
    <div class="form" @keydown="form.validationErrors.clear($event.target.name)">
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('first_name')}">
        <label class="control-label">First name:</label>
        <input type="text" class="form-control" name="first_name" v-model="form.fields.first_name.value">
        <span class="help-block" v-text="form.validationErrors.get('first_name')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('last_name')}">
        <label class="control-label">Last name:</label>
        <input type="text" class="form-control" name="last_name" v-model="form.fields.last_name.value">
        <span class="help-block" v-text="form.validationErrors.get('last_name')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('email')}" @keydown="resetGlobalError()">
        <label class="control-label">Email:</label>
        <input type="text" class="form-control" name="email" v-model="form.fields.email.value">
        <span class="help-block" v-text="form.validationErrors.get('email')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('password')}">
        <label class="control-label">Password:</label>
        <input type="password" class="form-control" name="password" v-model="form.fields.password.value">
        <span class="help-block" v-text="form.validationErrors.get('password')"></span>
      </div>
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('confirmed_password')}">
        <label class="control-label">Confirm password:</label>
        <input type="password" class="form-control" name="confirmed_password" v-model="form.fields.confirmed_password.value">
        <span class="help-block" v-text="form.validationErrors.get('confirmed_password')"></span>
      </div>
      <button id="loginButton" @click="register()">Submit</button>
      <router-link :to="{ path: '/' }">Back to login!</router-link>
    </div>
    <br>
    <div class="alert alert-danger" v-if="globalError.set">
      {{globalError.value}}
    </div>
  </div>
</template>

<script>
import Form from '@/helpers/form'
import AuthenticationService from '@/services/AuthenticationService'
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
      }),

      globalError: {
        value: '',
        set: false
      }
    }
  },

  methods: {
    async register () {
      try {
        await AuthenticationService.register(this.form.data())
      } catch (error) {
        console.log(error.response.data)
        if (error.response.status === 419) {
          this.form.validationErrors.set(error.response.data)
        } else if (error.response.status === 400) {
          this.globalError.set = true
          this.globalError.value = error.response.data.message
        }
      }
    },

    resetGlobalError () {
      this.globalError.set = false
      this.globalError.value = ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
