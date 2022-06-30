
var numberIndex = 9; // you can set any index for number of arrays.
var numberArray = []; // to hold the aray values
// on render
$(document).ready(() => 
{
    // render Box view with numbers initially
	for(let i = 1 ; i <= numberIndex ; i++){
		numberArray.push(i);
	}
	// calling initial function to load divs
	renderBoxesWithNumbersArray(numberArray);
    
})

function renderBoxesWithNumbersArray(){
	// clear container and render
	clearContainer();
	for(let i = 0; i < numberArray.length ; i++){
		$(`#boxes`).append(`<div class="box class-${numberArray[i]}">${numberArray[i]}</div>`);
	}
}
function shuffleArray() {
	// to shuffle number array with random function
	for (let i = 0; i < numberArray.length; i++) {
		var rand = Math.floor(Math.random() * numberArray.length);
		let tempSwap = numberArray[rand];
		numberArray[rand] = numberArray[i];
		numberArray[i] = tempSwap;
	}
	// re-render again after shuffle.
	renderBoxesWithNumbersArray();
}
function sortArray(){
	// sorting numbers
	numberArray.sort((a, b) => {
        return a-b;
    });
	// re-render again after shuffle.
	renderBoxesWithNumbersArray();
}

// clear the boxes container
function clearContainer(){
	$(`#boxes`).empty();
}