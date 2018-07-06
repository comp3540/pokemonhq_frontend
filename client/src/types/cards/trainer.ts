import Card from '@/types/cards/Card';

enum Category {
  ITEM = 'item',
  SUPPORTER = 'supporter',
  STADIUM = 'stadium',
}

class Trainer extends Card {
  public category: string;
  public ability: string; // dum but temporary
  constructor(o: any) {
    super(o);
    this.category = Category[o.category];
    this.ability = o.ability;
  }
}

export default {
  Trainer,
  Category,
};
