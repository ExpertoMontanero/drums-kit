//setting proper images to buttons
document.querySelector(".set .w").style.backgroundImage = "url('images/tom1.png')";
document.querySelector(".set .a").style.backgroundImage = "url('images/tom2.png')";
document.querySelector(".set .s").style.backgroundImage = "url('images/tom3.png')";
document.querySelector(".set .d").style.backgroundImage = "url('images/tom4.png')";
document.querySelector(".set .j").style.backgroundImage = "url('images/snare.png')";
document.querySelector(".set .k").style.backgroundImage = "url('images/crash.png')";
document.querySelector(".set .l").style.backgroundImage = "url('images/kick.png')";

//adding proper sounds
function playAudio(url) {
    new Audio(url).play();
}
//   function playAudioOnClick(url){
//     new Audio(url).play();
//   }

const input = document.querySelector(".body");
input.addEventListener("keydown", playAudioOnKeyClick);
function playAudioOnKeyClick(e) {
    switch (e.which) {
        case 87:
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 65:
            new Audio('sounds/tom-2.mp3').play();
            break;
        case 83:
            new Audio('sounds/tom-3.mp3').play();
            break;
        case 68:
            new Audio('sounds/tom-4.mp3').play();
            break;
        case 74:
            new Audio('sounds/snare.mp3').play();
            break;
        case 75:
            new Audio('sounds/crash.mp3').play();
            break;
        case 76:
            new Audio('sounds/kick-bass.mp3').play();
            break;
    }
}