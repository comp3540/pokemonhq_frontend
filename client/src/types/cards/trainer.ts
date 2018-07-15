import Card from '@/types/cards/Card';
import AbilityDef from '@/types/abilities/AbilityDef';

export enum Category {
  ITEM = 'item',
  SUPPORTER = 'supporter',
  STADIUM = 'stadium',
}

export class Trainer extends Card {
  public category: Category;
  public ability: AbilityDef; // dum but temporary
  constructor(o: any) {
    super(o);
    this.category = o.category;
    this.ability = o.ability;
  }
}
