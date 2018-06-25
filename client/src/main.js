// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
// generic components
import Text from './components/generic/form/input/Text'
import Password from './components/generic/form/input/Password'
import Form from './components/generic/form/Form'
import SuccessAlert from './components/generic/alert/Success'
import FailAlert from './components/generic/alert/Fail'

Vue.config.productionTip = false

sync(store, router)

// register components
Vue.component('v-input-text', Text)
Vue.component('v-input-password', Password)
Vue.component('v-form', Form)
Vue.component('v-alert-fail', FailAlert)
Vue.component('v-alert-success', SuccessAlert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
