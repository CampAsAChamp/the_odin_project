const container = document.querySelector(".container");

const choices = {
    X: "X",
    O: "O",
    Blank: "",
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
        [choices.X, choices.O, choices.X],
        [choices.O, choices.X, choices.O],
        [choices.X, choices.O, choices.X],
    ];
    return { gb };
})();

const DisplayController = (() => {
    const updateDisplay = (gb) => {
        let xCount = 0;
        let oCount = 0;

        let square = {};

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gb[i][j] == choices.O) {
                    // Create an O and add it to the board
                    square = document.createElement("div");
                    square.style.height = "100%";
                    square.style.width = "100%";
                    square.style.border = "5px solid black";
                    square.style.backgroundColor = "blue";
                    oCount++;
                    container.appendChild(square);
                } else if (gb[i][j] == choices.X) {
                    // Create an X and add it to the board
                    square = document.createElement("div");
                    square.style.height = "100%";
                    square.style.width = "100%";
                    square.style.backgroundColor = "red";
                    square.style.border = "5px solid black";
                    xCount++;
                    container.appendChild(square);
                } else {
                    console.log("Empty square");
                }
            }
        }

        console.log({ xCount });
        console.log({ oCount });
    };
    return { updateDisplay };
})();

const jeff = PersonFactory("jeff", 27);
jeff.age;
jeff.sayHello();
calculator.add(3, 5); // 8

DisplayController.updateDisplay(GameBoard.gb);
