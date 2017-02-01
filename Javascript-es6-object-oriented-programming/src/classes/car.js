import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
  constructor() {
    super();
  }

  constructor(licenseNum) {
    super(licenseNum);
    this.gpsEnabled = false;
  }

  static getCompanyName() {
    console.log('My Other Company');
  }

  start() {
    console.log('start car');
    super.start();
  }
}

let car = new Car('C987');
console.log('car licenseNum ' + car.licenseNum);
console.log('car licenseNum ' + car.gpsEnabled);
car.start();
Car.getCompanyName();                 // it is different from Java, where static method cannot be overrided
