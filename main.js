// Simple Rock, Paper , Scissors implementation
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const gameWindow = document.querySelector(".gameWindow");
const gameButtons = document.querySelector(".gameButtons");
const gameText = document.querySelector(".instruct");
const scoreBar = document.querySelector(".scoreBar");
const hScore = document.querySelector(".hScore");
const bScore = document.querySelector(".bScore");

gameButtons.addEventListener("click", function(e) {
    const h2El = document.querySelector(".humanChoice");
    if (h2El) {
        gameWindow.removeChild(h2El);
    }
    const target = e.target;
    const pFiels = target.closest("button");
    const pValue = pFiels.querySelector("p").textContent;
    const strChoice = `Your  choice is : ${pValue}`;
    const choiceDiv = document.createElement("h2");
    choiceDiv.classList.add("humanChoice");
    gameWindow.appendChild(choiceDiv);
    choiceDiv.textContent = strChoice;
    playRound(pValue);
    updateUI();
});

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "scissors";
    }
}

function playRound(choice) {
    const botChoice = getComputerChoice();
    const humanChoice = choice.toLowerCase();
    const existingChoice = document.querySelector(".botChoice");
    if (existingChoice) {
        gameWindow.removeChild(existingChoice);
    }
    const displayBC = document.createElement("span");
    displayBC.classList.add("botChoice");
    gameWindow.appendChild(displayBC);

    const h2El = document.querySelector(".humanChoice");
    if (h2El) {
        displayBC.textContent = `Bot choice is : ${botChoice}`;
        displayBC.style.fontSize = "24px";
        displayBC.style.fontWeight = "900";
    }

    if (
        (humanChoice === "rock" && botChoice === "scissors") ||
        (humanChoice === "paper" && botChoice === "rock") ||
        (humanChoice === "scissors" && botChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${botChoice}`);
        h2El.style.color = "green";
        displayBC.style.color = "red";
        humanScore++;
    } else if (
        (humanChoice === "scissors" && botChoice === "rock") ||
        (humanChoice === "rock" && botChoice === "paper") ||
        (humanChoice === "paper" && botChoice === "scissors")
    ) {
        h2El.style.color = "red";
        displayBC.style.color = "green";
        console.log(`You lose! ${humanChoice} lost to ${botChoice}`);
        computerScore++;
    } else {
        h2El.style.color = "grey";
        displayBC.style.color = "grey";
        console.log(`It is a tie! ${humanChoice} versus ${botChoice}`);
    }
}

function updateUI() {
    scoreBar.classList.remove("hide");
    gameText.textContent = "WELCOME TO THE TOURNAMENT";

    if (humanScore > 4) {
        gameText.textContent = "🏆YOU WON THE TOURNAMENT!!!🏆";
    } else if (computerScore > 4) {
        gameText.textContent = "🖥️Sorry, computer win this time🖥️";
    }
    hScore.textContent = humanScore;
    bScore.textContent = computerScore;
    if (humanScore > computerScore) {
        console.log("🏆YOU WON THE TOURNAMENT!!!🏆");
    } else if (humanScore < computerScore) {
        console.log("🖥️Sorry, computer win this time🖥️");
    } else console.log("It was a draw! Maybe, play again ...");
    // scoreBar.classList.add("hide");
}
