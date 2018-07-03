import Card from '@/types/cards/Card';
import Enum from '@/types/Enum';

class Stage extends Enum { }
Stage.of({
  BASIC: 'basic',
  STAGE_ONE: 'stageone'
});

class Type extends Enum { }
Type.of({
  FIGHTING: 'fighting',
  LIGHTNING: 'lightning',
  PSYCHIC: 'psychic',
  WATER: 'water',
  COLORLESS: 'colorless'
});

class RetreatCost {
  constructor (o) {
    this.type = Type.from(o.type);
    this.amount = o.amount;
  }
}

class CardAbility {
  constructor (o) {
    this.energyReq = o.energyReq.map(er => new EnergyReq(er));
    this.ability = o.ability;
  }
}

class EnergyReq {
  constructor (o) {
    this.type = Type.from(o.type);
    this.amount = o.amount;
  }
}

class Status extends Enum { }
Status.of({
  POISONED: 'poisoned',
  ASLEEP: 'asleep',
  PARALYZED: 'paralyzed',
  STUCK: 'stuck',
  NONE: null
});

class State {
  constructor (initialHp) {
    this.hp = initialHp;
    this.status = Status.NONE;
    this.energyCards = [];
    this.itemCards = [];
    this.evolvedFrom = null;
  }
}

class Pokemon extends Card {
  constructor (o) {
    super(o);
    this.state = new State(o.initialHp);
    this.type = Type.from(o.type);
    this.stage = Stage.from(o.stage);
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
