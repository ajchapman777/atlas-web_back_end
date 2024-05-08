const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    // Create a new instance of the Car class with the same attribute values
    return new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}
