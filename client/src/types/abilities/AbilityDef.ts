export default class AbilityDef {
    public id: number;
    public name: string;
    public interpretation: string;
    constructor(o: any) {
      this.id = o.id;
      this.name = o.name;
      this.interpretation = o.interpretation;
    }
}
