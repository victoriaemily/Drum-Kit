//anonymous function
var numberOfButtons = document.querySelectorAll('.drum').length;
//event listener for all buttons
for (var i = 0; i< numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    
    });
}
