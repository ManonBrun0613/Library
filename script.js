// List of all books entered
let myLibrary=[];

// Two separate lists to separate books that are read and those that are not
let myLibraryRead=[];
let myLibraryUnread=[];

// Create a Book function
function Book(title,author,pages,read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function () {
        return(title+' by '+author+', '+pages+' pages');
    }
}

// Function to add a new book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Get the form element and the 'new book' button
let form= document.querySelector('form');
let newBookButton= document.querySelector('.new-book');

// Make the form appear when clicking 'new book'
newBookButton.addEventListener('click', function() {
    form.style.display='grid';
    newBookButton.style.display='none';
});

// Get the two different columns 'books read' and 'books to read'
let booksRead=document.querySelector('.books-read')
let booksNotRead=document.querySelector('.books-not-read')

let switchRead=true;

// Function that retrieves the information from the form and creates a neww Book object
function createBook() {
    let title= document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let read=document.getElementById('read');
    if (read.checked) {
        read='read';
        switchRead=true;
    } else {
        read='not read';
        switchRead=false;
    }
    let newBook= new Book(title,author,pages,read);
    addBookToLibrary(newBook);
}

// function that runs through the library and sorts the books in the right category
function assignLibrary() {
    for (let book of myLibrary) {
        console.log(book.read);
        if (book.read==='read') {
            myLibraryRead.push(book.info());
        } else {
            myLibraryUnread.push(book.info());
        }
    }
    myLibrary=[];
}

// display the books in the correct category
function displayBook() {
    let div = document.createElement('div');
    if (switchRead) {
        booksRead.appendChild(div);
        div.textContent=myLibraryRead;
        myLibraryRead=[]
    } else {
        booksNotRead.appendChild(div);
        div.textContent=myLibraryUnread;
        myLibraryUnread=[];
    }
}

function sortBook() {
    createBook();
    assignLibrary();
    displayBook();

}

function clearForm() {
    let title=document.getElementById('title');
    let author=document.getElementById('author');
    let pages=document.getElementById('pages');
    
    title.value='';
    author.value='';
    pages.value='';
    console.log(title,author,pages);
}

// Get the submit button
let submitButton=document.querySelector('.submit');

submitButton.addEventListener('click', sortBook);;

submitButton.addEventListener('click', function () {
    form.style.display='none';
    newBookButton.style.display='block';
    clearForm();
})

submitButton.addEventListener('click', function () {
    newBookButton.style.display='block';
    
})

