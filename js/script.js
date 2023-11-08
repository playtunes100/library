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

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function displayLibrary(){
    myLibrary.forEach((book, id)=> {
        createCard(book, id);
    });
}

function createCard(book, id){
    const card = document.createElement('div');
    card.classList.add('card');
    const name = document.createElement('p');
    name.textContent = 'Name: '+ book.name;
    card.appendChild(name);
    const author = document.createElement('p');
    author.textContent = 'Author: '+ book.author;
    card.appendChild(author);
    const pages = document.createElement('p');
    pages.textContent = 'Pages: '+ book.pages;
    card.appendChild(pages);

    const cardActions = document.createElement('div');
    cardActions.classList.add('card-actions');
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    cardActions.appendChild(edit);
    const view = document.createElement('button');
    view.textContent = 'View';
    cardActions.appendChild(view);

    const toggle = document.createElement('label');
    toggle.classList.add('read-toggle');
    const span = document.createElement('span');
    span.id = 'toggle-'+id;
    span.classList.add('toggle-button');
    book.read ? span.classList.add('read'): span.classList.remove('read');
    toggle.appendChild(span);

    cardActions.appendChild(toggle);

    card.appendChild(cardActions);

    document.querySelector('.card-container').appendChild(card);
    
}

function toggleReadButton(){
    document.querySelectorAll('.toggle-button').forEach( e => {
        e.addEventListener('pointerdown', () => {
            myLibrary[Number(e.id.substring(7,e.id.length))].toggleRead();
            myLibrary[Number(e.id.substring(7,e.id.length))].read ? e.classList.add('read'): e.classList.remove('read');
        });
    });

}




const first = new Book('The first', 'playtunes', 745, true);
const second = new Book('A wild sheep chase', 'Haruki Murakami', 465, false);
const hard = new Book('Hard-boiled wonderland and the end of the world', 'Haruki Murakami', 634, true);

addBookToLibrary(first);
addBookToLibrary(second);
addBookToLibrary(hard);

displayLibrary();
toggleReadButton();