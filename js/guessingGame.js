var winningNumber = generateWinningNumber();
var playersGuess;

//things to do:
// animation and style changes when the player wins...
// enter = playerSubmission
// out of range event
// array with previous guess

// Generate the Winning Number
function generateWinningNumber(){
	return Math.floor(Math.random()*100);
}

// Fetch the Players Guess
function playersGuessSubmission() {
	$(document).ready(function() {
		$('#guess').on('click', function () {
			playerGuess = +document.getElementById("#guessNum");
			document.getElementById("#guessNum").value = "";
		});
	});
};

//old code
	// if (testArr.indexOf(playersGuess)>-1){
	// 	$('#status').text("You can't guess the same number");
	// } else if(playersGuess > 100 || playersGuess < 0) {
	// 	$('#status').text("Your guess is out of range");
	// } else {
	// 	testArr.push(playersGuess);
	// }

	// if (winningNumber === playersGuess) {
	// 	$('#status').text("Winner, Winner, Chicken Dinner!");
	// } else{
	// 	$('#status').text("Try again");
	// }
//check results
function checkGuess(guess){
	if (playerGuess === winningNumber) {
		$("#status").text("Winner!");
	} else {
		$("#status").text("Loser!");
	}

// out of range

// duplicate

}


// next few functions will assist user
// how will this interact with the DOM?
function lowerOrHigher(guess){
	var str = ""
	var diff = playersGuess - winningNumber
	if (diff > 0) {
		str += "The winning number is lower";
	} else if (diff < 0) {
		str += "The winning number is higher"
	}
	return str + guessMessage();
	$('#status').text("str + guessMessage()")
};

function guessMessage() {
	var diff = Math.abs(playersGuess - winningNumber);

	if (diff > 0 && diff <= 5) {
		return " and within 5 digits away";
	} else if (diff > 5 && diff <= 10) {
		return " and within 10 digits away";
	} else if(diff > 10 && diff <= 20) {
		return " and within 20 digits away";
	}
}

function provideHint(){
	var hint = [];
	hint.push(winningNumber)
	hint.push(generateWinningNumber());
	hint.push(generateWinningNumber());
	var list = hint.sort().join(",");

	$(document).ready(function(){
		$('#hint').on('click', function() {
			// could I use .text instead?
			$('#status').html("The winning number is one of these " + list);
		});
	});
}

function playAgain(){
	$(document).ready(function() {
		$('#reset').on('click', function () {
			winningNumber = generateWinningNumber();
			console.log(winningNumber);
			$('#status').text("");
			$('#guessNum').val("")
			provideHint();

			$('#reset').prop('disabled', false);
			$('#guess').prop('disabled', false);
			$('#hint').prop('disabled', false);
		});
	})
};


// function guessCount() {
// 	var counter = 5;
// 	var lowerCount = function() {
// 		var foo = Array.prototype.slice.call(arguments)[0];
// 		if ((counter>1) && (!foo)) {
// 			counter--;
// 			$('#status').append("Total of " + counter " remaining");
// 		} else {
// 			if(!foo) {
// 				$('#status').text("Good Game, Try again?");
// 			}
// 		}
// 	}
// 	return lowerCount
// }











