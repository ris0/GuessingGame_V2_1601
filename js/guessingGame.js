// Major issues with GG_V1:
// 1. My event listeners were wrapped in functions that were never invoked
// 2. In some of the code, I mixed JS syntax with jQuery (i.e: document.getElementById("#guessNum"))
// 3. In HTML file, I reference the guessingGame.js file before the jQuery file

//Things to do:
// More animations and styles
// enter = playerSubmission
// GameOver() should reset the game back to normal - Style changes remain after the game is over right now...

var winningNumber = generateWinningNumber();
var playersGuess;
var prevGuess = [];

function generateWinningNumber(){
	return Math.floor(Math.random()*100);
}

function playersGuessSubmission() {
	playersGuess = +$("#guessNum").val();
	document.getElementById("guessNum").value = "";
	checkGuess(playersGuess);
};

function checkGuess(){
	
	if (prevGuess.indexOf(playersGuess) > -1) {
		$("#status").text("No duplicates allowed!")
	} else if (playersGuess < 0 || playersGuess > 100) {
		$("#status").text("Please guess a number between 0-100")
	} else {
		prevGuess.push(playersGuess);
		guessCounter();
		if (winningNumber === playersGuess) {
			$("#status").text("Winner!");
			$('#status').animate({fontSize: '3em'}, 2500)
		} else {
			$("#status").html("Wrong!" + "<p>" + guessMessage() + "!" + "</p>");
		}
	}
};

function guessCounter () {
	if (prevGuess.length >= 5) {
		playAgain();
	} else {
		$('#status2').text("You have " + (5-prevGuess.length) + " remaining!");
	}
}

function lowerOrHigher(){
	var str = ""
	
	if (playersGuess > winningNumber) {
		str += "The winning number is lower";
	} else if (playersGuess < winningNumber) {
		str += "The winning number is higher";
	}
	return str;
};

function guessMessage() {
	var diff = Math.abs(playersGuess - winningNumber);
	var msg = "";

	if (diff<=5) {
		msg += " and within 5 digits";
	} else if (diff<=10) {
		msg += " and within 10 digits";
	} else if (diff<=20) {
		msg += " and within 20 digits";
	} else if (diff>20) {
		msg += " and you are very far away"
	}
	return lowerOrHigher() + msg;
}

function provideHint(){
	var hint = [];
	hint.push(winningNumber)
	hint.push(generateWinningNumber());
	hint.push(generateWinningNumber());
	var list = hint.sort().join(",");

	$('#status').html("The winning number is one of these " + list);
}

function playAgain(){
	winningNumber = generateWinningNumber();
	console.log(winningNumber);
	$('#status').text("You have 5 guesses remaining");
	$('#guessNum').val("")
	prevGuess = [];

	$('#reset').prop('disabled', false);
	$('#guess').prop('disabled', false);
	$('#hint').prop('disabled', false);
};

$(document).ready(function() {
	$('#guess').on('click', playersGuessSubmission )
	$('#reset').on('click', playAgain )
	$('#hint').on('click', provideHint )
});









