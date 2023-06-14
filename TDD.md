Describe: diceRoll()

Test: "Generate a random number 1-6"
Code: diceRoll()
Output: return value: 1-6

Describe: function Player(name)

Test: "Will record name in a player object with base scores of 0"
code: let player = new Player("Jason")
output: player = {name: Jason, tempScore: 0, permScore: 0}

Describe: addplayer()

Test: "It will put a player object in a game object"
Code: let jason = {name: Jason, tempScore: 0, permScore: 0}
      Game.addplayer(jason)
Output: Game {
    players: 
        Jason {...}
}