function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    console.log(`Tie! ${computerChoice} is the same as ${playerChoice}`);
    return 0;
  } else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
    return -1;
  } else {
    console.log(`player wins! ${playerChoice} beats ${computerChoice}`);
    return 1;
  }
}
let playerWins = 0;
for (i = 0; i < 5; i++) {
  let cc = getComputerChoice();
  // console.log(cc);
  pc = prompt("choose rock, paper or scissors!").toLowerCase();
  // console.log(pc)
  playerWins += playRound(cc, pc);
  console.log("wins: " + playerWins);
}

let computerWins = 5 - playerWins;
if (computerWins > 2) {
  console.log("computer wins the game!");
} else {
  console.log("player wins the game!");
}
