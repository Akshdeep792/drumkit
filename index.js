// alert("New Project is starting");


// document.querySelector("button").addEventListener("click", press);

// function press(){
//     alert("I got clicked!");
// }

// Anonymous function

for(var i=0 ; i<7 ; i++){ //we can use document.querySelector(".drum").length  instead of 7
document.querySelectorAll(".drum")[i].addEventListener("click",  function() {

   var innerHMTLb= this.innerHTML;

   makesound(innerHMTLb);
   buttonAnimation(innerHMTLb);


  


   }
 );

}
document.addEventListener("keypress", function(event){
         makesound(event.key);
         buttonAnimation(event.key);
});


function makesound(key1){
   switch(key1){

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



function buttonAnimation(currentkey){
      var anim=document.querySelector("." + currentkey);

      anim.classList.add("pressed");

      setTimeout( function(){
      anim.classList.remove("pressed");
      
      }, 100);
}




