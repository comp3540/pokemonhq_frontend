import Card from '@/types/cards/Card';
//import Enum from '@/types/Enum';     don't need this anymore

enum Stage{
  BASIC = 'basic',
  STAGE_ONE = 'stageone'
}

enum Type{
  FIGHTING = 'fighting',
  LIGHTNING = 'lightning',
  PSYCHIC = 'psychic',
  WATER = 'water',
  COLORLESS = 'colorless'
}

class RetreatCost {
  type: string;
  amount: number;
  constructor (o) {
    this.type = Type[o.type];
    this.amount = o.amount;
  }
}

class CardAbility {
  energyReq
  ability
  constructor (o) {
    this.energyReq = o.energyReq.map(er => new EnergyReq(er));
    this.ability = o.ability;
  }
}

class EnergyReq {
  type: string;
  amount: number;
  constructor (o) {
    this.type = Type[o.type];
    this.amount = o.amount;
  }
}

enum Status {
  POISONED = 'poisoned',
  ASLEEP = 'asleep',
  PARALYZED = 'paralyzed',
  STUCK = 'stuck',
  NONE = '' //null
}

class State {
  hp: number;
  status: string;
  energyCards
  itemCards
  evolvedFrom
  constructor (initialHp) {
    this.hp = initialHp;
    this.status = Status.NONE;
    this.energyCards = [];
    this.itemCards = [];
    this.evolvedFrom = null;
  }
}

class Pokemon extends Card {
  state
  type: string;
  stage: string;
  initialHp: number;
  evolvesFrom;
  retreatCost;
  abilities;
  constructor (o) {
    super(o);
    this.state = new State(o.initialHp);
    this.type = Type[o.type];
    this.stage = Stage[o.stage];
    this.initialHp = o.initialHp;
    this.evolvesFrom = o.evolvesFrom;
    this.retreatCost = new RetreatCost(o.retreatCost);
    this.abilities = o.abilities.map(ab => new CardAbility(ab));
  }
}

export default {
  Pokemon,
  Type,
  State,
  Status,
  EnergyReq,
  RetreatCost,
  Stage
};
