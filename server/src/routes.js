const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const isAuthenticatedPolicy = require('./policies/isAuthenticatedPolicy')
module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register),
  app.post('/login', AuthenticationControllerPolicy.login, AuthenticationController.login)
  app.get('/dashboard', isAuthenticatedPolicy)
}
