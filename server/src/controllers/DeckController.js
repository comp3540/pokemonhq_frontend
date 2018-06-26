// This file will be responsible for handling the authentication logic on the server
const {User} = require('./../models');
const {Deck} = require('./../models');
module.exports = {
  async save (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user.id
        }
      });
      const newDeck = await Deck.create(req.body);
      await user.addDecks(newDeck);
      return res.status(200).send({
        message: 'Your deck has been successfully uploaded'
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        message: 'There was an error uploading your deck, please try again.'
      });
    }
  },
  async get (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user.id
        }
      });
      let allDecks = await user.getDecks();
      return res.status(200).send({
        decks: allDecks
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        message: 'There was an error fetching your decks, please try again.'
      });
    }
  },
  async delete (req, res) {

  }
};
