// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(price, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._price = price;
    this._currency = currency;
  }

  // Getter for price
  get price() {
    return this._price;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this._price} ${this._currency.displayFullCurrency()}`;
  }
}
