//write a selector that includes all buttons
//essentailly detects button press
var selectedButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < selectedButton; i++) {
    //write a manipulator for each thing selected
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//detects keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            //play a sound
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            //play a sound
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            //play a sound
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            //play a sound
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            //play a sound
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            //play a sound
            var kickBass = new Audio("assets/sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            //play a sound
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;

            default: console.log(key);
    }

}

