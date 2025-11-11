//Object


const user = {
    name: 'Bob',
    address: {
        street: '250, 2nd Cross',
        country: 'Austria'
    },
    age: 34,
    hobbies: ['swimming', 'dancing'],
    'unique-number': 'A01984'
}

for(let key in user) {
    if(typeof (user[key] === 'object') && user[key].constructor === Object) {
        console.log('From above Object');
        for(let keys in user[key]) {
            console.log('From inside Object');
            console.log(user[key][keys]);
        }
    } else if(Array.isArray(user[key])) {
        for(let i = 0; i < user[key].length; i++) {
            console.log(user[key][i]);
        }
    }
}

// It is the new keyword that turns a function into an object
//Function constructor: Means a Function that helps us create Object

function Car(make, model, color, owner) {
   this.make = make;
   this.model = model;
   this.color = color;
   this.owner = owner;
  /* this.wheelNumber = function () {
     return 4;
   } */
}

Car.prototype.wheelNumber = function() {
    return 4;
}


//const car = Car('BMW', 340, 'Blue'); // this will return undefined

const car = new Car('BMW', 340, 'Blue');
console.log(car);



// Composite Pattern: Composing one object into another

function Owner (name, age) {
   this.name = name;
   this.age = age;
}

const tapas = new Owner('Tapas Adhikary', 67);
const tapasBMW = new Car('BMW', 'S7', 'Green', tapas);


console.log(tapas);
console.log(tapasBMW);

tapas.age = 37; 
console.log(tapas);
console.log(tapasBMW); // Tapas will be age 37, because Object are passed by reference.



// Prototype: Indicate from which object an object was created from.
// If a prototype  is used to construct another object.

console.log(Object.prototype.isPrototypeOf(Car));// returns true.
console.log(Car.prototype.isPrototypeOf(car)); // return true
console.log(Car.prototype.isPrototypeOf(tapas)); // return false
console.log(Owner.prototype.isPrototypeOf(tapas)); // return true

console.log(tapas.prototype);// return Owner constructor


// Using class to create an object
class Carx {
    //If the method is defined inside the constructor, it will be part of value in every object created from the class.
constructor(make, model, color, owner) {
   this.make = make;
   this.model = model;
   this.color = color;
   this.owner = owner;
}

// Because this method is defined outside the constructor function, it will be added to the prototype.
wheelNumber() {
    return 4;
}
}

//Extending a class
class LuxuryCar extends Carx {
    constructor(make, model, color, owner, category) {
        super(make, model, color, owner);
        this.category = category;
    }

    isLuxury() {
        return true;
    }
}


//Object.create(): Creating an object, from another object. different location in memory.

const vehicle = {
    isLuxury: false,
    isFourWheeler: false,

    showinfo: function() {
        return `The vehicle ${this.name} is of ${this.color}. Is it a luxury vehicle? ${this.isLuxury}. 
        Does it have 4 whell? ${this.isFourWheeler}`;
    }
}

const carChild = Object.create(vehicle);
console.log(carChild);
carChild.name = 'Tesla';
carChild.color = 'Black';
carChild.isLuxury = true;
carChild.isFourWheeler = true;
console.log(carChild);

const anotherCar = Object.create(vehicle, {name: {value: 'BMW'}, color: {value: 'white'}});
console.log(anotherCar);

// How to know the prototype of an object
console.log(car.__proto__); // this is almost deprecated
console.log(Object.getPrototypeOf(car));

// Checking the prototype of an object
if((Object.getPrototypeOf(car)) === Car.prototype) {
    console.log(true);
}

// To set an object prototype to another Prototype
Object.setPrototypeOf(car, {});
console.log(car); // You will lose access to the methods from the original constructor and inherit the new constructor prototype 