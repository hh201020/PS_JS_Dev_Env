export class Vehicle {
  constructor(licenseNum) {
    this.gpsEnabled = true;
    this.licenseNum = licenseNum;
  }

  static getCompanyName() {
    console.log('My Company');
  }

  start() {
    console.log('start vehicle');
  }
}
