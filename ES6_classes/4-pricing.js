// 4-pricing.js

import Currency from './3-currency';

export default class Pricing {
  constructor(price, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._amount = price;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
