<template>
  <div class="form-group" :class="{'has-error' : error !== '' }">
    <label class="control-label">{{label}}:</label>
    <input class="form-control" type="file" @change="upload($event)">
    <span class="help-block" v-if="error">{{error}}</span>
    <button type="submit"></button>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    error: {
      required: true,
      type: String
    }
  },
  data () {
    return {
    };
  },
  methods: {
    upload (event) {
      const file = event.target.files[0];
      const fr = new FileReader();
      const $this = this;
      fr.onload = (event) => {
        console.log(event.target.result);
        $this.$emit('upload', event.target.result);
      };
      fr.readAsText(file);
    }
  }
};
</script>
