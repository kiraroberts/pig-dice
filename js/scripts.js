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

// This is our PROPERTY (KEY-VALUE PAIR creates a PROPERTY)
var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

// This is our PROTOTYPE //
Player.prototype.roll1 = function() {
  var diceDisplay = diceRollPlayer1(1,6);
  if (diceDisplay === 1) {
    this.tempScore = 0
  } else {
  this.tempScore += diceDisplay
  // return diceDisplay
  }
  $("#displaytempScore1").text(this.tempScore)
};

Player.prototype.roll2 = function() {
  var diceDisplay = diceRollPlayer2(1,6);
  if (diceDisplay === 1) {
    this.tempScore = 0
  } else {
  this.tempScore += diceDisplay
  }
  $("#displaytempScore2").text(this.tempScore)
};


function diceRollPlayer1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function diceRollPlayer2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// function() {
// }

// ------------ Front End --------- //



$(document).ready(function() {
  $().submit(function(event) {
    event.preventDefault();
    //
    // $("#holdplayer1").click();
    // if (player1.roll1 === 1) {
    //   player1.tempScore = 0
    // } else {
    //   player1.tempScore += player1.totalScore
    //   $("#displaytotalScore1").text(player1.totalScore)
    //   console.log(player1);
    // }
    //
    // $("#holdplayer2").click();
    // } else {
    //   player2.tempScore += player2.totalScore
    //   $("#displaytotalScore2").text(player2.totalScore)
    //   console.log(player2);
    // }
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
