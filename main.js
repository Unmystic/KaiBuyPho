// Simple Rock, Paper , Scissors implementation
const choices = ["rock", "paper", "scissors"];

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

const getHumanChoice = function () {
  let choice = prompt(
    `what are your gonna throw? 
        Your Choices : ROCK, PAPER, SCISSORS`
  ).toLowerCase();
  if (!choices.includes(choice)) {
    console.error(`${choice} is not a valid choice`);
    choice = getHumanChoice();
  }
  return choice;
};

console.log(getComputerChoice());
console.log(getHumanChoice());
