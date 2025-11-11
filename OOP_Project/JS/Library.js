/*
Library Project

Library Management System

1: Add Book

2: Available Books

3: Borrowed Books


User Cases 

1: User (Super class for admin and member), With this we avoid repetation

a) Admin (Object)
   - Add a Book (Method)
   - View All Available Books (Method)

b) Member (Object)
   - View All Available Books (Method)
   - Borrow a Book (Method)
   - Return a Book (Method)

c) Book (Object)
   - Name (field)
   - Author (field)
   - Title (field)


*/

import {Admin} from '../Models/admin.js';
import {Member} from '../Models/member.js';
import {Book} from '../Models/books.js';
import {LibrarySystem} from '../services/libraryService.js';


const userSwitcher = document.getElementById('userSwitcher');
const bookSection = document.getElementById('bookSection');
const borrowedSection = document.getElementById('borrowedSection');
const bookList = document.getElementById('bookList');

const bookForm = document.getElementById('bookForm');

let currentUser = new Member('John Doe', 'john@email.com');

const library = new LibrarySystem();

userSwitcher.addEventListener('change', function(event) {
    const selected = event.target.value;

   currentUser = selected === 'Admin'? new Admin('Alice', 'alice@ElementInternals.com') && (borrowedSection.style.display = 'none') 
   : new Member('John Doe', 'john@email.com');

   bookSection.style.display = (selected  === 'admin' ? 'block' : 'none');
    borrowedSection.style.display =  (selected === 'member' ? 'block' : 'none');
  /* if (selected === 'admin' {
     borrowedSection.style.display = 'none';
   } else {
     borrowedSection.style.display = 'block';
   } */

     renderBooks()

});


bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    const book = new Book(title, author, genre);
    library.addBook(book);

    renderBooks();

    bookForm.reset();

    console.log(book);
});

function renderBooks() {
    bookList.innerHTML = '';
    library.getAllBook().forEach((book) => {
      console.log(book);
      const li = document.createElement('li');
      let controls = '';
      if((currentUser.getRole()) === 'Member' && book.isAvailable) {
          controls = `<button data-action"borrow" data-id="${book.id}"> Borrow </button>`;
      } else if((currentUser.getRole()) === 'Admin') {
         controls = `<span>${book.isAvailable ? 'Available' : 'Borrowed'}</span>`;
      }

      li.innerHTML = `
      <div>
         <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>

      </div> ${controls}`;

      

      bookList.appendChild(li);
    })
}

// Initial Rendering

bookSection.style.display = 'none';