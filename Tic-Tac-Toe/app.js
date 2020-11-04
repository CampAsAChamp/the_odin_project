const container = document.querySelector(".container");
const rowWidth = 3;

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

const DisplayController = ((gb) => {
    const squareEventListener = (gb, i, j) => {
        console.log({ i });
        console.log({ j });
        if (gb[i][j] === choices.Blank) {
            // Okay to mark
            // will only get you ones with a value of 1.
            console.log("Marked");
            let rowSelector = "[data-row='" + j.toString() + "']";
            console.log({ rowSelector });

            // let clickedSquare = document.querySelector("[data-id='0']");
            // let singleSquare = document.querySelectorAll("[data-row='1']")[j];
            let singleSquare = document.querySelectorAll(rowSelector)[i];
            console.log(singleSquare);
            singleSquare.style.color = "red";
            singleSquare.textContent = "X";
        }
        // console.log(gb[i][j]);
        // square.style.player = "blue";
        // square.textContent = "O";
        // mygb[x][y] = player === players.O ? choices.O : choices.X;
        console.log("Clicked a square");
    };

    const addSquareToBoard = (gb, i, j) => {
        let square = document.createElement("div");
        square.dataset.id = rowWidth * i + j;
        square.dataset.row = j;
        square.dataset.col = i;
        square.addEventListener("click", squareEventListener.bind(null, gb, i, j));
        square.className += "square";
        if (gb[i][j] == choices.O) {
            // Create an O and add it to the board
            square.style.color = "blue";
            square.textContent = "O";
        } else if (gb[i][j] == choices.X) {
            // Create an X and add it to the board
            square.style.color = "red";
            square.textContent = "X";
        } else {
            // Leave it blank
            square.textContent = "";
        }
        container.appendChild(square);
    };

    const updateDisplay = (gb) => {
        for (let i = 0; i < rowWidth; i++) {
            for (let j = 0; j < rowWidth; j++) {
                addSquareToBoard(gb, i, j);
            }
        }
    };
    return { updateDisplay };
})();

const player1 = PersonFactory("Player1", players.X);
const player2 = PersonFactory("Player2", players.O);
player1.sayHello();
player2.sayHello();

/*
    turn = red/blue

    while(gameWon)
    {
        pickSquare()
        updateDisplay()
        turn = !turn;
    }

*/
calculator.add(3, 5); // 8

DisplayController.updateDisplay(GameBoard.gb);
// DisplayController.updateDisplay(GameBoard.gb);

// DisplayController.updateDisplay(GameBoard.gb);
