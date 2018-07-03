// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import components from '@/components';
import Auth from '@/utilities/auth/Cookie';
console.log(Auth.tokenIsset(document.cookie));
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !Auth.tokenIsset(document.cookie)) {
    next({ path: '/' });
  } else {
    next();
  }
});

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
