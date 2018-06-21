const User = require('./User')
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    deck: DataTypes.BLOB
  })
  Deck.belongsTo(User(sequelize, DataTypes))

  return Deck
}
