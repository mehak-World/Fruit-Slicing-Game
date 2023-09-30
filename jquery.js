// click on the start-reset button, we need // to check if we are playing
// yes, reload the page
// no
    // show trials left , reset game, create // random fruit
// move fruit down by 1 step or random step // in loops

// is fruit too low?
 // no repeat nb2
//yes , check how many trials are left
// yes, repeat making fruit
// no, game over and start button

// slice a fruit, yes, sound and increment // // score

var playing = false;
var score;
var trialsLeft;
var fruits = ["apple", "banana", "pineapple", "grapes"];
$(function(){
  $("#startReset").click(function(){
      if(playing == true){
          location.reload();
      }
      else{
          playing = true;
          score = 0;
          $("#scorevalue").html(score);
          $("#chances").show();
          trialsLeft = 3;
          addHearts();
          $("#startReset").text("Reset Game");
          createFruit();
          
      }
  });
});


function addHearts(){
     for(var i = 0; i < trialsLeft; i++){
              $("#chances").append('<img src = "images/heart.png" class = "life">');
          }
}

function createFruit(){
    $("fruit1").show();
    chooseFruit();
}

function chooseFruit(){
    var i = 3*Math.random();
    $("#fruit1").attr("src", "images/" + "fruits[i]" + ".png");
}