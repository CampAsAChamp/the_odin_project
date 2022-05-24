const container = document.querySelector(".container");
const rowWidth = 3;
const colWidth = 3;

const choices = Object.freeze({
    X: "X",
    O: "O",
    Blank: "Blank",
});

const players = Object.freeze({
    X: "X",
    O: "O",
});

const PersonFactory = (name, player) => {
    const sayHello = () => console.log(`Hi I'm ${name} and ${player}`);
    return { name, player, sayHello };
};

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
})();

const GameBoard = (() => {
    let gb = [
        // [choices.O, choices.Blank, choices.X],
        [choices.Blank, choices.Blank, choices.Blank],
        [choices.Blank, choices.Blank, choices.Blank],
        [choices.Blank, choices.Blank, choices.Blank],
    ];
    return { gb };
})();

const DisplayController = ((parGB) => {
    let gb = parGB;

    const squareEventListener = (gb, i, j) => {
        console.log("Clicked square");
        let rowSelector = "[data-row='" + j + "']";
        let clickedSquare = document.querySelectorAll(rowSelector)[i];

        if (gb[i][j] === choices.Blank) {
            clickedSquare.style.color = "red";
            clickedSquare.textContent = choices.X;
            gb[i][j] = choices.X;
        } else {
            clickedSquare.style.color = "blue";
            clickedSquare.textContent = choices.O;
            gb[i][j] = choices.O;
        }
        // mygb[x][y] = player === players.O ? choices.O : choices.X;
    };

    const addSquareToBoard = (i, j) => {
        let square = document.createElement("div");
        // square.dataset.row = j;
        // square.dataset.col = i;
        square.addEventListener("click", squareEventListener.bind(null, i, j));
        square.className += "square";
        if (gb[i][j] == choices.O) {
            // Create an O and add it to the board
            square.style.color = "blue";
            square.textContent = choices.O;
        } else if (gb[i][j] == choices.X) {
            // Create an X and add it to the board
            square.style.color = "red";
            square.textContent = choices.X;
        } else {
            // Leave it blank
            square.textContent = "";
        }
        container.appendChild(square);
    };

    const updateDisplay = () => {
        for (let i = 0; i < rowWidth; i++) {
            for (let j = 0; j < colWidth; j++) {
                // addSquareToBoard(gb, i, j);
            }
        }
    };

    const initDisplayBoard = (gb) => {
        const squares = document.querySelectorAll(".square");

        for (let i = 0; i < rowWidth; i++) {
            for (let j = 0; j < colWidth; j++) {
                squares[rowWidth * j + i].addEventListener("click", squareEventListener.bind(null, gb, i, j));
            }
        }
    };
    return { initDisplayBoard };
})();

const player1 = PersonFactory("Player1", players.X);
const player2 = PersonFactory("Player2", players.O);
player1.sayHello();
player2.sayHello();

/*
    turn = red/blue

    GameController.playGame()
    while(gameWon)
    {
        pickSquare()
        updateDisplay()
        turn = !turn;
    }

*/
calculator.add(3, 5); // 8

DisplayController.initDisplayBoard(GameBoard.gb);

// DisplayController.updateDisplay(GameBoard.gb);
// DisplayController.updateDisplay(GameBoard.gb);

// DisplayController.updateDisplay(GameBoard.gb);
