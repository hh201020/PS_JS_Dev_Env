class Drone {
  constructor(id) {
    console.log('in Drone constructor');
    this._id = id;                    // _ means private
  }

  static getCompany() {
    console.log('in getCompany');
  }

  fly() {
    console.log('Drone ' + this.id + ' is flying');
  }

  get id() {                          // get / set keywords make id / id(value) worked as drone.id / drone.id(AA)
    console.log('in id getter');
    return this._id + ' TEMPORARY';   // always need this keyword with the property name
  }

  set id(value) {
    this._id = value;
  }
}

Drone.maxHeight = 2000;                 // it can only be defined outside of class Drone

let drone = new Drone('A123');

console.log(typeof Drone);              // it is a function
console.log(typeof drone);              // it is a object
console.log(drone instanceof Drone);    // it is true

console.log('drone id: ' + drone.id);
drone.id = 'B456';                                    // set works like this
console.log('drone id renewed: ' + drone.id);         // set does not work as drone.id('AA');

console.log('drone max Height: ' + drone.maxHeight);  // it is undefined, it only belongs to class Drone.

drone.fly();
Drone.getCompany();                     // static method can only run on class Drone
drone.getCompany();
