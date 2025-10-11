
/*  MATH OPERATION */

//addition
function math_function() {
    let addition = 3 +  5;
    document.getElementById('Math').innerHTML = '3 + 5 = ' + addition;
}

//Substraction
function substraction_function() {
    let Subtraction = 5 - 2;
    document.getElementById('Math2').innerHTML = '5 - 2 = ' + Subtraction;
}

//Multiplication
function multiplication() {
    let simpleMath = 6 * 8;
    document.getElementById('Math3').innerHTML = '6 x 8 = ' + simpleMath;
}

//Division

function division() {
    let simpleMath = 48 / 6;
    document.getElementById('Math4').innerHTML = '48 / 6 = ' + simpleMath;
}

//Multiple Math operations
function moreMath() {
    let simpleMath = (1 + 2) * 10 / 2 - 5;
    document.getElementById('Math5').innerHTML = '1 plus 2, multiply by 10, divided in half and then substracted by 5 equals ' + simpleMath;
}

//Modulus (Remainder)
function modulus_operator () {
    let simpleMath = 25 % 6;
    document.getElementById('Math6').innerHTML = 'When you divide 25 by 6 you have a remainder of: ' + simpleMath;
}

//negative operator
function negation_Operator() {
    let x = 10;
    document.getElementById('Math7').innerHTML = -x;
}

//Increment and decrement operators

let X =  5;
X++;
document.write(X);

let Y = 5.25;
Y--;
document.write(Y);


//Random numbers between 0 and 1
window.alert(Math.random());

//Random numbers between 0 and 100
window.alert(Math.random() * 100);


//Math Object is a Static Method (Properties and Methods)
Math.E; // returns Euler's Number
Math.PI; //returns PI number
Math.SQRT2; // returns the square roots of 2
Math.SQRT1_2; // returns the square roots of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10

let round = Math.round(Y); // returns Y rounded to its nearest interger 5. 7 = 6
let min = Math.min(1, 100, 5, 200, 4);// returns 1, 
let max = Math.max(1, 100, 5, 200, 4); // returns 200
let pow = Math.pow(5, 3);// return 125, 5 raise to the power of 3
let toClosestInteger = Math.round(Math.random() * 100); // returns whole number between 1 and 100
let roundedNumber = Math.random().toFixed(1) * 10; // Returns whole number, between 1 and 10
let floor = Math.floor(5.7); // will not round the float number, but throw away the fraction (numbers after the decimal point)




//NUMBER FUNCTION
// We can use the number object, to convert a string into a number
let numb = Number('43');

console.log(numb + 4 * 2);
console.log(Number(true)) // returns 1
console.log(Number(false)) // returns 0
console.log(Number('string')) // returns NaN
//console.log(Number(underfined)) // returns NaN


// Number Methods

let boo = Number.isInteger('String')// determines whether the passed value is an integer
let floated = Number.parseFloat('42');
let tofixed = Number.parseFloat(4.2345).toFixed(2); //it returns 2 digit numbers after the decimal point





