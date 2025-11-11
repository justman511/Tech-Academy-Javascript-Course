// Class for listing all available books

export class LibrarySystem {
   #book;
   constructor() {
    this.#book = [];
   }

   addBook(book) {
    this.#book.push(book);
   }

   getAvailableBooks() {
    return this.#book.filter(book => {
        return book.isAvailable;
    })
   }

   getAllBook() {
    return this.#book;
   }
}