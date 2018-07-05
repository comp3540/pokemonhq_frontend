import Card from '@/types/cards/Card';

enum Category {
  ITEM = 'item',
  SUPPORTER = 'supporter',
  STADIUM = 'stadium'
};

class Trainer extends Card {
  cat: string;
  ability;
  constructor (o) {
    super(o);
    this.cat = Category[o.cat];
    this.ability = o.ability;
  }
}

export default {
  Trainer,
  Category
};
