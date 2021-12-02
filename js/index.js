// make vars

var userChoice; //get value from button click
let compChoice;
let userScore= 0, compScore = 0; //keeps track of wins/losses
var result;


document.getElementById("rock").addEventListener("click", function(){
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function(){
  getInput(this.id);
})
document.getElementById("scissors").addEventListener("click", function(){
  getInput(this.id);
})
document.getElementById("shoot").addEventListener("click", function(){
  getComputerChoice(this.id);
})
document.getElementById("resetDaScore").addEventListener("click", function(){
  resetScore();
})
// add event listeners to all 3 buttons outside of other functions, so like on startup
// onclick call getinput function
// get input (user's choice)
function getInput(choice)
{
  userChoice= choice;
  document.getElementById("playerOne").textContent = choice;
// console.log(choice)
}
function getComputerChoice()
{
  compChoice = Math.floor(Math.random() * 3);
//0 is rock
//1 is paper
//2 is scissors
  console.log(compChoice);
  compareChoices();
}
// comparing your choice with computer choice
function compareChoices()
{
  switch (userChoice + compChoice) {
    case "paper1":
    case "scissors2":
    case "rock0": result = "Tie!";
  break;
      case "paper2":
      case "scissors0":
      case "rock1": result = "You Lose!";
      updateScore("comp");
  break;
    case "paper0":
    case "scissors1":
    case "rock2": result = "You Win! :3";
    updateScore("user");
  break;
 default: result = "Uh Oh";
  }
  displayResult()
}
// get the computer to display its choice somehow
function displayResult()
{
  document.getElementById("resultText").textContent = result;
}

function updateScore(winner)
{
  if(winner == "user")
  {
    userScore++
  }
  else {
    {
      compScore++;
    }
  }
  // icrement user or comp score
  // update score on screen
  console.log(compScore + " : " + userScore);
  document.getElementById("userScoreText").textContent = userScore;
  document.getElementById("compScoreText").textContent = compScore;
}


function resetScore()
{
  userScore = 0;
  compScore = 0;
  result = " ";
  document.getElementById("resultText").textContent = result;
  document.getElementById("userScoreText").textContent = userScore;
  document.getElementById("compScoreText").textContent = compScore;
  // set user and comp score to 0
  // update score on screen
}






// var result; // string of "win" "lose" "tie"
// game should keep score
// get inputs (which is the user's choice of rock, paper, or scissors)
// get computer input(which will be choosen randomly by a math equation)
// compare both inputs
// display the result of the round
// reset score
//  eeby deeby, eeber deeber, deeby eeby, eebus deebus, eeby meeby deeby
