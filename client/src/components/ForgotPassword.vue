<template>
  <div id="login">
    <h1 id="title">POKEMON GO BACK!</h1>
    <h3>Forgot Password</h3>
    <div class="form">
      <div class="form-group" :class="{'has-error' : form.validationErrors.has('email')}">
        <label class="control-label" for="email">Email:</label>
        <input type="text" class="form-control" name="email" v-model="form.fields.email.value">
        <span class="help-block" v-text="form.validationErrors.get('email')"></span>
      </div>
      <button id="loginButton" @click="login">Submit</button>
      <router-link :to="{ path: '/' }">Back to login!</router-link>
    </div>
  </div>
</template>

<script>
import Form from './../helpers/form'
export default {
  name: 'ForgotPassword',
  data () {
    return {
      form: new Form({
        email: {
          type: 'text',
          value: ''
        }
      })
    }
  },

  methods: {
    login () {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
