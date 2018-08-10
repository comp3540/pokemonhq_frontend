// Controllers
const AuthenticationController = require('./controllers/AuthenticationController');
const DeckController = require('./controllers/DeckController');
const StateController = require('./controllers/StateController');

// Policies
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const DeckControllerPolicy = require('./policies/DeckControllerPolicy');
const isAuthenticatedPolicy = require('./policies/isAuthenticatedPolicy');

module.exports = (app) => {
  // api routes
  app.post('/api/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/api/login', AuthenticationControllerPolicy.login, AuthenticationController.login);
  app.post('/api/deck', isAuthenticatedPolicy, DeckControllerPolicy.save, DeckController.save);
  app.post('/api/state', isAuthenticatedPolicy, StateController.save);
  app.get('/api/deck', isAuthenticatedPolicy, DeckController.get);
  app.get('/api/state', isAuthenticatedPolicy, StateController.get);
};
