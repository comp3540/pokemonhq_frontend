module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    deck: DataTypes.BLOB
  });
  return Deck;
};
