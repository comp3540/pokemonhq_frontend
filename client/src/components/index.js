// generic components
import Text from './form/Text';
import Password from './form/Password';
import Form from './form/Form';
import SuccessAlert from './alert/Success';
import FailAlert from './alert/Fail';
import Header from './Header';
import File from './form/File';
import TextArea from './form/TextArea';

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
