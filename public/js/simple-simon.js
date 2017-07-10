"use strict";

//1 Make button funtion
//2 display a pattern
//3 check if user pattern matches display
//3a if it does, move to next round
//	1. Make note of current round,
//	2. add one more to pattern
//3b if no, start over

var displayArray = [];
var userArray = [];

$('#controls').click(function(){
	userArray = [];
	lightUpSquare();
})


$('.boxes').click(function(){
	if (displayArray.length == userArray.length){

	}
})
function lightUpSequence(){
var counter = 0;

		//set interval?

}

function lightUpSquare() {

	setTimeout(function(){
		var random = Math.floor((Math.random() * 4) + 1);
		// console.log(random)
		//Using jQuery to brighten and darken colors via opacity
		$('#box1').animate({
			opacity: 1
		}, 400).animate({
			opacity: .4
		}, 400);
		displayArray.push("box1");

	}, 750)
}






		
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
