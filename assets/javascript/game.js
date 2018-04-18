//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];



//Computer Picks Letter
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    //display computer guess
	console.log(computerGuess[0]);
}


//User picks letter
document.onkeyup = function(event) {
	var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    //display players guess
	console.log(playerGuess[0]);

    //if player guesses right and has more than 0 turns left
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
    //display new computer letter
    console.log(computerGuess[0]);

}

// if player doesn't guess right and still has guesses left
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft--;
}

//if player has no turns left and guesses wrong
else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

var index = "<p>Guess what letter I\'m thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + lettersGuessed  + "</p>";

document.querySelector("#psychic").innerHTML = index;

}


