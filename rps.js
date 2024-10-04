let humanScore = 0;
let computerScore = 0;
const btnR = document.querySelector(".rock");
const btnP = document.querySelector(".paper");
const btnS = document.querySelector(".scissors");
const button = document.querySelectorAll("button");
function getComputerChoice(a) {
  a = Math.random();
  if (a > 0 && a <= 0.33) {
    console.log("rock");
    return "rock";
  } else if (a > 0.33 && a <= 0.66) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

function playRound(humanSelection, computerSelection) {
  if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "rock")
  ) {
    ++humanScore;
    alert("You won!");
  } else if (
    (humanSelection == "rock" && computerSelection == "paper") ||
    (humanSelection == "scissors" && computerSelection == "rock") ||
    (humanSelection == "paper" && computerSelection == "scissors")
  ) {
    ++computerScore;
    alert("You lost!");
  } else if (humanSelection == computerSelection) {
    ++computerScore;
    ++humanScore;
    alert("You drew!");
  } else {
    console.log("Bug");
  }
}
button.forEach(btn => {
  btn.addEventListener("click", () => {
    playRound(btn.className, getComputerChoice());
  })
});