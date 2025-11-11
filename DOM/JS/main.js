/*

DOM TYPES

 - Document: This is the root node in the Tree.
 - Node: Any time in the DOM tree is called a node. Node represent every element (text or none text).
   there could be Element node, Text node, and Attribute node.
 - Element: Element is a special type of node. A specific type of node that represents HTML tags/elements
 - NodeList: A array of nodes
 - Attr: represents the attributes of a node
 - NameNodeMap: A collection of attributes

*/

//Document
console.log(document);


// ACCESSING THE DOM

let titleElem = document.getElementById('heading');
console.log(titleElem);

let paraElem = document.getElementsByClassName('info');

console.log(paraElem);

[...paraElem].forEach((elem) => {
    console.log(elem.innerHTML = 'This is a change from a forEach method');
});

Array.from(paraElem).forEach((elem) => {
    console.log(elem);
    console.log(elem.style);
});

let infoElem = document.getElementsByTagName('p');

console.log(infoElem);


//Two More selector:- querySelector() and querySelectorAll(): Both accepts CSS selectors rules 

// querySelector() returns the first match it encantas
// querySelectorAll() return all the element with that matches the query.

let queryElem = document.querySelector('.info');

console.log(queryElem);

let queryElemAll = document.querySelectorAll('p.info');


/*
 1. getElementById(id);
 2. getElementsByClassName(className);
 3. getElementsByTagName(tagName);
 4. querySelector(cssSelector);
 5. querySelector(cssSelector);

*/


function filterList() {

    let inputElem = document.getElementById('searchInput');
    let input = inputElem.value;

    let liElement = document.querySelectorAll('ul#itemList li');
    //console.log(liElement);
    liElement.forEach((elem) => {
       /* console.log(elem.localName); // li
        console.log(elem.nodeName); // LI
        console.log(elem.innerHTML);*/
      
        //In this case, the toLoweCase() and Includes() are both string methods.
      elem.style.display =  elem.innerText.toLowerCase().includes(input.toLowerCase()) ? 'block' : 'none';
      
   
    }); // To apple array methods, it should be on the liElement itself.
    // You must differentiate between the array structure and the elements within it.
    //At the outer level, we are dealing with the array and inner level we are dealing with the elements.
    //When the array method returns an array, another array method could be chained to manipulate its elements.
}

let ulElem = document.querySelector('ul#itemList');

console.log(ulElem);
console.log(ulElem.firstElementChild.nodeName);
console.log(ulElem.firstElementChild.innerHTML);
ulElem.firstElementChild.style.backgroundColor = 'green';

ulElem.style.backgroundColor = ulElem.innerHTML.toLocaleLowerCase().includes('banana') ? 'yellow' : 'blue';
console.log(ulElem.children);
let ulChildren = ulElem.children;

console.log([].slice.call(ulChildren));
console.log(Array.from(ulChildren));

console.log(ulChildren); // Returns HTMLCollection
[...ulChildren].forEach((elem) => {
  elem.style.backgroundColor =   elem.innerHTML.toLocaleLowerCase().includes('banana') ? 'orange' : 'blue';
});

function test(name, age, year) {
  let argu = arguments;
  // Another way of converting none array to array 
  let anoArgu = [].slice.call(arguments);
  console.log(anoArgu);
  console.log(arguments);

  [...argu].forEach((arg) => {
    if(typeof arg === 'string' || arg === 25) {
      console.log(arg);
    }
  });

}

// Argument is the real data passed to the function parameter.
test('John Doe', 25, 2025);
console.log('yes' || 'no');

// Destructure an array
// Destructuring just means, you are associating variable names, to each element of the array.

let array = [1, 2, 3, 4];

let [one, two, three, four] = array;

console.log(one, two, three, four);




// Destructure an Object

let obj = {
  name: 'John Doe',
  age: 25,
  year: 2025
}

let {name, age, year} = obj;

console.log(name, age, year);


let array_1 = [1, 2, 2, 4, 1, 3, 4, 5, 6];
let index = [];
array_1.forEach((elem, ind, array)=> {
  //console.log(elem);
 console.log(Array.prototype.includes.call(array, 8));
  let index2 = array.includes((3))

  //console.log(`this is from index2: ${index2}`);

 // console.log(array.indexOf(elem === 3));
  if(elem === 4) {
   index.push(array.indexOf(elem));
  }
});

console.log(index);