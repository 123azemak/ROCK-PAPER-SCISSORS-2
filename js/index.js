// make vars

var userChoice; //get value from button click
let compChoice; //random choice
let userScore= 0, compScore = 0; //keeps track of wins/losses



document.getElementById("rock").addEventListener("click", function(){
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function(){
  getInput(this.id);
})
document.getElementById("scissors").addEventListener("click", function(){
  getInput(this.id);
})
// add event listeners to all 3 buttons outside of other functions, so like on startup
// onclick call getinput function
// get input (user's choice)
function getInput(choice)
{
  userChoice= choice;
// console.log(choice)
}

function getComputerChoice()
{
  // random math equation thingy goes here eeby deeby
}
// comparing your choice with computer choice
function compareChoices()
{
  // switch statement for ALL outcomes
}

function displayResult()
{
  // get html element to display the text of the result
}

function updateScore()
{
  // icrement user or comp score
  // update score on screen
}


function resetscore()
{
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
