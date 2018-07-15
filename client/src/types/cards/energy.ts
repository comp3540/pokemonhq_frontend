import Card from '@/types/cards/Card';

enum Type {
  LIGHTNING = 'lightning',
  FIGHTING = 'fighting',
  WATER = 'water',
  PSYCHIC = 'psychic',
}

class Energy extends Card {
  public type: Type;
  constructor(o: any) {
    super(o);
    this.type = (<any>Type)[o.type];
  }
}

export default {
  Energy,
  Type,
};
