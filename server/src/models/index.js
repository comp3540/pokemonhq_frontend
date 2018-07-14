const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
const config = require('./../config/config');
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);

fs.readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// initialize relationships
db.Deck.belongsTo(db.User);
db.User.hasMany(db.Deck, {as: 'Decks'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;