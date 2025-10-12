

document.write(typeof 'course');

document.write('ten' + 5);

function my_Function() {
    document.getElementById('Test').innerHTML = 0/0;
    document.getElementById('Test').innerHTML = isNaN('This is a string');
    document.getElementById('Test').innerHTML = isNaN('007');
}

console.log(2E310); // returns Infinity
console.log(-3E310); // returns -Infinity

//Check Value
console.log(82 == 82); // returns true
console.log(82 == '82'); // returns true. String is coerse to number, thus returns true. It does not check type


// Check TYPE and VALUE
console.log(82 === '82'); // returns false
console.log(82 === Number('82')); // returns true



//Logical operator (AND, OR, NOT)

console.log(5 > 2 && 10 > 4); // returns true
console.log(5 > 10 && 10 > 4); // returns false

console.log(5 > 10 ||  10 > 4); //returns true

console.log(5 > 10 ||  10 > 20); // returns false


function not_Function() {
    document.getElementById('Not').innerHTML = !(20 > 10);
    document.getElementById('Not').innerHTML = !(5 > 10);
}