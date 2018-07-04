//don't need this anymore

/*const __values = Symbol('__values');

export default class Enum {
  constructor (sym, value) {
    this.sym = sym;
    this.value = value;
  }

  static of (params) {
    const values = Object.entries(params).reduce((acc, [k, v]) => {
      acc[k] = Object.freeze(new this(k, v));
      return acc;
    }, {});

    Object.freeze(values);

    Object.defineProperty(this, __values, {
      value: values,
      configurable: false,
      writeable: false,
      enumerable: false
    });

    Object.entries(values).forEach(([k, v]) => {
      Object.defineProperty(this, k, {
        value: v,
        configurable: false,
        writeable: false,
        enumerable: true
      });
    });

    Object.freeze(this);
  }

  static values () {
    return Object.values(this[__values])
      .map(v => v.value);
  }

  static keys () {
    return Object.keys(this[__values]);
  }

  toString () {
    return `${this.constructor.name}.${this.sym}`;
  }

  static from (value) {
    return Object.entries(this[__values])
      .find(([k, v]) => value === v.value)[1];
  }
}
*/
