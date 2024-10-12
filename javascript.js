console.log("Hello World");

// function getComputerChoice
// receive a random number from 1-3
// assign rock paper and scissors to each of these numbers as string value

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        return "rock";

    }
    else if (compChoice === 1) {


        return "paper";
    }
    else {


        return "scissors";
    }
}

// function getHumanChoice
// receive input from user through prompt
// have function return user input to console

// function getHumanChoice() {
//     let playChoice = prompt("Would you like to choose rock, paper, or scissors?", "rock");
//     if (playChoice.toLowerCase() === "rock") {
//         console.log(playChoice); return "rock";

//     }
//     else if (playChoice.toLowerCase() === "paper") {
//         console.log(playChoice); return "paper";

//     }
//     else if (playChoice.toLowerCase() === "scissors") {
//         console.log(playChoice);
//         return "scissors";


//     }
//     else {
//         return alert("Please enter 'rock', 'paper', or 'scissors' only.");
//     }

// }

// score variables
let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector("#results");

function playRound(playChoice) {
    let resultMessage = "";
    compChoice = getComputerChoice();
    // playChoice = getHumanChoice();
    if (playChoice === compChoice) {
        // console.log("Computer Chose " + compChoice);
        // console.log("It was a tie! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a tie! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "rock" && compChoice === "scissors") {
        humanScore++;
        // console.log("Computer Chose scissors");
        // console.log("You win! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a win! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "rock" && compChoice === "paper") {
        computerScore++;
        // console.log("Computer Chose Paper");
        // console.log("You lose! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a loss! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "paper" && compChoice === "scissors") {
        computerScore++;
        // console.log("Computer Chose scissors");
        // console.log("You lose! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a loss! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "paper" && compChoice === "rock") {
        humanScore++;
        // console.log("Computer Chose rock");
        // console.log("You win! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a win! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "scissors" && compChoice === "paper") {
        humanScore++;
        // console.log("Computer Chose paper");
        // console.log("You win! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a win! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    else if (playChoice === "scissors" && compChoice === "rock") {
        computerScore++;
        // console.log("Computer Chose rock");
        // console.log("You lose! " + "Your Score: " + humanScore + " " + "Computer's score: " + computerScore);
        resultMessage = "Computer Chose " + compChoice + "\nIt was a loss! " + "\nYour Score: " + humanScore + " " + "\nComputer's score: " + computerScore
    }
    resultsDiv.textContent = resultMessage

}


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     if (computerScore > humanScore) console.log("You Lost the game! Better refresh yourself and the page and come back for another go!");
//     else if (computerScore === humanScore) console.log("It was a tie! I guess you'll be back soon enough.")
//     else console.log("Wow you won! A surprise will be waiting for you if you hit f5 on your keyboard");
// }
// playGame();

// adding event listeners to each button for player choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playChoice = button.id;
        const compChoice = getComputerChoice();
        console.log(playChoice);
        playRound(playChoice);
        if (humanScore == 5) {
            const gameWinDiv = document.createElement("div");
            gameWinDiv.textContent = "Congratulations! You've won the game!"
            document.body.appendChild(gameWinDiv)
            disableButtons();
        } else if (computerScore == 5) {
            const gameLossDiv = document.createElement("div");
            gameLossDiv.textContent = "Oh no! You've lost the game :("
            document.body.appendChild(gameLossDiv)
            disableButtons();

        }

    })
});

// function to disable buttons after game completion
function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true
    })
}