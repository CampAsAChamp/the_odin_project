function Book(title, author, numPages, hasRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    this.info = function () {
        return title + " by " + author + ", " + numPages + " pages, " + (hasRead ? "has been read" : "not read yet");
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    let container = document.querySelector(".main-container");

    let bookElem = document.createElement("div");

    let bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    let bookPages = document.createElement("p");
    bookPages.textContent = book.numPages;
    let bookBeenRead = document.createElement("p");
    bookBeenRead.textContent = book.hasRead;

    bookElem.style.border = "5px solid black";
    bookElem.style.backgroundColor = "aquamarine";

    bookElem.appendChild(bookTitle);
    bookElem.appendChild(bookAuthor);
    bookElem.appendChild(bookPages);
    bookElem.appendChild(bookBeenRead);
    container.appendChild(bookElem);
}

function displayAllBooks() {
    // console.table(myLibrary);
    myLibrary.forEach(addBookToLibrary);
}

let submitBtn = document.querySelector("#submit-btn");

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

    // Automatically close when user clicks submit
    var modal = document.getElementById("id01");
    modal.style.display = "none";
});

let myLibrary = [];
const the_hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const hunger_games = new Book("The Hunger Games", "Suzane Collins", 360, false);
const gone_girl = new Book("Gone Girl", "John Greene", 432, false);

addBookToLibrary(the_hobbit);
addBookToLibrary(hunger_games);
addBookToLibrary(gone_girl);

// displayAllBooks();
// console.log(the_hobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
