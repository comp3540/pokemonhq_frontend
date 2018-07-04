import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';
import Board from './board';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
    board: Board
  }
});
