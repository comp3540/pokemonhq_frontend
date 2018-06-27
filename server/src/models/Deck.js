module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    deck: DataTypes.BLOB
  });
  return Deck;
};
