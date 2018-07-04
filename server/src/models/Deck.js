const mongoose = require('mongoose');
const DeckSchema = require('./../schemas/Deck');
const Deck = mongoose.model('Deck', DeckSchema);
module.exports = Deck;
