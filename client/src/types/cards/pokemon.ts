import Card from '@/types/cards/Card';
import AbilityDef from '@/types/abilities/AbilityDef';

enum Stage {
  BASIC = 'basic',
  STAGE_ONE = 'stageone',
}

enum Type {
  FIGHTING = 'fighting',
  LIGHTNING = 'lightning',
  PSYCHIC = 'psychic',
  WATER = 'water',
  COLORLESS = 'colorless',
}

class RetreatCost {
  public type: string;
  public amount: number;
  constructor(o: any) {
    this.type = Type[o.type];
    this.amount = o.amount;
  }
}

class CardAbility {
  public energyReq: EnergyReq;
  public ability: AbilityDef;
  constructor(o: any) {
    this.energyReq = o.energyReq.map((er: any) => new EnergyReq(er));
    this.ability = o.ability;
  }
}

class EnergyReq {
  public type: string;
  public amount: number;
  constructor(o: any) {
    this.type = Type[o.type];
    this.amount = o.amount;
  }
}

enum Status {
  POISONED = 'poisoned',
  ASLEEP = 'asleep',
  PARALYZED = 'paralyzed',
  STUCK = 'stuck',
  NONE = '', // null
}

class State {
  public hp: number;
  public status: string;
  public energyCards: any[];
  public itemCards: any[];
  public evolvedFrom?: Pokemon;
  constructor(initialHp: number) {
    this.hp = initialHp;
    this.status = Status.NONE;
    this.energyCards = [];
    this.itemCards = [];
    this.evolvedFrom = undefined;
  }
}

class Pokemon extends Card {
  public state: State;
  public type: string;
  public stage: string;
  public initialHp: number;
  public evolvesFrom?: Pokemon;
  public retreatCost: RetreatCost;
  public abilities: CardAbility[];
  constructor(o: any) {
    super(o);
    this.state = new State(o.initialHp);
    this.type = Type[o.type];
    this.stage = Stage[o.stage];
    this.initialHp = o.initialHp;
    this.evolvesFrom = o.evolvesFrom;
    this.retreatCost = new RetreatCost(o.retreatCost);
    this.abilities = o.abilities.map((ab: any) => new CardAbility(ab));
  }
}

export default {
  Pokemon,
  Type,
  State,
  Status,
  EnergyReq,
  RetreatCost,
  Stage,
};
