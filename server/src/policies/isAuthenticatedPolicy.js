const passport = require('passport');

module.exports = function (req, res, next) {
  console.log(req);
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        message: 'You do not have access to this resource'
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};
