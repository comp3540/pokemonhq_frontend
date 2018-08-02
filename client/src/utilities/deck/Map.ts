export default {

  // map abilites to the card abilities
  abilitiesToCards (abilities:any[], cards:any[]) {
    cards.map((obj) => {
      if(obj && obj.card.hasOwnProperty('pokemon')) {
        obj.card.pokemon.attacks.map((obj2: any) => {
          if (obj2.hasOwnProperty('attack') && abilities[parseInt(obj2.attack.ability) - 1]) {
           obj2.attack.ability = abilities[parseInt(obj2.attack.ability) - 1];
          } else {
            throw 'Card attack ability index: ' +(parseInt(obj2.attack.ability) - 1)+ ' does not exist. Please upload valid abilities and cards files. Game cannot be started until you have fixed the issue';
          }
        })
      } else if (obj && obj.card.hasOwnProperty('trainer')) {
        if (obj.card.trainer.hasOwnProperty('ability') && abilities[parseInt(obj.card.trainer.ability) - 1]) {
           obj.card.trainer.ability = abilities[parseInt(obj.card.trainer.ability) - 1];
        } else {
          throw 'Trainer ability index: ' +(parseInt(obj.card.trainer.ability) - 1)+ ' does not exist. Please upload valid abilities and cards files. Game cannot be started until you have fixed the issue';
        }
      }
    });
  },

  // map cards to deck
  cardsToDeck (cards:any[], deck:number[]) {
    deck.map((index: any, position: any) => {
      let ind = parseInt(index);
      if (cards[ind - 1]) {
        deck[position] = Object.assign({}, cards[ind - 1]);
      } else {
        throw 'The card at index: ' + (ind +1) + ' does not exist. Please upload a valid deck file.  Game cannot be started until you have fixed the issue';
      }
    })
  }

}