
/*
    DOM Event

    - What is an Event?
    - Event Handling and Why?
    - Event Handling in Markup
    - Event Handling in Script
    - addEventListener and RemoveEventListener
    - DOM Content Loaded
    - Event Object
    - Event Capturing and Bubbling
    - Event Delegation
    - Event Default Behaviour
    - Custom Events
    - Projects
    - Tasks

*/

// What is an Event (Browser)

// An event is just a signal that something happened in the browser


function handleClick(e) {
    console.log(`My Button was Clicked, ${e}`);
}

const myBtn2Elem = document.getElementById('myBtn2');
console.log(myBtn2Elem);

myBtn2Elem.onclick = function () {
    console.log('My Button 2 Clicked');
}

const countBtn = document.getElementById('countBtn');

let counter = 0;

const handleCount = function() {
   console.log(`counter ${counter}`);
   counter++;
}

const greetMe = function() {
    console.log('Thank You!');
}
countBtn.addEventListener('click', handleCount);
countBtn.addEventListener('click', greetMe);

countBtn.removeEventListener('click', handleCount);


// DOM Content Loaded

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dom Content Loaded');
});


// Event Object
const searchElem = document.getElementById('search-id');

function handleChange (event) {
    console.log(event);
    console.log(`Event-type,  ${event.type}`);
    console.log(`Target,  ${event.target}`);
    console.log(`Target name,  ${event.target.name}`);
    console.log(`Target VAlue,  ${event.target.value}`);
    console.log(`Current Target,  ${event.currentTarget}`);

    console.log(this); // return input element. 
    // The element we added the handler is the this object.

}
searchElem.addEventListener('change', handleChange);




// Event Capturing,  Bubbling and Delegation
// The DOM is in some sort of hierarchy. child, parent, grandparent etc.
// In Event Bubbling: the event starts from the target element and bubble to its parent until it gets to the document level
// Flow: Child -> parent -> grandparent -> document

// Bubbling: by default is enabled

const grandparent = document.getElementById('grandparent');
const parent =  document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked');
});

parent.addEventListener('click', function () {
    console.log('Parent clicked');
});

child.addEventListener('click', function () {
    console.log('Child clicked');
});

document.body.addEventListener('click', function () {
    console.log('Body clicked');
});

document.addEventListener('click', function () {
    console.log('Document was clicked');
});

const divSibling = document.getElementById('divSibling');

divSibling.addEventListener('click', function() {
    console.log('I was not clicked');
});


// Capturing
// in Capturing: the event flows from the outmost ancestor down to the target element. 
// It happens before the actual target handles the event
// By default Capture is disabled

grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked, is captured');
}, true); // Adding true to the event handler, enables Capturing.

parent.addEventListener('click', function () {
    console.log('Parent clicked, is captured');
}, true);

child.addEventListener('click', function () {
    console.log('Child clicked, is captured');
}, true);

document.body.addEventListener('click', function () {
    console.log('Body clicked, is captured');
}, true);

document.addEventListener('click', function () {
    console.log('Document was clicked, is captured');
}, true);

//const divSibling = document.getElementById('divSibling');

divSibling.addEventListener('click', function() {
    console.log('I was not clicked, is captured');
});



// Event Delegation - it is a technique where you add a single event listener to a parent element, 
// instead of adding individual event listeners to all its children.

const itemlist = document.getElementById('itemList');

itemlist.addEventListener('click', function(e) {

    /*
    outerHTML
: 
"<li>Item 1</li>"
outerText
: 
"Item 1"*/
    const target = e.target;
    console.dir(target);
    if(target.outerText === 'Item 1') {
        target.outerHTML = '<li> Item changed </li>';
    }

});


// To prevent default behaviour (event bubbling), we have to use stopPropagation

document.getElementById('father').addEventListener('click', function() {
    console.log('Father Clicked');
});

document.getElementById('son').addEventListener('click', function(e) {
    console.log('Son Clicked');
    e.stopPropagation();
});


// Event Defaults Behaviours (e.preventDefault()).



// Custom Events

// Step 1: Create a Custom Event

const myEvent = new CustomEvent('userLoggedIn', {
    detail: {
        username: 'tapascript',
        role: 'admin'
    }
});


// Step 2: Liste to the Custom Event

document.addEventListener('userLoggedIn', function(e) {
    console.log(`User Login Detected ${e.detail.username}`);
})

// Step 3: Dispatchin ghe Custom Event

document.dispatchEvent(myEvent);





const headElem = document.getElementById('heading');
console.log(headElem);