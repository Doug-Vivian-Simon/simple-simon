(function(){
	"use strict";

//Computer's Array
var gameArray = [];

//User's Array
var userArray = [];
var round = 0;

//User clicks the start button
$('#controls').click(function(){
	$('#round>h2').text('');
	$('#lcd').text('Round');
	userArray = [];
	runSequence();
})

//User clicks the box
$('.boxes').click(function(){

	userArray.push(this.id)
	compareArrays();
})
//Runs the game
function runSequence(){
	if (gameArray.length > 0) {
		lightUpArray();
		window.setTimeout(function(){
			lightUpNew();
		}, (round * 1000))
	} else {
		lightUpNew();
	}
}



//Lights up the stored gameArray
function lightUpArray(){
	var i = 0;
	var displayInterval = setInterval(function(){
		$("#" + gameArray[i]).removeClass("boxes-opacity");

		window.setTimeout(function(){
			$('#' + gameArray[i]).addClass("boxes-opacity");

		}, 500)

		window.setTimeout(function(){
			i++;
		}, 550)
		if (i == gameArray.length){
			clearInterval(displayInterval);
		}
	}, 1000)
}


//Lights up the a random square

function lightUpNew(){

	var interval = setInterval(function(){
		addRound();
		
		var random = Math.floor((Math.random() * 4) + 1);

		gameArray.push('box' + random);

		$("#box" + random).removeClass("boxes-opacity");

		window.setTimeout(function(){
			$("#box" + random).addClass("boxes-opacity");
		}, 500)


		if (round == gameArray.length){
			clearInterval(interval);
		}
	 }, 1000);
	
}

function addRound(){
	round++;
	$('#lcd').html('Round' + '<br>' + round);
}

//Compares Arrays via turning to string
function compareArrays(){
	if (gameArray.length == userArray.length){
		if (gameArray.join('') == userArray.join('')) {

			userArray = [];
			runSequence();
		} else {

			gameOver();
			userArray = [];
			gameArray = [];
			$("#round>h2").text("YOU LOST! You got to round " + round)
			round = 0;
		}
	}
}

function gameOver(){
	$('.second-container').animate({
		height: '+=6000px',
		width: '+=6000px',
		opacity: '-=6'
	}, 2000).animate({
		height: '-=6000px',
		width: '-=6000px',
		opacity: '+=6'
	})
}
})();