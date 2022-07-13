//$(".Text").text("hello");
// let pressed = "";
// for(let i=0 ; i<4 ; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//    pressed = this.getAttribute("class");
//   });
// }
// $(document).ready(function(){
var arrayOfSounds = [];

var buttonClicked = [];

var started = false;

var level = 0;


$(document).keypress(function() {
  if (!started) {
    $(".Text").text("Level" + level);
    sequence();
    started = true;
  }
});

function sequence() {
  buttonClicked = [];
  level++;
  $(".Text").text("Level  " + level);
  randomsound();
}

$("button").click(function() {
  var clicked = this.classList[0];
  var k = $(this).attr("id");
  buttonClicked.push(k);
  makesound(clicked);
  check(buttonClicked.length - 1);

});

function randomsound() {

  var num = Math.floor(Math.random() * 4);

  var randomBtn = $("button")[num];

  arrayOfSounds.push(num);
  makesound(randomBtn.classList[0]);


}


function check(index) {

  if (buttonClicked[index] == arrayOfSounds[index]) {

    if (arrayOfSounds.length === buttonClicked.length) {
      setTimeout(function() {
        sequence();
      }, 1000);

    }
  } else {

    makesound("wrong");
    $(".Text").text("Game over, press any key to continue");

    $("body").addClass("GameOver");
    setTimeout(function () {
      $("body").removeClass("GameOver");
    },200);

    started = false;
    arrayOfSounds = [];
    level = 0;
  }

}

function makesound(key) {

  var sound = new Audio("sounds/newSounds/" + key + ".mp3");
  sound.play();
  effect(key);
}
var audio = new Audio("sounds/wrong.mp3");

function effect(key) {
  $("." + key).addClass("pressed");

  setTimeout(function() {
    $("." + key).removeClass("pressed");
  }, 100);
}
