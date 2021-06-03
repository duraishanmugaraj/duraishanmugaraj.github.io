var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input",generate);

color2.addEventListener("input",generate);

function generate(){
    document.querySelector("html").style.backgroundImage=`linear-gradient(to right, ${color1.value}, ${color2.value}`;
    document.querySelector("h1").innerText=document.querySelector("html").style.backgroundImage;

}