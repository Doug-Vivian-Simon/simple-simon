"use strict";

//1 Make button funtion
//2 display a pattern
//3 check if user pattern matches display
//3a if it does, move to next round
//	1. Make note of current round,
//	2. add one more to pattern
//3b if no, start over

//Computer's Array
var gameArray = [];

//User's Array
var userArray = [];
var round = 0;

//User clicks the start button
$('#controls').click(function(){
	userArray = [];
	runSequence();
})

//User clicks the box
$('.boxes').click(function(){
	userArray.push(this.id)
	compareArrays();
})

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
		console.log("interval " + i);
		$("#" + gameArray[i]).removeClass("boxes-opacity");

		window.setTimeout(function(){
			$('#' + gameArray[i]).addClass("boxes-opacity");
			console.log("Timeout " + i);
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
	$('#round').html('<h2>Round: ' + round + '</h2>');
}

//Compares Arrays via turning to string
function compareArrays(){
	if (gameArray.length == userArray.length){
		if (gameArray.join('') == userArray.join('')) {
			console.log("you win");
			userArray = [];
			runSequence();
		} else {
			console.log('You lose');
			userArray = [];
			gameArray = [];
			round = 0;
		}
	}
}















// function lightUpSquare() {

// 	setTimeout(function(){
		
// 		// console.log(random)
// 		//Using jQuery to brighten and darken colors via opacity
// 		$('#box1').animate({
// 			opacity: 1
// 		}, 400).animate({
// 			opacity: .4
// 		}, 400);
// 		gameArray.push("box1");

// 	}, 750)
// }






		
	// if (displayArray != []){
	// 	displayArray.forEach(function(element){

	// 		console.log("display array length: " + displayArray.length);
	// 		console.log("counter:" + counter);

	// 		// console.log(element);
	// 		$('#' + element).animate({
	// 			opacity: 1
	// 		}, 400).animate({
	// 			opacity: .4
	// 		}, {
	// 			duration: 400,
	// 			complete: function(){
	// 				counter ++;
	// 				console.log(counter)
	// 			}
	// 		})
	// 	})
	// 	if (counter == (displayArray.length - 1)){
	// 		lightUpSquare();
	// 	}
	// } else if (displayArray == []){
	// 	lightUpSquare();
	// }
