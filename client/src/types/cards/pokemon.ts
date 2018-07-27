import Card from '@/types/cards/Card';
import AbilityDef from '@/types/abilities/AbilityDef';

export enum Stage {
  BASIC = 'basic',
  STAGE_ONE = 'stageone',
}

export enum Type {
  FIGHTING = 'fighting',
  LIGHTNING = 'lightning',
  PSYCHIC = 'psychic',
  WATER = 'water',
  COLORLESS = 'colorless',
}

export class RetreatCost {
  public type: Type;
  public amount: number;
  constructor(o: any) {
    this.type = o.type;
    this.amount = o.amount;
  }
}

export class CardAbility {
  public energyReq: EnergyReq[];
  public ability: Number;
  constructor(o: any) {
    this.energyReq = o.required.map((er: any) => new EnergyReq(er.req));
    this.ability = o.ability;
  }
}

export class EnergyReq {
  public type: Type;
  public amount: number;
  constructor(o: any) {
    this.type = o.type;
    this.amount = o.amount;
  }
}

export enum Status {
  POISONED = 'poisoned',
  ASLEEP = 'asleep',
  PARALYZED = 'paralyzed',
  STUCK = 'stuck',
  NONE = '', // null
}

export class State {
  public hp: number;
  public status: Status;
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

export class Pokemon extends Card {
  public state: State;
  public type: Type;
  public stage: Stage;
  public initialHp: number;
  public evolvesFrom?: Pokemon;
  public retreatCost: RetreatCost;
  public abilities: CardAbility[];
  constructor(o: any) {
    super(o);
    this.state = new State(o.hp);
    this.type = o.energy;
    this.stage = o.stage;
    this.initialHp = o.hp;
    this.evolvesFrom = o.evolves;
    this.retreatCost = new RetreatCost(o.retreat);
    this.abilities = o.attacks.map((ab: any) => new CardAbility(ab.attack));
  }
}
