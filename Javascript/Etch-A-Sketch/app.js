function createGrids(numSquares) {
    let gridContainer = document.querySelector("#grid-container");
    let percentage = (1 / numSquares) * 100;
    percentage = String(percentage) + "%";

    console.log("Percent:", percentage);
    for (let j = 0; j < numSquares; j++) {
        for (let i = 0; i < numSquares; i++) {
            let grid = document.createElement("div");
            grid.style.backgroundColor = "white";
            grid.style.float = "left";
            grid.style.width = percentage;
            grid.style.height = percentage;
            grid.style.border = "1px dashed black";
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black";
            });

            gridContainer.appendChild(grid);
            console.log("Created single square");
        }
    }
    console.log("Created Grids");
}

function resetButton() {
    let resetBtn = document.querySelector("#reset-btn");

    resetBtn.addEventListener("click", () => {
        let newNumSquares = 0;
        do {
            newNumSquares = prompt("Enter a number of squares (less than 100): ");
        } while (newNumSquares < 0 || newNumSquares > 100);

        let gridContainer = document.querySelector("#grid-container");
        removeAllChildNodes(gridContainer);
        createGrids(newNumSquares);
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let numSquares = 16;
createGrids(numSquares);
resetButton();
