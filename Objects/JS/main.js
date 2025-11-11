
let user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
console.log(user.name);  // Output: Alice
console.log(user.age);   // Output: 30
console.log(user.email); // Output:

// add a new property
user.address = "123 Main St";
console.log(user.address); // Output: 123 Main St   
// update an existing property
user.age = 31;
console.log(user.age);   // Output: 31  
// delete a property
delete user.email;
console.log(user.email); // Output: undefined

//let car = prompt("Enter your favorite car brand:");
let favCars = {
   // [car]: "Toyota" // Example entry
}

const SomeKey = "age";
user[SomeKey] = 32; // Using variable as key
//console.log(favCars);

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("Bob", 25);
console.log(person1.name);

console.log(person1.age); undefined
// accessing properties using bracket notation
console.log(user["name"]); // Output: Alice
console.log(user["age"]);  // Output: 31

// inheritance using constructor functions
function Employee(name, age, position) {
    Person.call(this, name, age); // inherit properties
    this.position = position;
}

let employee1 = new Employee("Charlie", 28, "Developer");
console.log(employee1.name); // Output: Charlie
console.log(employee1.position); // Output: Developer undefined Developer

// checking property existence
console.log("name" in user); // Output: true
console.log("email" in user); // Output: false 


// iterating over object properties
for (let key in user) {
    console.log(key + ": " + user[key]); // Output: name: Alice age: 32 address: 123 Main St (key-value pairs  )
}


// Object methods
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    getSummary: function() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book.getSummary()); // Output: JavaScript Basics by John Doe JavaScript Basics by John Doe  
// using Object.keys() and Object.values()
let keys = Object.keys(user);
let values = Object.values(user);
console.log(keys);   // Output: [ 'name', 'age', 'address' ]
console.log(values); // Output: [ 'Alice', 32, '123 Main St' ]
// using Object.assign()
let newUser = Object.assign({}, user, { email: "michael@example.com" });
console.log(newUser); // Output: { name: 'Alice', age: 32, address: '123 Main St', email: '}

//clone object
let clonedUser = Object.assign({}, user);
console.log(clonedUser); // Output: { name: 'Alice', age: 32, address: '123 Main St' }

// clone using spread operator
let spreadClonedUser = { ...user };
console.log(spreadClonedUser); // Output: { name: 'Alice', age: 32, address: '123 Main St' }
// nested objects
let company = {
    name: "Tech Corp",
    address: {
        street: "456 Tech Ave",
        city: "Innovation City"
    },
    employees: [
        { name: "Dave", position: "Manager" },
        { name: "Eva", position: "Designer" }
    ]
};
console.log(company.address.city); // Output: Innovation City
console.log(company.employees[1].name); // Output: Eva
console.log(company.employees[1].name); // Output: Eva

// deep clone nested object
let deepClonedCompany = JSON.parse(JSON.stringify(company));
console.log(deepClonedCompany); // Output: { name: 'Tech Corp', address: { street: '456 Tech Ave', city: 'Innovation City' }, 
// employees: [ { name: 'Dave', position: 'Manager' }, { name: 'Eva', position: 'Designer' } ] }

//clone using structuredClone (modern browsers)
let structuredClonedCompany = structuredClone(company);
console.log(structuredClonedCompany); // Output: { name: 'Tech Corp', address: { street: '456 Tech Ave', city: 'Innovation City' }, 
// employees: [ { name: 'Dave', position: 'Manager' }, { name: 'Eva', position: 'Designer' } ] }

console.log(deepClonedCompany.address === company.address); // Output: false
console.log(structuredClonedCompany.employees === company.employees); // Output: false

// modifying nested object in cloned version
deepClonedCompany.address.city = "New City";
console.log(company.address.city); // Output: Innovation City
console.log(deepClonedCompany.address.city); // Output: New City

structuredClonedCompany.employees[0].name = "Daniel";
console.log(company.employees[0].name); // Output: Dave
console.log(structuredClonedCompany.employees[0].name); // Output: Daniel   

