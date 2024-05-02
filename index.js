// get computer to give a random number
function getComputerChoice () {
    return Math.floor(Math.random() * 10);    
}

// equate the values of the random number to the game options

var choice = getComputerChoice();

function equate (){
    if (choice <= 3) {
        return "Rock"
    } else if (choice > 3 && choice <=6){
       return "Paper"
    } else {
        return "Scissors"
    }
}

let compChoice = equate();
console.log(compChoice)

// prompt user to make a choice
function getHumanChoice () {
   let choice = prompt("Rock, Paper, Scissors?");

   return choice

  
 }
let hChoice = getHumanChoice();

//  console.log(`The human choice is ${hChoice}`);

// compare computer and human choice

if (compChoice.toLowerCase() === "rock" && hChoice.toLowerCase() === "scissors" || compChoice.toLowerCase() === "paper" && hChoice.toLowerCase() === "rock" || compChoice.toLowerCase() === "scissors" && hChoice.toLowerCase() === "paper"){
    console.log(`Computer wins! because you choose ${hChoice} and the computer choose ${compChoice}.`);
} else if (hChoice.toLowerCase() === "rock" && compChoice.toLowerCase() === "scissors" || hChoice.toLowerCase() === "paper" && compChoice.toLowerCase() === "rock" || hChoice.toLowerCase() === "scissors" && compChoice.toLowerCase() === "paper"){
    console.log(`You win! because you choose ${hChoice} and the computer choose ${compChoice}`)
} else if (hChoice.toLowerCase() === compChoice.toLowerCase()) {
    console.log(`It's a tie! because you and the computer choose ${hChoice}.`);
} else {
    console.log("Please try again!")
}