import Card from '@/types/cards/Card';
import AbilityDef from '@/types/abilities/AbilityDef';
import * as energy from '@/types/cards/energy';
import * as trainer from '@/types/cards/trainer';

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
  public attack: any;
  constructor(o: any) {
    this.attack = {
      required: o.required.map((er: any) => new EnergyReq(er.req)),
      ability: o.ability
    }
  }
}

export class EnergyReq {
  public req: any;
  constructor(o: any) {
    this.req = {
        energy: o.energy,
        amount: o.amount
    }
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
  public itemCard: trainer.Trainer | undefined;
  public evolvedFrom?: Pokemon;
  constructor(initialHp: number, o: any = {}) {
    this.hp = initialHp;
    this.status = o.status || Status.NONE;
    this.energyCards =o.energyCards ?  o.energyCards.map((ec:any) => new energy.Energy(ec)) : [];
    this.itemCard = o.itemCard ? new trainer.Trainer(o.itemCard) : undefined;
    this.evolvedFrom = o.evolvedFrom;
  }
}

export class Pokemon extends Card {
  public state: State;
  public energy: Type;
  public stage: Stage;
  public hp: number;
  public evolves?: Pokemon;
  public retreat: RetreatCost;
  public attacks: CardAbility[];
  public cardType: string;
  constructor(o: any) {
    super(o);
    this.cardType = 'pokemon';
    this.state = new State(o.hp);
    this.energy = o.energy;
    this.stage = o.stage;
    this.hp = o.hp;
    this.evolves = o.evolves;
    this.retreat = new RetreatCost(o.retreat);
    this.attacks = o.attacks.map((ab: any) => new CardAbility(ab.attack));
  }
}
