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

Describe: submit event

Test: "it will set variables equal to the value of the inputs"
Code: Input 1: "Jason"
      Input 2: "Moses"
Output: > player1;
        >"Jason"
        >player2;
        >"Moses"

Test: "it will change the inner text of the targeted spans"
Code: Input 1: "Jason"
      Input 2: "Moses"
Output: in HTML: Player 1: JASON
                 Player 2: MOSES

Test: "it will store the input values into the player objects"
Code: Input 1: "Jason"
      Input 2: "Moses"
Output: player1Object {name: "Jason,...}
        player2Object {name: "Moses,...}

Test: "It will store the player objects into the game object"
Code: Input 1: "Jason"
      Input 2: "Moses"
Output: pigGame {
    players: "Jason" {
        name: Jason,
        .....
    }, 
    "Moses" {
        name: Moses,
        .....
    }
}

Describe: roll dice event

Test: "It will display the dice result on the targeted span"
Code: document.getElementById("display-dice-roll").innerText = diceRoll();
result: in HTML: span - "diceRoll()" - span

