var player1 = prompt("Enter player 1's name : ")
var player2 = prompt("Enter player 2's name : ")

document.querySelector(".dice1").innerHTML = player1 ;
document.querySelector(".dice2").innerHTML = player2 ;

var dice_one = Math.floor (Math.random() * 6 + 1);
var dice_two = Math.floor (Math.random() * 6 + 1);

var img_one = "dice" + dice_one + ".png";
var img_two = "dice" + dice_two + ".png";

document.querySelector(".img1").setAttribute("src","images/"+img_one);
document.querySelector(".img2").setAttribute("src","images/"+img_two);


if (dice_one > dice_two){
    document.querySelector("h1").innerHTML = `${player1} wonn!!`;
} else if(dice_two > dice_one){
    document.querySelector("h1").innerHTML = `${player2} wonn!!`;
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}