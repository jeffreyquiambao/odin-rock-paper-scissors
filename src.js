function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function getComputerChoice() {
    computerChoice = getRandomInt(3);
    if (computerChoice == "0") {
        return "Rock";
    } else if (computerChoice == "1") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
    computerChoice = computerSelection.toLowerCase();

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            return "Tie game!"
        } else if (computerChoice == "paper") {
            return "You Lose! Paper beats Rock"
        } else if (computerChoice == "scissors") {
            return "You Win! Rock beats Scissors"
        }  
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return "You Win! Paper beats Rock"
        } else if (computerChoice == "paper") {
            return "Tie game!"
        } else if (computerChoice == "scissors") {
            return "You Lose! Scissors beats Paper"
        }  
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerChoice == "paper") {
            return "You Win! Scissors beats Paper"
        } else if (computerChoice == "scissors") {
            return "Tie Game!"
        }  
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
