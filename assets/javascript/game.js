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



//on window loads, computer picks random letter from alphabet 
window.onload = function () {
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	computerGuess.push(compGuess);
	//display computer guess
	//console.log(computerGuess[0]);
}

//user picks letter
document.onkeyup = function (event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	//display user guess
	//console.log(userGuess[0]);

	//user wins...
	if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
		wins++;
		alert("You really are a psychic");
		//game resets
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		computerGuess.push(compGuess);
	}


	//user keeps playing...
	else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
		guessesLeft--;
	}

	//user losses...
	else {
		losses++;
		alert("Better luck next time");
		//game resets
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		computerGuess.push(compGuess);


	}

	//displays win-loss count, guesses, and turns left
	winzSpan.textContent = wins;
	lossezSpan.textContent = losses;
	leftSpan.textContent = guessesLeft;
	lettersSpan.textContent = lettersGuessed;
}