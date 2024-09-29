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






function playGame() {
    function playRound(humanSelection, computerSelection) {
        if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "rock")) {
            ++humanScore;
            alert("You won!")
        }
        else if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "scissors" && computerSelection == "rock") || (humanSelection == "paper" && computerSelection == "scissors")) {
            ++computerScore;
            alert("You lost!")
        }
        else if (humanSelection == computerSelection) {
            ++computerScore;
            ++humanScore;
            alert("You drew!")
        }
        else {
            console.log("Bug");
        }
    }
    for (let x = 0; x < 5; x++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("You won the game!")
    }
    else if (humanScore < computerScore) {
        alert("You lost the game!")
    }
    else {
        alert("You drew the game")
    }
}

playGame();








