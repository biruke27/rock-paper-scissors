console.log("Hello, World");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;


    function getComputerChoice()
    {
      const randomNumber = Math.random();
    let computerChoice ='';
      
    if (randomNumber >=0 && randomNumber < 1/3)
     {
      computerChoice = 'rock';
    } else if (randomNumber >=1/3 && randomNumber < 2/3)
    {
      computerChoice = 'paper';
    } else if (randomNumber >=2/3 && randomNumber < 1)
    {
      computerChoice = 'scissors';
      }
      return computerChoice;
    }

    function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
    return humanChoice;
  }

  function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("Computer wins! Rock beats Scissors");
      computerScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("Computer wins! Scissors beatsrock Rock");
      computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("Computer wins! Paper beats Rock");
      computerScore += 1;
    } else if (computerChoice == humanChoice) {
      console.log("It's a tie");
    } else {
      console.log("You win!");
      humanScore += 1;
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

    console.log("Final scores: ");

  if (humanScore > computerScore) {
    console.log("You win the game! Your score is " + humanScore);
    console.log("I lose! My score is " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("I win! My score is " + computerScore);
    console.log("You lose! Your score is " + humanScore);
  } else {
    console.log("The game is a tie!");
}

}

playGame();