const container = document.querySelector(".main-container");
const modal = document.getElementById("id01");

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
    });

    let readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    readBtn.className += "read-btn";
    readBtn.addEventListener("click", () => {
        // Update the read status in the object array
        let hasReadVal = myLibrary[bookElem.dataset.id].hasRead;

        if (hasReadVal) {
            myLibrary[bookElem.dataset.id].hasRead = false;
        } else {
            myLibrary[bookElem.dataset.id].hasRead = true;
        }

        // Update the text content in the DOM element
        let hasReadText = bookElem.childNodes[3].textContent;
        if (hasReadText === "false") {
            bookElem.childNodes[3].textContent = true;
        } else {
            bookElem.childNodes[3].textContent = false;
        }
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
    const deleteBtns = document.querySelectorAll(".delete-btn");
    // console.log("Num Delete Btns: ", deleteBtns.length);
    for (let i = 0; i < deleteBtns.length; i++) {
        // Get the parent of the delete btn and change its id
        deleteBtns[i].parentElement.dataset.id = i;
    }
}

let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
    let title = document.querySelector("#titleBox").value;
    let author = document.querySelector("#authorBox").value;
    let numPages = document.querySelector("#numPagesBox").value;
    let hasRead = document.querySelector("#hasReadCheckbox").checked;

    let book = new Book(title, author, numPages, hasRead);
    addBookToLibrary(book);

    // Automatically close when user clicks submit
    modal.style.display = "none";
});

let myLibrary = [];
const the_hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const hunger_games = new Book("The Hunger Games", "Suzane Collins", 360, false);
const gone_girl = new Book("Gone Girl", "John Greene", 432, false);

addBookToLibrary(the_hobbit);
addBookToLibrary(hunger_games);
addBookToLibrary(gone_girl);
