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
        read=true;
        switchRead=true;
    } else {
        read=false;
        switchRead=false;
    }
    let newBook= new Book(title,author,pages,read);
 
    addBookToLibrary(newBook);
}

// function that runs through the library and sorts the books in the right category
// function assignLibrary() {
//     for (let book of myLibrary) {
//         console.log(book.read);
//         if (book.read) {
//             myLibraryRead.push(book.info());
//         } else {
//             myLibraryUnread.push(book.info());
//         }
//     }
//     myLibrary=[];
// }

function checkboxBook (div) {
    let checkbox= document.createElement('input');
    checkbox.type="checkbox";
    checkbox.name="read-or-not";
    checkbox.id="read-or-not";

    let label=document.createElement('label');
    label.htmlFor="read-or-not";
    div.appendChild(checkbox);
    div.appendChild(label);
    console.log('checkbox div.read '+div.read)
    console.log('div ' +div)
    if (switchRead) {
        checkbox.checked=true;
    } else {
        checkbox.checked=false;
    }
}

function checkOrNot() {
    if (switchRead) {
        let checkbox=document.getElementById()
    }
}

// display the books in the correct category
function displayBook() {
    let div = document.createElement('div');
    let divContent=myLibrary[0];
    div.textContent=divContent.info();
    myLibrary=[];
    if (divContent.read) {
        booksRead.appendChild(div);
        checkboxBook(div);
    } else {
        booksNotRead.appendChild(div);
        checkboxBook(div);
    }
}

function sortBook() {
    createBook();
    displayBook();

}

function clearForm() {
    let title=document.getElementById('title');
    let author=document.getElementById('author');
    let pages=document.getElementById('pages');
    
    title.value='';
    author.value='';
    pages.value='';
}

// Get the submit button
let submitButton=document.querySelector('.submit');

submitButton.addEventListener('click', sortBook);
let checkboxes;

submitButton.addEventListener('click', function () {
    form.style.display='none';
    newBookButton.style.display='block';
    clearForm();
    checkboxes = document.querySelectorAll('#read-or-not');
    console.log(checkboxes[0].checked);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            
            if(e.target.checked) {
                console.log(e.target)
            }
        })
      });
    

})

submitButton.addEventListener('click', function () {
    newBookButton.style.display='block';
    
})