// Object.freeze() to make object immutable
Object.freeze(user);
user.age = 40; // This will not change the age
console.log(user.age); // Output: 32
// Object.seal() to prevent adding or deleting properties
Object.seal(book);
book.title = "Advanced JavaScript"; // This will work
delete book.author; // This will not delete the author
console.log(book.title); // Output: Advanced JavaScript
console.log(book.author); // Output: John Doe   

// getters and setters
let rectangle = {
    width: 10,
    height: 5,
    get area() {
        return this.width * this.height;
    },
    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
};
console.log(rectangle.area); // Output: 50
rectangle.area = 100;
console.log(rectangle.width); // Output: 10
console.log(rectangle.height); // Output: 10    
// symbol as object key
let sym = Symbol("uniqueKey");
let symObject = {
    [sym]: "This is a symbol key"
};
console.log(symObject[sym]); // Output: This is a symbol key    
// using Map for key-value pairs
let map = new Map();
map.set("name", "Frank");
map.set("age", 40);
console.log(map.get("name")); // Output: Frank
console.log(map.get("age"));  // Output: 40
// iterating over Map
for (let [key, value] of map) {
    console.log(key + ": " + value); // Output: name: Frank age: 40
}   
// WeakMap example
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "WeakMap Value");
console.log(weakMap.get(objKey)); // Output: WeakMap Value
// after objKey goes out of scope, its entry in weakMap can be garbage collected

// JSON methods
let jsonString = JSON.stringify(user);
console.log(jsonString); // Output: JSON string of user object
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Output: user object recreated from JSON string    
// optional chaining
console.log(company.address?.city); // Output: Innovation City
console.log(company.location?.country); // Output: undefined
// nullish coalescing
let phone = user.phone ?? "No phone number provided";
console.log(phone); // Output: No phone number provided 
// destructuring assignment
let { name, age } = user;
console.log(name); // Output: Alice
console.log(age);  // Output: 32    

// nested destructuring
let { address: { street, city } } = company;
console.log(street); // Output: 456 Tech Ave
console.log(city);   // Output: Innovation City
// array of objects destructuring
let [firstEmployee, secondEmployee] = company.employees;
console.log(firstEmployee.name); // Output: Dave
console.log(secondEmployee.position); // Output: Designer   

// dynamic property names
let dynamicKey = "hobby";
user[dynamicKey] = "Photography";
console.log(user.hobby); // Output: Photography
// method shorthand in object literals
let mathOperations = {
    add(a, b) { 
        return a + b; 
    }
};
console.log(mathOperations.add(5, 3)); // Output: 8 
// computed property names
let propName = "score";
let player = {
    [propName]: 100
};
console.log(player.score); // Output: 100   

// object destructuring with rest operator
let { name: userName, ...otherDetails } = user;
console.log(userName); // Output: Alice
console.log(otherDetails); // Output: { age: 32, address: '123 Main St', hobby: 'Photography' } 

