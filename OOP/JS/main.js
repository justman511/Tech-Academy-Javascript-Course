// Object represent real-world entities using properties and methods
// Anything that can be represented as an object in real life can be represented as an object in programming.
//Anything with characteristics and behavior can be represented as an object.

// Object characteristics are represented using properties. Characteristics are also known as attributes or fields or state.
// Object behavior is represented using methods. Behavior is also known as functions or actions.

//Class is a blueprint for creating objects with similar properties and methods. Classes define the structure and behavior of objects.
//class is a template for creating objects. it is like a plan or a blueprint for creating objects. (IS A)
// An object is an instance of a class.

// Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to structure code. 
// YOU CAN THINK OF OOP AS A WAY TO ORGANIZE YOUR CODE AROUND REAL-WORLD ENTITIES. You break down your code into smaller, 
// manageable pieces (objects) that represent real-world entities.
//  and you define how these objects interact with each other using classes.

//Abstraction 
// Abstraction is the process of hiding the internal complexities of how something works and only exposing what's necessary for the user
// to interact with.

// Abstract characteristics
/*
Coffee Machine
1. Water Tank: number
2. HeaterOn: Boolean
3: StartBoiling(): void
4. Brew(): string
5. dispense(): void

Note: 
The only functionality exposed to the end user is botton to (makeCoffee()). Like click to make coffee. 
The user is not borders with the internal works of the machine

*/


//Encapsulation
//Encapsulation is the bundling of data and methods that operate on that data in a single unit, usually a class - and restricting 
//direct access to some of the object's components.
/*
Bank Account
1. balance: number (private)
2. deposit(amount): void (public)
3. withdraw(amount): void (pubic)
4. checkBalance(): number(public)


*/

//Difference between Abstraction and Encapsulation
/*
Abstraction is about hiding complexity and not about restriction. hide complex functionality from the user and exposing what it wants.
Encapsulation is about restriction and not complexity. Direct Restriction to certain data or values (using private)

*/

//Inheritance
//Inheritance allows one class (child) to reuse the properties and methods of another class (parent), reducing duplication and promoting
//reusability
/*
Vehicle
1. startEngine()
2: stopEngine()

We can create a Car or Bus from the Vehicle class. This has to do with reusing shared logic (Dry)
*/

//Polymophism Same name, could have different meaning. behaves differently based on contest.
//Polymorphism means "many forms" - it allows objects of different classes to be treated as if they are of the same type, but behave 
//differently based on their class-specific implementations.
/*
Employee
1. Work(): VOID
2. We have a developer (that works() code), a designer(works() designs)
3. In polymorphism, each children can override the code in the work() to suit their needs. Thus, same name, different functionality.
4. Thus, when you call works() on developer means it is coding and when you call works on designer, means it is designing.
5. Same command, but different behaviour, based on contest they are runing.
*/

//Composition is a design principle where one class contains or is composed of one or more objects of other classes to reuse their
//Functionalily, instead of inheriting from them. (HAS A)

//Final note
/*

1. Abstraction: Hide complexity, expose interface
2. Encapsulation: Bundle + protect state (private data)
3. Inheritance: Share logic across classes
4. Polymorphism: Same methods, different behaviours
5. Composition: Build by combining units

*/

class AClass {
    constructor(name) {
      this.name = name;
    }

    method1() {

    }

    method2() {

    }

    method3() {

    }
}

const a = new AClass('John Doe');
console.log(a);

//Class objects are differentiated through property (field)

class Car {
    //The construction function sets the this of the object. The constructor is a function.
    constructor(model) {
     this.model = model;
    }

    // The this is determined during function involcation.
    printModel() {
        console.log(this.model);
    }
}

const bmwCar = new Car('BMW');
bmwCar.printModel();
console.log(bmwCar);
console.log(bmwCar.printModel);
//In normal object literal, we set the property without using the this keyword. But the this key word is using inside the methods.
//The this, is the caller of the function.
//The 'this' key word never refer to the class, but to the object created from the class


