function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return 1;
    } else return -1;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let randomNum = getRandomInt(0, 3);
    if (randomNum === 0) return "Rock";
    else if (randomNum === 1) return "Paper";
    else return "Scissors";
}

function update() {
    let playerScore = document.querySelector("#playerScore");
    let computerScore = document.querySelector("#computerScore");

    playerScore.textContent = playerWins;
    computerScore.textContent = cpuWins;
}

function announceWinner() {
    let winnerNode = document.createElement("div");
    winnerNode.style.backgroundColor = "pink";

    if (playerWins === 5) {
        winnerNode.textContent = "Player is the winner";
        console.log("Player is the winner");
    } else {
        winnerNode.textContent = "Computer is the winner";
        console.log("Computer is the winner");
    }

    document.body.appendChild(winnerNode);

    playerWins = 0;
    cpuWins = 0;
    update();
}

let playerWins = 0;
let cpuWins = 0;

const buttons = document.querySelectorAll("button");
// We use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        let playerSelection = button.textContent;
        let cpuSelection = computerPlay();
        let result = playRound(playerSelection, cpuSelection);
        let currentResult = document.querySelector("#currentMatchResult");

        if (result === 1) {
            playerWins++;
            currentResult.textContent = "Player wins";
        } else if (result === -1) {
            cpuWins++;
            currentResult.textContent = "CPU wins";
        } else {
            currentResult.textContent = "Tie";
        }
        update();

        if (playerWins === 5 || cpuWins === 5) announceWinner();
    });
});

// for (let i = 0; i < 100; i++) {
//     let playerSelection = computerPlay();
//     let cpuSelection = computerPlay();
//     let result = playRound(playerSelection, cpuSelection);

//     if (result === 1) playerWins++;
//     else if (result === -1) cpuWins++;

//     if (playerWins === 5 || cpuWins === 5) break;
// }

// console.log("Player Wins: ", playerWins);
// console.log("Computer Wins: ", cpuWins);
