(function(){
	"use strict";

//Computer's Array
var gameArray = [];

//User's Array
var userArray = [];
var round = 0;

var clicked = false;

//set time to 1000
var time = 1000;

//User clicks the start button
$('#controls').click(function(){
	if (clicked == false){
		gameArray = [];
		userArray = [];
		clicked = true;
		$('#round>h2').text('');
		$('#lcd-test').text('Round');
		userArray = [];
		changeStartButton();
		runSequence();
	} else {
		resetGame();
	}
	
})


//Clears game & changes button back to start
function resetGame(){
	userArray = [];
	gameArray = [];
	round = 0;
	$('#controls').text('Start');
	clicked = false;
	}

//Changes start button to Restart
function changeStartButton(){
	$('#controls').text('Restart');
}

//User clicks the box
$('.boxes').click(function(){
	userArray.push(this.id)
	compareArrays();
})
$('#easy').click(function(){
	time = 1000
})
$('#harder').click(function(){
	time = time/1.5;
})


//Runs the game
function runSequence(){
	if (gameArray.length > 0) {
		lightUpArray();
		window.setTimeout(function(){
			lightUpNew();
		}, (round * time))
	} else {
		lightUpNew();
	}
}

var display;

//Lights up the stored gameArray
function lightUpArray(){
	var i = 0;
	var displayInterval = setInterval(function(){
		$("#" + gameArray[i]).removeClass("boxes-opacity");

		window.setTimeout(function(){
			$('#' + gameArray[i]).addClass("boxes-opacity");

		}, time/2)

		window.setTimeout(function(){
			i++;
		}, time * 0.6)
		if (i == gameArray.length){
			clearInterval(displayInterval);
		}
	}, time)
	display = displayInterval;
}


//Lights up the a random square
var interval2;
function lightUpNew(){

	var interval = setInterval(function(){
		addRound();
		
		var random = Math.floor((Math.random() * 4) + 1);

		gameArray.push('box' + random);

		$("#box" + random).removeClass("boxes-opacity");

		window.setTimeout(function(){
			$("#box" + random).addClass("boxes-opacity");
		}, time/2)


		if (round == gameArray.length){
			clearInterval(interval);
		}
	 }, time);
	interval2 = interval;
}

function addRound(){
	round++;
	$('#lcd-text').html('Round' + '<br>' + round);
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