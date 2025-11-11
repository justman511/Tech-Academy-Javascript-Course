

// Efficient DOM Traversal

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