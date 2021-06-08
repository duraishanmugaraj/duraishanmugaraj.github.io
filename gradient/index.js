function randomNumber(){
    return Math.floor(Math.random() * 255);
}
function randomColor(){

return `linear-gradient(217deg, rgba(${randomNumber()},${randomNumber()},${randomNumber()},.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(${randomNumber()},${randomNumber()},${randomNumber()},.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(${randomNumber()},${randomNumber()},${randomNumber()},.8), rgba(0,0,255,0) 70.71%)`
}

document.querySelector(".click").addEventListener("click",function(){
    var color= randomColor();
    document.querySelector("body").style.backgroundImage=color;

});

function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

const coppyBtn = document.querySelector('.coppy')

coppyBtn.onclick = function() {
  coppyBtn.innerHTML='COPIED! <i class="fas fa-clipboard-check"></i>'
    Clipboard_CopyTo(document.querySelector("body").style.backgroundImage);
    
    setTimeout(function(){  coppyBtn.innerHTML='COPPY <i class="fas fa-copy"></i>' }, 1000);
  }
