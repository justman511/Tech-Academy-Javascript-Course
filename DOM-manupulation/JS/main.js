
/*
             DOM

- Creating Element
- Inserting Element
- Modifying Content
- Removing Element
- Read, Write, and Remove Attributes
- Traversing/Navigating DOM
- Manipulating Styles
- Manipulating Classes
- Controlling Visibilities
- Build Project(s)


*/

//Creating Element

const pElem = document.createElement('p');
pElem.innerHTML = 'This is a text added dynamically.'
console.log(pElem.childNodes);
document.body.appendChild(pElem);
console.dir(pElem);


// Insert Element

const span = document.createElement('span');
span.innerText = 'I am a Span';

const p = document.querySelector('p');
document.body.insertBefore(span, p.nextElementSibling);
console.log(document.body);


// Modifying Content

{
    const pElem = document.querySelector('p');
    pElem.innerHTML = '<u> Hello How</u> are you doing?'
    const divElem = document.querySelector('div');
    console.log(divElem);
    console.log(`Inner Text ${divElem.innerText}`);
    console.log(`Inner Content ${divElem.textContent}`);
    console.log(divElem.textContent);
    console.log(`Inner Content ${divElem.innerHTML}`);
}



// Remove Element from DOM

{
    let list = document.getElementById('myList');


    [...list.children].forEach((elem) => {
        console.log(elem);
    })
    console.log(list.firstElementChild);
    list.removeChild(list.firstElementChild.nextElementSibling);
    list.removeChild(list.lastElementChild);
    // list.replaceChildren(param1, param2, param3, ...);
    // When replaceChildren is called without parameter, will remove all its children
    //list.replaceChildren();

}


//Read, Write, and Remove attributes


{
    const imgElem = document.querySelector('img');

    // REad or get an attribute
    console.log(imgElem.getAttribute('src'));
    console.log(imgElem.getAttribute('alt'));

    // Set or Write an attribute

    imgElem.setAttribute('src', './IMAGE/eagle.jpg');


    // Remove attribue
    imgElem.removeAttribute('height');

   // Checking if an element has an attribute
   let chAttr = imgElem.hasAttribute('src');

   console.log(chAttr);
   
}



// Traversing/Navigating  DOM
// It is all about going through node hierarchy (from Parent to Child node)

{

    //ParentElement || ParentNode
    const span =  document.getElementById('text');
    console.log(span.parentElement);
    console.log(span.parentNode);


    // children || childNode
  /* 
   children: returns an HTMLCollections (must be converted to an array, before applying array methods)
   children: Only returns the HTML elements
   childNode: returns a nodeList (directly call a forEach on it)
   chidlNode: returns all nodes (textNode, elementNode, commentNode, /n, etc )

  */

   const parElem = document.getElementById('main-id');
   console.log(parElem.children);
   console.log(parElem.childNodes);

   // firstChild || firstElementChild
  /* 
    firstChild: returns a node
    firstElementChild: returns an element child
  
  */

    console.log(parElem.firstChild);
    console.log(parElem.firstElementChild);


    // lastChild || lastElementChild
     console.log(parElem.lastChild);
    console.log(parElem.lastElementChild);


    // previousSibling || nextSibling and previousElementSibling || nextElementSibling
  
}


// Manipulating Styles

{
    const pElem = document.getElementById('pStyle');
    console.log(pElem.style);
    pElem.style.backgroundColor = 'pink';
}


// Manipulating Classes

{
    const mainDivElem = document.getElementById('main-id');

    // You can use className to read, get and set class property of an element
    console.log(mainDivElem.className);
    //mainDivElem.className = 'secondary-class';
    console.log(mainDivElem.className);
    /*
    className has a limitation
    - it cannot read multiple class property of an element
    - it replaces all class with a single class, when setting the class

    */

    // classList: we can add(), contains(), remove(), replace(), toggle(), etc. classList.add();

    console.log(mainDivElem.classList);
    mainDivElem.classList.contains('layout');
    console.log(mainDivElem.classList.contains('layout'))
    console.log(mainDivElem.classList)
    console.log(mainDivElem.classList.add('secondary-class'));
    console.log(mainDivElem.classList)

}


// Controlling Visibilities

{
    const mainDivElem = document.getElementById('main-id');

     mainDivElem.style.display = 'none';

     mainDivElem.style.display = 'block';
     mainDivElem.style.visibility = 'hidden';
     mainDivElem.style.opacity = '0';

}


// Just Testing connection

{
    const listElem = document.getElementById('myList');
    console.log(listElem);
}
