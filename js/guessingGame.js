var playerGuess;
var winningNumber = generateWinningNumber();
var testArr = [];

// Generate the Winning Number
function generateWinningNumber(){
	return Math.floor(Math.random()*100);
}

// Fetch the Players Guess
function playersGuessSubmission(){
	var totalGuess = guessCount();
	var submit = function (){
		playersGuess = parseInt(document.getElementById("guessNum").value);
		console.log(playersGuess);
		$('#guessNum').val("");
	};

	$(document).ready(function(){
		$('#submit').click(function() {
			submit();
		});

		$(document).keypress(function(x) {
			if(x.which==3) {
				submit();
			}
		});
	});
}

//check results
function checkGuess(guess){
	if (testArr.indexOf(playersGuess)>-1){
		$('#status').text("You can't guess the same number");
	} else if(playersGuess > 100 || playersGuess < 0) {
		$('#status').text("Your guess is out of range");
	} else {
		testArr.push(playersGuess);
	}

	if (winningNumber === playersGuess) {
		$('#status').text("Winner, Winner, Chicken Dinner!");
	} else{
		$('#status').text("Try again");
	}
}

// next few functions will assist user
function lowerOrHigher(guess){
	var diff = playersGuess - winningNumber
	if (diff > 0) {
		return "lower";
	} else if (diff < 0) {
		return "higher"
	}
};

function guessCount() {
	var counter = 5;
	var lowerCount = function() {
		var foo = Array.prototype.slice.call(arguments)[0];
		if (counter>1 && !foo) {
			counter--;
			$('#status').append("Total of " + counter " remaining");
		} else {
			if(!foo) {
				$('#status').text("Good Game, Try again?");
			}
		}
	}
	return lowerCount
}

function guessMessage() {
	var diff = Math.abs(playersGuess - winningNumber);

	if (diff <= 5) {
		diff = 5;
	} else if (diff <=10) {
		diff = 10;
	} else if(dif<=20) {
		diff = 20;
	} else {
		return "Guess is" + lowerOrHigher();
	}
	return "Guess is" + lowerOrHigher() + "than the magic number and" + diff + " digits away";
}

function provideHint(){
	var hint = [];
	hint.push(winningNumber))
	hint.push(generateWinningNumber());
	hint.push(generateWinningNumber();
	var list = hint.sort();

	$(document).ready(function(){
		$('#hint').click(function() {
			$('#status').html("One of these numbers is magical" + hint.join(","));
		});
	});
}

function playAgain(){
	winningNumber = generateWinningNumber();
	console.log(winningNumber);
	testArr = [];
	$('#status').text("");
	$('#guessNum').val("")
	provideHint();

	$('#guessNum').prop('disabled', false);
	$('#guess').prop('disabled', false);
	$('#hint').prop('disabled', false);
}


