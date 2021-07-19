class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  
  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  set code(newCode) {
    this._name = newCode;
  }
  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }
}
export default Currency;
