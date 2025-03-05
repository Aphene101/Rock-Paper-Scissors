function getComputerChoice() {
    const result = Math.floor(Math.random() * (4-1) + 1);
    if (result == 1) {
        return "Rock";
    } else if (result == 2){
        return "Paper";
    } else {
        return "Scissors";x``
    }
}

function getHumanChoice(input){
    if (input.toLowerCase() == "rock"){
        return "Rock";
    } else if (input.toLowerCase() == "paper"){
        return "Paper";
    } else if (input.toLowerCase() == "scissors"){
        return "Scissors";
    } else {
        return "Invalid Answer";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock" && computerChoice == "Scissors" || 
        humanChoice == "Paper" && computerChoice == "Rock" || 
        humanChoice == "Scissors" && computerChoice == "Paper") {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice == computerChoice) {
        return `It's a Tie!`
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }
}

const buttons = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

buttons.style.display = flex;
buttons.appendChild([rock, paper, scissors]);