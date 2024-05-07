// 5-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to check if evacuationWarningMessage is implemented
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}