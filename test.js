
for(var i=0 ; i<7 ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var innerHMTLb=this.innerHMTL;
        makesound(innerHMTLb);
    })
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
})

function makesound(key){

    switch(key){

        case "w":
    
        var sound1= new Audio("sounds/sound1.mp3");
        sound1.play();
    
        break;
        case "a":
    
        var sound2= new Audio("sounds/sound2.mp3");
        sound2.play();
    
        break;
        case "s":
    
        var sound3= new Audio("sounds/sound3.mp3");
        sound3.play();
    
        break;
        case "d":
    
        var sound4= new Audio("sounds/sound4.mp3");
        sound4.play();
    
        break;
        case "j":
    
        var sound5= new Audio("sounds/sound5.mp3");
        sound5.play();
    
        break;
        case "k":
    
        var sound6= new Audio("sounds/sound6.mp3");
        sound6.play();
    
        break;
        case "l":
    
        var sound7= new Audio("sounds/sound7.mp3");
        sound7.play();
        
        break;
    
        default:
    }
}