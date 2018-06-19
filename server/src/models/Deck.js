module.exports = (sequelize, DataTypes) =>
  sequelize.define('Deck', {
    Deck.belongsTo(User, {foreignKey: 'user_ID'}),
    deck: DataTypes.BLOB,
  })
