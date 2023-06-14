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

    let form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        player1 = document.getElementById('player-1-input-name').value;
        player2 = document.getElementById('player-2-input-name').value;
        console.log(player1);
        console.log(player2);
        
    })

