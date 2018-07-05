export default class Card {
  public name: string;
  public id: number;
  constructor(o: any) {
    this.name = o.name;
    this.id = o.id;
  }
}
