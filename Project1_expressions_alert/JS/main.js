window.alert('Alert from the main.js'); // using window.alert to pop the message to the screen.
document.write('Message from document dot write'); // Using the deprecated documented document.write to display the message to the screen.

let A = '---This is a string'; //Assigning a string to the variable A
document.write(A);

let john = "---John said, \'I am not a woman or man\'"; // Using backslash to escape special characters in strings

document.write(john); // Using the deprecated documented document.write to display the message to the screen.


let Family = "The Arezzinis", Dad = 'Jeremial', Mom = 'Hermoine', Daughter = 'Penny', Son = 'Zorro'; //multiple variable assignment

document.write(Dad); // Using the deprecated documented document.write to display the message to the screen.


let add = 3 + 3; //this is an expression

function My_First_Function() { //defined a function and naming it My_First_Function. It is a function without parameter
    let str = 'This is the button text!'; // I am assigning a string to the variable str
    document.getElementById('Button_Text').innerHTML = str; //We targetted the button id attributes, 
    // and assign the value of str to the button
}

let sent1 = 'This is the beginning of the string'; //Assigning a string to a variable
let sent2 = 'and this is the end of the string'; //Assigning a string to a variable

let conJoin = sent1 + " " + sent2; // Concatenating two strings together
document.write(conJoin); // Using the deprecated documented document.write to display the message to the screen.
