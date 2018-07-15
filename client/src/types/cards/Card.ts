export default class Card {
  public name: string;
  public instanceId: number; //UI
  public defId: number; //prolog
  constructor(o: any) {
    this.name = o.name;
    this.instanceId = o.instanceId;
    this.defId = o.defId;
  }
}
