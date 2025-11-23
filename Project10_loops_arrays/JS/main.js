let text = 'Hello, World!';
let length = text.length;

console.log('The length of the text is:', length);
console.log(text.split('').join('-'));
console.log(text.toUpperCase() );
console.log([...text].reverse().join(''));
console.log(text.indexOf('World'));
console.log(text.slice(7, 12));
console.log(text.replace('World', 'JavaScript'));
console.log(text.includes('Hello'));
console.log(text.startsWith('Hello'));
console.log(text.endsWith('!'));
console.log([].slice.call(text));
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.concat(' How are you?'));
console.log(text.trim());
console.log(text.repeat(2));
console.log(text.substr(7, 5));
console.log(text.search('World'));
console.log(text.match(/o/g));
console.log([...text]);
console.log(text.localeCompare('Hello, World!'));
console.log(text.normalize());
console.log(text.padStart(20, '*'));
console.log(text.padEnd(20, '*'));
console.log(text.split(' '));
console.log(text.lastIndexOf('o'));
console.log(text.toLowerCase());
console.log(text.valueOf());
console.log(text.split('').filter(char => char !== 'o').join(''));

console.log(text.split('').map(char => char === 'o' ? '0' : char).join(''));
console.log(text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
console.log(text.split('').some(char => char === 'W'));


//LOOPS AND ARRAYS EXERCISES

let Instructions = ['Guiter', 'Piano', 'Drums', 'Violin', 'Flute', 'Saxophone', 'Trumpet', 'Cello', 'Clarinet', 'Harp'];
let Content = '';

function for_Loop() {
    for (let i = 0; i < Instructions.length; i++) {
        Content += Instructions[i] + '<br>';
    }   
    console.log(Content);
    document.getElementById('Loop').innerHTML = Content;
}

function array_Function() {
   let counter = ''; 
    let Instruments = ['Guiter', 'Piano', 'Drums', 'Violin', 'Flute', 'Saxophone', 'Trumpet', 'Cello', 'Clarinet', 'Harp'];
    for (let i = 0; i < Instruments.length; i++) {
        counter += Instruments[i] + '<br>';
    }
    document.getElementById('List_of_Instruments').innerHTML = counter;
}

function loop_Array() {
   let Content = '';
   function myFunction(value, index, array) {
       Content += index + ': ' + value + '<br>';
         document.getElementById('Array').innerHTML = Content;
   }
    Instructions.forEach(myFunction);
}

function Loop_SetTimeout() {
    let count = "";
    let i = 0;
    function addNumber() {
        if (i < Instructions.length) {
            count += Instructions[i] + "<br>";
            document.getElementById("SetTimeOut").innerHTML = count;
            i++;
            setTimeout(addNumber, 500); // Delay of 500 milliseconds
        }
    }
    addNumber();
}