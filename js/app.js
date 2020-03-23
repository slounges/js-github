// global variables for game
var player_lives = 3;
var computer_lives = 3;
var choices = ['rock', 'paper', 'scissors'];
var computers_choice;
var players_choice;
var message_area = document.getElementById('game_area');
var clearArea = false;
var image1 = document.crea
let userScore= 0;
let computerScore =0;
const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const scores_div = document.querySelector('.scores');
document.getElementById('playGame').addEventListener("click", runGame);

// game logic
function runGame() {
    if (clearArea) {
        message_area.innerHTML = '';
    }

    clearArea = false;

    // initial messaging
    message_area.innerHTML+= "<br />";
    message_area.innerHTML+= "Computer lives: " + computer_lives + "<br />";
    message_area.innerHTML+= "Player lives: " + player_lives + "<br />";
    message_area.innerHTML+= "Choose your weapon! <br />";
    message_area.innerHTML+= " <br />";

    // setting game choices
    var players_choices = document.getElementById('gameOption');
    players_choice = players_choices.options[players_choices.selectedIndex].value;
    computers_choice = choices[Math.floor(Math.random() * choices.length)];

    // displaying choices
    message_area.innerHTML+= "<br />";
    message_area.innerHTML+= 'Computer chose: ' + computers_choice + ' <br />';
    message_area.innerHTML+= 'Player chose: ' + players_choice + ' <br />';
    message_area.innerHTML+= "<br />";

    // conditionals for actual game logic
   conditions();


    // restart game loop
    checkStatus();
}

// checks whether computer wins against player choice
function checkComputerWins(validateChoice, winMessage, loseMessage) {
    if (computers_choice == validateChoice) {
        message_area.innerHTML += 'You lose! ' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />';
        player_lives--; lose();


    } else {
        message_area.innerHTML += 'You win! ' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
        computer_lives--; win();
    }
}

//  check status of game
function checkStatus() {
    if (player_lives == 0) {
        showWinloseMessage("lost");
    } else if (computer_lives == 0) {
        showWinloseMessage("won");
    } else {
        message_area.innerHTML+= "Select another choice! <br />";
        message_area.innerHTML+= " <br /><br />";
    }
}

// messaging for winning or losing
function showWinloseMessage(status) {
    message_area.innerHTML+= "<br />";
    message_area.innerHTML+= "Game Over. <br />";
    message_area.innerHTML+= "You " + status + "! Would you like to play again? <br />";
    message_area.innerHTML+= "<br />";
    clearArea = true;
}

//the number of wins for scoreboard
function win(user, computer){
    userScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
}

function lose (user, computer){
   computerScore++;
   computerscore_span.innerHTML = computerScore;
   userscore_span.innerHTML= userScore;
}
function draw (){
    console.log("DRAW")
}

function conditions() {

 if (players_choice == computers_choice) {
        message_area.innerHTML+= 'Tie! No one wins, try again! <br />'; 
        
    } else if (players_choice == 'rock') {
        checkComputerWins('paper', 'covers', 'smashes');
    } else if (players_choice == 'paper') {
        checkComputerWins('scissors', 'cuts', 'covers');
    } else if (players_choice == 'scissors') {
        checkComputerWins('rock', 'smashes', 'cuts');
    } else {
        message_area.innerHTML+= "Well that's not a valid choice. <br />";
        clearArea = true;
    }
}