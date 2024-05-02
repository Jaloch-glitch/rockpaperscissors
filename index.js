// get computer to give a random number
function getComputerChoice () {
    return Math.floor(Math.random() * 10);    
}

// equate the values of the random number to the game options

var choice = getComputerChoice();

if (choice <= 3) {
    console.log( "Rock.");
} else if (choice > 3 && choice <=6){
    console.log("Paper.")
} else {
    console.log( "Scissors.");
}


function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper, Scissors?");
  return  humanChoice;
  
}

var hChoice = getHumanChoice();




