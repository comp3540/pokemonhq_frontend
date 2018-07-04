// generic components
import Text from './form/Text.vue';
import Password from './form/Password.vue';
import Form from './form/Form.vue';
import SuccessAlert from './alert/Success.vue';
import FailAlert from './alert/Fail.vue';
import Header from './Header.vue';
import File from './form/File.vue';
import TextArea from './form/TextArea.vue';

// register components
export default {
  install (Vue) {
    Vue.component('p-input-text', Text);
    Vue.component('p-input-password', Password);
    Vue.component('p-input-file', File);
    Vue.component('p-text-area', TextArea);
    Vue.component('p-form', Form);
    Vue.component('p-alert-fail', FailAlert);
    Vue.component('p-alert-success', SuccessAlert);
    Vue.component('p-header', Header);
  }
};
