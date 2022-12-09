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