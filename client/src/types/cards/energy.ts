import Card from '@/types/cards/Card';

enum Type {
  LIGHTNING = 'lightning',
  FIGHTING = 'fighting',
  WATER = 'water',
  PSYCHIC = 'psychic'
};

class Energy extends Card {
  type: string;
  constructor (o) {
    super(o);
    this.type = Type[o.type];
  }
}

export default {
  Energy,
  Type
};
