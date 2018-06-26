import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/app/Login';
import Register from '@/app/Register';
import ForgotPassword from '@/app/ForgotPassword';
import UploadDeck from '@/app/UploadDeck';
import GameBoard from '@/app/gameboard/GameBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard
    },
    {
      path: '/upload',
      name: 'UploadDeck',
      component: UploadDeck
    }
  ]
});
