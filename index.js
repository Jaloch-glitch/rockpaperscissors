// get computer to give a random number
function getComputerChoice () {
    return Math.floor(Math.random() * 10);    
}

// equate the values of the random number to the game options

var choice = getComputerChoice();

if (choice <= 3) {
    console.log( "The computer chose Rock.");
} else if (choice > 3 && choice <=6){
    console.log("The computer chose Paper.")
} else {
    console.log( "The computer chose Scissors.");
}