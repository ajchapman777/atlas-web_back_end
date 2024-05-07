// 5-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Private method to enforce method overriding
  _enforceEvacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
