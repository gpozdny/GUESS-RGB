var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			reset();
	});
};
};

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color
		var clickedColor = this.style.background;
		//compare
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else  {
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
};
};

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
};

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through
	for(var i = 0; i < colors.length; i++){
		// change colors
		squares[i].style.background = color;
	}
};

function pickColor(){
	// choose the color to be guessed
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//make array
	var arr = []
	//add num
	for(var i = 0; i < num; i++){
		//get random colors , push to array
		arr.push(randomColor())
	}
	//return
	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};