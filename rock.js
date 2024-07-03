//function for getting computer choice
function getComputerChoice() {
  let guess = Math.random();
    if( guess <= 0.3){
        return "rock";
    }
    else if(guess <= 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//function for getting humanchoice 
function getHumanChoice() {
   let choice = prompt("enter your choice here!");

//use string.toLowercase() to make choices case insensitive.
   choice = choice.toLowerCase();
    return choice ;
}

//  const humanSelection = getHumanChoice();
//  const computerSelection = getComputerChoice();

function playGame(round) {
 let humanScore = 0;
 let computerScore = 0;

 //loop for the no of rounds specified .
 
   for(var i = 0; i < round ; i++){
    playRound(getHumanChoice(), getComputerChoice());
    // Hint: When you assign a function call to a variable, 
    // the return value of that function is assigned to the variable. 
    // Accessing the variable afterward will only provide the assigned value;
    //  it doesn’t recall the function. You need to recall the choice functions 
    //  to get new choices for each round.
   }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice)
            console.log("Tie!");

        //rock beats scissors
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
            console.log("You won this round.");
        }
        
        //paper beats rock
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You won this round.");
        }
        //scissors beats paper
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You won this round.");
        }

        else {
            computerScore++;
            console.log("You lost this round.");
        }

    }
   //check the scores after all rounds.
   if(humanScore > computerScore){
    console.log("Congratulations!! You won.");           
   }
   else if(humanScore < computerScore) {
      console.log("Sorry ! You lost, better luck next time.");
   }
   else if(humanScore == computerScore) {
    console.log("Overall tie! Please try again.");
   }
   
}
//call the function to start playing
    playGame(4);

  
  