//Class as Expression

const Employee = class {
    constructor() {

    }

    welcome() {
     console.log('You are welcome');
    }
}

const emp = new Employee();
emp.welcome();



//Named Class
const Dept = class Department {
   constructor() {}

   welcome() {
    console.log('Welcome to Department');
   }
}

const dep = new Dept();
dep.welcome();


//Class Field
this.name = 'James';
console.log(name);
class Phone {
    //The 'this' keyword can only exist within or inside a function or in the global namespace.
    //It cannot exist within an object as property. constructor function or function constructor can use this to create object properties
    brand = 'Apple';

    make() {
        console.log(this.brand);
    }
}

const ph = new Phone();
ph.make();

/*
const obj = {
    this.name: 'James' // Not possible to do this
}
    */

//Getter and Setter
//This are methods used to get or set property of an object

class Animal {
    constructor(name) {
        this.name = name;
    }

    //When you try to access the name property of the object, the get method will be call first and if any check, 
    // it will be done at this level
    get name() {
        //Get is use for computation
        return `The animal name is ${this._name}`;
    }

    //When creating an instance of the class, the name property will undergo the set check, and validation, before creating the object.
    set name(name) {
        if(!name) {
            console.warn('A name is mandatory!');
            return;
        }
        if(name.length < 2) {
            console.warn('The name must be of 2 or more characters');
            return;
        }
        this._name = name;
    }
}

// const animal = new Animal('T'); // The name must be of 2 or more characters
// const animal = new Animal(); //The name must be of 2 or more characters
const animal = new Animal('Tiger');
console.log(animal.name);
animal.name = 'A'; // This is also throw an error
console.log(animal.name); // The name must be of 2 or more characters


//STATIC 



class MyClass {
    static staticMethod() {
        console.log(this);
    }
}

MyClass.staticMethod();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }

    //Static could be user for utilities functions
   static isValidEmail(email) {
       return email.includes('@') && email.includes('.');
    }

    //Static FActory method

    static createGuest() {
        return new User('Guest', 'guest@email.com');
    }
}

const user = new User('Tapas', 'tapas@example.com');

user.greet();
console.log(User.isValidEmail('email'));

const guestUser = User.createGuest();


//Private and Public

/* 
Public: These fields and methods are accessible from anywhere

Private: These fields and methods are accessible only from the inside of the class.

*/

class WashingMachine {

    //Public field

    brand;

    // Private field;
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand) {
        this.brand = brand;
    }

    start(cycle) {
        if(!this.#powerStatus) {
            this.#turnOn();
        }
        this.#currentCycle = cycle;
     // Spin
     console.log(`Starting ${cycle} cycle...`);
      this.#spin();

     // drain
     
      this.#drain();

     //stop

     this.stop();
    }

    stop() {
        console.log('Washing maching stopped');
      // Turn Off
      this.#turnOff();
    }

    #turnOn () {
      this.#powerStatus = true;
      console.log('power On');
    }

    #turnOff() {
     this.#powerStatus = false;
     console.log('Power Off');
    }

    #spin() {
     console.log('Spinning...');
    }

    #drain () {
     console.log('draining...');
    }

}

const lgWasher = new WashingMachine('LG');
console.log(lgWasher);

lgWasher.start('Quick Wash');



//Extending

