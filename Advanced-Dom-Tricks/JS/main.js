

// Efficient DOM Traversal

//const { createElement } = require("react");

// Best practice is to traverse from Parent to children and to siblings and back up

const parent = document.querySelector('.card');
console.log(parent);
const firstChild = parent.firstElementChild;
console.dir(firstChild);
const sibling = firstChild.nextElementSibling;
console.log(sibling);
const lastChild = parent.lastElementChild;
console.log(lastChild);
const parentOfElement = firstChild.parentElement;
console.log(parentOfElement);


// Templates and Cloning
 const template = document.getElementById('card-template');
 console.log(template);
 const clone = template.content.cloneNode(true); // True will allow me to deep clone the next elements within the element. 
 console.log(clone.children);

 clone.querySelector('.title').textContent = 'You are Welcome to Advanced topic';
 clone.querySelector('.desc').textContent = 'This is an advanced topic for beginner';

 document.body.appendChild(clone);


 // Document Fragment and Range
 // Fragment is an invisible container that is hidden within your page.
 /*
   Document Fragment

   - Not part of the main DOM tree until you insert it (appendChild)
   - Acts like a temp container
   - Great for building chunks of DOM before adding them
 */

   const fragment = document.createDocumentFragment();

   for(let i = 1; i <= 3; i++) {
       const li = document.createElement('li');
       li.textContent = `Item ${i}`;
       fragment.appendChild(li);
   }

   document.getElementById('list').appendChild(fragment);


// Range 
/*
  Range
  -  YOu use range to select the content of an element.

*/

const p = document.getElementById('para');

const range = document.createRange();
range.setStart(p.firstChild, 5); // This will be after 'Hello' space
range.setEnd(p.childNodes[2], 4); // captures between strong tag and "and" child

const content = range.cloneContents();
console.log(content);


// Shadow DOM

// Shadow Host
/*
const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({mode: 'open'});

shadow.innerHTML = `<style>p {color: red;}</style><p>Hello Shadow!</p>`;
*/

// Advanced Class Manipulation


// Handling Large-Scale DOM Updates

function addItems (count) {
    const frag = document.createDocumentFragment();
    for(let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div);
    }

    // With this line of code, you are painting the DOM just onces, after the elements were created
    document.body.appendChild(frag);
}

// addItems(1000);


// Mutation Observer

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);