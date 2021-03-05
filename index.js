var noOfdrumButtons  = document.querySelectorAll(".drum").length;


//detecting buttonpress.
for (var i = 0; i < noOfdrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInner = this.innerHTML;

        makeSound(buttonInner);

    });

}


//detecting buttonPress
document.addEventListener("keydown", function(event){

    makeSound(event.key);

});


function makeSound(key){

    switch (key) {

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/drum-bells.wav');
            kick.play();
            break;

        case "b":
            var bass = new Audio('sounds/bassd.wav');
            bass.play();
            break;
        case "f":
            var stab = new Audio('sounds/stab-kik.wav');
            stab.play();
            break;
        case "c":
            var mixtoy = new Audio('sounds/mixtoy.wav');
            mixtoy.play();
            break;
    
        default: console.log(key);
        break;
            
    }
}






