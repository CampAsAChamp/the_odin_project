let myLibrary = [];

const container = document.querySelector(".main-container");
const modal = document.getElementById("id01");
const submitBtn = document.querySelector("#submit-btn");
const clearBooksBtn = document.querySelector("#clearBookBtn");

window.onload = function () {
    loadBooksFromStorage();
};

class Book {
    constructor(title, author, numPages, hasRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.hasRead = hasRead;
    }

    info() {
        return title + " by " + author + ", " + numPages + " pages, " + (hasRead ? "has been read" : "not read yet");
    }
}

// function Book(title, author, numPages, hasRead) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.hasRead = hasRead;
//     this.info = function () {
//         return title + " by " + author + ", " + numPages + " pages, " + (hasRead ? "has been read" : "not read yet");
//     };
// }

function addBookToLibrary(book) {
    // Add to the book object array
    myLibrary.push(book);
    // Create the DOM for the book to display on the page
    addBookToPage(book);
}

function addBookToPage(book) {
    let bookElem = document.createElement("div");
    bookElem.className += "book";
    bookElem.dataset.id = myLibrary.length - 1;

    let bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    let bookPages = document.createElement("p");
    bookPages.textContent = book.numPages;
    let bookBeenRead = document.createElement("p");
    bookBeenRead.setAttribute("id", "beenRead");
    bookBeenRead.textContent = book.hasRead;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className += "delete-btn";

    deleteBtn.addEventListener("click", () => {
        // Remove from the DOM element from the page
        bookElem.remove();
        // Remove from the book object array
        myLibrary.splice(bookElem.dataset.id, 1);

        updateBookIDs();
        saveBooksToStorage();
    });

    let readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    readBtn.className += "read-btn";
    readBtn.addEventListener("click", () => {
        // Toggle the text content in the DOM element
        let hasReadText = bookElem.childNodes[3].textContent;
        if (hasReadText === "false") {
            bookElem.childNodes[3].textContent = "true";
        } else {
            bookElem.childNodes[3].textContent = "false";
        }
        // Toggle the read status in the object array
        console.log("MyLibrary Index: ", bookElem.dataset.id);
        myLibrary[bookElem.dataset.id].hasRead = !myLibrary[bookElem.dataset.id].hasRead;
        saveBooksToStorage();
    });

    bookElem.appendChild(bookTitle);
    bookElem.appendChild(bookAuthor);
    bookElem.appendChild(bookPages);
    bookElem.appendChild(bookBeenRead);
    bookElem.appendChild(deleteBtn);
    bookElem.appendChild(readBtn);
    container.appendChild(bookElem);
}

function updateBookIDs() {
    const books = document.querySelectorAll(".book");

    for (let i = 0; i < books.length; i++) {
        books[i].dataset.id = i;
    }
}

function saveBooksToStorage() {
    // console.log(JSON.stringify(myLibrary));
    localStorage.clear();
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    console.log(JSON.stringify(myLibrary));
    console.log("Saved library to local storage");
}

function loadBooksFromStorage() {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    // console.log("MyLibrary: ", myLibrary.length);
    console.log(JSON.parse(localStorage.getItem("myLibrary")));
    if (myLibrary !== null) {
        myLibrary.forEach(addBookToPage);
        updateBookIDs();
        console.log("MyLibrary: ", myLibrary.length);
    } else {
        myLibrary = [];
    }
    console.log("Loaded library from local storage");
}

submitBtn.addEventListener("click", () => {
    let title = document.querySelector("#titleBox").value;
    let author = document.querySelector("#authorBox").value;
    let numPages = document.querySelector("#numPagesBox").value;
    let hasRead = document.querySelector("#hasReadCheckbox").checked;

    let book = new Book(title, author, numPages, hasRead);
    console.log(title);
    console.log(author);
    console.log(numPages);
    console.log(hasRead);
    addBookToLibrary(book);
    saveBooksToStorage();
    // Automatically close when user clicks submit
    modal.style.display = "none";
});

clearBooksBtn.addEventListener("click", () => {
    myLibrary.length = 0;
    let books = document.querySelectorAll(".book");

    books.forEach((book) => {
        book.remove();
    });

    localStorage.clear();

    console.log("Removed all books");
});

const the_hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const hunger_games = new Book("The Hunger Games", "Suzane Collins", 360, false);
const gone_girl = new Book("Gone Girl", "John Greene", 432, false);

// addBookToLibrary(the_hobbit);
// addBookToLibrary(hunger_games);
// addBookToLibrary(gone_girl);
