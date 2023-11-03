
var randomnumber1 = Math.floor(1 + (Math.random()*6));
var dice1 = "./images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src",dice1);

var randomnumber2 = Math.floor(1 + (Math.random()*6));
var dice2 = "./images/dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src",dice2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = " Player 2 Wins🚩"
}
else{
    document.querySelector("h1").innerHTML= "Draw!"
}