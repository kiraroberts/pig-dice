// ---------- Back End -------- //

// This is our CONSTRUCTOR (holds ARRAYS) //
function PigDiceGame() {
  this.players = []
};

 // This is our OBJECT //
function Player (tempScore, totalScore) {
  this.tempScore = tempScore
  this.totalScore = totalScore
};

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

// This is our PROTOTYPE //
Player.prototype.roll1 = function() {
  var diceDisplay = diceRollPlayer1(1,6);
  this.tempScore += diceDisplay
  $("#displaytempScore1").text(player1.tempScore)
  return diceDisplay
    console.log(this);

};

Player.prototype.roll2 = function() {
  var diceDisplay = diceRollPlayer2(1,6);
  this.tempScore += diceDisplay
  $("#displaytempScore2").text(player2.tempScore)
  return diceDisplay
    console.log(this);

};


console.log(player1);
console.log(player1.tempScore)
console.log(diceRollPlayer1(1,6))

function diceRollPlayer1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function diceRollPlayer2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// function() {
//   if diceResultPlayer1 === 1 {
//     delete temporary score
//   } else if {
//     player click roll
//     diceResultPlayer1 + Player1 temporary score
//   } else {
//     player click hold
//     diceResultPlayer1 + Player1 temporary score + Player1 score
//   }
// }

// ------------ Front End --------- //

// This is our PROPERTY (KEY-VALUE PAIR creates a PROPERTY)


$(document).ready(function() {
  $().submit(function(event) {
    event.preventDefault();

  });

  $('.btnPlay').click(function() {
    $("#gameUIShow").show();
  });

  $('#roll1').click(function() {
    $("#holdPlayer1").show();
  });

  $('#roll2').click(function() {
    $("#holdPlayer2").show();

  });
});
