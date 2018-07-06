export default class AbilityDef {
    public id: number;
    public name: string;
    public definition: string;
    constructor(o: any) {
      this.id = o.id;
      this.name = o.name;
      this.definition = o.definition;
    }
};
