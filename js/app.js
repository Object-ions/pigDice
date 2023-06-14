//business logic

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
};

function Game() {
    this.players = {}
    this.currentPlayer = 1
    this.currentId = 0;
};

Game.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
}

Game.prototype.setActivePlayer = function() {
    if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
    } else if (this.currentPlayer === 2) {
    this.currentPlayer =1;
    }
}
    
Game.prototype.addPlayer = function(player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

function Player(name) {
    this.name = name;
    this.tempScore = 0;
    this.permScore = 0;
};

// UI logic:
let pigGame = new Game();

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    player1 = document.getElementById('player-1-input-name').value;
    player2 = document.getElementById('player-2-input-name').value;
    document.getElementById('player-1-name').innerText = player1.toUpperCase();
    document.getElementById('player-2-name').innerText = player2.toUpperCase();
    let player1Object = new Player(player1);
    let player2Object = new Player(player2);
    pigGame.addPlayer(player1Object);
    pigGame.addPlayer(player2Object);
});

let rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', function() {
    let rollResult = diceRoll();
    if (pigGame.currentPlayer === 1) {
        document.getElementById("display-dice-roll").innerText = rollResult;
        pigGame.players[1].tempScore += rollResult;
        document.getElementById("player-1-temp-score").innerText = pigGame.players[1].tempScore; 
    } else if (pigGame.currentPlayer === 2)    {
        document.getElementById("display-dice-roll").innerText = rollResult;
        pigGame.players[2].tempScore += rollResult;
        document.getElementById("player-2-temp-score").innerText = pigGame.players[2].tempScore; 
    }
});

let holdButton = document.getElementById('hold');
holdButton.addEventListener('click', function () {
    if (pigGame.currentPlayer === 1) {
        pigGame.players[1].permScore += pigGame.players[1].tempScore;
        pigGame.players[1].tempScore = 0;
        document.getElementById("player-1-perm-score").innerText = pigGame.players[1].permScore; 
        document.getElementById("player-1-temp-score").innerText = '';
        pigGame.setActivePlayer();
    } else if (pigGame.currentPlayer === 2) {
        pigGame.players[2].permScore += pigGame.players[2].tempScore;
        pigGame.players[2].tempScore = 0;
        document.getElementById("player-2-perm-score").innerText = pigGame.players[2].permScore; 
        document.getElementById("player-2-temp-score").innerText = ''; 
        pigGame.setActivePlayer();
    }
});
