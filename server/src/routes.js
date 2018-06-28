// Controllers
const AuthenticationController = require('./controllers/AuthenticationController');
const DeckController = require('./controllers/DeckController');

// Policies
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const DeckControllerPolicy = require('./policies/DeckControllerPolicy');
const isAuthenticatedPolicy = require('./policies/isAuthenticatedPolicy');

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationControllerPolicy.login, AuthenticationController.login);
  app.post('/deck', isAuthenticatedPolicy, DeckControllerPolicy.save, DeckController.save);
  app.get('/deck', isAuthenticatedPolicy, DeckController.get);
};
