"use strict"


function full_Sentence() {
    let part_1 = 'I have ';
    let part_2 = 'made this ';
    let part_3 = 'into a complete ';
    let part_4 = 'Sentence.';
    let whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById('Concatenate').innerHTML = whole_sentence;
}

function slice_Method(){
    let Sentence = 'All work and no play makes Johnny a dull boy.';
    let Section = Sentence.slice(27, 33);
    document.getElementById('Slice').innerHTML = Section;
}


const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

function string_Method() {
    let X = 182;
    document.getElementById('Numbers_to_string').innerHTML= X.toString();
}

function precision_Method() {
    let x = 12938.3012987376112;
    document.getElementById('Precision').innerHTML = x.toPrecision(10);
}


//Looking for index of an item is impossible, because filter method will finish the loop. 
//Filter has a continue keyword in it. Even when it find the first element, it continues to search for more.
const arr = [1, 3, 2, 3, 4, 5, 6];
let index = 0;
let arrT = arr.filter(function(elem) {
    let holder =  elem === 5;
    index++;
    return holder;
});
console.log(index);
const ind = index - 1;
console.log(ind);
console.log(ind);
console.log(arr[ind]);
console.log(arrT);


// Looking for an index of an item
let inx = 0;

for(let i = 0; i < arr.length; i++) {
    inx++;
    if(arr[i] === 5) {
        break;
    }
}

console.log(inx);
let idx = --inx;
console.log(idx);
console.log(arr[idx]);

//IndexOf returns the index of the first element it finds. meaning there is a break attached to the method

console.log(arr.indexOf(3));

//Includes methods returns a boolean value (true or false). the second argument indicates the index from which to start the search.
console.log(arr.includes(3, 1));

if(arr.includes(3)) {
    console.log('The index is ' + arr.indexOf(3))
}


arr.forEach(function(elem) {
    if(elem === 3) {
    console.log('The index is ' + arr.indexOf(elem)); //It would always return 1. The problem with inner loop is that is always start
    //From the beginning. IndexOf will always return the first element it finds. Even though forEach finds it twice.
}
});

// Object (OPP)
//Inside an object, any value that is not a function is a property. Properties are mainly primitives value, but object and array can
//also be values of a property. 


//By Reference
let obj1 = {name: 'John', age: 24};

let obj2 = obj1;
console.log(obj2);
obj2.name = 'Michael';
// Both objects will return name as Michael.
console.log(obj1); 
console.log(obj2);

function foo () {
    return this.val;
}

console.log(new foo(23));

const obj3 = {val: 25};
console.log(foo.call(obj3));


//Prototypal Inheritance
const parent = {
    val: 42,
    get: function() {
        return this.val;
    }
}

const child = Object.create(parent);

//Child inherit from the parent
console.log(child);
console.log(child.get());
child.val = 25.2344;
console.log(child);
console.log(child.get());
console.log(parent);
console.log(parent.get());

//GranChild inherit from the child
const grandChild = Object.create(child);
console.log(grandChild);
console.log(grandChild.get());
grandChild.val = 65;
console.log(grandChild);
console.log(grandChild.get());


//Polymorphism and Method overriding (Polymorphism means the same name, but different behaviour)
const answer = {
    val: 43,
    get: function fn1() {
        return this.val;
    }
}

const firmAnswer = Object.create(answer);
firmAnswer.get = function fn2() {
    return this.val + '!!';
}

console.log(answer.get());
console.log(firmAnswer.get());

//To avoid duplication of this.val, we call the first method inside the second method
firmAnswer.get = function fn2() {
    return answer.get.call(this) + '!!';
}

console.log(answer.get());
console.log(firmAnswer.get());

//Using initialization function to set the field, or property value.

const AnswerPrototype = {
    constructor: function fn0(value) {
        this._val = value;
    },
    get: function fn1() {
        return this._val;
    }
}

const lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();

const dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get();

const FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!';
}

const luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get();

const magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);



//Classical Model

const AnswerPrototypeF = {
    constructor: function fn0(value){
       this._val = value;
    },
    get: function fn1() {
        return this._val;
    }
}


function AnswerF (value) {
    this._val = value;
}

AnswerF.prototype.get = function fn1() {
    return this._val;
}


function firmAnswerF (value) {
    AnswerF.call(this, value);
}

firmAnswerF.prototype = Object.create(AnswerF.prototype);
firmAnswerF.prototype.constructor = firmAnswerF;
 
// I am extending the parent get method
firmAnswerF.prototype.get = function fn2() {
    return AnswerF.prototype.get.call(this) + "!!";
}

const luckyAnswerF = new firmAnswerF(7);
console.log(luckyAnswerF.get());

//The this keyword

window.val = 10;
function myMethod() {
    return this.val;
}

console.log(window.myMethod()); // returns 10

const object1 = {
    get: myMethod,
    val: 42
}

const object2 = {
    get: myMethod,
    val: 13.432
}

const object3 = {
    val: 74
}

console.log(object1.get()); // returns 42
console.log(object2.get()); // returns 13.432

//The myMethod will use the object3 as the this object
console.log(myMethod.call(object3)); // returns 74



