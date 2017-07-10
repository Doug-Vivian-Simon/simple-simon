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
	var random = Math.floor((Math.random() * 4) + 1);
	var brighten = '';
	switch (random) {
		case 1:
			brighten = 'blue';
			break;
		case 2:
			brighten = 'red';
			break;
		case 3:
			brighten = 'green';
			break;
		case 4:
			brighten = 'yellow';
			break;
	}
	$('#box' + random).css('background', brighten);

})

$('.boxes').click(function(){
	return userArray += this.id

})








