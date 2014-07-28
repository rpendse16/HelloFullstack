function randomNumber(){
return Math.floor(100 * Math.random() + 1); 

};

$(document).ready(function() {
	var correctGuess = randomNumber();
	guesses = [] 

	function restart(){
		correctGuess = randomNumber();
		guesses = []
	}
// correct number = 5
// guess = 1 
	//only gets called when we have more than one guess. 
function hotOrCold(firstguess, actualNumber){

		var difference = Math.abs(actualNumber - firstguess)
		var hash = {}
		hash.firstguess = firstguess
		hash.difference = difference
		return hash 
	}
	// else if(firstguess>10+randomNumber|| firstguess+10<randomNumber)
	// 	{return "you are cold"}
	// else {return "You are HOT!!!!"}
// }
// correct guess is 14
// guesses, 3 , 5, 2, 6, 

function handleDifference(data, prevSelection){
	dataDifference = data.difference
	guessDifference  = prevSelection.difference
	debugger
	if(dataDifference < guessDifference){
		 $('#answer').text('warmer').fadeIn(2400).fadeOut('slow');
	}else{
		$('#answer').text('colder').fadeIn(2400).fadeOut('slow');
	}
}


	$('.btn.btn-warning').on('click',function() {
		var i = confirm('Do You Want to Play Again?')
		if(i == true){
			restart();
		}
	});

	$('.btn.btn-primary').on('click',function() {
		guess = $('#guess').val();
		guessInteger = parseInt(guess)
		if(guessInteger == correctGuess){
			$('#answer').text('You Win!').fadeIn(2400).fadeOut('slow');
			$('#ranjeetWins').slideDown(3600).fadeOut('slow')
			restart();
		}else{
			data = hotOrCold(guessInteger, correctGuess)
	
			guesses.push(data);

			if(guesses.length > 1){
			prevSelection = guesses[guesses.length - 2]
			handleDifference(data, prevSelection);
			}

			if(guesses.length == 5){
				$('#answer').text('You lose :( The correct guess is ' + correctGuess).fadeIn(2400).fadeOut('slow');
				restart();
			}
			// record the guess
			// find out proximity to actual number
			// find out whether that's colder or hotter than previous guesses
			// guesses.push(guessInteger)

		}
		


	});

	$('.btn.btn-danger').on('click',function() {
		$('#answer').text('The correct guess is ' + correctGuess).fadeIn(2400).fadeOut('slow');
		restart();
	});

});