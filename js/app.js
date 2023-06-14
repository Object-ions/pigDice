//business logic

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
};

function Game() {
    this.players = {}
    this.currentId = 0;
};

Game.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
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
    console.log(pigGame);
});

let rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', function() {
    let rollResult = diceRoll();
    document.getElementById("display-dice-roll").innerText = rollResult;
    pigGame.players[1].tempScore += rollResult;
});

