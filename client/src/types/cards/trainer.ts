import Card from '@/types/cards/Card';

enum Category {
  ITEM = 'item',
  SUPPORTER = 'supporter',
  STADIUM = 'stadium',
}

class Trainer extends Card {
  public cat: string;
  public ability: number; // dum but temporary
  constructor(o: any) {
    super(o);
    this.cat = Category[o.cat];
    this.ability = o.ability;
  }
}

export default {
  Trainer,
  Category,
};
