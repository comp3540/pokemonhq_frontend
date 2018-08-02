import Vue from 'vue';
import App from './App.vue';
import components from './components';
import router from './router';
import store from './store';
import Auth from '@/utilities/auth/Cookie';

Vue.use(components);
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !Auth.tokenIsset(document.cookie)) {
    next({ path: '/' });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