// merging objects using spread operator
let additionalInfo = {
    phone: "123-456-7890",
    country: "USA"
};
let mergedUser = { ...user, ...additionalInfo };
console.log(mergedUser); // Output: { name: 'Alice', age: 32, address: '123 Main St', hobby: 'Photography', phone: '123-456-7890', 
// country: 'USA' }
// optional method chaining with function calls
let getEmployeeName = company.getEmployeeName?.();
console.log(getEmployeeName); // Output: undefined (since getEmployeeName method does not exist)    
// creating object with Object.create()
let proto = {
    greet() {   
        return "Hello!";
    }   
};
let newObj = Object.create(proto);
console.log(newObj.greet()); // Output: Hello!
// checking own properties vs inherited properties
console.log(newObj.hasOwnProperty("greet")); // Output: false
console.log("greet" in newObj); // Output: true 
// using Reflect API
let reflectUser = {
    name: "George",
    age: 29
};
Reflect.set(reflectUser, "email", "geo@example.com");
console.log(Reflect.get(reflectUser, "email")); // Output: geo@example.com
// deleting property using Reflect
Reflect.deleteProperty(reflectUser, "age");
console.log(reflectUser.age); // Output: undefined
// using Object.fromEntries()
let entries = [
    ["name", "Hannah"],
    ["age", 27]
];
let fromEntriesUser = Object.fromEntries(entries);
console.log(fromEntriesUser); // Output: { name: 'Hannah', age: 27 }
// using Object.defineProperty()
let definedUser = {};
Object.defineProperty(definedUser, "username", {
    value: "ivan123",
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(definedUser.username); // Output: ivan123
definedUser.username = "newName"; // This will not change the username
console.log(definedUser.username); // Output: ivan123
// using Object.getOwnPropertyDescriptors()
let descriptors = Object.getOwnPropertyDescriptors(definedUser);
console.log(descriptors);
// Output: { username: { value: 'ivan123', writable: false, enumerable: true, configurable: false } }
// using Object.is()
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0));   // Output: false   
// using Object.entries()
let userEntries = Object.entries(user);
console.log(userEntries); 
// Output: [ [ 'name', 'Alice' ], [ 'age', 32 ], [ 'address', '123 Main St' ], [ 'hobby', 'Photography' ] ] 
// using Object.preventExtensions()
let extensibleUser = { name: "Jack" };
Object.preventExtensions(extensibleUser);
extensibleUser.age = 35; // This will not add age property
console.log(extensibleUser.age); // Output: undefined
// using Object.isExtensible()
console.log(Object.isExtensible(extensibleUser)); // Output: false
// using Object.setPrototypeOf()
let animal = {
    speak() {
        return "Roar!";
    }
};
let dog = {
    bark() {
        return "Woof!";
    }
};  
Object.setPrototypeOf(dog, animal);
console.log(dog.speak()); // Output: Roar!
console.log(dog.bark());  // Output: Woof!  
// using Object.getPrototypeOf()
let protoOfDog = Object.getPrototypeOf(dog);
console.log(protoOfDog === animal); // Output: true
// using Object.hasOwn()
console.log(Object.hasOwn(dog, "bark")); // Output: true
console.log(Object.hasOwn(dog, "speak")); // Output: false
// using Object.values() with nested objects
let companyValues = Object.values(company);
console.log(companyValues); 
// Output: [ 'Tech Corp', { street: '456 Tech Ave', city: 'Innovation City' }, 
// [ { name: 'Dave', position: 'Manager' }, { name: 'Eva', position: 'Designer' } ] ]   
// using Object.keys() with nested objects
let companyKeys = Object.keys(company);
console.log(companyKeys); 
// Output: [ 'name', 'address', 'employees' ]   
// using Object.freeze() on nested objects (shallow freeze)
Object.freeze(company);
company.name = "New Tech Corp"; // This will not change the name
company.address.city = "New Innovation City"; // This will change the city
console.log(company.name); // Output: Tech Corp
console.log(company.address.city); // Output: New Innovation City   
// using Object.seal() on nested objects (shallow seal)
Object.seal(book);
book.author = "Jane Smith"; // This will work
book.getSummary = function() { return "New Summary"; }; // This will work
delete book.title; // This will not delete the title
console.log(book.author); // Output: Jane Smith
console.log(book.getSummary()); // Output: New Summary
console.log(book.title); // Output: Advanced JavaScript 
// using Object.defineProperties()
let multiPropUser = {};
Object.defineProperties(multiPropUser, {    
    name: {
        value: "Karen",
        writable: true,
        enumerable: true,
        configurable: true  
    },
    age: {
        value: 26,  
        writable: false,
        enumerable: true,
        configurable: false
    }
});
console.log(multiPropUser.name); // Output: Karen
console.log(multiPropUser.age);  // Output: 26
multiPropUser.age = 30; // This will not change age
console.log(multiPropUser.age);  // Output: 26
// using Object.getOwnPropertyNames()
let propNames = Object.getOwnPropertyNames(multiPropUser);
console.log(propNames); // Output: [ 'name', 'age' ]    
// using Object.getOwnPropertySymbols()
let sym1 = Symbol("sym1");
let sym2 = Symbol("sym2");      
let symbolObject = {
    [sym1]: "Value 1",
    [sym2]: "Value 2"   
};
let symbolKeys = Object.getOwnPropertySymbols(symbolObject);
console.log(symbolKeys); // Output: [ Symbol(sym1), Symbol(sym2) ]
console.log(symbolObject[symbolKeys[0]]); // Output: Value 1
console.log(symbolObject[symbolKeys[1]]); // Output: Value 2
// using Object.entries() with Map
let mapEntries = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
let objFromMap = Object.fromEntries(mapEntries);
console.log(objFromMap); // Output: { key1: 'value1', key2: 'value2' }
// using Object.freeze() with nested objects (deep freeze function)
function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {  
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            deepFreeze(obj[prop]);
        }   
    });
    return Object.freeze(obj);
}
deepFreeze(company);
company.address.city = "Another City"; // This will not change the city
console.log(company.address.city); // Output: New Innovation City
// using Object.seal() with nested objects (deep seal function)
function deepSeal(obj) {
    Object.keys(obj).forEach(prop => {  
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            deepSeal(obj[prop]);
        }   
    });
    return Object.seal(obj);
}
deepSeal(book);
book.getSummary = function() { return "Another Summary"; }; // This will work
delete book.author; // This will not delete the author
console.log(book.getSummary()); // Output: Another Summary
console.log(book.author); // Output: Jane Smith 

