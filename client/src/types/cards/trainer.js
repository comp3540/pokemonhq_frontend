import Card from '@/types/cards/Card';
import Enum from '@/types/Enum';

class Category extends Enum {}
Category.of({
  ITEM: 'item',
  SUPPORTER: 'supporter',
  STADIUM: 'stadium'
});

class Trainer extends Card {
  constructor (o) {
    super(o);
    this.cat = Category.from(o.cat);
    this.ability = o.ability;
  }
}

export default {
  Trainer,
  Category
};
