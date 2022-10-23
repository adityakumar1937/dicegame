// Generate random number between 1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// Image will be generated according to the random the number and stored in below variable
// red-dice-(1 -6).png
var randomDiceImage = "red-dice-" + randomNumber1 + ".png"; 

// Image source will be stored in below variable
// Images/red-dice-(1 - 6).png
var randomImageSource = "Images/" + randomDiceImage;

// Selecting element with class "img1"
var image1 = document.querySelector("img.img1");

// Changing source attributes value"
image1.setAttribute("src",randomImageSource);

// --------------------------------------------------------------------------------------------

// Generate random number between 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Image source will be stored in below variable
// Images/red-dice-(1 - 6).png
var randomImageSource2 = "Images/red-dice-" + randomNumber2 + ".png";

// Selecting element with class "img"
var image2 = document.querySelector("img.img2");

// Changing source attributes value"
image2.setAttribute("src",randomImageSource2);

// Condition to decide the winner
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins! "
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw! Play again. 🎲"
}

