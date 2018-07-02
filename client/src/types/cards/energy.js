import Enum from '@/types/Enum';
import Card from '@/types/cards/Card';

class Type extends Enum { }
Type.of({
  LIGHTNING: 'lightning',
  FIGHTING: 'fighting',
  WATER: 'water',
  PSYCHIC: 'psychic'
});

class Energy extends Card {
  constructor (o) {
    super(o);
    this.type = Type.from(o.type);
  }
}

export default {
  Energy,
  Type
};
