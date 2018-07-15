import Card from '@/types/cards/Card';
import pokemon from '@/types/cards/pokemon';
import trainer from '@/types/cards/trainer';
import energy from '@/types/cards/energy';
enum Player {
  OPPONENT = 'opponent',
  YOUR = 'your'
}

class TurnState{ //booleans
  public isFirstTurn: boolean;
  public energyPlayed: boolean;
  public yourMulligan: boolean; 
  public opponentMulligan: boolean;
  public mustPlaceCard: boolean;
  public mustPlaceItems: boolean;
  public mustEndTurn: boolean;

  constructor(){
    this.isFirstTurn = true;
    this.energyPlayed = false;
    this.yourMulligan = false
    this.opponentMulligan = false;
    this.mustPlaceCard = false;
    this.mustPlaceItems = false;
    this.mustEndTurn = false;
  }
}

class State {
   public activePlayer: Player;
   public turnState: TurnState;
   public your: PlayerState;
   public opponent: PlayerState;
   constructor(o: any){
     this.activePlayer = (<any>Player)[o.activePlayer];
     this.turnState = new TurnState();
     this.your = new PlayerState(o.your);
     this.opponent = new PlayerState(o.opponent);
   }
}

class PlayerState {
  public active: Card[];
  public bench: Card[];
  public deck: Card[];
  public discard: Card[];
  public hand: Card[];
  public prize: Card[];

  constructor(o: any){
     this.active = o.active.map((card: any) => deserialize(card));
     this.bench = o.bench.map((card: any) => deserialize(card));
     this.deck = o.deck.map((card: any) => deserialize(card));
     this.discard = o.discard.map((card: any) => deserialize(card));
     this.hand = o.hand.map((card: any) => deserialize(card));
     this.prize = o.prize.map((card: any) => deserialize(card));
  }
}

function deserialize(cardObj: any){
  if(Object.hasOwnProperty('pokemon')){
    return new pokemon.Pokemon(cardObj);
  } else if(Object.hasOwnProperty('trainer')) {
    return new trainer.Trainer(cardObj);
  } else if(Object.hasOwnProperty('energy')) {
    return new energy.Energy(cardObj);
  } else {
    console.log('The card does not exist:' + cardObj);
  }
}


export default {
  State
}
