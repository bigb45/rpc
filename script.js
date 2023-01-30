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
const buttons = document.querySelectorAll(".buttons>button");
let playerWins = 0;
let computerWins = 0;
buttons.forEach((button) => {
  console.log(`added event listener for button ${button.id}`);
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let pc = "rock";
    let cc = getComputerChoice();
    // console.log(cc);
    // pc = prompt("choose rock, paper or scissors!").toLowerCase();
    // console.log(pc)
    res = playRound(cc, pc);
    const results = document.querySelector(".results>.message");
    const cWins = document.querySelector(".results>.computer")
    const pWins = document.querySelector(".results>.player")
    if (res == -1) {
      results.textContent = `Computer chose ${cc} and won the round`;
      computerWins += 1;
    } else if (res == 1) {
      results.textContent = `Computer chose ${cc} and lost the round`;
      playerWins += 1;  
    }
    else{
      results.textContent = `Tie Game!`;   
    }
    cWins.textContent = `Computer: ${computerWins}`
    pWins.textContent = `Player: ${playerWins}`
  });
});

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

// for (i = 0; i < 5; i++)
function play() {}
