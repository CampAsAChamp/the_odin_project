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
            gridContainer.appendChild(grid);
            console.log("Created single square");
        }
    }
    console.log("Created Grids");
}

let numSquares = 16;
createGrids(numSquares);