// using Object.defineProperty() with getters and setters
let getterSetterObject = {};
Object.defineProperty(getterSetterObject, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    enumerable: true,
    configurable: true  
});
getterSetterObject.fullName = "Liam Smith";
console.log(getterSetterObject.firstName); // Output: Liam
console.log(getterSetterObject.lastName);
    // Output: Smith
console.log(getterSetterObject.fullName); // Output: Liam Smith 
// using Object.getOwnPropertyDescriptor()
let descriptor = Object.getOwnPropertyDescriptor(getterSetterObject, "fullName");
console.log(descriptor);
// Output: { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }
// using Object.entries() with nested objects
let nestedEntries = Object.entries(company.address);
console.log(nestedEntries); 
// Output: [ [ 'street', '456 Tech Ave' ], [ 'city', 'New Innovation City' ] ]
// using Object.fromEntries() with nested arrays
let nestedArray = [
    ["street", "789 New St"],
    ["city", "Future City"]
];
let newAddress = Object.fromEntries(nestedArray);
console.log(newAddress); 
// Output: { street: '789 New St', city: 'Future City' }    
// using Object.setPrototypeOf() to create inheritance chain
let vehicle = {
    start() {   
        return "Vehicle started";
    }   
};
let car = {
    drive() {
        return "Car is driving";
    }
};  
Object.setPrototypeOf(car, vehicle);
console.log(car.start()); // Output: Vehicle started
console.log(car.drive());  // Output: Car is driving
// using Object.getPrototypeOf() to verify inheritance chain
let protoOfCar = Object.getPrototypeOf(car);
console.log(protoOfCar === vehicle); // Output: true
// using Object.hasOwn() to check own properties
console.log(Object.hasOwn(car, "drive")); // Output: true
console.log(Object.hasOwn(car, "start")); // Output: false
// using Object.values() with nested objects
let companyAddressValues = Object.values(company.address);
console.log(companyAddressValues); 
// Output: [ '789 New St', 'Future City' ]   
// using Object.keys() with nested objects
let companyAddressKeys = Object.keys(company.address);
console.log(companyAddressKeys); 
// Output: [ 'street', 'city' ]
// using Object.freeze() on nested objects (deep freeze function)
deepFreeze(company);
company.address.city = "Changed City"; // This will not change the city
console.log(company.address.city); // Output: Future City
// using Object.seal() on nested objects (deep seal function)
deepSeal(book); 
book.getSummary = function() { return "Sealed Summary"; }; // This will work
delete book.author; // This will not delete the author
console.log(book.getSummary()); // Output: Sealed Summary
console.log(book.author); // Output: Jane Smith
// using Object.defineProperties() with multiple properties
let multiPropObject = {};
Object.defineProperties(multiPropObject, {  
    title: {
        value: "Multi Property Object",
        writable: true, 
        enumerable: true,
        configurable: true  
    },
    description: {
        value: "An object with multiple defined properties",
        writable: false,
        enumerable: true,
        configurable: false
    }
});
console.log(multiPropObject.title); // Output: Multi Property Object
console.log(multiPropObject.description);  // Output: An object with multiple defined properties
multiPropObject.description = "New Description"; // This will not change description
console.log(multiPropObject.description);  // Output: An object with multiple defined properties    
// using Object.getOwnPropertyNames() to list property names
let multiPropNames = Object.getOwnPropertyNames(multiPropObject);
console.log(multiPropNames); // Output: [ 'title', 'description' ]  
// using Object.getOwnPropertySymbols() with symbol properties
let symA = Symbol("symA");
let symB = Symbol("symB");
let symbolPropObject = {
    [symA]: "Symbol A Value",
    [symB]: "Symbol B Value"
};
let symbolPropKeys = Object.getOwnPropertySymbols(symbolPropObject);
console.log(symbolPropKeys); // Output: [ Symbol(symA), Symbol(symB) ]
console.log(symbolPropObject[symbolPropKeys[0]]);
    // Output: Symbol A Value   
