export default {

  // map abilites to the card abilities
  abilitiesToCards (abilities, cards) {
    cards.map((card) => {
      card.pokemon.attacks.map((attack) => {
        if (abilities[attack.ability + 1]) {
          return Object.assign({}, abilities[attack.ability + 1]);
        } else {
          throw 'Ability at card attack ability index: ' +attack.ability+ 'does not exist';
        }
      })
    });
  }

  // map cards to deck
  cardsToDeck (cards, deck) {
    deck.map((index) => {
      if (cards[index + 1]) {
        return Object.assign({}, cards[index + 1]);
      } else {
        throw 'The card at index: ' + index + ' does not exist';
      }
    })
  }

}