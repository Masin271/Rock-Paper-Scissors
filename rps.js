let humanScore = 0;
let computerScore = 0;
function getComputerChoice(a) {
    a = Math.random();
    if (a > 0 && a <= 0.33) {
        console.log("rock");
        return "rock";
    }
    else if (a > 0.33  && a <= 0.66) {
        console.log("paper");
        return "paper";
    }
    else  {
        console.log("scissors");
        return "scissors";
    }
}


function getHumanChoice(b) {
    b = prompt("Your turn: rock, paper or scissors?").trim().toLowerCase();
    return b;
}




function playRound(humanSelection, computerSelection) {
        if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "rock")) {
            ++humanScore;
            return "You win!"

            
        }
        else if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "scissors" && computerSelection == "rock") || (humanSelection == "paper" && computerSelection == "scissors")) {
            ++computerScore;
            return "You lose!"
        }
        else {
            return "Try Again!"
        }
    }

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore);
console.log(computerScore);








