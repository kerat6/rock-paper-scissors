console.log("Hello World");

// function getComputerChoice
// receive a random number from 1-3
// assign rock paper and scissors to each of these numbers as string value

function getComputerChoice() {

    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
        console.log("rock");
    }
    else if (compChoice === 1) { console.log("paper"); }
    else console.log("scissors");
}

// function getHumanChoice
// receive input from user through prompt
// have function return user input to console
