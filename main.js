// Simple Rock, Paper , Scissors implementation
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const gameWindow = document.querySelector(".gameWindow");
const gameButtons = document.querySelector(".gameButtons");
const gameText = document.querySelector(".instruct");

gameButtons.addEventListener("click", function (e) {
  const h2El = document.querySelector("h2");
  if (h2El) {
    gameWindow.removeChild(h2El);
  }
  const target = e.target;
  const pFiels = target.closest("button");
  const pValue = pFiels.querySelector("p").textContent;
  const strChoice = `Your  choice is : ${pValue}`;
  const choiceDiv = document.createElement("h2");
  gameWindow.appendChild(choiceDiv);
  choiceDiv.textContent = strChoice;
  playGame();
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

function playRound() {
  const botChoice = getComputerChoice();
  const humanChoice = "scissors";
  const existingChoice = document.querySelector(".botChoice");
  if (existingChoice) {
    gameWindow.removeChild(existingChoice);
  }
  const displayBC = document.createElement("span");
    displayBC.classList.add('botChoice')
  gameWindow.appendChild(displayBC);

  const h2El = document.querySelector("h2");
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

  gameText.textContent = "WELCOME TO THE TOURNAMENT";
  playRound();
  if (humanScore > computerScore) {
    console.log("🏆YOU WON THE TOURNAMENT!!!🏆");
  } else if (humanScore < computerScore) {
    console.log("🖥️Sorry, computer win this time🖥️");
  } else console.log("It was a draw! Maybe, play again ...");
}
