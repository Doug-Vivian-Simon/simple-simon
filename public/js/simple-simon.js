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
	lightUpSquare();
})


$('.boxes').click(function(){
	return userArray.push(this.id);

})

function lightUpSquare(){
	var random = Math.floor((Math.random() * 4) + 1);

	//Using jQuery to brighten and darken colors via opacity
	$('#box' + random).animate({
		opacity: 1
	}, 500).animate({
		opacity: .4
	}, 500)

}






