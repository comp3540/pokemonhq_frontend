<template>
  <div class="container">
    <p-form>
      <p-header header="DECK UPLOAD"></p-header>
      <p-text-area label="Copy paste your deck" rows="10" cols="60" v-model="params.textArea" :error="errors.textArea"/>
      <h2>OR</h2>
      <p-input-file label="Upload your deck" id="upload" :error="errors.upload"/>
      <p-alert-success :message="successMessage" @close="successMessage = ''" />
      <p-alert-fail :message="failMessage" @close="failMessage = ''" />
      <button class="button">Upload!</button>
    </p-form>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      params: {
        textArea: ''
      },
      errors: {
        textArea: '',
        upload: ''
      },
      failMessage: '',
      successMessage: ''
    };
  }
};
</script>
<style scoped>
  #upload input{
    height: 200px;
    background-color: lightblue;
  }
</style>
