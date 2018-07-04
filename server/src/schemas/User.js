const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Deck = require('./Deck');
const State = require('./State');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

var UserSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, index: { unique: true } },
  password: { type: String },
  decks: [Deck],
  states: [State]
});

// middleware
UserSchema.pre('save', function (next) {
  const SALT_FACTOR = 8;
  if (!this.isModified('password')) return next();
  bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(this.password, salt, null))
    .then(hash => {
      this.password = hash;
    });
  next();
});

// added methods
UserSchema.methods.comparePassword = async function (password) {
  let response = await bcrypt.compareAsync(password, this.password);
  return response;
};

module.exports = UserSchema;
