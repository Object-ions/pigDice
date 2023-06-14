//business logic

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll())
}

function Player(name) {
    this.name = name;
    this.tempScore = 0;
    this.permScore = 0;
}