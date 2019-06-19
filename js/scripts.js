// ---------- Back End -------- //
function PigDiceGame() {
  this.players = []
  console.log(players);
};

function Player1 (tempScore, totalScore) {
  this.tempScore = tempScore
  this.totalScore = totalScore
};

function Player2 (tempScore, totalScore) {
  this.tempScore = tempScore
  this.totalScore = totalScore
};



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
