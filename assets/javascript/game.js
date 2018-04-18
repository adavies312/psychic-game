//Variables for wins, losses, & guesses 
var winzSpan = document.getElementById("winz");
var lossezSpan = document.getElementById("lossez");
var leftSpan = document.getElementById("left");
var lettersSpan = document.getElementById("letters");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//Computer Picks a Random Letter
window.onload = function() {
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
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
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	computerGuess.push(compGuess);
    //display new computer letter
	console.log(computerGuess[0]);
	winzSpan.textContent = wins;
	

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
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	computerGuess.push(compGuess);
	//display new computer letter
	console.log(computerGuess[0]);
	lossezSpan.textContent = losses;

}

leftSpan.innerHTML = guessesLeft;
lettersSpan.innerHTML = lettersGuessed;
}