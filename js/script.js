const myLibrary = [];

function Book(name, author, pages, read) {
  // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.toggleRead = () => { 
        this.read ? this.read = false : this.read = true;
    };
    
  
}

function addBookToLibrary() {
  // do stuff here
}

