import Card from '@/types/cards/Card';
import * as pokemon from '@/types/cards/pokemon';
import * as trainer from '@/types/cards/trainer';
import * as energy from '@/types/cards/energy';

export enum Player {
  OPPONENT = 'opponent',
  YOUR = 'your'
}

export class TurnState{ //booleans
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

export class State {
   public activePlayer: Player;
   public turnState: TurnState;
   public your: PlayerState;
   public opponent: PlayerState;
   constructor(o: any){
     this.activePlayer = o.activePlayer;
     this.turnState = new TurnState();
     this.your = new PlayerState(o.your);
     this.opponent = new PlayerState(o.opponent);
   }
}

export class PlayerState {
  public active: pokemon.Pokemon[];
  public bench: pokemon.Pokemon[];
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

  setDeck (o) {
    this.deck = o.map((card: any) => deserialize(card));
  }

}

function deserialize(cardObj: any){
  if(cardObj.card.hasOwnProperty('pokemon')){
    return new pokemon.Pokemon(Object.assign({}, cardObj.card.pokemon));
  } else if(cardObj.card.hasOwnProperty('trainer')) {
    return new trainer.Trainer(Object.assign({}, cardObj.card.trainer));
  } else if(cardObj.card.hasOwnProperty('energy')) {
    return new energy.Energy(Object.assign({}, cardObj.card.energy));
  } else {
    console.log('The card does not exist: ' + cardObj);
  }
}
