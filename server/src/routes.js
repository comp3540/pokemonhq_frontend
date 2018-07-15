// Controllers
const AuthenticationController = require('./controllers/AuthenticationController');
const DeckController = require('./controllers/DeckController');

// Policies
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const DeckControllerPolicy = require('./policies/DeckControllerPolicy');
const isAuthenticatedPolicy = require('./policies/isAuthenticatedPolicy');

module.exports = (app) => {
  app.post('/api/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/api/login', AuthenticationControllerPolicy.login, AuthenticationController.login);
  app.post('/api/deck', isAuthenticatedPolicy, DeckControllerPolicy.save, DeckController.save);
  app.get('/api/deck', isAuthenticatedPolicy, DeckController.get);
};
