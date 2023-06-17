var numberOfButton = document.querySelectorAll(".drum").length;


for(var i=0;i<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        switch(this.innerHTML){
            case "a":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "s":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "f":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "j":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
            case "k":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

             case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            default:
                console.log(this.innerHTML);
        }

        buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown",function(event){
    switch(event.key){
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "f":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

         case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default:
            console.log(this.innerHTML);
    }

    buttonAnimation(event.key);
    
})

function buttonAnimation(currentKey){
    var activekey = document.querySelector("."+currentKey);
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);asdf
}