// List of all books entered
let myLibrary=[];

// Create a Book function
function Book(title,author,pages,read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
   
}

// Function to add a new book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Get the form element and the 'new book' button
let form=document.querySelector('form');
let newBookButton=document.querySelector('.new-book');

// Make the form appear when clicking 'new book'
newBookButton.addEventListener('click', function() {
    form.style.display='grid';
    newBookButton.style.display='none';
});

// Function that retrieves the information from the form and creates a neww Book object
function createBook() {
    let title= document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let read=document.getElementById('read');
    
    if (read.checked) {
        read='read.';
    } else {
        read='not read.';
    }
 
    let newBook= new Book(title,author,pages,read);
    addBookToLibrary(newBook);
}


Book.prototype.checkbox= function() {

    let checkbox= document.createElement('input');

    checkbox.type="checkbox";
    checkbox.name="read-or-not";
    checkbox.id="read-or-not";
    
    if (this.read=='read.') {
        checkbox.checked=true;
    } else {
        checkbox.checked=false;
    }
    this.checkbox=checkbox;
}

// Selects the div 'list' where the different book cards will be stored
let listBook=document.querySelector('.list')

// create array that stores all the checkboxes and their checked attributes
let checkboxes=[];
let checked=[];
// let cards=[];
let images=[];

// Function that retrieves the list of checked and unchecked checkboxes
function getCheckedState() {
    checked=[];
    for (let i=0;i<=myLibrary.length-1;i++) {
        if (myLibrary[i].checkbox.checked) {
            checked[i]=true;
        } else {
            checked[i]=false;
        }
    };
};

function toggleClass() {
    let cards=document.querySelectorAll('div.card');
    for (let i=0;i<=cards.length-1;i++) {
        if (checked[i]) {
            cards[i].classList.remove('notread')
            cards[i].classList.add('read');
        } else {
            cards[i].classList.remove('read');
            cards[i].classList.add('notread');
        }
    }
}
// changes the read values depending on checked list
function readValues() {
    let readValues=[];
    let readDivs=document.querySelectorAll('.read-or-not');
    for (let value of readDivs) {
        readValues.push(value.textContent);
    }
    for (let i =0;i<=checked.length-1;i++) {
        if (checked[i]) {
            readDivs[i].textContent='read.';
        } else {
            readDivs[i].textContent='not read.';
        }
    }
}

// gets checkboxes, updates their checked state and changes the relevant read attributes
function getCheckboxes(){
    checked=[];
    for (let box of checkboxes) {
        checked.push(box.checked);
        box.addEventListener('change', getCheckedState);
        box.addEventListener('change',readValues);
        box.addEventListener('change',toggleClass);
    };
}


// creates card
Book.prototype.bookCard= function() {

    let bookDiv=document.createElement('div');
    bookDiv.classList.add('card');
    let closeButton =document.createElement('img');
    closeButton.src='./x.svg';
    images.push(closeButton);

    bookDiv.appendChild(closeButton);
    let bookTable=document.createElement('table');

    let bookTitle=document.createElement('tr');
    bookTitle.textContent=this.title;
    bookTitle.classList.add('title');

    let bookAuthor=document.createElement('tr');
    bookAuthor.textContent=this.author;
    bookAuthor.classList.add('author');

    let bookPages=document.createElement('tr');
    bookPages.textContent=this.pages+' pages,';
    bookPages.classList.add('pages');

    let bookRead=document.createElement('tr');
    bookRead.textContent=this.read;
    bookRead.classList.add('read-or-not');

    if (this.read=='read.') {
        bookDiv.classList.add('read');
    } else {
        bookDiv.classList.add('notread');

    }

    let bookCheckboxRow=document.createElement('tr');
    this.checkbox();

    bookCheckboxRow.append(this.checkbox)
   
    bookTable.appendChild(bookTitle);
    bookTable.appendChild(bookAuthor);
    bookTable.appendChild(bookPages);
    bookTable.appendChild(bookRead);
    bookTable.appendChild(bookCheckboxRow);
    bookDiv.appendChild(bookTable);
    listBook.appendChild(bookDiv);

    checkboxes.push(this.checkbox);

}

// function to display book
function displayBook() {
    myLibrary[myLibrary.length-1].bookCard();
}

// Function that creates the book from the form data and displays it on a card
function sortBook() {
    createBook();
    displayBook();
}

// function that clears form once submitted
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

// display book card when submit button is clicked
submitButton.addEventListener('click', sortBook);

// hide the form once submit button is clicked and clears the inputs
submitButton.addEventListener('click', function () {
    form.style.display='none';
    newBookButton.style.display='block';
    clearForm();
});

submitButton.addEventListener('click', getCheckboxes);
submitButton.addEventListener('click',deleteCard);

function deleteCard() {
    cards=document.querySelectorAll('div.card');
    for (let i=0;i<=images.length-1;i++) {
        images[i].addEventListener('click', function() {
        cards[i].style.display='none';
        });
    }
}
