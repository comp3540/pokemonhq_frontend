// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//@ts-ignore
import App from './App';
//@ts-ignore
import router from './router';
import { sync } from 'vuex-router-sync';
//@ts-ignore
import store from '@/store/store';
//@ts-ignore
import components from '@/components';

Vue.config.productionTip = false;
Vue.use(components);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
