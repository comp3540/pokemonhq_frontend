import Card from '@/types/cards/Card';
import AbilityDef from '@/types/abilities/AbilityDef';

export enum Category {
  ITEM = 'item',
  SUPPORTER = 'supporter',
  STADIUM = 'stadium',
}

export class Trainer extends Card {
  public type: Category;
  public ability: AbilityDef; // dum but temporary
  public cardType: string;
  constructor(o: any) {
    super(o);
    this.cardType = 'trainer';
    this.type = o.type;
    this.ability = o.ability;
  }
}
