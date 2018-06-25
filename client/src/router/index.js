import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/app/Login'
import Register from '@/app/Register'
import ForgotPassword from '@/app/ForgotPassword'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
