
let arrz = [].map.call(['a', 'b', 'c'], function(x) {
    return x.toUpperCase();
});
console.log(arrz);

let evenNumbers = [].filter.call([1, 2, 3, 4, 5], function(x) {
    return x % 2 === 0;
});
console.log(evenNumbers);

let sumz = [].reduce.call([1, 2, 3, 4, 5], function(acc, val) {
    return acc + val;
}, 0);
console.log(sumz);

let objz = { a: 1 };
let thisValue = Function.prototype.call.call(function() {
    return this;
}, objz);
console.log(thisValue);
//let strArray = [].slice.call('hello').split('');

let cl =  Array.prototype.map.call(['a', 'b', 'c'], function(x) {
    return x.toUpperCase();
}); 
console.log(cl);

 let fl =   Array.prototype.filter.call([1, 2, 3, 4, 5], function(x) {
    return x % 2 === 0;
}); 
console.log(fl);

 let rz =  Array.prototype.reduce.call([1, 2, 3, 4, 5], function(acc, val) {
    return acc + val;
}, 0);  

//Array.prototype.slice.call('hello').split('');  
 let redu =   Array.prototype.reduce.call([1, 2, 3, 4, 5], function(acc, val) {
    return acc + val;
}, 0); 

console.log(redu);

 let thisVal = Function.prototype.call.call(function() {
    return this;
}, { b: 2 });
console.log(thisVal);

let cls =  Function.prototype.call.call(function() {
    return this;
}, { a: 1 });
console.log(cls);

let aplCal =   Function.prototype.apply.call(function(x) {
    return this.value + x;
}, { value: 10 }, [5]);
console.log(aplCal);

let aplApp =   Function.prototype.apply.apply(function(x, y) {
    return this.value + x + y;
}, [{ value: 20 }, [5, 15]]);   

let thisCal = Function.prototype.apply.call(function() {
    return this;
}, { b: 2 }); 
console.log(thisCal);

let thisApp = Function.prototype.apply.apply(function() {
    return this;
}, [{ a: 1 }]);


Function.prototype.bind.call(function(x) {
    return this.value + x;
}, { value: 10 })(5);   
Function.prototype.bind.apply(function(x, y) {
    return this.value + x + y;
}, [{ value: 20 }, [5, 15]]);   
Function.prototype.call.apply(function(x, y) {
    return this.value + x + y;
}, [{ value: 30 }, 5, 15]);
Function.prototype.apply.apply(function(x, y) {
    return this.value + x + y;
}, [{ value: 40 }, [5, 15]]);
Function.prototype.bind.call(function() {
    return this.value;
}, { value: 50 })();
Function.prototype.call.call(function() {
    return this.value;
}, { value: 60 });
Function.prototype.apply.call(function() {
    return this.value;
}, { value: 70 });  
Function.prototype.bind.apply(function() {
    return this.value;
}, [{ value: 80 }])();
Function.prototype.call.apply(function() {
    return this.value;
}, [{ value: 90 }]);
Function.prototype.apply.apply(function() {
    return this.value;
}, [{ value: 100 }]); 
console.log("Test.js loaded");
