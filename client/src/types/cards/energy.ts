import Card from '@/types/cards/Card';

export enum Type {
  LIGHTNING = 'lightning',
  FIGHTING = 'fighting',
  WATER = 'water',
  PSYCHIC = 'psychic',
}

export class Energy extends Card {
  public type: Type;
  public cardType: string;
  constructor(o: any) {
    super(o);
    this.type = o.type;
    this.cardType = 'energy';
  }
}

