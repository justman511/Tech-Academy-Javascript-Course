    "use strict";


function countdown() {
    let seconds = document.getElementById('seconds').value;
    let timer = document.getElementById('timer');
   

    async function tick () {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        console.log(timer);
       let time = await setTimeout(tick, 1000);
        console.log('This is after the settimeout');
        if(seconds == -1) {
            alert("Time's up!" );
            clearTimeout(time);
            timer.innerHTML = "";
        } 
    }
    console.log('This is before the tick call');
    tick();
    console.log('This is after the tick call');

}


// Spread Operator and Rest Parameters Examples
//Using the call, apply, and bind methods

let array = [1,2,3,4,5];

function foo(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(foo(...array));
console.log(Math.max(...array));
console.log(Math.min(...array));
console.log(foo.apply(null, array));

function bar(...args) {
    console.log(arguments);
   let array =  [].slice.call(arguments);
   console.log(array);
    return args.reduce((a, b) => a + b, 0);
}
console.log(bar(1,2,3,4,5));

let boundFoo = foo.bind(null, ...array);
console.log(boundFoo());

//Using the call, apply, and bind methods with Objects

let obj = {
    x: 10,
    y: 20
};  
function sum() {
    return this.x + this.y;
}   
console.log(sum.call(obj));
console.log(sum.apply(obj));
let boundSum = sum.bind(obj);
console.log(boundSum());


//Call and Borrow Methods
let person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

let person2 = {
    firstName: "John",
    lastName: "Doe"
};  
console.log(person1.fullName.call(person2));

let person3 = { 
    firstName: "Mary",
    lastName: "Smith"
};  
console.log(person1.fullName.apply(person3));   
let boundFullName = person1.fullName.bind(person2);
console.log(boundFullName());

const numbers = [5, 6, 2, 3, 7];
const max = Math.max(...numbers);
console.log(max);
const max2 = Math.max.apply(null, numbers);
console.log(max2);
const boundMax = Math.max.bind(null, ...numbers);
console.log(boundMax());
const min = Math.min(...numbers);
console.log(min);
const min2 = Math.min.apply(null, numbers);
console.log(min2);
const boundMin = Math.min.bind(null, ...numbers);
console.log(boundMin());

//Binding 'this' in Event Handlers
const button = document.getElementById('myButton');
//button.addEventListener('click', function() {
    console.log(this); // 'this' refers to the button element
//});

const objEvent = {
    name: 'My Object',
    handleClick: function() {
        console.log(this.name);
    }
};
//button.addEventListener('click', objEvent.handleClick.bind(objEvent));

//hotel Example
const hotel = {
    name: 'Grand Hotel',
    showName: function() {
        console.log(this.name);
    }
};
const showHotelName = hotel.showName.bind(hotel);
//button.addEventListener('click', showHotelName);

//Using Arrow Functions to Preserve 'this'
const objArrow = {
    name: 'Arrow Object',
    handleClick: function() {
        const arrowFunction = () => {
            console.log(this.name);
        };  
        arrowFunction();
    }   
};
//button.addEventListener('click', objArrow.handleClick.bind(objArrow));

let user1 = {
    name: 'Alice',
    greet: function() {
        setTimeout(() => {  
            console.log(`Hello, ${this.name}`);
        }, 1000);
    }
};
user1.greet();
let user2 = {
    name: 'Bob',
    greet: function() { 
        setTimeout(function() {  
            console.log(`Hello, ${this.name}`);
        }.bind(this), 1000);
    }   
};
user2.greet();


let user3 = {
    name: 'Charlie',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

setTimeout(() => user3.greet(), 1000);
setTimeout(user3.greet.bind(user3), 1000);
console.log(user3.greet);

