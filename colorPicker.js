var numSquares = 6;
var arr = getRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var pickedColorDisplay = document.querySelector("#pickedColorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	arr = getRandomColors(numSquares);
	pickedColor = pickColor();
	pickedColorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){

		if(arr[i]){
			squares[i].style.background = arr[i];
		}
		else{
			squares[i].style.display = "none";
		}

	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	arr = getRandomColors(numSquares);
	pickedColor = pickColor();
	pickedColorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){

		
			squares[i].style.background = arr[i];
		
			squares[i].style.display = "block";
		

	}
});

resetButton.addEventListener("click",function(){
		// generate all new colors
		arr = getRandomColors(numSquares);
		// pick a new random color from array
		pickedColor = pickColor();
		// change pickedColorDisplay to picked color
		pickedColorDisplay.textContent = pickedColor;
		// change colors of squares
		for(var i = 0;i<squares.length;i++){
			squares[i].style.backgroundColor = arr[i];
		}
		h1.style.backgroundColor = "steeleblue";
});

pickedColorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = arr[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		//compare color to clicked color
		if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
		}
		else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
		}

	});

}

function changeColors(color){
	// loop through the squares
	// change colors
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * arr.length + 1);
	return arr[random];
}

function getRandomColors(num){
	// make an array
	var array = [];
	// generate an array of random colors
	
	for(var i=0;i<num;i++){
		array[i] = generateRandomColor();
	}
	// return an array of random colors
	return array;

}

function generateRandomColor(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";

}