console.log(symbolPropObject[symbolPropKeys[1]]); // Output: Symbol B Value 
// using Object.entries() with Map to object conversion
let mapToObjectEntries = new Map([
    ["prop1", "value1"],
    ["prop2", "value2"]
]);
let objectFromMapEntries = Object.fromEntries(mapToObjectEntries);
console.log(objectFromMapEntries); // Output: { prop1: 'value1', prop2: 'value2' }
// using Object.freeze() with deep freeze function
deepFreeze(company);
company.address.city = "Another Changed City"; // This will not change the city
console.log(company.address.city); // Output: Future City
// using Object.seal() with deep seal function
deepSeal(book);
book.getSummary = function() { return "Deep Sealed Summary"; }; // This will work
delete book.author; // This will not delete the author
console.log(book.getSummary()); // Output: Deep Sealed Summary
console.log(book.author); // Output: Jane Smith
// using Object.defineProperty() with getters and setters
let gsObject = {};
Object.defineProperty(gsObject, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    enumerable: true,
    configurable: true
});
gsObject.fullName = "Mia Johnson";
console.log(gsObject.firstName); // Output: Mia
console.log(gsObject.lastName);
    // Output: Johnson
console.log(gsObject.fullName); // Output: Mia Johnson
// using Object.getOwnPropertyDescriptor()
let gsDescriptor = Object.getOwnPropertyDescriptor(gsObject, "fullName");
console.log(gsDescriptor);
// Output: { get: [Function: get], set: [Function: set], enumerable: true, configurable: true } 
// using Object.entries() with nested objects
let nestedCompanyEntries = Object.entries(company.address);
console.log(nestedCompanyEntries); 
// Output: [ [ 'street', '789 New St' ], [ 'city', 'Future City' ] ]    
// using Object.fromEntries() with nested arrays
let nestedAddressArray = [
    ["street", "1010 Future Blvd"],
    ["city", "Tomorrowland"]
];
let anotherNewAddress = Object.fromEntries(nestedAddressArray);
console.log(anotherNewAddress); 
// Output: { street: '1010 Future Blvd', city: 'Tomorrowland' }







