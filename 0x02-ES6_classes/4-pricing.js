import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }
  get amount() {
    return this._amount;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }
  get currency() {
    return this._currency;
  }
}
