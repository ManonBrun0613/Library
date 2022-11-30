let myLibrary=[];

function Book(title,author,pages,read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function () {
        return(title+' by '+author+', '+pages+' pages, '+read)
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)    
}

let form=document.querySelector('form');
let newBookButton= document.querySelector('.new-book');

console.log(form,newBookButton)
newBookButton.addEventListener('click', function() {
    form.style.display='grid';
    newBookButton.style.display='none';
})

