function getComputerChoice() {
    const result = Math.floor(Math.random() * (4-1) + 1);
    if (result == 1) {
        return "Rock";
    } else if (result == 2){
        return "Paper";
    } else {
        return "Scissors";
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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        input = prompt("Rock, Paper, Scissors?", "Rock");

        let result = playRound(getHumanChoice(input), getComputerChoice());

        console.log(result);

        if (result.includes("You win")) {
            humanScore++;
        }

        if(result.includes("You lose")) {
            computerScore++;
        }
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);
}

playGame();