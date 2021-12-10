var randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1 + 1);
console.log(randomNumber1);
var dice1 = document.querySelectorAll("img")[0];
var dice1Att = dice1.getAttribute("img1");


//for (randomNumber1 = 0; randomNumber1 <= 6, randomNumber1++) {

if (randomNumber1 === 1) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice1.png");
} else if (randomNumber1 === 2) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice2.png");
} else if (randomNumber1 === 3) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice3.png");
} else if (randomNumber1 === 4) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice4.png");
} else if (randomNumber1 === 5) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice5.png");
} else if (randomNumber1 === 6) {
  dice1Att.setAttribute("src", "C:/Users/ejike/Desktop/Webdevelopment/Dicee Challenge - Starting Files/images/dice6.png");
}