class Human {
    species = 'Home Sapiens'; // public field

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old`);
    }

    sleep() {
        return `${this.name} is sleeping`;
    }
}


class Student extends Human {
   constructor(name, age, grade) {
    super(name, age);
    this.grad = grade;
   }

   // Override the method in the parent class
   sleep() {
    console.log(` Arreya student ${super.sleep()}`);
   }
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
}

const student = new Student('John', 'Doe', 56);

student.sleep();




const array = [
    [1, 2, 'A'], 
    'A',
    ['A', 'B', 1, 4, 'A'],
    'A',
    'A',
    [1, 3, 2, 'A', 1, 'A']
]

console.log(array);

let aCollector = [];
for(let column = 0; column <= array.length; column++) {
       if(array[column] === 'A') {
        aCollector.push(array[column]);
    }
    
    if(Array.isArray(array[column])) {
        console.log(`This is value of column ${array[column]}`)
        for(let row =  0; row <= array[column].length; row++) {
            console.log(array[column][row]);
            if(array[column][row] === 'A') {
                console.log(array[column][row]);
                 console.log(`Collected from row ${row}`);
               aCollector.push(array[column][row]);
               continue;
               //console.log(array[col]);
            }
        }
    }
    
   
}

console.log(aCollector);


const array2 = [
    'A',
    'B',
    'A',
    {
        a: 'A', 
        b: 'B', 
        c:'C'
    },
    [1, 2, 4, 'A', 'X', 'A', 
        {
            b: 'B', a: 'A', c: 'C'

        }
    ],
    {
        d: 'D', 
        a: 'A',
        obj: {b: 'B', a:'A'}, 
        array: [
            'C', 'A', 'D', 
            [
                'A', 'C', 'B', 'A'
            ]
        ]
    },
    'A',
    ['C', 'R', 'A']

]

let arra = [];

for(let column = 0; column <= array2.length; column++) {
    //Checking for 'A'
    let index = array2[column];
    console.log(index);
    if(index === 'A') {
        arra.push(index);
    }

    //Checking for Object

    //objValue && typeof objValue === 'object' && objValue.constructor === Object
    if(typeof(index) === 'object' && index.constructor === Object) {
        console.log(index);
        //If an object is found
        for(let key in index) {
            console.log(key);
            if(index[key] === 'A') {
                console.log(index[key]);    
                arra.push(index[key]);
            }

            if(typeof (index[key]) === 'object' && index[key].constructor === Object) {
                console.log(index[key]);
                let indx = index[key];
                for(let keys in indx) {
                    if(indx[keys] === 'A') {
                        arra.push(indx[keys]);
                    }
                } 
            }

            if(Array.isArray(index[key])) {
                let inx = index[key];
                console.log(inx);
                for(let counter2 = 0; counter2 <= inx.length; counter2++) {
                    if(inx[counter2] === 'A') {
                        console.log(inx[counter2]);
                        arra.push(inx[counter2]);
                    }

                    //If an array is found
                    if(Array.isArray(inx[counter2])) {
                        let ind = inx[counter2];
                        console.log(ind);
                        for(let counter3 = 0; counter3 <= ind.length; counter3++) {
                            console.log(ind[counter3]);
                            if(ind[counter3] === 'A') {
                                arra.push(ind[counter3]);
                            }

                        }
                    }
                }
            }
        }
    
    }

    //Checking for array
    if(Array.isArray(index)) {
      
        for(let counter = 0; counter <= index.length; counter++) {
            if(index[counter] === 'A') {
                arra.push(index[counter]);
            }
            if( typeof (index[counter]) === 'object' && index[counter].constructor === Object) {
                let indxs = index[counter];
                console.log(indxs);
                for(let key in indxs) {
                    if(indxs[key] === 'A') {
                        arra.push(indxs[key]);
                    }
                }
            }
        }
    }
}

console.log(arra);


/*

    HOW TO CHECK IF VALUE IS AN OBJECT

function doSomething(value) {
  if(typeof(value) === 'string') {
    console.log('value is a string')
  } else if(typeof(value) === 'number') {
    console.log('value is a number');
  }else if(typeof(value) === 'object') {
    console.log('value is a object');
  }
}

*/


//Using el elseif else

for(let column = 0; column <= array2.length; column++) {
    //Checking for 'A'
    let index = array2[column];
    
    

    //Checking for Object

    //objValue && typeof objValue === 'object' && objValue.constructor === Object
    if(typeof(index) === 'object' && index.constructor === Object) {
        console.log(index);
        //If an object is found
        for(let key in index) {
            console.log(key);
            if(index[key] === 'A') {
                console.log(index[key]);    
                arra.push(index[key]);
            }

            if(typeof (index[key]) === 'object' && index[key].constructor === Object) {
                console.log(index[key]);
                let indx = index[key];
                for(let keys in indx) {
                    if(indx[keys] === 'A') {
                        arra.push(indx[keys]);
                    }
                } 
            }

            if(Array.isArray(index[key])) {
                let inx = index[key];
                console.log(inx);
                for(let counter2 = 0; counter2 <= inx.length; counter2++) {
                    if(inx[counter2] === 'A') {
                        console.log(inx[counter2]);
                        arra.push(inx[counter2]);
                    }

                    //If an array is found
                    if(Array.isArray(inx[counter2])) {
                        let ind = inx[counter2];
                        console.log(ind);
                        for(let counter3 = 0; counter3 <= ind.length; counter3++) {
                            console.log(ind[counter3]);
                            if(ind[counter3] === 'A') {
                                arra.push(ind[counter3]);
                            }

                        }
                    }
                }
            }
        }
    
    }

    //Checking for array
    else if(Array.isArray(index)) {
      
        for(let counter = 0; counter <= index.length; counter++) {
            if(index[counter] === 'A') {
                arra.push(index[counter]);
            }
            if( typeof (index[counter]) === 'object' && index[counter].constructor === Object) {
                let indxs = index[counter];
                console.log(indxs);
                for(let key in indxs) {
                    if(indxs[key] === 'A') {
                        arra.push(indxs[key]);
                    }
                }
            }
        }
    } else if(index === 'A') {
        console.log(index);
        arra.push(index);
    }
}

console.log(arra);


// Using functions to separate code into sections


function BubbleAlgo (array) {

for(let column = 0; column <= array2.length; column++) {
    //Checking for 'A'
    let index = array2[column];
    
    

    //Checking for Object

    //objValue && typeof objValue === 'object' && objValue.constructor === Object
    if(typeof(index) === 'object' && index.constructor === Object) {
        console.log(index);
        //If an object is found
        for(let key in index) {
            console.log(key);
            
            firstFunc(index, key);

            if(Array.isArray(index[key])) {
                secondFunc(index, key);
            }
        }
    
    }

    //Checking for array
    else if(Array.isArray(index)) {
      
        for(let counter = 0; counter <= index.length; counter++) {
            if(index[counter] === 'A') {
                arra.push(index[counter]);
            }
            if( typeof (index[counter]) === 'object' && index[counter].constructor === Object) {
                let indxs = index[counter];
                console.log(indxs);
                for(let key in indxs) {
                    if(indxs[key] === 'A') {
                        arra.push(indxs[key]);
                    }
                }
            }
        }
    } else if(index === 'A') {
        console.log(index);
        arra.push(index);
    }
}

}



//Functions

function firstFunc(index, key) {
      
    if(index[key] === 'A') {
                console.log(index[key]);    
                arra.push(index[key]);
            }

            if(typeof (index[key]) === 'object' && index[key].constructor === Object) {
                console.log(index[key]);
                let indx = index[key];
                for(let keys in indx) {
                    if(indx[keys] === 'A') {
                        arra.push(indx[keys]);
                    }
                } 
    }
}

function secondFunc(index, key) {
        let inx = index[key];
        console.log(inx);
    for(let counter2 = 0; counter2 <= inx.length; counter2++) {
                    if(inx[counter2] === 'A') {
                        console.log(inx[counter2]);
                        arra.push(inx[counter2]);
                    }

                    //If an array is found
                    if(Array.isArray(inx[counter2])) {
                        let ind = inx[counter2];
                        console.log(ind);
                        for(let counter3 = 0; counter3 <= ind.length; counter3++) {
                            console.log(ind[counter3]);
                            if(ind[counter3] === 'A') {
                                arra.push(ind[counter3]);
                            }

                        }
                    }
     }
}

BubbleAlgo(arra);
console.log(arra);
console.log(BubbleAlgo);