// This file will be responsible for handling the authentication logic on the server
const User = require('./../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register (req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      const userJson = user.toJSON();
      return res.status(200).send({
        message: 'The user has been created!',
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      return res.status(400).send({
        message: 'This email has already been used'
      });
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        email: email
      });
      if (!user) {
        return res.status(403).send({
          message: 'The login information was not correct'
        });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          message: 'The login information was not correct'
        });
      }
      const userJson = user.toJSON();
      return res.status(200).send({
        message: 'SUCCESS',
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: 'An error has occured, please try again later'
      });
    }
  }
};
