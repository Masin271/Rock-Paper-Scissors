let humanScore = 0;
let computerScore = 0;
const button = document.querySelectorAll("button");
const div = document.querySelector("div");
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
  } else if (
    (humanSelection == "rock" && computerSelection == "paper") ||
    (humanSelection == "scissors" && computerSelection == "rock") ||
    (humanSelection == "paper" && computerSelection == "scissors")
  ) {
    ++computerScore;
  } else if (humanSelection == computerSelection) {
    ++computerScore;
    ++humanScore;
  } else {
    console.log("Bug");
  }
}
button.forEach(btn => {
  btn.addEventListener("click", () => {
    playRound(btn.className, getComputerChoice());
    if (computerScore == 5 && humanScore == 5) {
      div.textContent = "DRAW";
    }
    else if (computerScore == 5 && humanScore < 5) {
      div.textContent = "You Lose!";
    }
    else if (computerScore < 5 && humanScore == 5) {
      div.textContent = "You Win";
    }
    else {
      div.textContent = "Computer: " + computerScore + "You: " + humanScore;
    }
  })
});



