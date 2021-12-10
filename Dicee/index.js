var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomimg1 = "dice" + randomNumber1 + ".png";
var randomimg1Src = "images/" + randomimg1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg1Src);

// Image2
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomimg2 = "dice" + randomNumber2 + ".png";
var randomimg2Src = "images/" + randomimg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg2Src);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "The winner is Player1 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player2 wins";
} else {
  document.querySelector("h1").innerHTML = "🤝 Draw!";
}
