<template>
  <button @click="logout()">Logout</button>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Auth from '../utilities/auth/Cookie';
  export default Vue.extend({
    name: 'logout',
    methods: {
      logout () {
        Auth.deleteToken();
        this.$router.replace({
          name: 'Login',
        });
        location.reload();
      }
    }
  })
</script>
<style type="text/css" scoped>
  button {
    position: absolute;
    float: right;
  }
</style>