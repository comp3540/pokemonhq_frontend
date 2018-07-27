import Card from '@/types/cards/Card';

export enum Type {
  LIGHTNING = 'lightning',
  FIGHTING = 'fighting',
  WATER = 'water',
  PSYCHIC = 'psychic',
}

export class Energy extends Card {
  public type: Type;
  constructor(o: any) {
    super(o);
    this.type = o.type;
  }
}

