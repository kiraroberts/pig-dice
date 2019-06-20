// ---------- Back End -------- //

// This is our CONSTRUCTOR (holds ARRAYS) //
function PigDiceGame() {
  this.players = []
};

PigDiceGame.prototype.addPlayer = function (player) {
  this.players.push(player)
}


// This is our PROPERTIES //
var game1 = new PigDiceGame();
var player1 = new Player(0, 0, "Player 1");
player1.turn = true;
var player2 = new Player(0, 0, "Player 2");
game1.addPlayer(player1);
game1.addPlayer(player2);

// This is our OBJECT //
function Player (tempScore, totalScore, playerId) {
  this.tempScore = 0,
  this.totalScore = 0,
  this.playerId = playerId
  this.turn = false;
};

function showScore() {
  // var i = currentPlayer();
  $('#currentPlayer').text('Current Player: ' + game1.players[i]);
  $('span#tempScore').text(game1.players[i].tempScore);
  $('span#totalScore').text(game1.players[i].totalScore)
};

function currentPlayer() {
  for (i = 0; i < game1.players.length; i++) {
    if (game1.players[i].turn === true) {
      return i;
    }
  }
};

function switchPlayer(i) {
  if (i >= game1.players.length - 1) {
    i = 0;
  } else {
    ++i;
  };
  return game1.players[i].turn = true;
};

function diceRoll(i) {
  var result = parseInt(Math.random() * 6) + 1;
  console.log("test");
  console.log(result);
  if (result === 1) {
    game1.players[i].tempScore = 0;
    game1.players[i].turn = false;
    switchPlayer(i);
    console.log("test if");
  } else {
    console.log('test else')
    game1.players[i].tempScore += result;
  }
};

function hold(i) {
  addScore(i);
  game1.players[i].turn = false;
  switchPlayer(i);
}

function addScore(i) {
  game1.players[i].totalScore += game1.players[i].tempScore;
  game1.players[i].tempScore = 0;
}
      // ------------ Front End --------- //

$(document).ready(function() {

  $('.btnPlay').click(function() {
    $("#gameUIShow").show();
  });

  $('#roll').click(function() {
    var i = currentPlayer()
    showScore(i);
    diceRoll(i);
    $("#hold").show();
  });

  $('button#hold').click(function( ) {
    hold(i);



  });
  $("span#diceRoll").text(diceRoll.result);

});
