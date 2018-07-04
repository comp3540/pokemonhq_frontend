import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/app/Login';
import Register from '@/app/Register';
import ForgotPassword from '@/app/ForgotPassword';
import UploadDeck from '@/app/uploadDeck/UploadDeck';
import GameBoard from '@/app/gameboard/GameBoard';

Vue.use(Router);

export default new Router({
  mode: 'history', // DO NOT EDIT
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/forgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/upload',
      name: 'UploadDeck',
      component: UploadDeck,
      meta: {
        requireAuth: true
      }
    }
  ]
});
