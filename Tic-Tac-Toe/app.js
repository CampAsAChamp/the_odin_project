const container = document.querySelector(".container");

const choices = {
    X: "X",
    O: "O",
    Blank: "Blank",
};

const PersonFactory = (name, age) => {
    const sayHello = () => console.log("hello!");
    return { name, age, sayHello };
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
        [choices.X, choices.Blank, choices.O],
        [choices.Blank, choices.Blank, choices.Blank],
        [choices.Blank, choices.Blank, choices.Blank],
    ];
    return { gb };
})();

const DisplayController = (() => {
    const squareEventListener = () => {
        console.log("Clicked a square");
    };

    const updateDisplay = (gb) => {
        let xCount = 0;
        let oCount = 0;
        let blankCount = 0;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let square = document.createElement("div");
                square.addEventListener("click", squareEventListener);
                square.className += "square";
                if (gb[i][j] == choices.O) {
                    // Create an O and add it to the board
                    square.style.color = "blue";
                    square.textContent = "O";
                    oCount++;
                } else if (gb[i][j] == choices.X) {
                    // Create an X and add it to the board
                    // square.style.backgroundColor = "red";
                    square.style.color = "red";
                    square.textContent = "X";
                    xCount++;
                } else {
                    // Leave it blank
                    // square.style.color = "white";
                    square.textContent = "";
                    blankCount++;
                }
                container.appendChild(square);
            }
        }

        console.log({ xCount });
        console.log({ oCount });
        console.log({ blankCount });
    };
    return { updateDisplay };
})();

const jeff = PersonFactory("jeff", 27);
jeff.age;
// jeff.sayHello();
calculator.add(3, 5); // 8

DisplayController.updateDisplay(GameBoard.gb);
