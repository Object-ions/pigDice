//business logic

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll())
};

function Game() {
    this.players = {}
};

Game.prototype.addPlayer = function(player) {
    this.players[player.name] = player;
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
    document.getElementById("display-dice-roll").innerText = diceRoll();
});

