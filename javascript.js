console.log("Hello World");

// function getComputerChoice
// receive a random number from 1-3
// assign rock paper and scissors to each of these numbers as string value

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        console.log("rock");
        return "rock";

    }
    else if (compChoice === 1) {

        console.log("paper");
        return "paper";
    }
    else {

        console.log("scissors");
        return "scissors";
    }
}

// function getHumanChoice
// receive input from user through prompt
// have function return user input to console

function getHumanChoice() {
    let playChoice = prompt("Would you like to choose rock, paper, or scissors?", "rock");
    if (playChoice.toLowerCase() === "rock") {
        console.log(playChoice); return "rock";

    }
    else if (playChoice.toLowerCase() === "paper") {
        console.log(playChoice); return "paper";

    }
    else if (playChoice.toLowerCase() === "scissors") {
        console.log(playChoice);
        return "scissors";


    }
    else {
        return alert("Please enter rock, paper, or scissors only.");
    }

}

// score variables
let humanScore = 0;
let computerScore = 0;


function playRound() {
    compChoice = getComputerChoice();
    playChoice = getHumanChoice();
    if (playChoice === compChoice) {
        console.log("It was a Tie! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
    }
    else if (playChoice === "rock" && compChoice === "scissors") {
        humanScore++; console.log("You win! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
    }
    else if (playChoice === "rock" && compChoice === "paper") {
        computerScore++;
        console.log("You Lose! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (computerScore > humanScore) console.log("You Lost the game! Better refresh yourself and the page and come back for another go!");
    else if (computerScore === humanScore) console.log("It was a tie! I guess you'll be back soon enough.")
    else console.log("Wow you won! A surprise will be waiting for you if you hit f5 on your keyboard");
}
playGame();