<template>
  <div>
    <label class="control-label">{{label}}:</label>
    <div class="outer">
      <div class="form-group absolute" :class="{'has-error' : error !== '' }">
        <h3>CLICK OR DRAG/DROP TO UPLOAD</h3>
        <input class="form-control relative" type="file" @change="upload($event)">
      </div>
    </div>
    <span class="help-block" v-if="error">{{error}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String,
    },
    error: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  methods: {
    upload(event: any) { // Deal w/ this
      const file = event.target.files[0];
      const fr = new FileReader();
      const $this = this;
      fr.onload = (loaded) => {
        if (!loaded || !loaded.target || !loaded.target.result) {
          return;
        }

        $this.$emit('upload', {file: loaded.target.result});
        $this.$emit('clearError');
      };
      fr.readAsText(file);
    },
  },
});
</script>
<style type="text/css">
  .relative {
    position: relative;
    z-index: 2;
    opacity: 0;
    height: 80%;
  }
  .absolute {
    position: absolute;
    background-color: lightblue;
    width: 500px;
    height: 100%;
  }
  .outer {
    width: 500px;
    height: 230px;
    position: relative;
    margin-bottom: 10px;
  }
</style>
