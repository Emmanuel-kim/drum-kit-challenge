var noOfdrumButtons  = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfdrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInner = this.innerHTML;

         switch (buttonInner) {
            case "w":
        this.style.color = "white"
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                this.style.color = "blue"
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "s":
                this.style.color = "white"
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d":
                this.style.color = "yellow"
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                this.style.color = "blue"
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "k":
                this.style.color = "red"
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                this.style.color = "blue"
                var kick = new Audio('sounds/drum-bells.wav');
                kick.play();
                break;

            case "b":
                this.style.color = "red"
                var bass = new Audio('sounds/bassd.wav');
                bass.play();
                break;
            case "f":
                this.style.color = "orange"
                var stab = new Audio('sounds/stab-kik.wav');
                stab.play();
                break;
            case "c":
                this.style.color = "blue"
                var mixtoy = new Audio('sounds/mixtoy.wav');
                mixtoy.play();
                break;
        
            default: console.log(buttonInner);
                
        }

    });

}






