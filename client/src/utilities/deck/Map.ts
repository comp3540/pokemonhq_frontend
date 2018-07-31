export default {

  // map abilites to the card abilities
  abilitiesToCards (abilities:any[], cards:any[]) {
    cards.map((obj) => {
      if(obj && obj.card.hasOwnProperty('pokemon')) {
        obj.card.pokemon.attacks.map((obj2: any) => {
          if (obj2.hasOwnProperty('attack') && abilities[obj2.attack.ability + 1]) {
           obj2.attack.ability = abilities[obj2.attack.ability + 1];
          } else {
            console.log('Ability at card attack ability index: ' +obj2.attack.ability+ 'does not exist');
          }
        })
      }
    });
  },

  // map cards to deck
  cardsToDeck (cards:any[], deck:number[]) {
    deck.map((index: any, position: any) => {
      let ind = parseInt(index);
      if (cards[ind + 1]) {
        deck[position] = Object.assign({}, cards[ind + 1]);
      } else {
        console.log('The card at index: ' + (ind +1) + ' does not exist');
      }
    })
  }

}