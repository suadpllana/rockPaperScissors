const playerChoice = document.getElementById("playerChoice");
const computer = document.getElementById("computerChoice");
let displayWinner = document.getElementById("displayWinner");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(choice){ 
    let computerChoices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoices.length );
    const computerChoice = computerChoices[randomIndex];

    computer.innerHTML = ` <img class="computerImage" src="./${computerChoice}.png" alt="${choice}" width="100"> Computer:`;
    playerChoice.innerHTML = `Player: <img src="./${choice}.png" alt="${choice}" width="100">`;

    let result = "";

    if(choice === computerChoice){  
       result = "ITS A TIE"
    }
   else{
    switch(choice){
        case "rock": 
            result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
              break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN": "YOU LOSE";
              break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN": "YOU LOSE";
              break;
    }
  }
 
   
  switch(result){
    case "YOU WIN":
        displayWinner.style.color = "green";
        playerScore++;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`
        break;
    case "YOU LOSE":
        displayWinner.style.color = "red";
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
        break;     
    case "ITS A TIE":
        displayWinner.style.color = "black";
        break;    
  }

  if(computerScore === 8 || playerScore === 8){
    alert("Game ended, Press OK to restart");
    playerScore = 0;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;

    computerScore = 0;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    result = "";
    computer.textContent = `Computer:`;
    playerChoice.textContent = `Player:`
  }
  displayWinner.style.display = "block";
  displayWinner.textContent = result;
}