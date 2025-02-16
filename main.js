// Simple Rock, Paper , Scissors implementation
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = function() {
    let choice = prompt(
        `what are your gonna throw? 
        Your Choices : ROCK, PAPER, SCISSORS`,
    ).toLowerCase();
    if (!choices.includes(choice)) {
        console.error(`${choice} is not a valid choice`);
        choice = getHumanChoice();
    }
    return choice;
};

function playRound() {
    const botChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (
        (humanChoice === "rock" && botChoice === "scissors") ||
        (humanChoice === "paper" && botChoice === "rock") ||
        (humanChoice === "scissors" && botChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${botChoice}`);
        humanScore++;
    } else if (
        (humanChoice === "scissors" && botChoice === "rock") ||
        (humanChoice === "rock" && botChoice === "paper") ||
        (humanChoice === "paper" && botChoice === "scissors")
    ) {
        console.log(`You lose! ${humanChoice} lost to ${botChoice}`);
        computerScore++;
    } else console.log(`It is a tie! ${humanChoice} versus ${botChoice}`);
}

function playGame() {
    console.log("WELCOME TO THE TOURNAMENT");
    playRound();
    if (humanScore > computerScore) {
        console.log("🏆YOU WON THE TOURNAMENT!!!🏆");
    } else if (humanScore < computerScore) {
        console.log("🖥️Sorry, computer win this time🖥️");
    } else console.log("It was a draw! Maybe, play again ...");
}
playGame();
