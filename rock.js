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
        let humanScore = 0;
        let computerScore = 0;
        
    function playRound(humanChoice, computerChoice) {
        

        // when human selects rock
        if(humanChoice == 'rock') {
            if(computerChoice == 'rock'){
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'paper') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                computerScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'scissors') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                humanScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
        }

        //when human choose paper
        if(humanChoice == 'paper') {
            if(computerChoice == 'rock'){
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                humanScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'paper') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'scissors') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                computerScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
        }

        // when human selects scissors
        if(humanChoice == 'scissors') {
            if(computerChoice == 'rock'){
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                computerScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'paper') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                humanScore++;
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
            else if(computerChoice == 'scissors') {
                console.log(`You selects ${humanChoice} and computer chooses ${computerChoice}`);
                console.log(`Your Score = ${humanScore}  and computer score = ${computerScore}`);
            }
        }
                //check the scores after all rounds.
        if(humanScore == 5){
            alert('congratulations! you have won the game.')
        }
        else if (computerScore == 5) {
            alert('Sorry! You lost , better luck next time.');
        }
    }
   

  //addition of 3 buttons for the humanSelection 
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');

  //initializing each button with text 
  button1.textContent = 'rock';
  button2.textContent = 'paper';
  button3.textContent = 'scissors';

  //adding each button using dom
  document.body.appendChild(button1);
  document.body.appendChild(button2);
  document.body.appendChild(button3);

  //adding event for each button using 
  //event listener
  button1.addEventListener('click', function() {
    const humanSelection = button1.textContent;
    console.log(humanSelection);
    playRound(humanSelection, getComputerChoice());
  });

 button2.addEventListener('click', function() {
    const humanSelection = button2.textContent;
    console.log(humanSelection);
    playRound(humanSelection, getComputerChoice());
  });
  
  button3.addEventListener('click', function() {
    const humanSelection = button3.textContent;
    console.log(humanSelection);
    playRound(humanSelection, getComputerChoice());
  });