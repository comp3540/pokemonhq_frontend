<!-- This template is used for displaying fail messages in the GUI -->
<template>
  <div class="alert alert-danger alert-dismissible" v-show="message">
    <button href="#" class="close" data-dismiss="alert" aria-label="close" @click="$emit('close')">&times;</button>
    <strong>Fail!</strong> {{message}}.
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    message: {
      type: String
    }
  }
};
</script>
